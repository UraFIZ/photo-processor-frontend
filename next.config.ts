/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/photo-processor-frontend',
  assetPrefix: '/photo-processor-frontend',  // Remove trailing slash
  trailingSlash: true,
  // Add this configuration
  webpack: (config: { resolve: { fallback: { fs: boolean; path: boolean; }; }; }) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
}

module.exports = nextConfig