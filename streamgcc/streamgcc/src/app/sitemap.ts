import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/terms", "/privacy", "/refund-policy", "/subscription-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.4,
  }));
}
