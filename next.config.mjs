import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, 

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src/app"),
    };

    config.module.exprContextCritical = false;
    return config;
  },

  images: {
    domains: ["cryptologos.cc"],
  },
};

export default nextConfig;
