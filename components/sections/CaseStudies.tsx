import { ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  { stats: ['800%', '81%', '71%'], labels: ['Growth', 'Cost Reduction', 'CPL Decrease'], title: 'NP Digital — Meta Ads Scaling', tag: 'Marketing', bg: 'bg-amber-50' },
  { stats: ['$373k', '289%', '71%'], labels: ['Revenue', 'ROAS', 'Conversion Lift'], title: 'Albert Preciado — Explosive Growth', tag: 'Marketing', bg: 'bg-stone-100' },
  { stats: ['$251k', '1,956%', '54.2%'], labels: ['Sales', 'ROI', 'New Customers'], title: 'Complex Steel — AI-Driven ROI', tag: 'Web Dev', bg: 'bg-zinc-100' },
  { stats: ['34,396', '$17,768', '11x'], labels: ['Leads', 'Revenue', 'ROAS'], title: '10X Business Coach', tag: 'Marketing', bg: 'bg-neutral-100' },
  { stats: ['+119%', '+375%', '+114%'], labels: ['Traffic', 'Rankings', 'Conversions'], title: 'KCB Plumbing — SEO Makeover', tag: 'Web Dev', bg: 'bg-amber-50' },
  { stats: ['$14,500', '192', '8.16x'], labels: ['Per Coach', 'Booked Calls', 'ROAS'], title: 'Palomino Residential — Meta Cold Traffic', tag: 'Marketing', bg: 'bg-stone-100' },
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold">PROVEN RESULTS</span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl text-center max-w-3xl mx-auto mt-3 mb-4 leading-tight">
          Performance-Driven Marketing, Trusted Across Industries
        </h2>
        <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-10">
          Our team has delivered measurable growth across industries, from e-commerce to professional services to top-tier marketing agencies. That same performance expertise now drives our flagship focus: exclusive MVA lead generation for personal injury law firms.
        </p>
        <div className="flex justify-center gap-2 mb-10">
          {['All', 'Marketing', 'Web Development'].map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                i === 0 ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <div key={i} className={`${cs.bg} rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition cursor-pointer group`}>
              <div className="flex justify-between items-start mb-5">
                <span className="text-[10px] font-bold tracking-wider text-neutral-500 px-2.5 py-1 bg-white rounded-full">
                  {cs.tag.toUpperCase()}
                </span>
                <ArrowRight size={18} className="text-neutral-400 group-hover:text-brand-gold group-hover:translate-x-1 transition" />
              </div>
              <div className="grid grid-cols-3 gap-2 mb-5">
                {cs.stats.map((stat, j) => (
                  <div key={j}>
                    <p className="font-display text-2xl font-bold text-neutral-900">{stat}</p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">{cs.labels[j]}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-display font-bold text-base leading-snug text-neutral-900">{cs.title}</h3>
            </div>
          ))}
          <div className="rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-brand-gold to-brand-gold-light">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-4">
                <span className="font-display font-bold text-2xl text-brand-gold">G</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2 leading-tight">You&apos;ve Seen the Proof.</h3>
              <p className="text-sm text-neutral-800">
                Now let&apos;s apply this same performance expertise to grow your personal injury practice.
              </p>
            </div>
            <a href="#hero-form" className="mt-5 px-5 py-3 bg-neutral-900 text-white rounded-full text-sm font-bold hover:opacity-90 transition inline-flex items-center justify-center gap-2 w-full">
              Book a Consultation Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/case-studies" className="text-sm font-semibold underline underline-offset-4 cursor-pointer hover:text-brand-gold transition">
            See All Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}
