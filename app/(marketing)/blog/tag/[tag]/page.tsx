import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllTags, getPostsByTag } from '@/lib/blog';
import { BlogCard } from '../../_components/blog-card';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';
  return {
    title: `Posts tagged "${decoded}" | Great Marketing AI Blog`,
    description: `All articles tagged with ${decoded} on the Great Marketing AI blog.`,
    alternates: { canonical: `${siteUrl}/blog/tag/${tag}` },
    // Tag archives duplicate the main listing, so keep them out of the index.
    robots: { index: false, follow: true },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);

  if (posts.length === 0) notFound();

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-brand-gold-dark"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All posts
      </Link>

      <div className="mb-10">
        <h1 className="mb-2 font-display text-4xl lg:text-5xl font-bold text-neutral-900">
          Tagged: {decoded}
        </h1>
        <p className="text-neutral-600">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            post={{
              slug: post.slug,
              title: post.title,
              description: post.description,
              category: post.category,
              publishedDate: post.publishedDate,
              featuredImage: post.featuredImage,
              featuredImageAlt: post.featuredImageAlt,
              readingTime: post.readingTime,
            }}
          />
        ))}
      </div>
    </div>
  );
}
