// Centralized JSON-LD schema definitions for SEO
// Reference: https://schema.org

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Great Marketing AI',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Personal injury marketing agency delivering exclusive, AI-qualified motor vehicle accident leads to law firms nationwide.',
  telephone: '+1-562-592-8281',
  email: 'hello@greatmarketing.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.youtube.com/@GreatMarketingAI',
    'https://www.instagram.com/greatmarketing.ai/',
    'https://www.facebook.com/profile.php?id=61567697654548',
    'https://www.linkedin.com/company/greatmarketingai/',
    'https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75',
  ],
  founder: {
    '@type': 'Person',
    name: 'Rafael Hernandez',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Great Marketing AI',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbHomeSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a marketing agency for law firms, and do I need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A marketing agency for law firms specializes in generating exclusive, qualified case leads for personal injury attorneys. Unlike general agencies, we understand the unique compliance, client acquisition cost, and conversion challenges specific to law firms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Great Marketing AI different from other agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are exclusively focused on personal injury law firms, delivering 100% exclusive leads (never shared), AI-powered lead qualification, native English and Spanish campaigns, and reporting on signed cases and ROI — not just clicks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with small law firms, or only large multi-location practices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with personal injury law firms of every size, from solo practices to multi-location operations. Our systems scale based on your firm capacity and growth goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you approach digital marketing for personal injury lawyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We combine AI with proven legal marketing expertise. Every campaign uses performance frameworks proven at enterprise level, adapted specifically for how personal injury firms acquire clients and sign cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your leads really exclusive to my firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — 100% exclusive and territory-protected. Once your firm is in a market, we never sell those leads to another firm in the same area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Great Marketing AI offer guarantees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We back our work with performance guarantees tied to lead quality and quantity benchmarks. Specifics depend on your market and growth goals — we will walk through these on your consultation call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Spanish-language marketing for law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Native Spanish-language campaigns are a core specialty. We do not rely on Google Translate — our team creates culturally appropriate, conversion-focused Spanish content for the Hispanic market.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of motor vehicle accident cases do you generate leads for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We generate leads for car accidents, truck accidents, motorcycle accidents, rideshare incidents (Uber/Lyft), pedestrian accidents, and other motor vehicle accident cases. All are pre-qualified before reaching your intake team.',
      },
    },
  ],
};
