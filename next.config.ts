import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* 🔥 OPTIMIZACIÓN DE IMÁGENES */
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },

  /* 🚀 CACHE CORRECTO (ESTO ES CLAVE) */
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

};

export default nextConfig;