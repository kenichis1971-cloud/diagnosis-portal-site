import type { MetadataRoute } from "next";

import { siteUrl } from "@/app/metadata";

const routes = [
  "",
  "/diagnoses",
  "/love",
  "/marriage",
  "/meeting-style",
  "/reunion",
  "/beauty",
  "/sexual-worries",
  "/privacy",
  "/terms",
  "/contact",
  "/advertising",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
