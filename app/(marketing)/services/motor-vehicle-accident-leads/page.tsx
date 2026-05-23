import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Phone as PhoneIcon, ShieldCheck, Globe, Brain, Target } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'Exclusive PI Lead Generation for Personal Injury Law Firms',
  description: 'Get exclusive, AI-qualified personal injury leads across MVA, slip & fall, medical malpractice, and wrongful death. Territory-protected, never shared.',
  alternates: { canonical: '/services/motor-vehicle-accident-leads' },
};

const CASE_TYPES = [
  {
    title: 'Motor Vehicle Accidents',
    description: 'Auto, truck, motorcycle, rideshare (Uber/Lyft), and commercial vehicle collisions.',
    flagship: true,
  },
  {
    title: 'Slip & Fall Injuries',
    description: 'Premises liability cases from retail, commercial, and residential properties.',
    flagship: false,
  },
  {
    title: 'Medical Malpractice',
    description: 'Hospital negligence, surgical errors, misdiagnosis, and medication errors.',
    flagship: false,
  },
  {
    title: 'Wrongful Death',
    description: 'Fatal accident claims from vehicle collisions, workplace incidents, and medical negligence.',
    flagship: false,
  },
];

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: '100% Exclusive Leads',
    description: 'Every lead is sold to one firm only. No bidding wars, no shared prospects. Your territory is locked to competitors.',
  },
  {
    icon: Globe,
    title: 'Bilingual Campaigns',
    description: 'Native English and Spanish campaigns built by native speakers, not Google Translate. Unlock the underserved Hispanic market.',
  },
  {
    icon: Brain,
    title: 'AI Lead Qualification',
    description: 'Every lead is pre-vetted through our AI system against your criteria: injury severity, liability, insurance coverage, and statute of limitations.',
  },
  {
    icon: Target,
    title: 'Territory Protection',
    description: 'We work with only one firm per market for each practice area. Once onboarded, your territory is exclusively yours.',
  },
];

export default function ExclusiveLeadsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">EXCLUSIVE PI LEAD GENERATION</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Exclusive Personal Injury Leads That Become <em className="text-brand-gold not-italic">Signed Cases</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            We generate pre-qualified leads across every PI case type: MVA, slip &amp; fall, medical malpractice, and wrongful death. Every lead is 100% exclusive to your firm, territory-protected, and AI-qualified before reaching your intake team, in both English and Spanish.
          </p>
          <HireUsButton payload={{ sourceSurface: 'motor-vehicle-accident-leads' }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Get Exclusive PI Leads <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      {/* Case Types */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              Leads Across <em className="not-italic text-brand-gold">Every PI Case Type</em>
            </h2>
            <p className="text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              MVA is our flagship, and we&apos;re expanding that same proven system across all personal injury case types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CASE_TYPES.map((ct) => (
              <div
                key={ct.title}
                className={`rounded-2xl p-7 ${
                  ct.flagship
                    ? 'bg-brand-gold text-neutral-900'
                    : 'bg-white border border-neutral-200'
                }`}
              >
                {ct.flagship && (
                  <span className="inline-block text-xs font-bold tracking-wider mb-3 opacity-80">⭐ FLAGSHIP</span>
                )}
                <h3 className="font-display text-xl font-bold mb-2">{ct.title}</h3>
                <p className={`text-sm leading-relaxed ${ct.flagship ? 'text-neutral-800' : 'text-neutral-600'}`}>
                  {ct.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              {[
                { step: '01', title: 'We Build Your Campaign', desc: 'Case-type-specific targeting, compliance-aware creative, and bilingual ad copy tailored to your territory.' },
                { step: '02', title: 'AI Qualifies Every Lead', desc: 'Our AI system pre-vets each lead against your criteria: injury type, severity, liability, and insurance.' },
                { step: '03', title: 'Your Intake Team Signs Cases', desc: 'Pre-qualified leads are delivered directly to your CRM. Your attorneys talk to prospects ready to sign.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="font-display text-3xl font-bold text-brand-gold/30">{item.step}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-72 h-[560px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-neutral-100 rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl" />
                  <div className="pt-12 px-5">
                    <div className="text-xs text-neutral-500 mb-3">Today, 2:47 PM</div>
                    {[
                      { time: 'now', name: 'Maria S.', detail: 'Car accident, LA County. Pre-qualified. Tap to call.' },
                      { time: '3 min ago', name: 'James T.', detail: 'Slip & fall, Orange County. Pre-qualified.' },
                      { time: '12 min ago', name: 'Carlos R.', detail: 'Medical malpractice, San Diego.', muted: true },
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
                        <p className="text-sm font-semibold text-neutral-900">New PI Lead</p>
                        <p className="text-xs text-neutral-600 mt-1">{notif.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 right-4 bg-brand-gold text-neutral-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-xl rotate-3">
                +3 leads today
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              Why Law Firms Choose Our <em className="not-italic text-brand-gold">Lead Generation</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-2xl bg-white border border-neutral-200 p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream">
                  <d.icon className="h-6 w-6 text-brand-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{d.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A24A 0%, transparent 50%), radial-gradient(circle at 70% 50%, #C5A24A 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
            Ready for Exclusive PI Leads <em className="not-italic text-brand-gold">in Your Territory?</em>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            We work with one firm per market. Once your territory is locked, no competitor gets the leads we generate for you. Book a call to check availability in your area.
          </p>
          <HireUsButton payload={{ sourceSurface: 'motor-vehicle-accident-leads' }} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
            Check Territory Availability <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
