import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* 🔥 OPTIMIZACIÓN DE IMÁGENES */
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },

  /* 🚀 HEADERS */
  async headers() {
    return [

      /* CACHE */
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      /* GOOGLE ADS + ANALYTICS */
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
              https://www.googletagmanager.com
              https://www.google-analytics.com;

              connect-src 'self'
              https://www.google-analytics.com
              https://region1.google-analytics.com
              https://www.googletagmanager.com;

              img-src 'self' data: blob:
              https://www.google-analytics.com
              https://www.googletagmanager.com;

              style-src 'self' 'unsafe-inline';

              frame-src
              https://www.googletagmanager.com;

              font-src 'self' data:;
            `
              .replace(/\n/g, ""),
          },
        ],
      },

    ];
  },

};

export default nextConfig;