import { Hero } from '@/components/sections/Hero';
import { Testimonials } from '@/components/sections/Testimonials';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Comparison } from '@/components/sections/Comparison';
import { MVASection } from '@/components/sections/MVASection';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { VideoContent } from '@/components/sections/VideoContent';
import { Podcast } from '@/components/sections/Podcast';
import { Careers } from '@/components/sections/Careers';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { faqSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Testimonials />
      <LogoMarquee />
      <ServicesGrid />
      <Comparison />
      <MVASection />
      <CaseStudies />
      <VideoContent />
      <Podcast />
      <Careers />
      <FAQ />
      <FinalCTA />
    </>
  );
}
