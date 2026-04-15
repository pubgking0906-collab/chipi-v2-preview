import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/chipi-v2-preview",
  assetPrefix: "/chipi-v2-preview/",
};

export default nextConfig;
