import type { Metadata } from 'next';
import { ArrowRight, BarChart3, Target, Search, TrendingUp } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'Google Ads for Personal Injury Law Firms | Great Marketing AI',
  description: 'Google search campaigns built exclusively for PI law firms. Keyword-level targeting for MVA, slip & fall, and med mal with reporting tied to signed cases.',
  alternates: { canonical: '/services/google-ads-for-law-firms' },
};

const FEATURES = [
  { icon: Search, title: 'Intent-Based Keyword Targeting', desc: 'We bid on high-intent search terms from injured prospects actively looking for an attorney — not broad "lawyer" keywords that burn budget.' },
  { icon: Target, title: 'Case-Type Campaign Structure', desc: 'Separate campaigns per case type (MVA, slip & fall, med mal) with dedicated landing pages built to convert each audience.' },
  { icon: BarChart3, title: 'ROI-Based Reporting', desc: 'We report on qualified leads, signed cases, and cost per acquisition — not clicks, impressions, or quality score.' },
  { icon: TrendingUp, title: 'Continuous Bid Optimization', desc: 'AI-assisted bidding and negative keyword management to eliminate wasted spend and lower your cost per signed case over time.' },
];

export default function GoogleAdsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">GOOGLE ADS</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Google Ads That Capture <em className="text-brand-gold not-italic">High-Intent PI Cases</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Search campaigns built exclusively for personal injury law firms. We target injured prospects at the exact moment they&apos;re searching for an attorney — optimizing for signed cases, not vanity metrics.
          </p>
          <HireUsButton payload={{ sourceSurface: 'google-ads-for-law-firms' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Get a Free Campaign Audit <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 leading-tight">
              How We Run <em className="not-italic text-brand-gold">Your Google Ads</em>
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
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C5A24A 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-8">
            Stop Paying for Clicks. <em className="not-italic text-brand-gold">Start Paying for Cases.</em>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free campaign audit. We&apos;ll review your current Google Ads account (or build from scratch) and show you exactly where budget is being wasted.
          </p>
          <HireUsButton payload={{ sourceSurface: 'google-ads-for-law-firms' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
            Book a Free Campaign Audit <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
