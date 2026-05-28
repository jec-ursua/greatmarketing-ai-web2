'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const FAQS = [
  {
    q: 'What makes Great Marketing AI different from other agencies?',
    a: "We built our agency exclusively for personal injury law firms. Most agencies serve dozens of industries -- we focus only on what works for PI practices: performance advertising, SEO, bilingual campaigns, and AI-powered systems tied to signed cases, not vanity metrics. Our team's background running enterprise campaigns for top agencies including NP Digital gives us the performance marketing foundation that most legal-focused agencies simply don't have.",
  },
  {
    q: 'Do you work with small law firms, or only large multi-location practices?',
    a: "Both. Solo practitioners and boutique PI firms often see the highest ROI because they benefit most from AI automation and performance-driven marketing that scales with their capacity. Whether you're a one-attorney practice or a 20-attorney firm expanding into new territories, our frameworks work at every scale.",
  },
  {
    q: 'How do you approach digital marketing for personal injury lawyers?',
    a: 'We operate as a single strategic partner managing every digital touchpoint: paid ads, SEO, landing pages, and intake automation. Every campaign is rooted in performance frameworks proven at enterprise scale, then adapted for PI. That means case-type-specific targeting, compliance-aware creative, bilingual capability, and ROI tied to signed cases.',
  },
  {
    q: 'Do you offer Spanish-language marketing for law firms?',
    a: 'Yes -- bilingual marketing is one of our signature capabilities. While most agencies rely on Google Translate, we build native Spanish campaigns with culturally accurate messaging. Hispanic communities are underserved in the PI legal market, and our bilingual campaigns have helped firms unlock significant new case volume from Spanish-speaking clients.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Most clients are up and running within 2 weeks of signing. We start with a strategy session to map your target case types, markets, and intake process, then launch campaigns as soon as creative and tracking are approved. You receive weekly performance reports from day one.',
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq-1" className="py-24 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">FAQ</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4 leading-tight">Frequently Asked Questions</h2>
          <p className="text-neutral-700">Common questions from personal injury law firms evaluating marketing partners.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-50 transition"
                aria-expanded={openIdx === i}
              >
                <span className="font-display font-semibold text-base lg:text-lg">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${openIdx === i ? 'bg-brand-gold rotate-180' : 'bg-neutral-100'}`}>
                  <ChevronDown size={16} className={openIdx === i ? 'text-neutral-900' : 'text-neutral-600'} />
                </div>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-neutral-700 leading-relaxed text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-neutral-600 mb-4">Still have questions?</p>
          <HireUsButton payload={{ sourceSurface: 'homepage' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-dark text-white font-bold text-lg hover:opacity-90 transition">
            Book a Consultation Call <ArrowRight size={20} />
          </HireUsButton>
        </div>
      </div>
    </section>
  );
}
