/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.scdn.co' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // CRITICAL FOR SEO MIGRATION: Map old Framer URLs to new Next.js URLs
  // Add 301 redirects here for any URL that changes during migration.
  // Currently 1:1 mapping is maintained — add entries if URL structure changes.
  async redirects() {
    return [
      // Example template — add real redirects after URL audit (Phase 1):
      // { source: '/old-path', destination: '/new-path', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
