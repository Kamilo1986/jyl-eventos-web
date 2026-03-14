import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tusitio.com";

  const products = [
    "vino-tinto",
    "champagne",
    "martini",
    "coctel",
    "whisky",
    "agua",
    "vajilla",
    "plato-base",
    "cubiertos",
    "mesas",
  ];

  const productUrls = products.map((slug) => ({
    url: `${baseUrl}/galeria/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}