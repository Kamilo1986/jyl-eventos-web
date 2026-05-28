import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* ========================================
     COMPRESION
  ======================================== */

  compress: true,

  /* ========================================
     REACT
  ======================================== */

  reactStrictMode: true,

  /* ========================================
     POWERED HEADER
  ======================================== */

  poweredByHeader: false,

  /* ========================================
     IMAGENES
  ======================================== */

  images: {

    formats: ["image/avif", "image/webp"],

    qualities: [60, 75],

    minimumCacheTTL: 31536000,

    deviceSizes: [
      320,
      420,
      768,
      1024,
      1200,
      1920,
    ],

    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384,
    ],

  },

  /* ========================================
     HEADERS CACHE
  ======================================== */

  async headers() {

    return [

      {
        source:
          "/(.*).(jpg|jpeg|png|webp|avif|svg)",

        headers: [

          {
            key: "Cache-Control",

            value:
              "public, max-age=31536000, immutable",
          },

        ],
      },

    ];

  },

};

export default nextConfig;