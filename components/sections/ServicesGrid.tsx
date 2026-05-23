import { ArrowRight, BarChart3, Globe, Layout, Mail, Megaphone, Sparkles } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    icon: Megaphone,
    title: 'Facebook & Google Ads',
    description: 'Performance-driven paid campaigns on Meta and Google that generate qualified leads, not vanity metrics.',
    href: '/services/facebook-advertising-agency',
  },
  {
    icon: Globe,
    title: 'SEO',
    description: 'Rank for the keywords injured prospects actually search. Local SEO, content strategy, and technical optimization.',
    href: '/services/seo-agency-los-angeles',
  },
  {
    icon: Layout,
    title: 'Web Design & Development',
    description: 'High-converting websites built for personal injury firms. Fast, mobile-first, and designed to turn visitors into leads.',
    href: '/services/web-design-los-angeles',
  },
  {
    icon: BarChart3,
    title: 'CRO & Conversion Optimization',
    description: 'A/B testing, landing page optimization, and funnel analysis to squeeze more signed cases from the same traffic.',
    href: '/services/motor-vehicle-accident-leads',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture sequences, re-engagement campaigns, and automated follow-ups that keep your firm top of mind.',
    href: '/services/email-marketing',
  },
  {
    icon: Sparkles,
    title: 'AI Automation',
    description: 'AI-powered lead qualification, intake automation, and reporting that saves your team hours every week.',
    href: '/services/ai-automation',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">WHAT WE DO</span>
          <h2 className="font-display text-4xl lg:text-5xl max-w-3xl mx-auto mb-6 leading-tight">
            Full-Service Marketing for <em className="not-italic text-brand-gold">Personal Injury Law Firms</em>
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            From paid ads to SEO to web design, we handle every channel your firm needs to grow. Each service is built specifically for personal injury practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 transition hover:shadow-xl hover:border-brand-gold/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream">
                <service.icon className="h-6 w-6 text-brand-gold-dark" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-neutral-900">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-dark transition group-hover:gap-2">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
