export type CaseStudy = {
  id: string;
  clientName: string;
  clientLogo?: string;
  headline: string;
  body: string;
  fullStudyUrl: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rancho-express-lube',
    clientName: 'Rancho Express Lube',
    headline: 'Nestor Gutierrez: 11× ROAS · Coaching Offer Launched in Days',
    body: 'With only $1,619 in ad spend, Great Marketing AI generated 105 lead-form submissions, 98 high-quality leads, and closed 9 deals for Nestor — delivering $17,768 in revenue and a Cost-Per-Sale of just $179.92. From an unlaunched offer to a predictable revenue system — built using Meta Ads + streamlined follow-up automation.',
    fullStudyUrl: '/case-studies/rancho-express-lube',
  },
];
