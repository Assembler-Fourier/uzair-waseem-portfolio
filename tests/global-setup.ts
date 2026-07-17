import { spawn, spawnSync, type ChildProcess } from "node:child_process";
import path from "node:path";

const HOST = "127.0.0.1";
const PORT = 4173;
const READY_URL = `http://${HOST}:${PORT}`;

function stopServer(server: ChildProcess) {
  if (!server.pid || server.exitCode !== null) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/PID", String(server.pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true
    });
    return;
  }
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    server.kill("SIGTERM");
  }
}

async function waitUntilReady(server: ChildProcess) {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js test server exited early with code ${server.exitCode}.`);
    }
    try {
      const response = await fetch(READY_URL);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Next.js test server did not become ready at ${READY_URL}.`);
}

export default async function globalSetup() {
  const root = process.cwd();
  const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
  const server = spawn(
    process.execPath,
    [nextCli, "start", "--hostname", HOST, "--port", String(PORT)],
    {
      cwd: root,
      detached: process.platform !== "win32",
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true
    }
  );

  server.stdout?.on("data", (chunk) => process.stdout.write(`[WebServer] ${chunk}`));
  server.stderr?.on("data", (chunk) => process.stderr.write(`[WebServer] ${chunk}`));

  try {
    await waitUntilReady(server);
  } catch (error) {
    stopServer(server);
    throw error;
  }

  return async () => {
    stopServer(server);
  };
}
