import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'Client Success Stories',
  description: 'See how Great Marketing AI helps personal injury law firms generate more cases with paid advertising, SEO, and AI automation.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">SUCCESS STORIES</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Real Results for{' '}
            <em className="text-brand-gold not-italic">Real Law Firms</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            We help personal injury attorneys generate more signed cases through paid ads, SEO, and AI-powered
            lead qualification. Case studies coming soon.
          </p>
          <HireUsButton payload={{ sourceSurface: 'case-studies' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Book a Strategy Call <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6 leading-tight">
            200+ Businesses Have{' '}
            <em className="not-italic text-brand-gold">Scaled With Us</em>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Detailed case studies with real performance metrics are on the way. In the meantime, book a call and
            we&apos;ll walk you through the results we&apos;ve driven for firms like yours.
          </p>
        </div>
      </section>
    </>
  );
}
