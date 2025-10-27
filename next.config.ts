import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper routing
  trailingSlash: false,
  // Skip trailing slash redirect
  skipTrailingSlashRedirect: false,
};

export default nextConfig;
