import type { Metadata } from 'next';
import { HireUsButton } from '@/components/HireUsModal';
import { BlogListClient } from './_components/blog-list-client';
import { getAllBlogs } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Marketing Blog & Growth Strategies | Great Marketing AI',
  description: 'Expert insights on Hispanic marketing, MVA lead generation, and law firm growth. Scale your practice with proven Google & Meta ad strategies.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Legal Marketing Blog & Growth Strategies | Great Marketing AI',
    description: 'Expert insights on Hispanic marketing, MVA lead generation, and law firm growth.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogListPage() {
  const posts = getAllBlogs();

  return (
    <>
      <section className="pt-32 pb-16 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Legal Marketing Blog &amp; Growth Strategies
          </h1>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Expert insights on Hispanic marketing, MVA lead generation, and digital strategies for law firms.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <BlogListClient posts={posts} />
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 leading-tight">
            Ready to scale your law firm to <em className="not-italic text-brand-gold">new heights?</em>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you&apos;re in the right place.
          </p>
          <HireUsButton className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 font-bold text-lg transition shadow-xl">
            Get Exclusive PI Leads <ArrowRight size={18} />
          </HireUsButton>
        </div>
      </section>
    </>
  );
}
