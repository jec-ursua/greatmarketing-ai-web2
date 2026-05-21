import { Check, X, ArrowRight } from 'lucide-react';

const OTHER_AGENCY_POINTS = [
  'Rely on Google Translate for ads',
  'Sell shared leads to 5+ firms',
  'One-size-fits-all strategies',
  'Report on clicks and vanity metrics',
  'Miss the Hispanic market entirely',
  'Hand off raw, unfiltered leads',
];

const GMA_POINTS = [
  '100% exclusive leads, sold only to your firm',
  'Personal injury expertise in every campaign',
  'AI-powered qualification filters bad leads',
  'Report on signed cases, case value, and ROI',
  'Native English + Spanish cultural campaigns',
  'Pre-qualified leads ready for intake',
];

export function Comparison() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold">COMPARISON</span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl text-center max-w-3xl mx-auto mt-3 mb-4 leading-tight">
          Why <em className="not-italic text-brand-gold">Personal Injury Law Firms</em> Choose Great Marketing AI
        </h2>
        <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Most law firms end up working with a general marketing agency that treats personal injury the same as any other industry, running generic ads, selling shared leads, and reporting on clicks instead of cases. We built Great Marketing AI differently.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-7 border border-neutral-200">
            <h3 className="font-display text-xl font-bold text-neutral-400 mb-5">Other Agencies</h3>
            {OTHER_AGENCY_POINTS.map((item) => (
              <div key={item} className="flex items-start gap-3 py-2.5 border-b border-neutral-100 last:border-0">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <X size={12} className="text-red-500" strokeWidth={3} />
                </div>
                <span className="text-sm text-neutral-500">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-neutral-900 text-white rounded-2xl p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl bg-brand-gold" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded flex items-center justify-center bg-brand-gold">
                  <span className="font-display font-bold text-neutral-900 text-sm">G</span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-gold">Great Marketing AI</h3>
              </div>
              {GMA_POINTS.map((item) => (
                <div key={item} className="flex items-start gap-3 py-2.5 border-b border-white/10 last:border-0">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-brand-gold">
                    <Check size={12} className="text-neutral-900" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#hero-form" className="px-7 py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            Book a Consultation Call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
