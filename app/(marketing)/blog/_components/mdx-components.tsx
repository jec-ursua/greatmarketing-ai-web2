import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Callout } from "./callout";
import { YouTube } from "./youtube-embed";
import {
  contactUrl,
  bookACallUrl,
  servicesUrl,
  isContactHref,
  isBookACallHref,
  isServicesHref,
} from "@/lib/utm";

// JsonLd in MDX is a marker element. The actual <script type="application/ld+json">
// tags are emitted server-side by the page route via extractJsonLdBlocks(rawMdx),
// because RSC drops string children of unknown components in the MDX -> RSC pipeline.
function JsonLd() {
  return null;
}

export function buildMdxComponents({ slug }: { slug?: string } = {}): MDXComponents {
  return {
    // Headings
    h1: (props) => (
      <h1
        className="mb-6 mt-10 scroll-mt-24 font-display font-bold text-4xl font-bold tracking-tight text-neutral-900 first:mt-0"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mb-4 mt-10 scroll-mt-24 font-display text-3xl font-bold tracking-tight text-neutral-900"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mb-3 mt-8 scroll-mt-24 font-display text-2xl font-semibold text-neutral-900"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="mb-3 mt-6 scroll-mt-24 text-lg font-semibold text-neutral-900"
        {...props}
      />
    ),

    // Text
    p: (props) => (
      <p className="mb-5 text-lg leading-relaxed text-neutral-700" {...props} />
    ),
    strong: (props) => <strong className="font-semibold text-neutral-900" {...props} />,
    em: (props) => <em className="text-neutral-700" {...props} />,

    // Links — rewrites internal CTAs (/contact, /book-a-call, /services/*) with UTMs.
    a: ({ href, children, ...props }) => {
      const finalHref = isContactHref(href)
        ? contactUrl({ medium: "blog-inline", content: slug })
        : isBookACallHref(href)
          ? bookACallUrl({ medium: "blog-inline", content: slug })
          : isServicesHref(href)
            ? servicesUrl(href!, { medium: "blog-inline", content: slug })
            : href;
      const isExternal = finalHref?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={finalHref}
            className="text-brand-gold underline decoration-brand-gold/30 underline-offset-2 transition hover:text-brand-gold-dark hover:decoration-brand-gold-dark/50"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={finalHref ?? "#"}
          className="text-brand-gold underline decoration-brand-gold/30 underline-offset-2 transition hover:text-brand-gold-dark hover:decoration-brand-gold-dark/50"
          {...props}
        >
          {children}
        </Link>
      );
    },

    // Lists
    ul: (props) => (
      <ul
        className="mb-5 ml-6 list-disc space-y-2 text-lg text-neutral-700 marker:text-brand-gold"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mb-5 ml-6 list-decimal space-y-2 text-lg text-neutral-700 marker:text-brand-gold"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,

    // Code
    code: (props) => (
      <code
        className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm text-neutral-800"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mb-5 overflow-x-auto rounded-lg border border-neutral-200 bg-[#22272e] p-4 text-sm leading-relaxed"
        {...props}
      />
    ),

    // Blockquote
    blockquote: (props) => (
      <blockquote
        className="mb-5 border-l-4 border-brand-gold bg-brand-cream py-3 pl-4 pr-3 italic text-neutral-700 [&>p]:mb-0"
        {...props}
      />
    ),

    // Horizontal rule
    hr: () => <hr className="my-10 border-neutral-200" />,

    // Images — render with figure + caption from alt text
    img: ({ alt, ...props }) => (
      <figure className="my-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full rounded-2xl border border-neutral-200"
          alt={alt ?? ""}
          loading="lazy"
          {...props}
        />
        {alt && (
          <figcaption className="mt-2 text-center text-sm text-neutral-500">
            {alt}
          </figcaption>
        )}
      </figure>
    ),

    // Tables
    table: (props) => (
      <div className="mb-5 overflow-x-auto rounded-2xl border border-neutral-200">
        <table className="w-full border-collapse text-sm text-neutral-700" {...props} />
      </div>
    ),
    thead: (props) => (
      <thead className="border-b border-neutral-200 bg-neutral-50 text-left" {...props} />
    ),
    tbody: (props) => <tbody {...props} />,
    tr: (props) => <tr className="border-b border-neutral-100 last:border-b-0" {...props} />,
    th: (props) => (
      <th className="px-3 py-2 text-sm font-semibold text-neutral-900" {...props} />
    ),
    td: (props) => <td className="px-3 py-2" {...props} />,

    // Custom MDX components
    Callout,
    YouTube,
    JsonLd,
  };
}

export const mdxComponents = buildMdxComponents();
