const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

const llmsContent = `# Great Marketing AI

> Full-service marketing agency built for personal injury law firms. We generate exclusive, AI-qualified leads across every PI case type in English and Spanish.

We work exclusively with personal injury law firms. Our services span paid advertising, SEO, web design, CRO, email marketing, and AI automation. Our flagship offering is exclusive, territory-protected PI lead generation across MVA, slip & fall, medical malpractice, and wrongful death.

## Core Services

- [PI Lead Generation](${siteUrl}/services/motor-vehicle-accident-leads): Exclusive, territory-protected leads across every PI case type
- [Facebook & Google Ads](${siteUrl}/services/facebook-advertising-agency): Performance-driven paid campaigns for PI law firms
- [SEO](${siteUrl}/services/seo-agency-los-angeles): Local and national SEO for personal injury practices
- [Web Design](${siteUrl}/services/web-design-los-angeles): High-converting law firm websites
- [AI Automation](${siteUrl}/services/ai-automation): AI-powered lead qualification and intake automation

## Case Studies

- [NP Digital](${siteUrl}/proven-results/np-digital): 800% growth, 81% cost reduction in Meta Ads
- [Albert Preciado](${siteUrl}/proven-results/albert-preciado): $373k revenue, 289% ROAS
- [Complex Steel Buildings](${siteUrl}/proven-results/complex-steel-buildings): 1,956% ROI through AI strategy
- [10X Business Coach](${siteUrl}/proven-results/nestor-gutierrez): 11x ROAS launch strategy
- [KCB Plumbing](${siteUrl}/proven-results/kcb): SEO and conversion makeover

## Resources

- [Marketing Blog](${siteUrl}/blog)
- [Great Marketing Podcast](https://open.spotify.com/show/7Gt2r3bACeUByRi8sNLl75)
- [YouTube Channel](https://www.youtube.com/@GreatMarketingAI)

## Company

- [About Us](${siteUrl}/about)
- [Careers](${siteUrl}/career)
- Contact: (562) 592-8281

## Key Differentiators

- Full-service marketing for personal injury law firms
- Exclusive PI leads across MVA, slip & fall, med mal, wrongful death
- Native English + Spanish campaigns (not Google Translate)
- AI-powered lead qualification before intake
- Territory-protected — one firm per market
- Reports on signed cases and ROI, not vanity metrics
`;

export async function GET() {
  return new Response(llmsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
