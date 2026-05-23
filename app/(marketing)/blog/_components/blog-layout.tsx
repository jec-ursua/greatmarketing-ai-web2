import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import type { BlogPost, TocHeading } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import { AuthorCard } from "./author-card";
import { TagBadge } from "./tag-badge";
import { TableOfContents } from "./table-of-contents";
import { SidebarCTA } from "./sidebar-cta";
import { SidebarAboutCard } from "./sidebar-about-card";
import { SidebarCaseStudies } from "./sidebar-case-studies";
import { SidebarAuthorCard } from "./sidebar-author-card";
import { SidebarServicesCTA } from "./sidebar-services-cta";
import { SidebarClients } from "./sidebar-clients";
import { AuthorByline } from "./author-byline";
import { AuthorBio } from "./author-bio";
import { AboutSection } from "./about-section";
import { ExitIntentPopup } from "./exit-intent-popup";

export function BlogLayout({
  meta,
  headings,
  children,
  beforeContent,
  afterContent,
  afterArticle,
}: {
  meta: BlogPost;
  headings: TocHeading[];
  /** The compiled MDX content. */
  children: React.ReactNode;
  /** Slot above MDX content (e.g., KeyTakeaways). */
  beforeContent?: React.ReactNode;
  /** Slot below MDX content, inside the article column
   *  (e.g., BlogServicesPromo, BlogFAQs). Appears BEFORE AuthorBio and
   *  AboutSection so the bottom-of-post promo flow stays natural. */
  afterContent?: React.ReactNode;
  /** Slot full-width below the article + sidebar (e.g., RelatedPosts). */
  afterArticle?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 xl:px-12">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-brand-gold-dark"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to blog
      </Link>

      <div className="flex gap-12">
        <article className="min-w-0 max-w-4xl flex-1">
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-brand-cream px-2.5 py-0.5 text-xs font-bold text-brand-gold-dark">
                {meta.category}
              </span>
              {meta.tags
                .filter((t) => t.toLowerCase() !== meta.category.toLowerCase())
                .map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
            </div>

            <h1 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {meta.title}
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-neutral-600">
              {meta.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-5">
              <AuthorCard name={meta.author} role={meta.authorRole} />
              <div className="flex items-center gap-3 text-sm text-neutral-500">
                <time dateTime={meta.publishedDate}>{formatDate(meta.publishedDate)}</time>
                {meta.updatedAt && meta.updatedAt !== meta.publishedDate && (
                  <>
                    <span className="text-neutral-300">|</span>
                    <span>Updated {formatDate(meta.updatedAt)}</span>
                  </>
                )}
                <span className="text-neutral-300">|</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {meta.readingTime}
                </span>
              </div>
            </div>

            {meta.featuredImage && (
              <div className="mt-8">
                <Image
                  src={meta.featuredImage}
                  alt={meta.featuredImageAlt}
                  width={1200}
                  height={655}
                  priority
                  className="w-full rounded-2xl border border-neutral-200 object-cover"
                />
              </div>
            )}
          </header>

          <AuthorByline slug={meta.slug} />

          {beforeContent}

          <div className="prose prose-lg max-w-none">{children}</div>

          {afterContent}

          <AuthorBio />

          <AboutSection slug={meta.slug} />
        </article>

        <aside className="hidden w-[22rem] shrink-0 xl:block">
          <div className="sticky top-24 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
            <TableOfContents headings={headings} />
            <SidebarAboutCard />
            <SidebarCaseStudies />
            <SidebarAuthorCard />
            <SidebarServicesCTA slug={meta.slug} />
            <SidebarClients />
            <SidebarCTA slug={meta.slug} />
          </div>
        </aside>
      </div>

      {afterArticle && <div className="mt-12 max-w-4xl">{afterArticle}</div>}

      <ExitIntentPopup slug={meta.slug} />
    </div>
  );
}
