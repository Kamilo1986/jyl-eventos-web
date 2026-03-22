import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://jyleventos.com.co";

  // páginas principales
  const routes = [
    "",
    "/alquiler-menaje-bogota",
    "/catalogo",
    "/decoracion-eventos-bogota",
    "/menaje-eventos-corporativos-bogota",
    "/menaje-eventos-sociales-bogota",
  ];

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // slugs reales de la galería
  const gallerySlugs = [
    "cristaleria-premium",
    "cubiertos-elegantes",
    "decoracion-exclusiva",
    "manteleria-premium",
    "mesas-para-eventos",
    "platos-base",
    "sillas-elegantes",
    "vajilla-importada",
  ];

  const dynamicUrls = gallerySlugs.map((slug) => ({
    url: `${baseUrl}/Galeria/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...dynamicUrls];
}