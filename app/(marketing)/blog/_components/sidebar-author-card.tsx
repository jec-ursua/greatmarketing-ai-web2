import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AUTHOR } from '@/lib/author';

export function SidebarAuthorCard() {
  return (
    <div className="rounded-2xl bg-brand-cream/60 p-5">
      <div className="mb-4 flex items-start gap-3">
        <Image
          src={AUTHOR.photo}
          alt={AUTHOR.name}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-md object-cover"
        />
        <h3 className="mt-1 font-display text-xl leading-tight">
          <span className="font-bold text-brand-gold-dark">About</span>{' '}
          <span className="italic text-neutral-900">Rafael Hernandez</span>
        </h3>
      </div>

      <div className="mb-4 space-y-3 text-sm leading-relaxed text-neutral-700">
        <p>
          Rafael Hernandez is the CEO and Founder of Great Marketing AI, a
          specialized legal marketing agency that helps law firms dominate the
          Hispanic market with exclusive MVA leads.
        </p>
        <p>
          A UC Berkeley graduate and former Microsoft engineer, Rafael combines
          world-class marketing with AI-powered systems that turn clicks into
          clients.
        </p>
        <p>
          He leads with speed, high standards, and a commitment to meaningful
          results.
        </p>
      </div>

      <div className="mb-4 flex items-center gap-3 text-xs font-semibold text-neutral-600">
        <span className="rounded-md bg-white px-2.5 py-1">ex-Microsoft</span>
        <span className="rounded-md bg-white px-2.5 py-1">UC Berkeley</span>
      </div>

      <Link
        href="/about"
        className="inline-flex items-center gap-1 text-sm font-bold text-brand-gold-dark transition hover:text-brand-gold"
      >
        Learn More About Rafael
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
