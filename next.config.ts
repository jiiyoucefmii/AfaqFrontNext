import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // allows using imported local images without moving them to /public
  },
};

export default nextConfig;
