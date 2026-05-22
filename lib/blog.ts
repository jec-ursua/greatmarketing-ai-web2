import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  category: string;
  publishedDate: string;
  featuredImage: string;
  featuredImageAlt: string;
  ogImage?: string;
  readingTime: string;
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
  content: string;
}

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

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);
    return {
      slug,
      title: data.title,
      description: data.description,
      metaTitle: data.metaTitle,
      category: data.category || 'Marketing',
      publishedDate: data.publishedDate,
      featuredImage: data.featuredImage,
      featuredImageAlt: data.featuredImageAlt || data.title,
      ogImage: data.ogImage || data.featuredImage,
      readingTime: stats.text,
      keyTakeaways: data.keyTakeaways || [],
      faqs: data.faqs || [],
      content,
    };
  } catch (err) {
    console.error(`Error reading blog ${slug}:`, err);
    return null;
  }
}

export function getAllBlogs(): BlogSummary[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => {
      const post = getBlogBySlug(slug);
      if (!post) return null;
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        category: post.category,
        publishedDate: post.publishedDate,
        featuredImage: post.featuredImage,
        featuredImageAlt: post.featuredImageAlt,
        readingTime: post.readingTime,
      } as BlogSummary;
    })
    .filter((p): p is BlogSummary => p !== null)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export const BLOG_CATEGORIES = [
  'All',
  'Legal Marketing',
  'Marketing Strategy',
  'Marketing 101',
  'Facebook Ads',
  'AI',
  'Podcast',
];

export const AUTHOR = {
  name: 'Rafael Hernandez',
  role: 'CEO and Co-Founder of Great Marketing AI',
  bio: 'Rafael Hernandez is the Founder of Great Marketing AI and a former Microsoft Engineer. He specializes in digital transformation for law firms, managing over $10M in ad spend to help attorneys capture the Spanish-speaking MVA market. His strategies focus on high-ROI lead generation and eliminating wasted budget.',
  photo: 'https://framerusercontent.com/images/oeRSCyTr7lmwI9P0qmMTtHkAIHQ.png',
  social: {
    youtube: 'https://www.youtube.com/@rafaelhernandez_',
    instagram: 'https://www.instagram.com/rafaelhernandez.ai/',
    facebook: 'https://www.facebook.com/rafael.hernandez.184463',
    linkedin: 'https://www.linkedin.com/in/rafael-hernandez/',
  },
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
