import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { OmniChannel } from '@/components/sections/OmniChannel';
import { Comparison } from '@/components/sections/Comparison';
import { VideoContent } from '@/components/sections/VideoContent';
import { Careers } from '@/components/sections/Careers';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { faqSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <OmniChannel />
      <Comparison />
<VideoContent />
      {/* <Podcast /> */}
      {/* <Careers /> */}
      <FAQ />
      <FinalCTA />
    </>
  );
}
