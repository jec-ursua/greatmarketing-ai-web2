const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Great Marketing AI',
  url: siteUrl,
  logo: 'https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png',
  description: 'Personal injury marketing agency delivering exclusive, AI-qualified motor vehicle accident leads to law firms nationwide.',
  telephone: '+1-562-592-8281',
  email: 'hello@greatmarketing.ai',
  address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
  sameAs: [
    'https://www.youtube.com/@GreatMarketingAI',
    'https://www.instagram.com/greatmarketing.ai/',
    'https://www.facebook.com/profile.php?id=61567697654548',
    'https://www.linkedin.com/company/greatmarketingai/',
    'https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75',
  ],
  founder: { '@type': 'Person', name: 'Rafael Hernandez' },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Great Marketing AI',
  url: siteUrl,
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a marketing agency for law firms, and do I need one?',
      acceptedAnswer: { '@type': 'Answer', text: 'A marketing agency for law firms is a specialized partner that helps attorneys generate signed cases through digital marketing, including lead generation, paid ads, SEO, and intake automation. Unlike general agencies that treat law firms like any other vertical, a dedicated law firm marketing agency understands the unique dynamics of legal marketing: strict compliance requirements, high-value case acquisition, competitive local markets, and the specific buyer psychology of injured clients. For most personal injury law firms, working with a specialized marketing agency for law firms outperforms handling marketing in-house or using general agencies. You get industry-specific expertise, proven frameworks for case acquisition, and measurable ROI tied to signed cases, not vanity metrics.' },
    },
    {
      '@type': 'Question',
      name: 'What makes Great Marketing AI different from other agencies?',
      acceptedAnswer: { '@type': 'Answer', text: 'We have built our agency exclusively around motor vehicle accident lead generation for personal injury law firms. While most marketing agencies serve dozens of industries, we focus only on what works for MVA practices: exclusive lead generation, AI-powered qualification, performance advertising, and bilingual market expansion across English and Spanish-speaking audiences. Our team\'s background running enterprise campaigns for top digital marketing agencies including NP Digital gives us the performance marketing foundation that most legal-focused agencies simply do not have. The result: law firms get both deep industry specialization and agency-grade execution in a single partner.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with small law firms, or only large multi-location practices?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We proudly serve as a small law firm marketing agency for solo practitioners, boutique personal injury firms, and growing multi-location practices. In fact, small law firms often see the highest ROI from our systems because they benefit most from AI automation, exclusive lead generation, and performance-driven marketing that scales with their capacity. Our engagement model is designed to match your firm\'s size: solo practices get right-sized campaigns with affordable monthly commitments, mid-size firms get scaled MVA lead generation, and larger firms get multi-market expansion strategies. Whether you are a one-attorney practice handling local MVA cases or a 20-attorney firm expanding into new territories, our performance frameworks work at every scale.' },
    },
    {
      '@type': 'Question',
      name: 'How do you approach digital marketing for personal injury lawyers?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our approach to digital marketing for personal injury lawyers is built around one goal: delivering signed MVA cases, not vanity metrics. Rather than working with multiple vendors for each channel, we operate as a single strategic partner managing every digital touchpoint, from ad impressions reaching injured prospects, to landing pages that capture their information, to AI systems that qualify them, to CRM handoffs that prepare your intake team for conversion. Every campaign we run is rooted in performance marketing frameworks proven at enterprise scale, then adapted for how personal injury firms actually win clients. That means case-type-specific targeting, compliance-aware creative, bilingual campaign capability, and measurable ROI tied to signed cases.' },
    },
    {
      '@type': 'Question',
      name: 'Are your leads really exclusive to my firm?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Unlike lead aggregators that sell the same prospect to multiple firms, every lead we generate is 100% exclusive to one law firm per territory. When you partner with us, no other firm in your service area receives the leads we generate for you. No bidding wars, no race-to-the-phone scenarios, no shared prospects. This exclusivity comes with territory protection: we work with only one firm per market for each practice area. Once you are onboarded, your territory is locked to competitors. This allows us to build long-term growth systems without diluting lead quality or creating conflicts of interest between clients.' },
    },
    {
      '@type': 'Question',
      name: 'Does Great Marketing AI offer guarantees?',
      acceptedAnswer: { '@type': 'Answer', text: 'While no marketing agency can guarantee specific case volume or court outcomes, we focus on high-performance execution and exclusive territory rights that maximize your probability of success. Every MVA lead we deliver is pre-vetted through our AI qualification system, giving your intake team the highest probability of converting leads into signed retainers. We also back our work with performance-based reporting. You will receive weekly updates on lead volume, qualification rates, and signed cases, so you can see exactly how your investment is performing at every stage.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Spanish-language marketing for law firms?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bilingual and Hispanic market marketing is one of our signature capabilities. While most agencies either ignore Spanish-speaking clients entirely or rely on Google Translate for ad copy, we build native Spanish campaigns with culturally-accurate messaging and dedicated Spanish-speaking intake support. This matters because Hispanic communities are dramatically underserved in the personal injury legal market. Many injured Spanish-speaking prospects struggle to find attorneys who communicate effectively in their language, creating a massive opportunity for law firms willing to serve this market authentically. Our bilingual campaigns have helped personal injury firms unlock new case volume from Spanish-speaking clients, often making Hispanic leads their highest-ROI segment.' },
    },
    {
      '@type': 'Question',
      name: 'What types of motor vehicle accident cases do you generate leads for?',
      acceptedAnswer: { '@type': 'Answer', text: 'We generate exclusive leads across every major type of motor vehicle accident case, including auto accidents, truck accidents, motorcycle accidents, rideshare accidents (Uber and Lyft), commercial vehicle collisions, and drunk driving incidents. Each campaign is targeted specifically to the case types most valuable to your firm. Our AI-powered qualification system pre-vets every lead against your firm\'s specific criteria, such as accident fault, injury severity, insurance coverage, and statute of limitations. This means your intake team only speaks with prospects who match the MVA cases your firm actually wants to sign, saving time and increasing your case conversion rate.' },
    },
  ],
};
