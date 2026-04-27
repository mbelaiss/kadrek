import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kadrek.com",
      lastModified: new Date(),
    },
    {
      url: "https://kadrek.com/contact",
      lastModified: new Date(),
    },
  ];
}
