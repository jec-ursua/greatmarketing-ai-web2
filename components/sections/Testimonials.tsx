import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">TESTIMONIALS</span>
          <h2 className="font-display text-4xl lg:text-5xl max-w-3xl mx-auto mb-6 leading-tight">
            Trusted by Marketing Leaders. <em className="not-italic text-brand-gold">Built for Law Firms.</em>
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Our team has built and scaled marketing campaigns for some of the biggest names in digital marketing. Today, we apply that same expertise to help personal injury law firms generate exclusive cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://framerusercontent.com/images/P3q7m0sG2E6B9nO7w5pnc7XM.png"
              alt="Testimonial from Albert Preciado, CEO of Driven Enterprises, regarding his partnership with Great Marketing AI."
              width={1086}
              height={307}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://framerusercontent.com/images/ShSoRGdtgBRQBTCy9tOrNaBmJY.png"
              alt="Neil Patel, CEO of NP Digital, endorsing Great Marketing AI for their efficient ad management and scaling expertise."
              width={1086}
              height={298}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="text-center text-sm text-neutral-600 mt-10 max-w-3xl mx-auto leading-relaxed">
          Recognized by global leaders including NP Digital, Albert Preciado and Driven Academy — now bringing that same elite-level performance marketing to personal injury law firms as a dedicated law firm marketing agency.
        </p>
      </div>
    </section>
  );
}
