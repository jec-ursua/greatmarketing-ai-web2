import { ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export function BlogServicesPromo() {
  return (
    <div className="bg-brand-dark text-white rounded-2xl p-8 my-12">
      <h3 className="font-display text-3xl font-bold mb-4">Turn Ad Spend Into Signed Cases</h3>
      <p className="text-neutral-300 leading-relaxed mb-6">
        We blend AI-driven testing with proven performance strategy to attract qualified traffic and turn it into revenue—fast, trackable, and scalable.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          ['PI Lead Generation', 'exclusive, AI-qualified leads across MVA, slip & fall, med mal, and more.'],
          ['Facebook & Instagram Ads', 'reach customers where they scroll.'],
          ['Google Ads', 'capture people actively searching for you.'],
          ['Website Design', 'turn visitors into buyers with high-converting sites.'],
          ['AI Automations', 'save hours and never miss a follow-up.'],
          ['Email Marketing', 'nurture leads and close sales on autopilot.'],
          ['SEO', 'get found by customers searching for what you sell.'],
        ].map(([title, desc]) => (
          <li key={title} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
            <span className="text-sm text-neutral-200">
              <strong className="text-white">{title}</strong> — {desc}
            </span>
          </li>
        ))}
      </ul>
      <HireUsButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold transition shadow">
        Get Exclusive PI Leads <ArrowRight size={16} />
      </HireUsButton>
    </div>
  );
}
