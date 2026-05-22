'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const FAQS = [
  {
    q: 'What is a marketing agency for law firms, and do I need one?',
    a: 'A marketing agency for law firms is a specialized partner that helps attorneys generate signed cases through digital marketing, including lead generation, paid ads, SEO, and intake automation. Unlike general agencies that treat law firms like any other vertical, a dedicated law firm marketing agency understands the unique dynamics of legal marketing: strict compliance requirements, high-value case acquisition, competitive local markets, and the specific buyer psychology of injured clients. For most personal injury law firms, working with a specialized marketing agency for law firms outperforms handling marketing in-house or using general agencies. You get industry-specific expertise, proven frameworks for case acquisition, and measurable ROI tied to signed cases, not vanity metrics.',
  },
  {
    q: 'What makes Great Marketing AI different from other agencies?',
    a: "We've built our agency exclusively around motor vehicle accident lead generation for personal injury law firms. While most marketing agencies serve dozens of industries, we focus only on what works for MVA practices: exclusive lead generation, AI-powered qualification, performance advertising, and bilingual market expansion across English and Spanish-speaking audiences. Our team's background running enterprise campaigns for top digital marketing agencies including NP Digital gives us the performance marketing foundation that most legal-focused agencies simply don't have. The result: law firms get both deep industry specialization and agency-grade execution in a single partner.",
  },
  {
    q: 'Do you work with small law firms, or only large multi-location practices?',
    a: "Yes. We proudly serve as a small law firm marketing agency for solo practitioners, boutique personal injury firms, and growing multi-location practices. In fact, small law firms often see the highest ROI from our systems because they benefit most from AI automation, exclusive lead generation, and performance-driven marketing that scales with their capacity. Our engagement model is designed to match your firm's size: solo practices get right-sized campaigns with affordable monthly commitments, mid-size firms get scaled MVA lead generation, and larger firms get multi-market expansion strategies. Whether you're a one-attorney practice handling local MVA cases or a 20-attorney firm expanding into new territories, our performance frameworks work at every scale.",
  },
  {
    q: 'How do you approach digital marketing for personal injury lawyers?',
    a: 'Our approach to digital marketing for personal injury lawyers is built around one goal: delivering signed MVA cases, not vanity metrics. Rather than working with multiple vendors for each channel, we operate as a single strategic partner managing every digital touchpoint, from ad impressions reaching injured prospects, to landing pages that capture their information, to AI systems that qualify them, to CRM handoffs that prepare your intake team for conversion. Every campaign we run is rooted in performance marketing frameworks proven at enterprise scale, then adapted for how personal injury firms actually win clients. That means case-type-specific targeting, compliance-aware creative, bilingual campaign capability, and measurable ROI tied to signed cases.',
  },
  {
    q: 'Are your leads really exclusive to my firm?',
    a: "Absolutely. Unlike lead aggregators that sell the same prospect to multiple firms, every lead we generate is 100% exclusive to one law firm per territory. When you partner with us, no other firm in your service area receives the leads we generate for you. No bidding wars, no race-to-the-phone scenarios, no shared prospects. This exclusivity comes with territory protection: we work with only one firm per market for each practice area. Once you're onboarded, your territory is locked to competitors. This allows us to build long-term growth systems without diluting lead quality or creating conflicts of interest between clients.",
  },
  {
    q: 'Does Great Marketing AI offer guarantees?',
    a: "While no marketing agency can guarantee specific case volume or court outcomes, we focus on high-performance execution and exclusive territory rights that maximize your probability of success. Every MVA lead we deliver is pre-vetted through our AI qualification system, giving your intake team the highest probability of converting leads into signed retainers. We also back our work with performance-based reporting. You'll receive weekly updates on lead volume, qualification rates, and signed cases, so you can see exactly how your investment is performing at every stage.",
  },
  {
    q: 'Do you offer Spanish-language marketing for law firms?',
    a: 'Yes. Bilingual and Hispanic market marketing is one of our signature capabilities. While most agencies either ignore Spanish-speaking clients entirely or rely on Google Translate for ad copy, we build native Spanish campaigns with culturally-accurate messaging and dedicated Spanish-speaking intake support. This matters because Hispanic communities are dramatically underserved in the personal injury legal market. Many injured Spanish-speaking prospects struggle to find attorneys who communicate effectively in their language, creating a massive opportunity for law firms willing to serve this market authentically. Our bilingual campaigns have helped personal injury firms unlock new case volume from Spanish-speaking clients, often making Hispanic leads their highest-ROI segment.',
  },
  {
    q: 'What types of motor vehicle accident cases do you generate leads for?',
    a: "We generate exclusive leads across every major type of motor vehicle accident case, including auto accidents, truck accidents, motorcycle accidents, rideshare accidents (Uber and Lyft), commercial vehicle collisions, and drunk driving incidents. Each campaign is targeted specifically to the case types most valuable to your firm. Our AI-powered qualification system pre-vets every lead against your firm's specific criteria, such as accident fault, injury severity, insurance coverage, and statute of limitations. This means your intake team only speaks with prospects who match the MVA cases your firm actually wants to sign, saving time and increasing your case conversion rate.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq-1" className="py-24 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl mb-4 leading-tight">Frequently Asked Questions</h2>
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
          <HireUsButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-dark text-white font-bold hover:opacity-90 transition">
            Book a Consultation Call <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </div>
    </section>
  );
}
