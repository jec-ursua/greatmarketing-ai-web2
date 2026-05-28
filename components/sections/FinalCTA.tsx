import { ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export function FinalCTA() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A24A 0%, transparent 50%), radial-gradient(circle at 70% 50%, #C5A24A 0%, transparent 50%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-8">
          Ready to Become the <em className="not-italic text-brand-gold">Go-To Personal Injury Firm</em> in Your Market?
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-10 max-w-xl mx-auto text-lg">
          Performance marketing built exclusively for PI law firms. Book a call and we&apos;ll build a growth plan around how your firm actually signs clients.
        </p>
        <HireUsButton payload={{ sourceSurface: 'homepage' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
          Book a Consultation Call <ArrowRight size={20} />
        </HireUsButton>
      </div>
    </section>
  );
}
