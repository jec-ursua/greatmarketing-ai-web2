import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe, Brain } from 'lucide-react';

export function MVASection() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">FEATURED OFFERING</span>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
              Exclusive PI Lead Generation, Across <em className="not-italic text-brand-gold">Every Case Type</em>
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Beyond our full-service marketing, we offer something most agencies can&apos;t: exclusive, AI-qualified personal injury leads delivered directly to your intake team. MVA, slip &amp; fall, medical malpractice, wrongful death, in English and Spanish. Territory-protected and never shared.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">100% Exclusive, Territory-Protected</p>
                  <p className="text-sm text-neutral-600">One firm per market. Your leads are never shared with competitors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">AI-Qualified Before Intake</p>
                  <p className="text-sm text-neutral-600">Every lead is pre-vetted against your criteria before reaching your team.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-dark" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">Native Bilingual Campaigns</p>
                  <p className="text-sm text-neutral-600">English and Spanish campaigns built by native speakers.</p>
                </div>
              </div>
            </div>

            <Link
              href="/services/motor-vehicle-accident-leads"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-dark text-white font-bold hover:opacity-90 transition"
            >
              Learn About Exclusive PI Leads <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { title: '⭐ Motor Vehicle Accident Leads', style: 'bg-brand-gold text-neutral-900' },
              { title: 'Slip & Fall Leads', style: 'bg-brand-dark text-white' },
              { title: 'Medical Malpractice Leads', style: 'bg-white border-2 border-neutral-200 text-neutral-900' },
              { title: 'Wrongful Death Leads', style: 'bg-neutral-50 border-2 border-neutral-100 text-neutral-900' },
            ].map((card) => (
              <Link
                key={card.title}
                href="/services/motor-vehicle-accident-leads"
                className={`block rounded-2xl p-6 hover:shadow-xl transition group ${card.style}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
