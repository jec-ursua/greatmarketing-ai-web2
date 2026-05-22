import Image from 'next/image';

const LOGOS = [
  { url: 'https://framerusercontent.com/images/gHAX2T2lRXUBCk7km4BxIOiyS0.png', alt: 'NP Digital logo', w: 120 },
  { url: 'https://framerusercontent.com/images/wOg0oyTfv2GLKNzytZAbORy44.png', alt: 'Ubersuggest logo', w: 140 },
  { url: 'https://framerusercontent.com/images/5Zojl4NgZ5966JTtNPkwVXH52e0.png', alt: 'AP Albert Preciado logo', w: 130 },
  { url: 'https://framerusercontent.com/images/7WK3i4W3DdBE4tMbg3BuDHAew.png', alt: 'Driven logo', w: 90 },
  { url: 'https://framerusercontent.com/images/BCScXIAdJslsXMQQ3WXjHoWOso.png', alt: "Acquire'd logo", w: 110 },
  { url: 'https://framerusercontent.com/images/rEJq0I8flzJGheRSa5je3PHLQ.png', alt: 'Complex Steel Buildings logo', w: 90 },
  { url: 'https://framerusercontent.com/images/CxrTMFUMXo47OHkM2obqtDI38.png', alt: 'DogFathers Grooming logo', w: 100 },
  { url: 'https://framerusercontent.com/images/ZauD4GixZKJCUU71e0V1UFqVXvo.png', alt: 'Xicano Entrepreneur logo', w: 70 },
  { url: 'https://framerusercontent.com/images/cNVxQX06cmCQ7Iqteh65vyPveY.png', alt: 'Virtue Hearing logo', w: 130 },
  { url: 'https://framerusercontent.com/images/XJEKijZzoWrwFEtF1hUOjZsOUcI.png', alt: 'Tlapazola logo', w: 100 },
  { url: 'https://framerusercontent.com/images/ctWxYkyoVlUU5eydE3623eMBsyU.png', alt: 'Rancho Express Lube logo', w: 120 },
  { url: 'https://framerusercontent.com/images/rhrUXBsCD1GQwi2A50BLbekesYU.png', alt: 'Palomino Residential logo', w: 110 },
  { url: 'https://framerusercontent.com/images/5U8edJudTxA4WqT0BjVnnFaaiA.png', alt: 'OC Tint Solutions logo', w: 110 },
  { url: 'https://framerusercontent.com/images/WP80CKMQX2t2ktJGgA8RdcCGIw.png', alt: 'nDataStor logo', w: 100 },
  { url: 'https://framerusercontent.com/images/PMtUrhzS8nytGaVR9TrE75bwMU.png', alt: 'MTK Muay Thai logo', w: 140 },
  { url: 'https://framerusercontent.com/images/JJyB30OEfCpoBLXwuz83VAnQkFo.png', alt: 'Mezcal Ultra Lounge logo', w: 130 },
  { url: 'https://framerusercontent.com/images/qN0Io4R8kXueOYyfmej9VHtgMpI.png', alt: 'Vision One Mortgage logo', w: 140 },
];

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-neutral-100 bg-white overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={i} className="mx-8 flex items-center" style={{ flexShrink: 0 }}>
            <Image src={logo.url} alt={logo.alt} width={logo.w} height={50} className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
