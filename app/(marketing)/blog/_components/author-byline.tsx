import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "@/lib/blog";

export function AuthorByline({ slug }: { slug?: string }) {
  const ctaHref = `/contact?utm_source=greatmarketing&utm_medium=blog-inline&utm_campaign=pi-leads${slug ? `&utm_content=${encodeURIComponent(slug)}` : ""}`;
  return (
    <div className="mb-8 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-brand-cream/40 p-4">
      <Image
        src={AUTHOR.photo}
        alt={AUTHOR.name}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-full border border-neutral-200 object-cover"
      />
      <div className="text-sm">
        <p className="text-neutral-700">
          I hope you find this useful. If you want our team to run your law firm&apos;s
          performance marketing,{" "}
          <Link
            href={ctaHref}
            className="font-semibold text-brand-gold hover:text-brand-gold-dark transition"
          >
            book a strategy call.
          </Link>
        </p>
        <p className="mt-1 text-neutral-500">
          Author:{" "}
          <a
            href={AUTHOR.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-gold hover:text-brand-gold-dark transition"
          >
            {AUTHOR.name}
          </a>{" "}
          | {AUTHOR.role}
        </p>
      </div>
    </div>
  );
}
