import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

export const metadata: Metadata = {
  title: 'About Great Marketing AI',
  description: 'Learn about Great Marketing AI, our mission to help personal injury law firms grow with AI-driven marketing, and the team behind our success.',
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    title: 'Go the Extra Mile',
    desc: 'We anticipate client needs, deliver proactive solutions, and make every interaction memorable. We create raving fans by providing white-glove service at every touchpoint.',
  },
  {
    title: 'Results Over Excuses',
    desc: 'A results-driven mindset ensures we take ownership, stay proactive, and deliver value at every step. Our clients trust us to problem-solve, adapt, and execute with a relentless focus on success.',
  },
  {
    title: 'Execute with Speed',
    desc: 'Time is a competitive advantage. We optimize every process to deliver rapid, high-quality results, keeping our clients ahead of the curve and maximizing impact.',
  },
  {
    title: 'Always Do the Right Thing',
    desc: 'Integrity is non-negotiable. We operate with transparency, honesty, and accountability, always putting our clients\' best interests first.',
  },
  {
    title: 'Track and Improve',
    desc: 'Understanding our numbers ensures we make informed choices, measure success accurately, and refine strategies for maximum ROI. Constant learning keeps us at the top of our game.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-6">ABOUT US</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-neutral-900 mb-8">
            Driven by Results,{' '}
            <em className="text-brand-gold not-italic">Powered by Passion</em>
          </h1>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            At Great Marketing AI, we bring energy, creativity, and a personalized approach to everything we do.
            Our goal is to connect you with your audience through innovative marketing, impactful advertising, and
            smart automation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">OUR STORY</span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8 leading-tight">
            Pioneering the Digital Frontier with{' '}
            <em className="not-italic text-brand-gold">AI and Drive</em>
          </h2>
          <div className="space-y-5 text-neutral-700 leading-relaxed">
            <p>
              Great Marketing AI was founded to revolutionize the way businesses grow with paid advertising, web design,
              and conversion-focused marketing. We believe great marketing isn&apos;t just about running ads; it&apos;s
              about optimizing offers, creative, and strategy to drive real business results.
            </p>
            <p>
              For years, our team has helped brands scale profitably by blending data-driven decision-making with
              creative excellence. From crafting high-converting ad campaigns to building stunning websites that turn
              visitors into customers, Great Marketing AI is the partner brands trust to grow smarter, faster, and
              more profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">WHY WE STARTED</span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8 leading-tight">
            Word From <em className="not-italic text-brand-gold">the Founder</em>
          </h2>
          <div className="rounded-2xl border border-neutral-200 bg-brand-cream/50 p-8 lg:p-12 space-y-5 text-neutral-700 leading-relaxed">
            <p>
              I started Great Marketing AI with nothing more than a laptop, a relentless vision, and one belief:
            </p>
            <blockquote className="border-l-4 border-brand-gold pl-6 py-2 text-lg font-display font-semibold text-neutral-900">
              When you combine world-class marketing with AI-powered systems and a team of A-players, the results
              are unstoppable.
            </blockquote>
            <p>
              Great Marketing AI was founded by me, Rafael, and my wife, Natalie. We&apos;re both proud UC Berkeley
              grads. I studied Computer Science and Natalie studied Entrepreneurship and Law.
            </p>
            <p>
              Before launching this company, I spent 4 years at Microsoft, leading high-impact projects and optimizing
              systems at scale. That experience shaped how I think about growth, infrastructure, and impact, and
              it&apos;s deeply embedded in our culture.
            </p>
            <p>
              On a personal note: I&apos;m the son of Mexican immigrants. I bring that same grit, hustle, and gratitude
              for opportunity into everything we do. We built this company with a bias for speed, ownership, and high
              standards, and it shows in our results.
            </p>
            <p className="font-display font-semibold text-neutral-900">
              Here&apos;s to building something great.<br />
              <span className="text-brand-gold">Rafael Hernandez</span><br />
              <span className="text-sm font-normal text-neutral-500">CEO, Great Marketing AI</span>
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-brand-gold mb-4">OUR CORE VALUES</span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight">
              The Foundation of{' '}
              <em className="not-italic text-brand-gold">Everything We Do</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-neutral-200 p-7">
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A24A 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight mb-6">
            Ready to Scale Your Law Firm{' '}
            <em className="not-italic text-brand-gold">to New Heights?</em>
          </h2>
          <p className="text-neutral-300 text-base lg:text-lg mb-10 max-w-2xl mx-auto">
            If you want to achieve ground-breaking growth with increased sales and profitability with paid ads,
            you&apos;re in the right place.
          </p>
          <HireUsButton payload={{ sourceSurface: 'about' }} className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-base transition shadow-lg">
            Get Started Today <ArrowRight size={16} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
