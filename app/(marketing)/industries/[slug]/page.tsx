import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

const INDUSTRIES: Record<string, { title: string; headline: string; description: string }> = {
  'personal-injury': {
    title: 'Marketing for Personal Injury Law Firms',
    headline: 'The Marketing Agency Built for Personal Injury Law Firms',
    description: 'We generate exclusive, AI-qualified leads across MVA, slip & fall, medical malpractice, and wrongful death. Territory-protected, bilingual, and built to deliver signed cases.',
  },
  'family-law': {
    title: 'Marketing for Family Law Firms',
    headline: 'Marketing That Brings Family Law Cases to Your Firm',
    description: 'Divorce, custody, adoption, and prenuptial cases. We help family law firms reach the right clients at the right time with targeted paid media and SEO.',
  },
  'criminal-defense': {
    title: 'Marketing for Criminal Defense Attorneys',
    headline: 'Marketing That Fills Your Criminal Defense Pipeline',
    description: 'DUI, drug charges, assault, and white-collar defense. We help criminal defense firms generate qualified leads from people who need representation now.',
  },
  'immigration': {
    title: 'Marketing for Immigration Law Firms',
    headline: 'Marketing That Connects Immigration Attorneys With Clients',
    description: 'Visa applications, green cards, deportation defense, and asylum. We help immigration firms reach clients in English and Spanish with culturally relevant campaigns.',
  },
};

const VALID_SLUGS = Object.keys(INDUSTRIES);

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">WHO WE HELP</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            {industry.headline.split(' ').slice(0, -1).join(' ')}{' '}
            <em className="text-brand-gold not-italic">{industry.headline.split(' ').slice(-1)}</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-10">
            {industry.description}
          </p>
          <HireUsButton payload={{ sourceSurface: `industry-${slug}` }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Book a Consultation Call <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
