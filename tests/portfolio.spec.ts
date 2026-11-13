import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const cases = [
  ["housefair", "HouseFair"],
  ["vaultwatch", "VaultWatch"],
  ["roster-command", "Roster Command"],
  ["qa-automation-lab", "QA Automation Lab"],
  ["theory-test-coach", "Irish Theory Test Coach"],
];
// WebKit upgrades loopback HTTP assets under upgrade-insecure-requests.
// Remove only that directive in the local HTTP harness. Live HTTPS tests use
// the untouched server headers and never install this route.
test.beforeEach(async ({ page, baseURL }) => {
  if (!baseURL?.startsWith("http://127.0.0.1:")) return;
  await page.route("**/*", async (route) => {
    if (!route.request().isNavigationRequest()) return route.continue();
    const response = await route.fetch();
    const headers = response.headers();
    if (headers["content-security-policy"]) {
      headers["content-security-policy"] = headers[
        "content-security-policy"
      ].replace(/;?\s*upgrade-insecure-requests/g, "");
    }
    await route.fulfill({ response, headers });
  });
});
const paths = ["/", ...cases.map(([slug]) => `/projects/${slug}`)];

async function assertNoOverflow(page: import("@playwright/test").Page) {
  const metrics = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  expect(metrics.document, JSON.stringify(metrics)).toBeLessThanOrEqual(
    metrics.viewport + 1,
  );
  expect(metrics.body, JSON.stringify(metrics)).toBeLessThanOrEqual(
    metrics.viewport + 1,
  );
}

test("recruiter can find work, experience, availability and contact", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(() => getComputedStyle(document.body).fontFamily),
  ).toContain("manrope");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Software engineer.",
  );
  await expect(page.locator(".project-card h3")).toHaveText([
    "HouseFair",
    "Roster Command",
    "VaultWatch",
  ]);
  for (const image of await page.locator(".project-visual img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() => image.evaluate((el) => (el as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);
  }
  await expect(
    page.getByRole("link", { name: /Download CV/i }).first(),
  ).toHaveAttribute("href", "/Uzair-Waseem-CV.pdf");
  await expect(page.locator("#experience")).toContainText(
    "Octans Digital (OD)",
  );
  await expect(page.locator("#experience")).toContainText(
    "Nov 2020 - Apr 2024",
  );
  await expect(page.locator("#experience")).toContainText(
    "Threadstone Security Ltd",
  );
  await expect(page.locator("#experience")).toContainText("Nov 2025 - Present");
  await expect(page.locator("#education")).toContainText(
    "Graduated April 2026",
  );
  await expect(page.locator("#contact")).toContainText("available immediately");
  await expect(page.locator("#contact")).toContainText(
    "Stamp 1G · expires 30 April 2028",
  );
  await expect(page.locator("#contact")).toContainText(
    "full Irish driving licence",
  );
  await expect(page.locator(".contact-email")).toHaveAttribute(
    "href",
    "mailto:uzairwaseem29@gmail.com",
  );
  await expect(
    page.getByRole("link", {
      name: /View Roster Command public engineering extract source on GitHub/i,
    }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("project collection and earlier experience expand by keyboard", async ({
  page,
}) => {
  await page.goto("/");
  const summary = page.locator(".more-projects summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("link", { name: "Try DataProof", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Irish Theory Test Coach", exact: true }),
  ).toBeVisible();
  await page.locator(".earlier-roles summary").click();
  await expect(
    page.getByRole("heading", { name: "Octans Digital (OD)" }),
  ).toBeVisible();
  await page.locator(".cv-versions summary").click();
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  await assertNoOverflow(page);
});

test("skip link and role-specific CVs work by keyboard", async ({
  page,
  request,
  isMobile,
}) => {
  await page.goto("/");
  // iOS does not use desktop Tab navigation without a hardware keyboard setting.
  // Keep the desktop first-tab assertion and verify focused activation on iPhone.
  if (isMobile)
    await page.getByRole("link", { name: "Skip to main content" }).focus();
  else await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#content$/);
  const summary = page.locator(".cv-versions summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  const links = page.locator(".cv-versions a");
  await expect(links).toHaveCount(9);
  const urls = [
    "/Uzair-Waseem-CV.pdf",
    ...(await links.evaluateAll((els) =>
      els.map((el) => el.getAttribute("href")!),
    )),
  ];
  for (const url of urls) {
    const response = await request.get(url);
    expect(response.status(), url).toBe(200);
    expect(response.headers()["content-type"], url).toContain(
      "application/pdf",
    );
    expect((await response.body()).subarray(0, 5).toString("ascii"), url).toBe(
      "%PDF-",
    );
  }
});

for (const width of [320, 390, 768, 1440]) {
  test(`homepage fits ${width}px and primary actions remain usable`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await assertNoOverflow(page);
    for (const button of await page.locator(".hero-actions .button").all()) {
      const box = await button.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(43);
      expect(box?.width).toBeGreaterThanOrEqual(43);
    }
  });
}

for (const path of paths) {
  test(`${path} is accessible, crawlable and responsive`, async ({
    page,
    request,
  }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Uzair Waseem/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /\S.{40,}/,
    );
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(canonical?.replace(/\/$/, "")).toBe(
      `https://uzairwaseem.com${path}`.replace(/\/$/, ""),
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Uzair Waseem/,
    );
    const robots = await page
      .locator('meta[name="robots"]')
      .getAttribute("content");
    expect(robots).not.toContain("noindex");
    const structured = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    expect(structured.length).toBeGreaterThan(0);
    expect(
      structured
        .map((s) => JSON.parse(s)["@graph"])
        .flat()
        .some(
          (item) =>
            item["@type"] === (path === "/" ? "Person" : "CreativeWork"),
        ),
    ).toBe(true);
    const socialImage = await page
      .locator('meta[property="og:image"]')
      .first()
      .getAttribute("content");
    expect(socialImage).toBeTruthy();
    const imageResponse = await request.get(new URL(socialImage!).pathname);
    expect(imageResponse.status()).toBe(200);
    expect(imageResponse.headers()["content-type"]).toContain("image/");
    await assertNoOverflow(page);
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
  });
}

test("case study states showcase and full-stack boundaries", async ({
  page,
}) => {
  await page.goto("/projects/vaultwatch");
  await expect(
    page.getByRole("heading", { level: 1, name: "VaultWatch" }),
  ).toBeVisible();
  await expect(
    page.getByText("Showcase and full stack", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Synthetic data only", { exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Back to selected work" }).click();
  await expect(page.locator("#work")).toBeInViewport();
});

test("sitemap, robots and response security headers are valid", async ({
  request,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  for (const path of paths)
    expect(xml).toContain(`https://uzairwaseem.com${path === "/" ? "" : path}`);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(
    "Sitemap: https://uzairwaseem.com/sitemap.xml",
  );
  expect(await robots.text()).not.toMatch(/Disallow: \/\s*$/m);
  const home = await request.get("/");
  expect(home.headers()["content-security-policy"]).toContain(
    "frame-ancestors 'none'",
  );
  expect(home.headers()["x-content-type-options"]).toBe("nosniff");
});

for (const path of [
  "/not-a-real-portfolio-route",
  "/projects/missing-project",
]) {
  test(`${path} returns a useful non-indexable 404`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { name: "Page not found." }),
    ).toBeVisible();
    expect(
      await page
        .locator('meta[name="robots"]')
        .evaluateAll((els) =>
          els.map((el) => el.getAttribute("content")).join(" "),
        ),
    ).toContain("noindex");
  });
}

test.describe("progressive enhancement", () => {
  test.use({
    javaScriptEnabled: false,
    contextOptions: { reducedMotion: "reduce" },
  });
  test("project links, contact and CV disclosure survive without JavaScript", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(".project-card")).toHaveCount(3);
    await page.locator(".cv-versions summary").click();
    await expect(page.locator(".cv-versions a").first()).toBeVisible();
    await page.getByRole("link", { name: "HouseFair", exact: true }).click();
    await expect(
      page.getByRole("heading", { name: "HouseFair", exact: true, level: 1 }),
    ).toBeVisible();
    await assertNoOverflow(page);
  });
});
