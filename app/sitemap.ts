import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abhinav.qzd.je/home",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}