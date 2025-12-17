import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    workerThreads: false,
    cpus: 1, // Limit to 1 CPU core
  },
};

export default nextConfig;
