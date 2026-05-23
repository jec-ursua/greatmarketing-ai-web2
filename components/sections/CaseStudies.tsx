'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const CASE_STUDIES = [
  {
    href: '/proven-results/np-digital',
    category: 'Marketing',
    stats: [
      { value: '800%', label: 'Growth in conversions' },
      { value: '81%', label: 'Cost reduction in Meta Ads' },
      { value: '71%', label: 'Increase in click-through rate' },
    ],
    title: 'How We Achieved an 800% Growth and 81% Cost Reduction in Meta Ads for NP Digital',
    bg: 'bg-amber-100',
  },
  {
    href: '/proven-results/albert-preciado',
    category: 'Marketing',
    stats: [
      { value: '$373k', label: 'In revenue, achieving a solid 2.89x ROAS' },
      { value: '289%', label: 'Cost reduction in Meta Ads' },
      { value: '71%', label: 'Increase in click-through rate' },
    ],
    title: 'From Boosting to Scaling: The Strategy Behind Explosive Growth',
    bg: 'bg-neutral-900 text-white',
  },
  {
    href: '/proven-results/complex-steel-buildings',
    category: 'Web Development',
    stats: [
      { value: '$251k', label: 'In sales from our campaigns' },
      { value: '1,956%', label: 'In ROI and 20.56x ROAS' },
      { value: '54.2%', label: 'Website engagement, 3k+ active users from the US' },
    ],
    title: 'AI Strategy Drives 1,956% ROI for Complex Steel Buildings',
    bg: 'bg-stone-100',
  },
  {
    href: '/proven-results/nestor-gutierrez',
    category: 'Marketing',
    stats: [
      { value: '34,396', label: 'People reached from our campaigns' },
      { value: '$17,768', label: 'In revenue from closed deals' },
      { value: '11x ROAS', label: 'With an efficient $179.92 Cost Per Sale' },
    ],
    title: 'From Zero to 11x ROAS: The Strategy Behind a High-Ticket Coaching Launch',
    bg: 'bg-stone-100',
  },
  {
    href: '/proven-results/kcb',
    category: 'Web Development',
    stats: [
      { value: '+119%', label: 'Direct traffic users' },
      { value: '+375%', label: 'Organic search users' },
      { value: '+114%', label: 'Average engagement time' },
    ],
    title: "From Leaks to Leads: KCB Plumbing's Website Makeover",
    bg: 'bg-amber-100',
  },
  {
    href: '/proven-results/palomino-resudential-care',
    category: 'Marketing',
    stats: [
      { value: '$14,500', label: 'Total revenue' },
      { value: '192', label: 'Qualified opportunities' },
      { value: '8.16x ROAS', label: 'With an amazing $887.85 Cost Per Sale' },
    ],
    title: 'How AI + Meta Ads Cracked Cold Traffic for Coaches',
    bg: 'bg-neutral-900 text-white',
  },
  {
    href: '/proven-results/the-kitchen-store',
    category: 'Marketing',
    stats: [
      { value: '$373k', label: 'In revenue, achieving a solid 2.89x ROAS' },
      { value: '289%', label: 'Cost reduction in Meta Ads' },
      { value: '71%', label: 'Increase in click-through rate' },
    ],
    title: "From Clicks to Carts: The Kitchen Store's Makeover",
    bg: 'bg-neutral-900 text-white',
  },
];

const FILTERS = ['All', 'Marketing', 'Web Development'];

export function CaseStudies() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((cs) => cs.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">PROVEN RESULTS</span>
          <h2 className="font-display text-4xl lg:text-5xl max-w-3xl mx-auto mb-6 leading-tight">
            Performance-Driven Marketing, Trusted Across Industries
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Our team has delivered measurable growth across industries, from e-commerce to professional services to top-tier marketing agencies. That same performance expertise now drives our flagship focus: exclusive PI lead generation for personal injury law firms across every case type
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                filter === f ? 'bg-brand-gold text-neutral-900' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((cs, i) => (
            <Link key={i} href={cs.href} className={`${cs.bg} rounded-2xl p-8 hover:shadow-xl transition group block`}>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {cs.stats.map((s, j) => (
                  <div key={j}>
                    <p className="font-display text-3xl lg:text-4xl font-bold leading-none mb-2">{s.value}</p>
                    <p className="text-[10px] opacity-80 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-display font-bold text-base leading-snug">{cs.title}</h3>
              <ArrowRight size={18} className="mt-4 opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition" />
            </Link>
          ))}

          {/* Gold "You've Seen the Proof" CTA card */}
          <div className="rounded-2xl p-8 relative overflow-hidden bg-brand-gold flex flex-col justify-between md:col-span-1">
            <div>
              <Image
                src="https://framerusercontent.com/images/KIUZxSnQToAl4iJ9N6NSknSUA.png"
                alt="Great Marketing AI gold logo variation"
                width={120}
                height={91}
                className="mb-4 opacity-90"
              />
              <h3 className="font-display text-3xl font-bold text-neutral-900 mb-3 leading-tight">You&apos;ve Seen the Proof.</h3>
              <p className="text-neutral-800 text-sm leading-relaxed mb-6">Now let&apos;s apply this same performance expertise to grow your personal injury practice.</p>
            </div>
            <HireUsButton className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-neutral-900 text-white rounded-full text-sm font-bold hover:opacity-90 transition">
              Book a Consultation Call <ArrowRight size={16} />
            </HireUsButton>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-dark transition">
            See All Case Studies <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
