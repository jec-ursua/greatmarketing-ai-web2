'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: 'What is a marketing agency for law firms, and do I need one?',
    a: 'A marketing agency for law firms specializes in generating exclusive, qualified case leads for personal injury attorneys. Unlike general agencies, we understand the unique compliance, client acquisition cost, and conversion challenges specific to law firms.',
  },
  {
    q: 'What makes Great Marketing AI different from other agencies?',
    a: 'We are exclusively focused on personal injury law firms, delivering 100% exclusive leads (never shared), AI-powered lead qualification, native English and Spanish campaigns, and reporting on signed cases and ROI — not just clicks.',
  },
  {
    q: 'Do you work with small law firms, or only large multi-location practices?',
    a: 'We work with personal injury law firms of every size, from solo practices to multi-location operations. Our systems scale based on your firm capacity and growth goals.',
  },
  {
    q: 'How do you approach digital marketing for personal injury lawyers?',
    a: 'We combine AI with proven legal marketing expertise. Every campaign uses performance frameworks proven at enterprise level, adapted specifically for how personal injury firms acquire clients and sign cases.',
  },
  {
    q: 'Are your leads really exclusive to my firm?',
    a: 'Yes — 100% exclusive and territory-protected. Once your firm is in a market, we never sell those leads to another firm in the same area.',
  },
  {
    q: 'Does Great Marketing AI offer guarantees?',
    a: 'We back our work with performance guarantees tied to lead quality and quantity benchmarks. Specifics depend on your market and growth goals — we will walk through these on your consultation call.',
  },
  {
    q: 'Do you offer Spanish-language marketing for law firms?',
    a: 'Yes. Native Spanish-language campaigns are a core specialty. We do not rely on Google Translate — our team creates culturally appropriate, conversion-focused Spanish content for the Hispanic market.',
  },
  {
    q: 'What types of motor vehicle accident cases do you generate leads for?',
    a: 'We generate leads for car accidents, truck accidents, motorcycle accidents, rideshare incidents (Uber/Lyft), pedestrian accidents, and other motor vehicle accident cases. All are pre-qualified before reaching your intake team.',
  },
];

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="faq-1" className="py-24 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold">FAQ</span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl text-center mt-3 mb-4 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-neutral-700 mb-12">
          Common questions from personal injury law firms evaluating marketing partners.
        </p>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-50 transition"
                aria-expanded={openFAQ === i}
              >
                <span className="font-display font-semibold text-base lg:text-lg">{faq.q}</span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${
                    openFAQ === i ? 'bg-brand-gold rotate-180' : 'bg-neutral-100'
                  }`}
                >
                  <ChevronDown size={16} className={openFAQ === i ? 'text-neutral-900' : 'text-neutral-600'} />
                </div>
              </button>
              {openFAQ === i && (
                <div className="px-6 pb-5 text-neutral-700 leading-relaxed text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-600 mb-4">Still have questions?</p>
          <a href="#hero-form" className="px-7 py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            Book a Consultation Call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
