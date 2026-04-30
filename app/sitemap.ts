import { MetadataRoute } from "next";

const base = "https://kadrek.com";

const routes = [
  "",
  "/about",
  "/diagnostic",
  "/contact",
  "/services",
  "/digitalisation",
  "/resultats",
  "/mentions-legales",
  "/confidentialite",
  "/solutions/data-analytics",
  "/solutions/agents-ia",
  "/solutions/automatisation",
  "/solutions/formation-ia",
  "/solutions/interfaces-clients",
  "/solutions/optimisation-digitale",
  "/solutions/presence-seo",
  "/solutions/site-gestion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push(
      { url: `${base}/fr${route}`, lastModified: new Date() },
      { url: `${base}/en${route}`, lastModified: new Date() },
    );
  }

  return entries;
}
