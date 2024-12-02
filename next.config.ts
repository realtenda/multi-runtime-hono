// import type { NextConfig } from "next";

const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, "sharp"];
    return config;
  },
};

export default nextConfig;
