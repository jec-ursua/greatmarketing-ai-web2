import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, #D4A93B 0%, transparent 50%), radial-gradient(circle at 70% 50%, #D4A93B 0%, transparent 50%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl lg:text-6xl leading-tight mb-6">
          Ready to Become the{' '}
          <em className="not-italic text-brand-gold">Go-To Personal Injury Firm</em> in Your Market?
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Join the personal injury law firms already scaling with Great Marketing AI. Exclusive, territory-protected leads. AI-powered qualification. Native bilingual campaigns that unlock Hispanic markets most agencies cannot serve.
        </p>
        <a
          href="#hero-form"
          className="px-8 py-4 bg-brand-gold text-neutral-900 rounded-full font-bold text-lg hover:brightness-105 transition inline-flex items-center gap-2 shadow-2xl"
        >
          Book a Consultation Call <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
