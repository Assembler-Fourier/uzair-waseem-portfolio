import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = [
    "vaultwatch",
    "housefair",
    "roster-command",
    "theory-test-coach",
    "qa-automation-lab",
  ].map((slug) => ({
    url: `https://uzairwaseem.com/projects/${slug}`,
    lastModified: new Date("2026-11-12"),
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [
    {
      url: "https://uzairwaseem.com/",
      lastModified: new Date("2026-11-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
  ];
}
