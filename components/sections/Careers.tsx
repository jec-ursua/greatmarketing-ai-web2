import { ArrowRight, Users } from 'lucide-react';

export function Careers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="aspect-[5/4] rounded-3xl overflow-hidden relative bg-gradient-to-br from-brand-gold-light to-brand-gold">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Users size={80} className="text-neutral-900/30 mx-auto mb-3" strokeWidth={1} />
              <p className="font-display text-2xl font-bold text-neutral-900/60">Team Photo</p>
              <p className="text-xs text-neutral-700/60 mt-1">Replace with founders workshop image</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold">CAREER</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
            Join the <em className="not-italic text-brand-gold">Great Marketing AI</em> team!
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-7">
            We are building the fastest growing AI-powered marketing agency for law firms in the country. If you thrive in a culture of creativity, performance, and innovation, and you want to be part of a team that is changing how law firms grow, we want to hear from you.
          </p>
          <a href="/career" className="px-7 py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            See The Team <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
