import type { Metadata } from 'next';
import { ArrowRight, Bot, Brain, Clock, LineChart } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'AI Automation for Personal Injury Law Firms',
  description: 'AI-powered lead qualification, intake automation, and reporting that saves your PI law firm hours every week.',
  alternates: { canonical: '/services/ai-automation' },
};

const FEATURES = [
  { icon: Brain, title: 'AI Lead Qualification', desc: 'Every lead is pre-vetted through our AI system against your criteria: injury severity, liability, insurance coverage, and statute of limitations.' },
  { icon: Bot, title: 'Intake Automation', desc: 'Automated follow-ups, appointment scheduling, and CRM handoffs that ensure no lead falls through the cracks.' },
  { icon: LineChart, title: 'Intelligent Reporting', desc: 'AI-generated weekly reports that show lead volume, qualification rates, signed cases, and ROI, not vanity metrics.' },
  { icon: Clock, title: 'Time Savings', desc: 'Your intake team spends time signing clients, not chasing unqualified leads or compiling reports.' },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">AI AUTOMATION</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            AI That Qualifies Leads <em className="text-brand-gold not-italic">Before Intake</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Stop wasting your intake team&apos;s time on unqualified leads. Our AI systems pre-vet every prospect, automate follow-ups, and deliver ready-to-sign clients directly to your CRM.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            See AI in Action <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
              How AI Powers <em className="not-italic text-brand-gold">Your Growth</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white border border-neutral-200 p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream">
                  <f.icon className="h-6 w-6 text-brand-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A24A 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
            Ready to Automate Your <em className="not-italic text-brand-gold">Lead Pipeline?</em>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a call to see how our AI systems can save your intake team hours every week while increasing your case conversion rate.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-2xl">
            Book a Consultation Call <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
