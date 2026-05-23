import type { Metadata } from 'next';
import { ArrowRight, Smartphone, Gauge, MousePointerClick, Palette } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'Web Design for Personal Injury Law Firms',
  description: 'High-converting websites built for PI law firms. Fast, mobile-first, and designed to turn visitors into leads.',
  alternates: { canonical: '/services/web-design-los-angeles' },
};

const FEATURES = [
  { icon: MousePointerClick, title: 'Conversion-First Design', desc: 'Every page is designed around one goal: turning visitors into leads. Strategic CTAs, trust signals, and intake forms placed where they convert.' },
  { icon: Smartphone, title: 'Mobile-First Build', desc: 'Most injured prospects search on their phone. Your site loads fast, looks great, and converts on every screen size.' },
  { icon: Gauge, title: 'Performance Optimized', desc: 'Sub-2-second load times, perfect Core Web Vitals scores, and clean code that Google rewards with higher rankings.' },
  { icon: Palette, title: 'Professional Branding', desc: 'A design that builds instant trust. Injured clients need to feel confident your firm can handle their case.' },
];

export default function WebDesignPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">WEB DESIGN</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Websites That Turn Visitors Into <em className="text-brand-gold not-italic">Signed Cases</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            High-converting websites built specifically for personal injury law firms. Fast, mobile-first, and designed to make injured prospects pick up the phone.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Get a Free Website Review <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              What Makes Our Sites <em className="not-italic text-brand-gold">Convert</em>
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
            Ready for a Website That <em className="not-italic text-brand-gold">Actually Converts?</em>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free website review. We&apos;ll audit your current site and show you the quick wins and structural changes that will increase your lead flow.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
            Get a Free Website Review <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
