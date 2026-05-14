import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },

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

      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
          },
        ],
      },

    ];
  },

};

export default nextConfig;