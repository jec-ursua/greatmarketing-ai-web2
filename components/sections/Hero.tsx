import { Star } from 'lucide-react';
import { LeadForm } from './LeadForm';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #F5E5A8 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F5E5A8 0%, transparent 40%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-neutral-700">
              EXCLUSIVE MVA LEADS · ENGLISH + SPANISH
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-neutral-900 mb-6">
            The Marketing Agency for Law Firms That Delivers{' '}
            <em className="text-brand-gold not-italic font-bold">Signed Cases</em>, Not Just Leads
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl leading-relaxed mb-8">
            Great Marketing AI is a marketing agency that works exclusively with personal injury law firms.
            Using AI and proven performance marketing, we generate qualified, exclusive leads in both English
            and Spanish-speaking markets. This means your intake team spends time closing clients instead of
            chasing dead-end inquiries.
          </p>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-neutral-300 to-neutral-500"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-600 font-medium">200+ businesses scaled</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-6 border-l border-neutral-300">
              <span className="text-xs text-neutral-500 uppercase tracking-wider">Trusted on</span>
              <span className="font-display font-bold">Meta</span>
              <span className="font-display font-bold">Google</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
