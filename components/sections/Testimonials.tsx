import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-neutral-800 leading-relaxed mb-6 font-display text-lg">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500" />
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold">
            TESTIMONIALS
          </span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl text-center max-w-3xl mx-auto mt-3 mb-4 leading-tight">
          Trusted by Marketing Leaders.{' '}
          <em className="not-italic text-brand-gold">Built for Law Firms.</em>
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Our team has built and scaled marketing campaigns for some of the biggest names in digital marketing.
          Today, we apply that same expertise to help personal injury law firms generate exclusive cases.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <TestimonialCard
            name="Albert Preciado"
            role="CEO, Driven Enterprises"
            quote="They took our marketing from boosting to scaling. The strategy behind their explosive growth approach is unlike any agency I have worked with."
          />
          <TestimonialCard
            name="Neil Patel"
            role="CEO, NP Digital"
            quote="Their team manages ad spend with efficiency and scaling expertise at enterprise level. They understand performance marketing at the depth most agencies cannot match."
          />
        </div>
        <p className="text-center text-sm text-neutral-500 mt-10 max-w-3xl mx-auto leading-relaxed">
          Recognized by global leaders including NP Digital, Albert Preciado and Driven Academy — now bringing
          that same elite-level performance marketing to personal injury law firms as a dedicated law firm
          marketing agency.
        </p>
      </div>
    </section>
  );
}
