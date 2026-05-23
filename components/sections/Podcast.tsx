import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';

export function Podcast() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">PODCAST</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 leading-tight">
            <strong className="font-bold">The Great Marketing Podcast: <em className="not-italic text-brand-gold">Strategies for Law Firm Growth</em></strong>
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Join Rafael Hernandez for regular conversations on what actually works in personal injury law firm marketing, from AI-powered lead generation and performance ad strategy to intake automation and bilingual market expansion. Real tactics, real results, straight from an agency that works with personal injury law firms every day.
          </p>
          <a
            href="https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75?si=c9dabe6f90e9443f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow"
          >
            Listen to The Great Marketing Podcast <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-900 to-amber-950 p-10 flex flex-col justify-between">
            <div className="text-center">
              <Image
                src="https://framerusercontent.com/images/fJm8pFTIJXumVRyCsRu5AGAxYgs.jpeg"
                alt="The Great Marketing Podcast with Rafael Hernandez cover art"
                width={300}
                height={300}
                className="mx-auto rounded-2xl shadow-xl mb-6 w-48 h-48 object-cover"
              />
              <p className="text-xs text-amber-300 tracking-[0.3em] font-bold mb-2">PODCAST</p>
              <h3 className="font-display text-2xl text-white mb-2 leading-tight">The Great Marketing Podcast</h3>
              <p className="text-neutral-400 text-sm">Hosted by Rafael Hernandez</p>
            </div>

            <a
              href="https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                  <Play size={22} className="text-neutral-900 ml-0.5" fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-xs text-amber-300 mb-1 font-bold">LATEST EPISODE</p>
                  <p className="text-white text-sm font-semibold leading-snug">10 Best Marketing Podcasts to Boost Your Facebook &amp; Google Ad ROAS</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
