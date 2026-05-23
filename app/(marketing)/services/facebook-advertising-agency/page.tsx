import type { Metadata } from 'next';
import { ArrowRight, BarChart3, Target, Zap, TrendingUp } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'Facebook & Google Ads for Personal Injury Law Firms',
  description: 'Performance-driven paid advertising for PI law firms. Meta and Google campaigns that generate qualified leads, not vanity metrics.',
  alternates: { canonical: '/services/facebook-advertising-agency' },
};

const FEATURES = [
  { icon: Target, title: 'Case-Type Targeting', desc: 'Campaigns built around specific PI case types: MVA, slip & fall, med mal, wrongful death. No generic "lawyer" targeting.' },
  { icon: BarChart3, title: 'ROI-Based Reporting', desc: 'We report on signed cases and cost per acquisition, not impressions and clicks.' },
  { icon: Zap, title: 'AI Creative Testing', desc: 'AI-powered ad creative rotation that finds winning combinations faster than manual testing.' },
  { icon: TrendingUp, title: 'Bilingual Campaigns', desc: 'Native English and Spanish ad copy and landing pages to reach the underserved Hispanic market.' },
];

export default function FacebookAdsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">PAID ADVERTISING</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Facebook &amp; Google Ads That Generate <em className="text-brand-gold not-italic">Signed Cases</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Performance-driven Meta and Google campaigns built specifically for personal injury law firms. We manage your ad spend like it&apos;s our own, optimizing for qualified leads that your intake team can convert into signed retainers.
          </p>
          <HireUsButton payload={{ sourceSurface: 'facebook-advertising-agency' }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Get a Free Ad Audit <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              How We Run <em className="not-italic text-brand-gold">Your Ads</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white border border-neutral-200 p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream">
                  <f.icon className="h-6 w-6 text-brand-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A24A 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
            Ready to Turn Ad Spend Into <em className="not-italic text-brand-gold">Signed Cases?</em>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free ad audit. We&apos;ll review your current campaigns (or build from scratch) and show you exactly where the opportunities are.
          </p>
          <HireUsButton payload={{ sourceSurface: 'facebook-advertising-agency' }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
            Book a Free Ad Audit <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
