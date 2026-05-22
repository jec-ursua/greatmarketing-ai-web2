import type { MetadataRoute } from 'next';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { url: '/', priority: 1.0, freq: 'weekly' as const },
    { url: '/about', priority: 0.8, freq: 'monthly' as const },
    { url: '/case-studies', priority: 0.9, freq: 'weekly' as const },
    { url: '/career', priority: 0.6, freq: 'monthly' as const },
    { url: '/blog', priority: 0.9, freq: 'weekly' as const },
    { url: '/services/motor-vehicle-accident-leads', priority: 0.9, freq: 'monthly' as const },
    { url: '/services/facebook-advertising-agency', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/seo-agency-los-angeles', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/web-design-los-angeles', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/email-marketing', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/ai-automation', priority: 0.8, freq: 'monthly' as const },
    { url: '/legal', priority: 0.3, freq: 'yearly' as const },
    { url: '/privacy', priority: 0.3, freq: 'yearly' as const },
    { url: '/terms-condition', priority: 0.3, freq: 'yearly' as const },
  ];
  return routes.map(r => ({ url: `${siteUrl}${r.url}`, lastModified, changeFrequency: r.freq, priority: r.priority }));
}
