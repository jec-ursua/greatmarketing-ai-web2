import { Play, ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const VIDEOS = [
  {
    id: '21yNnWVesnY',
    title: "Lawyers: Steal Your Competitors' Best Ads in 2026",
    views: '32 Views',
    age: '2 days ago',
    url: 'https://www.youtube.com/watch?v=21yNnWVesnY&t=48s',
  },
  {
    id: 'ZrYtG99uxK8',
    title: 'The Ultimate Law Firm Funnel: Lead Forms vs Landing Pages',
    views: '172 Views',
    age: '6 days ago',
    url: 'https://www.youtube.com/watch?v=ZrYtG99uxK8&t=1s',
  },
  {
    id: 'AORFPKaSjBc',
    title: 'The Retargeting Bridge: Google Intent at Meta Prices',
    views: '250 Views',
    age: '13 days ago',
    url: 'https://www.youtube.com/watch?v=AORFPKaSjBc&t=1s',
  },
];

export function VideoContent() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl max-w-3xl mx-auto mb-6 leading-tight">
            Growth Strategies From a Marketing Agency Built for Law Firms
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            We publish weekly breakdowns on how personal injury law firms can filter out junk leads, outsmart competitors ethically, and build high-converting intake funnels — the same strategies we use to deliver exclusive cases for our clients. Compliance-friendly, practice-proven, and free to watch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {VIDEOS.map((v) => (
            <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="aspect-video rounded-2xl mb-4 relative overflow-hidden bg-neutral-200">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition shadow-xl">
                    <Play size={24} className="text-neutral-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg leading-snug mb-2 group-hover:text-brand-gold transition">{v.title}</h3>
              <p className="text-xs text-neutral-500">{v.views} • {v.age}</p>
            </a>
          ))}
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
