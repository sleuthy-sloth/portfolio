export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-two-ochre-vxl9gmenfz.vercel.app"; // TODO: final domain
  const routes = [
    "",
    "/about",
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
