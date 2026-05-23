'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../_data/case-studies';

export function SidebarCaseStudies() {
  const [index, setIndex] = useState(0);
  const total = CASE_STUDIES.length;
  if (total === 0) return null;

  const study = CASE_STUDIES[index];
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="rounded-2xl bg-brand-cream/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-xl">
          <span className="font-bold text-brand-gold-dark">Case</span>{' '}
          <span className="italic text-neutral-900">Studies</span>
        </h3>
        {total > 1 && (
          <div className="flex gap-1.5">
            <button
              onClick={prev}
              aria-label="Previous case study"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition hover:border-brand-gold hover:text-brand-gold-dark"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={next}
              aria-label="Next case study"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition hover:border-brand-gold hover:text-brand-gold-dark"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {study.clientLogo ? (
        <div className="mb-3 inline-flex rounded-md bg-white p-2">
          <Image src={study.clientLogo} alt={study.clientName} width={80} height={32} className="h-8 w-auto object-contain" />
        </div>
      ) : (
        <div className="mb-3 inline-flex items-center rounded-md bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-700">
          {study.clientName}
        </div>
      )}

      <p className="mb-2 text-sm font-bold leading-snug text-neutral-900">
        {study.headline}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-neutral-700">
        {study.body}
      </p>

      <Link
        href={study.fullStudyUrl}
        className="inline-flex items-center gap-1 text-sm font-bold text-brand-gold-dark transition hover:text-brand-gold"
      >
        Read The Full Case Study
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
