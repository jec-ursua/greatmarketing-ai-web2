import Image from 'next/image';
import { Check, X, ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const OTHER_AGENCY = [
  'Rely on Google Translate for ads',
  'Sell Shared Leads to 5 firms',
  'One-size-fits-all strategies for every industry',
  'Report on clicks, impressions, and vanity metrics',
  'Miss the Hispanic market or rely on Google Translate',
  'Hand off raw, unfiltered leads to your intake team',
];

const GMA = [
  'PI-only agency — every strategy built for personal injury',
  'Facebook Ads, Google Ads, SEO, web design under one roof',
  'AI-powered campaign optimization and intake automation',
  'Report on signed cases, case value, and ROI',
  'Native English and Spanish campaigns that connect culturally',
  'Performance frameworks proven at enterprise scale',
];

export function Comparison() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">COMPARISON</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl max-w-4xl mx-auto mb-8 leading-tight">
            Why <em className="not-italic text-brand-gold font-bold">Personal Injury Law Firms</em> Choose Great Marketing AI
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Most agencies treat PI like any other client. We built Great Marketing AI from the ground up for personal injury law firms — specialized campaigns, bilingual creative, and ROI tied to signed cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          <div className="bg-white rounded-2xl p-8 border border-neutral-200">
            <h3 className="font-display text-xl font-bold text-neutral-400 mb-6">Other Agencies</h3>
            {OTHER_AGENCY.map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-neutral-100 last:border-0">
                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <X size={14} className="text-red-500" strokeWidth={3} />
                </div>
                <span className="text-sm text-neutral-500">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-brand-dark text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl bg-brand-gold" />
            <div className="relative">
              <div className="mb-6">
                <Image
                  src="https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png"
                  alt="Great Marketing AI logo"
                  width={140}
                  height={51}
                  className="h-10 w-auto"
                />
              </div>
              {GMA.map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-brand-gold">
                    <Check size={14} className="text-neutral-900" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <HireUsButton payload={{ sourceSurface: 'homepage' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-dark text-white font-bold text-lg hover:opacity-90 transition">
            Book a Consultation Call <ArrowRight size={20} />
          </HireUsButton>
        </div>
      </div>
    </section>
  );
}
