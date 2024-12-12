import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add this to prevent hydration issues
  experimental: {
    serverComponentsExternalPackages: ['@next/font']
  }
};

export default nextConfig;