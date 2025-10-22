// next.config.ts

// 🔑 1. Use 'require' syntax for the wrapper function to avoid TypeScript import conflicts
const withPWA = require('next-pwa')({
  dest: 'public', // Output the service worker files here
  register: true, // Auto-register the service worker
  skipWaiting: true, // Activate the service worker immediately
  // Disable PWA features in development (npm run dev) to prevent caching issues:
  disable: process.env.NODE_ENV === 'development',
  
  // ⚠️ RECOMMENDED FOR APP ROUTER: Explicitly exclude middleware manifest 
  // to prevent potential service worker registration issues in production.
  buildExcludes: [/middleware_manifest\.json$/],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: Ensure 'output: 'export'' is NOT present since you are deploying to Vercel.

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Vercel handles image optimization, so setting 'unoptimized: false' is correct.
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
  // ⚠️ If your original config had 'i18n' or 'domains', they must be removed 
  // from this object to prevent the type conflict shown in your screenshot.
};

// 🔑 4. Export the configuration wrapped by the PWA function.
// Using module.exports is often more robust with next-pwa.
module.exports = withPWA(nextConfig);