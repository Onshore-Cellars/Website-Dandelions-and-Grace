import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/services/weddings',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/locations/cannes',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/events/cannes-film-festival',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
