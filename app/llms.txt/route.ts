const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

const llmsContent = `# Great Marketing AI

> Personal injury marketing agency delivering exclusive, AI-qualified motor vehicle accident leads to law firms across English and Spanish-speaking markets.

We work exclusively with personal injury law firms. Our flagship service is 100% exclusive, territory-protected MVA lead generation, combining enterprise-level performance marketing with AI-powered lead qualification.

## Core Services

- [Motor Vehicle Accident Leads](${siteUrl}/services/motor-vehicle-accident-leads): Exclusive, pre-qualified MVA leads
- [Facebook Advertising](${siteUrl}/services/facebook-advertising-agency): Meta Ads campaigns for law firms
- [SEO Services](${siteUrl}/services/seo-agency-los-angeles): Local and national SEO
- [Web Design](${siteUrl}/services/web-design-los-angeles): High-converting law firm websites
- [Email Marketing](${siteUrl}/services/email-marketing): Intake nurture automation
- [AI Automation](${siteUrl}/services/ai-automation): AI-powered lead qualification

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

- 100% exclusive leads — never shared between firms
- Native English + Spanish campaigns (not Google Translate)
- AI-powered lead qualification before intake
- Reports on signed cases and ROI, not vanity metrics
- Built on enterprise frameworks from NP Digital and Driven Academy
`;

export async function GET() {
  return new Response(llmsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
