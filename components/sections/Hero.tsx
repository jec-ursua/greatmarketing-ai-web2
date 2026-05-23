import Image from 'next/image';
import { Star } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const AVATARS = [
  { url: 'https://framerusercontent.com/images/rM5o5GHtA5hjQHnSFIfNJhY.png', alt: 'Amanda Palomino - advertising agency in california' },
  { url: 'https://framerusercontent.com/images/gHKpbXHJjM7Gwry14FVQKcXalQ.png', alt: 'Peter Prieto - marketing agency in california' },
  { url: 'https://framerusercontent.com/images/ihYYXUnpsu19BLwLValuQFVpsxs.png', alt: 'Nestor Gutierrez - advertising agency in los angeles' },
  { url: 'https://framerusercontent.com/images/aD9Q9eRse9OGNPe2zQdBP4feoE.png', alt: 'Albert Preciado - los angeles ad agency' },
  { url: 'https://framerusercontent.com/images/USEMLl0WqDhjDrqqNoqIO29Fo.png', alt: 'Neil Patel - advertising agency in california' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
          The Marketing Agency Built for <em className="text-brand-gold not-italic">Personal Injury Law Firms</em>
        </h1>

        <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
          We generate exclusive, AI-qualified leads across every PI case type: MVA, slip &amp; fall, medical malpractice, and wrongful death, in both English and Spanish. Your intake team spends time signing clients, not chasing dead ends.
        </p>

        <HireUsButton payload={{ sourceSurface: 'homepage' }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg mb-12">
          Book a Consultation Call
        </HireUsButton>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-10">
          <Image
            src="https://framerusercontent.com/images/iZdb5ZJXRw2mDM526ZJtJXtQLmM.svg"
            alt="Meta advertising services by los angeles ad agency"
            width={120}
            height={28}
            className="h-7 w-auto opacity-70 grayscale"
          />
          <Image
            src="https://framerusercontent.com/images/T7JeYSZUKMaM2KQhkQpu2FrNlH0.svg"
            alt="Google Ads management by advertising agency in los angeles"
            width={100}
            height={36}
            className="h-9 w-auto opacity-70 grayscale"
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {AVATARS.map((a, i) => (
              <Image key={i} src={a.url} alt={a.alt} width={36} height={36} className="w-9 h-9 rounded-full border-2 border-white" />
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5 mb-0.5">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-xs text-neutral-700 font-semibold">200+ businesses scaled</p>
          </div>
        </div>
      </div>
    </section>
  );
}
