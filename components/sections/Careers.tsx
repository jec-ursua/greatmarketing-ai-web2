import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Careers() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/q7mbj3MtK9ATQSHHCPSW2Cs6iM.jpg"
            alt="Great Marketing AI founders hosting live marketing training workshop with entrepreneurs - advertising agency los angeles"
            width={364}
            height={454}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">CAREER</span>
          <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
            Join the <em className="not-italic text-brand-gold">Great Marketing AI</em> team!
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            We are building the fastest growing AI-powered marketing agency for law firms in the country. If you thrive in a culture of creativity, performance, and innovation, and you want to be part of a team that is changing how law firms grow, we want to hear from you.
          </p>
          <Link href="/career" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold transition">
            Join The Team! <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
