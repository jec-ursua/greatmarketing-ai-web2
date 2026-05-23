import type { Metadata } from 'next';
import { ArrowRight, Search, MapPin, FileText, BarChart3 } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'SEO for Personal Injury Law Firms',
  description: 'Rank for the keywords injured prospects actually search. Local SEO, content strategy, and technical optimization for PI law firms.',
  alternates: { canonical: '/services/seo-agency-los-angeles' },
};

const FEATURES = [
  { icon: MapPin, title: 'Local SEO & Map Pack', desc: 'Dominate the Google 3-pack in your market. GBP optimization, citation building, and review management that puts your firm on top.' },
  { icon: Search, title: 'PI Keyword Strategy', desc: 'We target the exact keywords injured prospects search: "car accident lawyer near me," "slip and fall attorney," and hundreds more.' },
  { icon: FileText, title: 'Authority Content', desc: 'Blog posts, practice area pages, and FAQ content that builds topical authority and earns organic backlinks.' },
  { icon: BarChart3, title: 'Technical SEO', desc: 'Site speed, Core Web Vitals, schema markup, and crawlability fixes that remove barriers to ranking.' },
];

export default function SEOPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">SEO</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            SEO That Puts Your Firm at the <em className="text-brand-gold not-italic">Top of Google</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Rank for the keywords injured prospects actually search. Our SEO strategies are built specifically for personal injury law firms, combining local dominance with content authority.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Get a Free SEO Audit <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              Our SEO <em className="not-italic text-brand-gold">Approach</em>
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
            Ready to Own Page One in <em className="not-italic text-brand-gold">Your Market?</em>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free SEO audit. We&apos;ll show you exactly where you rank, where your competitors are beating you, and the fastest path to page one.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
            Get a Free SEO Audit <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
