import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // replace with your image domain if needed
  },
  // You can add custom Webpack or other settings here
  webpack(config) {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
