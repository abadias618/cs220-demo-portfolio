import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  basePath: '/cs220-demo-portfolio', // Adjust if your site is hosted under a subpath
  assetPrefix: '/cs220-demo-portfolio', // Adjust for correct asset paths
  images: {
    unoptimized: true, // Required for static export when using next/image
  },
};

export default nextConfig;
