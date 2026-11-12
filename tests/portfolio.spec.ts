import { expect, test } from "@playwright/test";

const expectedProjects = [
  "VaultWatch",
  "HouseFair",
  "Irish Theory Test Coach",
  "Roster Command"
];

test.describe("recruiter journey", () => {
  test("homepage exposes the canonical proof order and contact path", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("tested products");
    await expect(page.locator(".project-card h3")).toHaveText(expectedProjects);
    await expect(page.getByRole("link", { name: /Email me/i })).toHaveAttribute("href", /^mailto:/);
    await expect(page.getByRole("link", { name: /Download CV/i }).first()).toHaveAttribute("href", /\.pdf$/);
    await expect(page.locator("#experience")).toContainText("Octans Digital (OD)");
    await expect(page.locator("#experience")).toContainText("Nov 2020 - Apr 2024");
    await expect(page.locator("#experience")).toContainText("Control Room Manager");
    await expect(page.locator("#experience")).toContainText("Threadstone Security Ltd");
    await expect(page.locator("#experience")).toContainText("Nov 2025 - Present");
    await expect(page.locator("#experience")).not.toContainText("Junior Software Engineer");
    await expect(page.locator("#education")).toContainText("Graduated April 2026");
    await expect(page.locator("#contact")).toContainText("own car and a full Irish driving licence");
    await expect(page.locator("#contact")).toContainText("available immediately");
    await expect(page.getByText("Stamp 1G · expires 30 April 2028", { exact: true })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Stamp 1G · immediate");
    await expect(
      page.getByRole("link", { name: /View Roster Command public engineering extract on GitHub/i })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Open VaultWatch live showcase/i })
    ).toHaveAttribute("href", "https://dashboard-web-three-sable.vercel.app");
    expect(errors).toEqual([]);
  });

  test("VaultWatch case study states the live and full-stack boundaries", async ({ page }) => {
    await page.goto("/projects/vaultwatch");
    await expect(page.getByRole("heading", { level: 1, name: "VaultWatch" })).toBeVisible();
    await expect(page.getByText("Showcase and full stack", { exact: true })).toBeVisible();
    await expect(page.getByText("Synthetic data only", { exact: true })).toBeVisible();
  });

  for (const viewport of [
    { width: 320, height: 800 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1440, height: 1000 }
  ]) {
    test(`homepage has no horizontal overflow at ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("/");
      const metrics = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
        body: document.body.scrollWidth
      }));
      expect(metrics.document, JSON.stringify(metrics)).toBeLessThanOrEqual(metrics.viewport + 1);
      expect(metrics.body, JSON.stringify(metrics)).toBeLessThanOrEqual(metrics.viewport + 1);
    });
  }

  test("CV route serves a real PDF", async ({ request }) => {
    const response = await request.get("/Uzair-Waseem-CV.pdf");
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect((await response.body()).subarray(0, 5).toString("ascii")).toBe("%PDF-");
  });

  test("unknown route exposes the custom 404", async ({ page }) => {
    const response = await page.goto("/not-a-real-portfolio-route");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "This proof path does not exist." })).toBeVisible();
  });
});

test.describe("3D render envelope", () => {
  for (const viewport of [
    { name: "mobile", width: 390, height: 844 },
    { name: "desktop", width: 1440, height: 1000 }
  ]) {
    test(`${viewport.name} canvases produce nonblank pixels`, async ({ page }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto("/");
      const canvases = page.locator("canvas[data-scene]");
      await expect(canvases.first()).toHaveAttribute("data-render-state", "ready", { timeout: 15_000 });
      await page.getByRole("heading", { name: "A live architecture, from click to cloud." }).scrollIntoViewIfNeeded();
      await expect(canvases).toHaveCount(2);

      for (let index = 0; index < 2; index += 1) {
        const canvas = canvases.nth(index);
        await expect(canvas).toHaveAttribute("data-render-state", "ready", { timeout: 15_000 });
        const signal = Number(await canvas.getAttribute("data-pixel-signal"));
        const box = await canvas.boundingBox();
        expect(signal).toBeGreaterThan(0);
        expect(box?.width || 0).toBeGreaterThan(100);
        expect(box?.height || 0).toBeGreaterThan(100);
      }

      await testInfo.attach(`${viewport.name}-portfolio`, {
        body: await page.screenshot({ fullPage: true }),
        contentType: "image/png"
      });
    });
  }
});
