import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "https://straqa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
