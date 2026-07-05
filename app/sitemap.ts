import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = ["securetaskops", "sentryscan", "qa-automation-lab", "documind"].map((slug) => ({
    url: `https://uzairwaseem.com/projects/${slug}`,
    lastModified: new Date("2026-07-05"),
    changeFrequency: "monthly" as const,
    priority: 0.82
  }));

  return [
    {
      url: "https://uzairwaseem.com/",
      lastModified: new Date("2026-07-05"),
      changeFrequency: "weekly",
      priority: 1
    },
    ...projectPages
  ];
}
