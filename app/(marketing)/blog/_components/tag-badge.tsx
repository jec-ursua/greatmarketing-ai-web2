import Link from "next/link";

export function TagBadge({ tag, asLink = true }: { tag: string; asLink?: boolean }) {
  const className =
    "inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-700 hover:bg-brand-cream hover:text-brand-gold-dark hover:border-brand-gold/30 transition";
  if (!asLink) {
    return <span className={className}>{tag}</span>;
  }
  return (
    <Link href={`/blog/tag/${encodeURIComponent(tag)}`} className={className}>
      {tag}
    </Link>
  );
}
