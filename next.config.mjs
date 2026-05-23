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
  async redirects() {
    return [
      // Off-topic Framer blogs → /blog archive (permanent 301)
      ...[
        'why-choosing-the-right-dental-marketing-agency-los-angeles',
        'facebook-ads-dentist-audit-meta-pixel',
        'top-10-marketing-agencies-for-coaches-and-dentists-in-los-angeles',
        'life-insurance-lead-generation-4-dollar-leads',
        'nano-banana-pro-vs-midjourney-v6-better-ads',
        'nano-banana-prompts-guide',
        'sora-ai-2-video-ads-marketing-future',
        'top-tools-realistic-ai-generated-selfie-flux-ideogram',
        'how-an-advertising-agency-in-california-uses-smart-hiring-to-avoid-bad-hires-and-boost-roi',
        'why-every-marketer-needs-custom-gpt-future-chatgpt-marketing',
        'is-your-facebook-custom-event-killing-optimization',
        'facebook-lead-forms-settings-disqualify-trash-leads',
        'how-to-improve-conversion-rate-facebook-ads-gohighlevel-capi',
        'facebook-ads-webinars-build-trust-close-deals',
        'maximize-conversion-optimization-rate-high-value-appointments',
        'top-10-marketing-agencies-in-orange-county',
        'how-to-select-the-perfect-advertising-agency-in-orange-county-ca',
        'how-to-scale-your-business-with-the-best-marketing-agency-in-california',
        'facebook-ads-agencies-in-california',
        '10-best-marketing-podcasts-to-boost-your-facebook-google-ad-roas',
      ].map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog',
        permanent: true,
      })),
    ];
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
