export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevenkoehl.com";
  const routes = [
    "",
    "/about",
    "/education",
    "/now",
    "/experience",
    "/projects",
    "/projects/clivus",
    "/projects/verbalibera",
    "/projects/opennarrator",
    "/projects/neuralpulse",
    "/projects/92-amxs-tracker",
    "/resume",
    "/contact",
    "/writing",
    "/writing/excerpt",
    "/lab",
  ];
  return routes.map((r) => ({
    url: `${baseUrl}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
