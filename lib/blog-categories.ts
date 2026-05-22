/**
 * Client-safe categories list. Pulled out of lib/blog.ts so client
 * components can import it without dragging in `fs` (a server-only dep).
 *
 * lib/blog.ts re-exports BLOG_CATEGORIES from here for back-compat.
 */
export const BLOG_CATEGORIES = [
  'All',
  'Legal Marketing',
  'Marketing Strategy',
  'Marketing 101',
  'Facebook Ads',
  'AI',
  'Podcast',
];

export interface BlogSummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedDate: string;
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: string;
}
