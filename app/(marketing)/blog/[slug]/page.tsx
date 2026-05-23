import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { HireUsButton } from '@/components/HireUsModal';
import { BlogLayout } from '../_components/blog-layout';
import { BlogServicesPromo } from '../_components/blog-services-promo';
import { KeyTakeaways } from '../_components/key-takeaways';
import { BlogFAQs } from '../_components/blog-faqs';
import { RelatedPosts } from '../_components/related-posts';
import {
  getBlogBySlug,
  getBlogPost,
  getAllBlogSlugs,
  extractHeadings,
  extractJsonLdBlocks,
  getRelatedPosts,
  AUTHOR,
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

  const headings = extractHeadings(raw);
  const inlineJsonLd = extractJsonLdBlocks(raw);
  const related = getRelatedPosts(meta.slug, meta.tags, 3);

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
      logo: { '@type': 'ImageObject', url: AUTHOR.photo },
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

      <BlogLayout
        meta={meta}
        headings={headings}
        beforeContent={meta.keyTakeaways.length > 0 ? <KeyTakeaways items={meta.keyTakeaways} /> : null}
        afterContent={
          <>
            <BlogServicesPromo />
            {meta.faqs.length > 0 && <BlogFAQs faqs={meta.faqs} />}
          </>
        }
        afterArticle={<RelatedPosts posts={related} />}
      >
        {content}
      </BlogLayout>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
            Ready to Scale Your Law Firm with <em className="not-italic text-brand-gold">Exclusive Leads?</em>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            Stop chasing low-quality leads. Partner with the #1 Hispanic Marketing Agency to capture the untapped Spanish-speaking MVA market.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-xl">
            Get Exclusive PI Leads <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
