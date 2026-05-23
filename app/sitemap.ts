import type { MetadataRoute } from 'next';
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { url: '/', priority: 1.0, freq: 'weekly' as const },
    { url: '/about', priority: 0.8, freq: 'monthly' as const },
    { url: '/case-studies', priority: 0.9, freq: 'weekly' as const },
    { url: '/career', priority: 0.6, freq: 'monthly' as const },
    { url: '/blog', priority: 0.9, freq: 'weekly' as const },
    { url: '/services/pay-per-lead', priority: 0.9, freq: 'monthly' as const },
    { url: '/services/facebook-advertising-agency', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/seo-agency-los-angeles', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/web-design-los-angeles', priority: 0.8, freq: 'monthly' as const },
    { url: '/services/ai-automation', priority: 0.8, freq: 'monthly' as const },
    { url: '/industries/personal-injury', priority: 0.9, freq: 'monthly' as const },
    { url: '/industries/family-law', priority: 0.7, freq: 'monthly' as const },
    { url: '/industries/criminal-defense', priority: 0.7, freq: 'monthly' as const },
    { url: '/industries/immigration', priority: 0.7, freq: 'monthly' as const },
    { url: '/legal', priority: 0.3, freq: 'yearly' as const },
    { url: '/privacy', priority: 0.3, freq: 'yearly' as const },
    { url: '/terms-condition', priority: 0.3, freq: 'yearly' as const },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${siteUrl}${r.url}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // Blog posts use per-post updatedAt so Bing/Google notice refreshes.
  const blogEntries = getAllBlogSlugs()
    .map((slug) => getBlogBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedDate),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  return [...staticEntries, ...blogEntries];
}
