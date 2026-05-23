import Image from 'next/image';

const LOGOS = [
  { url: '/logos/walker-advertising.png', alt: 'Walker Advertising logo', w: 160 },
  { url: '/logos/ceo-lawyer.png', alt: 'CEO Lawyer logo', w: 140 },
  { url: '/logos/jacoby-meyers.png', alt: 'Jacoby & Meyers Law Offices logo', w: 180 },
  { url: '/logos/larry-h-parker.png', alt: 'Larry H. Parker Accident Attorneys logo', w: 170 },
  { url: '/logos/eisenberg-injury-attorneys.png', alt: 'Eisenberg Injury Attorneys logo', w: 160 },
  { url: '/logos/sasooness-law-group.png', alt: 'Sasooness Law Group logo', w: 180 },
  { url: '/logos/bernard-law-group.png', alt: 'Bernard Law Group logo', w: 170 },
  { url: '/logos/ed-bernstein.png', alt: 'Ed Bernstein Injury Lawyers logo', w: 140 },
  { url: '/logos/levine-law.png', alt: 'Levine Law Accident Attorneys logo', w: 180 },
  { url: '/logos/quintessa-marketing.png', alt: 'Quintessa Marketing logo', w: 160 },
  { url: '/logos/walker-advertising.png', alt: 'Walker Advertising logo', w: 160 },
];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <p className="text-center text-sm font-medium uppercase tracking-widest text-neutral-400 mb-8">
        Trusted by Leading Law Firms
      </p>
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-72 bg-gradient-to-r from-white from-30% via-white/60 via-70% to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-72 bg-gradient-to-l from-white from-30% via-white/60 via-70% to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="mx-8 flex items-center" style={{ flexShrink: 0 }}>
              <Image src={logo.url} alt={logo.alt} width={logo.w} height={50} className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
