import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ModalProvider, HireUsButton } from '@/components/HireUsModal';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { BlogServicesPromo } from '@/components/blog/BlogServicesPromo';
import { KeyTakeaways } from '@/components/blog/KeyTakeaways';
import { BlogFAQs } from '@/components/blog/BlogFAQs';
import { getBlogBySlug, getAllBlogSlugs, AUTHOR, formatDate } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

// Pre-generate static pages for each blog post
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata per blog post
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
      images: [{ url: post.ogImage || post.featuredImage, width: 1200, height: 655, alt: post.featuredImageAlt }],
      publishedTime: post.publishedDate,
      authors: [AUTHOR.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.description,
      images: [post.ogImage || post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  // JSON-LD Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      '@type': 'Person',
      name: AUTHOR.name,
      url: `${siteUrl}/about#about-rafael`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Great Marketing AI',
      logo: { '@type': 'ImageObject', url: 'https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
  };

  // Blog-specific FAQ schema if FAQs exist
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return (
    <ModalProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <Navigation />

      <main>
        {/* HERO */}
        <article className="pt-32 pb-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-brand-gold-dark transition mb-6">
              ← Back to all blog posts
            </Link>

            <span className="inline-block px-3 py-1 bg-brand-cream text-brand-gold text-xs font-bold rounded-full mb-6">
              {post.category}
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <Image src={AUTHOR.photo} alt={AUTHOR.name} width={48} height={48} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-xs text-neutral-500">Written by</p>
                  <p className="font-bold text-neutral-900">{AUTHOR.name}</p>
                </div>
              </div>
              <div className="text-sm text-neutral-500">
                <span>{post.readingTime}</span>
                <span className="mx-2">•</span>
                <span>Published: {formatDate(post.publishedDate)}</span>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="max-w-5xl mx-auto px-6 mt-10">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                width={1200}
                height={655}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </article>

        {/* CONTENT */}
        <section className="pb-12 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            {/* Key Takeaways */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <KeyTakeaways items={post.keyTakeaways} />
            )}

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>

            {/* Services Promo */}
            <BlogServicesPromo />

            {/* Blog-specific FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <BlogFAQs faqs={post.faqs} />
            )}

            {/* Author Bio */}
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
      </main>

      <Footer />
    </ModalProvider>
  );
}
