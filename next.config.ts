import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75], // 🔥 AQUÍ ESTÁ EL FIX
  },

  async headers() {
    return [
      {
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
        ],
      },
    ];
  },

};

export default nextConfig;