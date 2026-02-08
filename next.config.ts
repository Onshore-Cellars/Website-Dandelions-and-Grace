import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      // Example redirects from old site to new structure
      // Add actual redirects based on content migration
      {
        source: '/old-contact',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
