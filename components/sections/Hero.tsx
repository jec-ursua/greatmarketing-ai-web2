import { HireUsButton } from '@/components/HireUsModal';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-neutral-900 mb-8 font-bold">
          The Marketing Agency Built for <em className="text-brand-gold not-italic">Personal Injury Law Firms</em>
        </h1>

        <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
          We generate exclusive, AI-qualified leads across every PI case type: MVA, slip &amp; fall, medical malpractice, and wrongful death, in both English and Spanish. Your intake team spends time signing clients, not chasing dead ends.
        </p>

        <HireUsButton payload={{ sourceSurface: 'homepage' }} className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-lg transition shadow-lg mb-10">
          Talk to an Expert
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </HireUsButton>

        <div className="flex items-center justify-center gap-12">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-lg font-bold text-neutral-700">Google</span>
            <span className="text-lg text-neutral-500">5.0/5</span>
          </div>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden="true">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#00B67A"/>
            </svg>
            <span className="text-lg font-bold text-neutral-700">Trustpilot</span>
            <span className="text-lg text-neutral-500">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
