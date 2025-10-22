// next.config.ts

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // 🔑 Crucial setting for static export (deployment to public_html)
  // output: 'export', 
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // ⚠️ Disable default optimization since it requires a server
    unoptimized: false, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;