import { Play, ArrowRight } from 'lucide-react';

const VIDEOS = [
  { title: "Lawyers: Steal Your Competitors' Best Ads in 2026", views: '32 Views', age: '2 days ago', accent: 'bg-red-500', url: 'https://www.youtube.com/watch?v=21yNnWVesnY' },
  { title: 'The Ultimate Law Firm Funnel: Lead Forms vs Landing Pages', views: '172 Views', age: '6 days ago', accent: 'bg-amber-400', url: 'https://www.youtube.com/watch?v=ZrYtG99uxK8' },
  { title: 'The Retargeting Bridge: Google Intent at Meta Prices', views: '250 Views', age: '13 days ago', accent: 'bg-emerald-500', url: 'https://www.youtube.com/watch?v=AORFPKaSjBc' },
];

export function VideoContent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl lg:text-5xl text-center max-w-3xl mx-auto mb-4 leading-tight">
          Growth Strategies From a Marketing Agency Built for Law Firms
        </h2>
        <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
          We publish weekly breakdowns on how personal injury law firms can filter out junk leads, outsmart competitors ethically, and build high-converting intake funnels. Compliance-friendly, practice-proven, and free to watch.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {VIDEOS.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className={`${v.accent} aspect-video rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/30" />
                <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition shadow-xl">
                  <Play size={24} className="text-neutral-900 ml-1" fill="currentColor" />
                </div>
                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                  8:42
                </span>
              </div>
              <h3 className="font-display font-bold text-lg leading-snug mb-2 group-hover:text-brand-gold transition">
                {v.title}
              </h3>
              <p className="text-xs text-neutral-500">{v.views} • {v.age}</p>
            </a>
          ))}
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
