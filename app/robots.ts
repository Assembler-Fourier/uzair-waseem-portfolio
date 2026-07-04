import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: "https://uzairwaseem.com/sitemap.xml",
    host: "https://uzairwaseem.com"
  };
}
