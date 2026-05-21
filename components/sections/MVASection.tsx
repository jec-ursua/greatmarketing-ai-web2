import { ArrowRight, Phone as PhoneIcon } from 'lucide-react';

export function MVASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
            Built for Personal Injury Law Firms, Powered by{' '}
            <em className="not-italic text-brand-gold">Exclusive MVA Leads</em>
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Great Marketing AI is a personal injury marketing agency with one flagship offering: exclusive, pre-qualified motor vehicle accident leads delivered to law firms across English and Spanish-speaking markets. Our team&apos;s background running enterprise campaigns for top digital marketing agencies, including NP Digital — means our lead generation systems are built on proven performance frameworks.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-brand-gold text-neutral-900 text-sm font-semibold">⭐ Exclusive MVA Leads</span>
            <span className="px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold">Spanish MVA Leads</span>
            <span className="px-4 py-2 rounded-full border border-neutral-300 text-sm font-semibold">English MVA Leads</span>
          </div>
          <a href="#hero-form" className="px-7 py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            Book a Consultation Call <ArrowRight size={16} />
          </a>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-72 h-[560px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
            <div className="w-full h-full bg-neutral-100 rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl" />
              <div className="pt-12 px-5">
                <div className="text-xs text-neutral-500 mb-2">Today, 2:47 PM</div>
                {[
                  { time: 'now', name: 'Maria S.', detail: 'Car accident, LA County. Pre-qualified. Tap to call.' },
                  { time: '3 min ago', name: 'Roberto M.', detail: 'Rideshare incident, Orange County.' },
                  { time: '12 min ago', name: '', detail: '', muted: true },
                ].map((notif, i) => (
                  <div key={i} className={`${i === 0 ? '' : 'mt-3'} bg-white rounded-2xl p-4 shadow border border-neutral-200 ${notif.muted ? 'opacity-70' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center">
                        <PhoneIcon size={14} className="text-neutral-900" />
                      </div>
                      <div>
                        <p className="text-xs font-bold">GREAT MARKETING AI</p>
                        <p className="text-[10px] text-neutral-500">{notif.time}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-neutral-900">New MVA Lead</p>
                    {notif.detail && <p className="text-xs text-neutral-600 mt-1">{notif.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-brand-gold text-neutral-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-xl rotate-3">
            +3 leads today
          </div>
        </div>
      </div>
    </section>
  );
}
