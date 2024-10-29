/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/photo-processor-frontend',
  assetPrefix: '/photo-processor-frontend/'
}

export default nextConfig;
