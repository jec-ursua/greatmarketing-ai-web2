import Link from 'next/link';
import { ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export function MVASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
            Built for Personal Injury Law Firms, Powered by <em className="not-italic text-brand-gold">Exclusive MVA Leads</em>
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Great Marketing AI is a personal injury marketing agency with one flagship offering: exclusive, pre-qualified motor vehicle accident leads delivered to law firms across English and Spanish-speaking markets. Our team&apos;s background running enterprise campaigns for top digital marketing agencies, including NP Digital — means our lead generation systems are built on proven performance frameworks, adapted for how personal injury firms actually grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4">
            <Link href="/services/motor-vehicle-accident-leads" className="block bg-brand-gold rounded-2xl p-6 hover:shadow-xl transition group">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-900 text-lg">⭐ Exclusive MVA Lead Generation for Personal Injury Firms</h3>
                <ArrowRight size={20} className="text-neutral-900 group-hover:translate-x-1 transition flex-shrink-0" />
              </div>
            </Link>
            <Link href="/services/motor-vehicle-accident-leads" className="block bg-brand-dark text-white rounded-2xl p-6 hover:shadow-xl transition group">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Spanish MVA Leads</h3>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition flex-shrink-0" />
              </div>
            </Link>
            <Link href="/services/motor-vehicle-accident-leads" className="block bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition group">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-900 text-lg">English MVA Leads</h3>
                <ArrowRight size={20} className="text-neutral-900 group-hover:translate-x-1 transition flex-shrink-0" />
              </div>
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed mt-6">
              We generate pre-qualified motor vehicle accident leads for personal injury law firms from both English and Spanish-speaking markets. Every lead is 100% exclusive to your firm, territory-protected, and AI-qualified before reaching your intake team — so your attorneys spend time signing cases, not chasing dead ends.
            </p>
            <HireUsButton className="inline-flex items-center gap-2 mt-4 px-7 py-3.5 rounded-full bg-brand-dark text-white font-bold hover:opacity-90 transition">
              Book a Consultation Call <ArrowRight size={16} />
            </HireUsButton>
          </div>

          {/* Custom Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-[560px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-neutral-100 rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl" />
                <div className="pt-12 px-5">
                  <div className="text-xs text-neutral-500 mb-3">Today, 2:47 PM</div>
                  {[
                    { time: 'now', name: 'Maria S.', detail: 'Car accident, LA County. Pre-qualified. Tap to call.' },
                    { time: '3 min ago', name: 'Roberto M.', detail: 'Rideshare incident, Orange County.' },
                    { time: '12 min ago', name: 'Carlos R.', detail: 'Motorcycle accident, San Diego.', muted: true },
                  ].map((notif, i) => (
                    <div key={i} className={`${i === 0 ? '' : 'mt-3'} bg-white rounded-2xl p-4 shadow border border-neutral-200 ${notif.muted ? 'opacity-70' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center">
                          <PhoneIcon size={14} className="text-neutral-900" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold">GREAT MARKETING AI</p>
                          <p className="text-[9px] text-neutral-500">{notif.time}</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-neutral-900">New MVA Lead</p>
                      <p className="text-xs text-neutral-600 mt-1">{notif.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 right-4 lg:right-12 bg-brand-gold text-neutral-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-xl rotate-3">
              +3 leads today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
