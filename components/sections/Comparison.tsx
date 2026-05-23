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
  '100% exclusive leads, sold only to your firm',
  'Leads across every PI case type: MVA, slip & fall, med mal, wrongful death',
  'AI-powered qualification filters bad leads automatically',
  'Report on signed cases, case value, and ROI',
  'Native English and Spanish campaigns that connect culturally',
  'Pre-qualified leads ready for your intake team',
];

export function Comparison() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">COMPARISON</span>
          <h2 className="font-display text-4xl lg:text-5xl max-w-4xl mx-auto mb-8 leading-tight">
            Why <em className="not-italic text-brand-gold font-bold">Personal Injury Law Firms</em> Choose Great Marketing AI
          </h2>
          <div className="text-neutral-700 max-w-3xl mx-auto leading-relaxed space-y-4 text-base">
            <p>Most law firms end up working with a general marketing agency that treats personal injury the same as any other industry, running generic ads, selling shared leads, and reporting on clicks instead of cases.</p>
            <p>We built Great Marketing AI differently. As a <strong>personal injury marketing agency</strong> working with law firms of every size, from solo practices and small law firms to multi-location operations, we combine AI with proven legal marketing expertise and strategies to deliver real results that general agencies can&apos;t match.</p>
            <p>Our team built this agency after years running enterprise-level digital marketing campaigns for some of the most recognized names in the industry, including NP Digital. That foundation means every campaign we launch is powered by performance frameworks proven at scale, adapted for how personal injury law firms actually grow.</p>
          </div>
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
          <HireUsButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-dark text-white font-bold hover:opacity-90 transition">
            Book a Consultation Call <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </div>
    </section>
  );
}
