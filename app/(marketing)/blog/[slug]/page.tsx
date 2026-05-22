import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { HireUsButton } from '@/components/HireUsModal';
import { AuthorBio } from '../_components/author-bio';
import { BlogServicesPromo } from '../_components/blog-services-promo';
import { KeyTakeaways } from '../_components/key-takeaways';
import { BlogFAQs } from '../_components/blog-faqs';
import {
  getBlogBySlug,
  getBlogPost,
  getAllBlogSlugs,
  extractJsonLdBlocks,
  AUTHOR,
  formatDate,
} from '@/lib/blog';
import { ArrowRight } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle || post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.description,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      images: post.featuredImage
        ? [{ url: post.ogImage || post.featuredImage, width: 1200, height: 655, alt: post.featuredImageAlt }]
        : undefined,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.description,
      images: post.featuredImage ? [post.ogImage || post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const compiled = await getBlogPost(slug);
  if (!compiled) notFound();
  const { meta, content, raw } = compiled;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    image: meta.featuredImage || undefined,
    datePublished: meta.publishedDate,
    dateModified: meta.updatedAt,
    author: {
      '@type': 'Person',
      name: meta.author,
      url: `${siteUrl}/about#about-rafael`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Great Marketing AI',
      logo: { '@type': 'ImageObject', url: 'https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${meta.slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `${siteUrl}/blog/${meta.slug}` },
    ],
  };

  const faqSchema = meta.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: meta.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const inlineJsonLd = extractJsonLdBlocks(raw);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {inlineJsonLd.map((json, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      ))}

      {/* HERO */}
      <article className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-brand-gold-dark transition mb-6">
            ← Back to all blog posts
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-block px-3 py-1 bg-brand-cream text-brand-gold text-xs font-bold rounded-full">
              {meta.category}
            </span>
            {meta.tags
              .filter((t) => t.toLowerCase() !== meta.category.toLowerCase())
              .map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full hover:bg-neutral-200 transition"
                >
                  {tag}
                </Link>
              ))}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {meta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <Image src={AUTHOR.photo} alt={meta.author} width={48} height={48} className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-xs text-neutral-500">Written by</p>
                <p className="font-bold text-neutral-900">{meta.author}</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              <span>{meta.readingTime}</span>
              <span className="mx-2">•</span>
              <span>Published: {formatDate(meta.publishedDate)}</span>
              {meta.updatedAt && meta.updatedAt !== meta.publishedDate && (
                <>
                  <span className="mx-2">•</span>
                  <span>Updated: {formatDate(meta.updatedAt)}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {meta.featuredImage && (
          <div className="max-w-5xl mx-auto px-6 mt-10">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={meta.featuredImage}
                alt={meta.featuredImageAlt}
                width={1200}
                height={655}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </article>

      {/* CONTENT */}
      <section className="pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {meta.keyTakeaways.length > 0 && <KeyTakeaways items={meta.keyTakeaways} />}

          <div className="prose prose-lg max-w-none">{content}</div>

          <BlogServicesPromo />

          {meta.faqs.length > 0 && <BlogFAQs faqs={meta.faqs} />}

          <AuthorBio />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
            Ready to Scale Your Law Firm with <em className="not-italic text-brand-gold">Exclusive Leads?</em>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            Stop chasing low-quality leads. Partner with the #1 Hispanic Marketing Agency to capture the untapped Spanish-speaking MVA market.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-xl">
            Get Spanish MVA Leads <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
