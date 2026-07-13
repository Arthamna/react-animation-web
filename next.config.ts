import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000,
    deviceSizes: [360, 640, 750, 828, 1080, 1440, 1920],
  },
};

export default nextConfig;
