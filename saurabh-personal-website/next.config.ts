import type { NextConfig } from "next";

// For a user site (username.github.io), leave BASE_PATH empty.
// For a project site (username.github.io/repository), set BASE_PATH=/repository
// in the GitHub Actions workflow.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
