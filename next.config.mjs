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
     { protocol: 'https', hostname: 'assets.cdn.filesafe.space' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [];
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }];
  },
};
export default nextConfig;
