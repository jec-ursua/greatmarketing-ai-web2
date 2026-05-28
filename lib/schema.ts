const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Great Marketing AI',
  url: siteUrl,
  logo: 'https://framerusercontent.com/images/sOFEBMxoODMKIr5nwBOlIiZ8.png',
  description: 'Full-service digital marketing agency built exclusively for personal injury law firms. Facebook Ads, Google Ads, SEO, web design, and AI automation — all optimized for signed cases.',
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
      name: 'What makes Great Marketing AI different from other agencies?',
      acceptedAnswer: { '@type': 'Answer', text: 'We built our agency exclusively for personal injury law firms. Most agencies serve dozens of industries — we focus only on what works for PI practices: Facebook Ads, Google Ads, SEO, bilingual campaigns, and AI-powered systems tied to signed cases, not vanity metrics. Our team\'s background running enterprise campaigns for top agencies including NP Digital gives us the performance marketing foundation that most legal-focused agencies simply don\'t have.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with small law firms, or only large multi-location practices?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both. Solo practitioners and boutique PI firms often see the highest ROI because they benefit most from AI automation and performance-driven marketing that scales with their capacity. Whether you are a one-attorney practice or a 20-attorney firm expanding into new territories, our frameworks work at every scale.' },
    },
    {
      '@type': 'Question',
      name: 'How do you approach digital marketing for personal injury lawyers?',
      acceptedAnswer: { '@type': 'Answer', text: 'We operate as a single strategic partner managing every digital touchpoint: paid ads, SEO, landing pages, and intake automation. Every campaign is rooted in performance frameworks proven at enterprise scale, then adapted for PI. That means case-type-specific targeting, compliance-aware creative, bilingual capability, and ROI tied to signed cases.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Spanish-language marketing for law firms?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — bilingual marketing is one of our signature capabilities. While most agencies rely on Google Translate, we build native Spanish campaigns with culturally accurate messaging. Hispanic communities are underserved in the PI legal market, and our bilingual campaigns have helped firms unlock significant new case volume from Spanish-speaking clients.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can we get started?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are up and running within 2 weeks of signing. We start with a strategy session to map your target case types, markets, and intake process, then launch campaigns as soon as creative and tracking are approved. You receive weekly performance reports from day one.' },
    },
  ],
};
