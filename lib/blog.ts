import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { BLOG_CATEGORIES, type BlogSummary } from './blog-categories';
import { buildMdxComponents } from '@/app/(marketing)/blog/_components/mdx-components';

export { BLOG_CATEGORIES, type BlogSummary };

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  category: string;
  tags: string[];
  publishedDate: string;
  updatedAt: string;
  author: string;
  authorRole: string;
  featuredImage: string;
  featuredImageAlt: string;
  ogImage?: string;
  readingTime: string;
  keyTakeaways: string[];
  faqs: { q: string; a: string }[];
  draft: boolean;
}

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

interface RawFrontmatter {
  title: string;
  description: string;
  metaTitle?: string;
  category?: string;
  tags?: string[];
  publishedDate: string;
  updatedAt?: string;
  author?: string;
  authorRole?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  ogImage?: string;
  keyTakeaways?: string[];
  faqs?: { q: string; a: string }[];
  draft?: boolean;
}

// ---------------------------------------------------------------------------
// Author
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, '');
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
}

/**
 * Normalize raw frontmatter into a BlogPost. Applies hybrid-frontmatter
 * defaults: `tags` defaults to [lowercased category] if absent, `updatedAt`
 * defaults to `publishedDate`, `author`/`authorRole` default to AUTHOR.
 */
function normalize(slug: string, raw: RawFrontmatter, body: string): BlogPost {
  const category = raw.category || 'Marketing';
  const tags =
    Array.isArray(raw.tags) && raw.tags.length > 0
      ? raw.tags.map((t) => String(t).toLowerCase())
      : [category.toLowerCase()];
  const stats = readingTime(body);
  return {
    slug,
    title: raw.title,
    description: raw.description,
    metaTitle: raw.metaTitle,
    category,
    tags,
    publishedDate: raw.publishedDate,
    updatedAt: raw.updatedAt || raw.publishedDate,
    author: raw.author || AUTHOR.name,
    authorRole: raw.authorRole || AUTHOR.role,
    featuredImage: raw.featuredImage || '',
    featuredImageAlt: raw.featuredImageAlt || raw.title,
    ogImage: raw.ogImage || raw.featuredImage,
    readingTime: stats.text,
    keyTakeaways: raw.keyTakeaways || [],
    faqs: raw.faqs || [],
    draft: Boolean(raw.draft),
  };
}

// ---------------------------------------------------------------------------
// Metadata-only reads (sync, fast)
// ---------------------------------------------------------------------------

export function getAllBlogSlugs(): string[] {
  return getMdxFiles(BLOG_DIR)
    .map(slugFromFilename)
    .filter((slug) => {
      const post = getBlogBySlug(slug);
      return post !== null && !(post.draft && process.env.NODE_ENV === 'production');
    });
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);
    return normalize(slug, data as RawFrontmatter, content);
  } catch (err) {
    console.error(`Error reading blog ${slug}:`, err);
    return null;
  }
}

export function getAllBlogs(): BlogSummary[] {
  return getAllBlogSlugs()
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
      } satisfies BlogSummary;
    })
    .filter((p): p is BlogSummary => p !== null)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

// ---------------------------------------------------------------------------
// Tags
// ---------------------------------------------------------------------------

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  for (const slug of getAllBlogSlugs()) {
    const post = getBlogBySlug(slug);
    if (!post) continue;
    for (const tag of post.tags) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  const lower = tag.toLowerCase();
  return getAllBlogSlugs()
    .map(getBlogBySlug)
    .filter((p): p is BlogPost => p !== null && p.tags.includes(lower))
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getRelatedPosts(currentSlug: string, currentTags: string[], limit = 3): BlogPost[] {
  const lowerTags = currentTags.map((t) => t.toLowerCase());
  const candidates = getAllBlogSlugs()
    .filter((s) => s !== currentSlug)
    .map(getBlogBySlug)
    .filter((p): p is BlogPost => p !== null);

  const scored = candidates.map((post) => ({
    post,
    shared: post.tags.filter((t) => lowerTags.includes(t)).length,
  }));
  scored.sort((a, b) => {
    if (b.shared !== a.shared) return b.shared - a.shared;
    return new Date(b.post.publishedDate).getTime() - new Date(a.post.publishedDate).getTime();
  });
  return scored.slice(0, limit).map((s) => s.post);
}

// ---------------------------------------------------------------------------
// Full post rendering (async — compiles MDX with rehype/remark plugins)
// ---------------------------------------------------------------------------

export async function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);
  const meta = normalize(slug, parsed.data as RawFrontmatter, parsed.content);

  const { content } = await compileMDX<RawFrontmatter>({
    source: raw,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          [rehypePrettyCode, { theme: 'github-dark-dimmed' }],
        ],
      },
    },
    components: buildMdxComponents({ slug }),
  });

  return { meta, content, raw: parsed.content };
}

export function getRawContent(slug: string): string | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { content } = matter(fs.readFileSync(filePath, 'utf-8'));
  return content;
}

// ---------------------------------------------------------------------------
// Extractors (server-side, for TOC, FAQ schema, inline JSON-LD)
// ---------------------------------------------------------------------------

export function extractHeadings(rawMdx: string): TocHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocHeading[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(rawMdx)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    headings.push({ id, text, level });
  }
  return headings;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Parses an `## FAQ` (or `## Frequently Asked Questions`) section in raw MDX
 * into Q/A pairs. H3 headings are questions; following paragraphs (up to the
 * next H2 or H3) are the answer. Markdown formatting in the answer is
 * stripped before returning so the output is safe for JSON-LD.
 *
 * For GMA blogs that already declare FAQs in frontmatter (`faqs:` array),
 * prefer that over inline extraction; this helper is for legacy posts and
 * the migration pipeline.
 */
export function extractFaqItems(rawMdx: string): FaqItem[] {
  const lines = rawMdx.split('\n');
  const items: FaqItem[] = [];
  let inFaqSection = false;
  let currentQuestion = '';
  let currentAnswer: string[] = [];

  for (const line of lines) {
    if (/^##\s+(?:FAQ|Frequently\s+Asked\s+Questions)\s*$/i.test(line.trim())) {
      inFaqSection = true;
      continue;
    }
    if (!inFaqSection) continue;

    if (/^##\s+/.test(line) && !/^###/.test(line)) {
      if (currentQuestion && currentAnswer.length > 0) {
        items.push({ question: currentQuestion, answer: currentAnswer.join(' ').trim() });
      }
      break;
    }

    if (/^###\s+/.test(line)) {
      if (currentQuestion && currentAnswer.length > 0) {
        items.push({ question: currentQuestion, answer: currentAnswer.join(' ').trim() });
      }
      currentQuestion = line.replace(/^###\s+/, '').trim();
      currentAnswer = [];
      continue;
    }

    const trimmed = line.trim();
    if (trimmed && currentQuestion && !trimmed.startsWith('#') && !trimmed.startsWith('<')) {
      const cleaned = trimmed
        .replace(/\*\*(.+?)\*\*/g, '$1')
        .replace(/\*(.+?)\*/g, '$1')
        .replace(/`(.+?)`/g, '$1')
        .replace(/\[(.+?)\]\(.+?\)/g, '$1');
      currentAnswer.push(cleaned);
    }
  }

  if (currentQuestion && currentAnswer.length > 0) {
    items.push({ question: currentQuestion, answer: currentAnswer.join(' ').trim() });
  }
  return items;
}

/**
 * Pulls `<JsonLd>{`{...}`}</JsonLd>` markers out of raw MDX. The page route
 * emits each as a real `<script type="application/ld+json">` tag. Authors
 * wrap the JSON in a JS template literal so the MDX compiler does not try
 * to parse it as markdown. Malformed JSON blocks are skipped silently.
 */
export function extractJsonLdBlocks(rawMdx: string): string[] {
  const blocks: string[] = [];
  const regex = /<JsonLd>\{`([\s\S]*?)`\}<\/JsonLd>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(rawMdx)) !== null) {
    const json = match[1].trim();
    if (!json) continue;
    try {
      JSON.parse(json);
      blocks.push(json);
    } catch {
      // Skip malformed JSON-LD rather than crashing the page.
    }
  }
  return blocks;
}

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
