import type { Metadata } from 'next';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers at Great Marketing AI',
  description: 'Join the Great Marketing AI team. Browse open positions in marketing, design, sales, and more.',
  alternates: { canonical: '/career' },
};

const POSITIONS = [
  { title: 'Appointment Setter', type: 'Full-Time', experience: '1+ years', href: 'https://greatmarketingai.typeform.com/to/appointment-setter' },
  { title: 'Web Designer', type: 'Full-Time', experience: '2+ years', href: 'https://greatmarketingai.typeform.com/to/web-designer' },
  { title: 'Sales Representative', type: 'Full-Time', experience: '2+ years', href: 'https://greatmarketingai.typeform.com/to/sales-rep' },
  { title: 'Video Editor', type: 'Full-Time', experience: '2+ years', href: 'https://greatmarketingai.typeform.com/to/video-editor' },
  { title: 'Facebook Ads Expert', type: 'Full-Time', experience: '3-5 years', href: 'https://greatmarketingai.typeform.com/to/fb-ads' },
  { title: 'General Virtual Assistant', type: 'Full-Time', experience: '1-3 years', href: 'https://greatmarketingai.typeform.com/to/va' },
  { title: 'Bookkeeper', type: 'Full-Time', experience: '2-4 years', href: 'https://greatmarketingai.typeform.com/to/bookkeeper' },
  { title: 'Social Media Strategist', type: 'Full-Time', experience: '1-3 years', href: 'https://greatmarketingai.typeform.com/to/social-media' },
  { title: 'SEO Specialist', type: 'Full-Time', experience: '1-3 years', href: 'https://greatmarketingai.typeform.com/to/seo' },
  { title: 'Email Marketer', type: 'Contractor', experience: '2+ years', href: 'https://greatmarketingai.typeform.com/to/email-marketer' },
  { title: 'Google Ads Expert', type: 'Contractor', experience: '3-5 years', href: 'https://greatmarketingai.typeform.com/to/google-ads' },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">CAREERS</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Join Our Team and{' '}
            <em className="text-brand-gold not-italic">Make an Impact</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re looking for passionate, creative individuals ready to make a difference. At Great Marketing AI,
            you&apos;ll find a workplace built on innovation, collaboration, and growth.
          </p>
        </div>
      </section>

      {/* Positions */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight">
              Open <em className="not-italic text-brand-gold">Positions</em>
            </h2>
          </div>
          <div className="space-y-4">
            {POSITIONS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-white border border-neutral-200 p-6 hover:border-brand-gold transition"
              >
                <div>
                  <h3 className="font-display text-lg font-bold group-hover:text-brand-gold-dark transition">{p.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-neutral-500">
                    <span className="inline-flex items-center gap-1"><MapPin size={14} /> Remote</span>
                    <span className="inline-flex items-center gap-1"><Briefcase size={14} /> {p.type}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={14} /> {p.experience}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-dark shrink-0">
                  Apply <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A24A 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight mb-6">
            Don&apos;t See Your Role?{' '}
            <em className="not-italic text-brand-gold">Reach Out Anyway.</em>
          </h2>
          <p className="text-neutral-300 text-base lg:text-lg mb-10 max-w-2xl mx-auto">
            We&apos;re always looking for talented people. Send your resume
            to <a href="mailto:marketing@greatmarketing.ai" className="text-brand-gold hover:underline">marketing@greatmarketing.ai</a>.
          </p>
        </div>
      </section>
    </>
  );
}
