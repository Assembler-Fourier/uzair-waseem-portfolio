import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://uzairwaseem.com/",
      lastModified: new Date("2026-07-04"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
