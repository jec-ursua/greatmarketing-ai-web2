import { Play, ArrowRight } from 'lucide-react';

export function Podcast() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold">PODCAST</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
            The Great Marketing Podcast:{' '}
            <em className="not-italic text-brand-gold">Strategies for Law Firm Growth</em>
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Join Rafael Hernandez for regular conversations on what actually works in personal injury law firm marketing — from AI-powered lead generation and performance ad strategy to intake automation and bilingual market expansion. Real tactics, real results, straight from an agency that works with personal injury law firms every day.
          </p>
          <a
            href="https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-brand-gold text-neutral-900 rounded-full font-bold hover:brightness-105 transition inline-flex items-center gap-2 shadow"
          >
            Listen on Spotify <ArrowRight size={16} />
          </a>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl p-10 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-neutral-900 to-amber-950">
            <div>
              <span className="text-xs text-amber-300 tracking-[0.3em] font-bold">PODCAST</span>
              <h3 className="font-display text-4xl text-white mt-3 leading-tight">
                The Great Marketing Podcast
              </h3>
              <p className="text-neutral-400 text-sm mt-3">Hosted by Rafael Hernandez</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center flex-shrink-0">
                  <Play size={22} className="text-neutral-900 ml-0.5" fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-amber-300 mb-1">LATEST EPISODE</p>
                  <p className="text-white text-sm font-semibold leading-snug">
                    10 Best Marketing Podcasts to Boost Your Facebook &amp; Google Ad ROAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
