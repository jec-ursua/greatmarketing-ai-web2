const PARTNER_LOGOS = [
  'NP DIGITAL',
  'UBERSUGGEST',
  'AP | ALBERT PRECIADO',
  'DRIVEN',
  "ACQUIRE'D",
  'COMPLEX STEEL',
  'DOGFATHERS',
  'XICANO',
];

export function LogoMarquee() {
  return (
    <section className="py-10 border-y border-neutral-100 bg-neutral-50 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
          <div
            key={i}
            className="mx-10 font-display text-2xl font-bold text-neutral-400 tracking-tight"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
