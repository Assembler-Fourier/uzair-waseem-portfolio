import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requestedArgs = process.argv.slice(2);

if (requestedArgs.length === 0) {
  console.error("Usage: node scripts/run_cv.mjs <python arguments>");
  process.exit(2);
}

const venvPython =
  process.platform === "win32"
    ? path.join(root, ".venv-cv", "Scripts", "python.exe")
    : path.join(root, ".venv-cv", "bin", "python");

const candidates = [
  ...(fs.existsSync(venvPython) ? [venvPython] : []),
  ...(process.platform === "win32" ? ["python", "python3"] : ["python3", "python"]),
];

for (const candidate of candidates) {
  const result = spawnSync(candidate, requestedArgs, {
    cwd: root,
    stdio: "inherit",
  });

  if (result.error?.code === "ENOENT") {
    continue;
  }

  if (result.error) {
    console.error(`Unable to start ${candidate}: ${result.error.message}`);
    process.exit(1);
  }

  process.exit(result.status ?? 1);
}

console.error(
  "No Python interpreter was found. Install Python 3, then run npm run cv:setup.",
);
process.exit(1);
