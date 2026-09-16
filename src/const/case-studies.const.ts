export type CaseStudyResult = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  founder: string;
  challenge: string;
  solution: string;
  approach: string;
  results: CaseStudyResult[];
  quote: string;
  servicesUsed: string[];
  publishedAt: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shree-sales-commission-clarity',
    company: 'Shree Sales Corporation',
    industry: 'Distribution & Field Sales',
    founder: 'Sanjay Dighe, Founder',
    challenge:
      'Manual commission tracking caused constant disputes and eroded field-team trust across multiple territories.',
    solution:
      'Business OPD™ diagnostic followed by Incentiwise rollout with clear formulas and weekly visibility.',
    approach:
      'We mapped every payout rule, exception, and territory split with leadership and top reps. Then we replaced spreadsheet reconciliation with a live incentive view — so each rep could see progress without waiting for month-end arguments. Managers shifted from mediating disputes to coaching performance.',
    results: [
      { value: '30%', label: 'Fewer commission disputes' },
      { value: '40%', label: 'Revenue growth in 12 months' },
      { value: '100%', label: 'Field rep adoption' },
    ],
    quote:
      "NBBS didn't just sell us a tool. They fixed how we think about our sales team first.",
    servicesUsed: ['Business OPD™', 'Incentiwise'],
    publishedAt: '2026-05-14',
    featured: true,
  },
  {
    slug: 'wintrade-decor-quotation-system',
    company: 'Wintrade Decor',
    industry: 'Interiors & Décor',
    founder: 'Sumit Gandhi, Director',
    challenge:
      'Inconsistent quotes via WhatsApp caused pricing leaks, slow close cycles, and a less professional customer experience.',
    solution:
      'Standardized quotation templates, approval thresholds, and a single workflow via Quotation.',
    approach:
      'We audited a month of sent proposals, found margin variance patterns, and locked approved price bands. Sales moved from chat-based quotes to templated proposals with clear terms. Approvals for exceptions stayed with leadership — without blocking every deal.',
    results: [
      { value: '50%', label: 'Faster quote turnaround' },
      { value: '18%', label: 'Higher average ticket' },
      { value: '2x', label: 'Conversion on pitches' },
    ],
    quote:
      'We look like a multinational firm now, even though we operate from a tier-2 city.',
    servicesUsed: ['Business OPD™', 'Quotation'],
    publishedAt: '2026-04-22',
    featured: true,
  },
  {
    slug: 'nashik-packaging-cashflow-rhythm',
    company: 'Horizon Packaging',
    industry: 'Manufacturing & Packaging',
    founder: 'Priya Deshmukh, Managing Director',
    challenge:
      'Profitable on paper but recurring liquidity crunches — receivables slipped while vendor commitments stayed rigid.',
    solution:
      'Installed a weekly cash cadence and NBBS Cashflow for a rolling four-week view shared with leadership.',
    approach:
      'We separated P&L storytelling from cash reality. Monday receivables calls, mid-week payables matching, Friday runway review. The tool made the habit visible; the habit made the tool useful. Leadership finally shared one number: days of runway.',
    results: [
      { value: '21', label: 'Days of extra runway' },
      { value: '40%', label: 'Faster overdue recovery' },
      { value: '0', label: 'Emergency borrowing events (6 mo)' },
    ],
    quote:
      'We stopped finding out about cash problems on the day payroll was due.',
    servicesUsed: ['Business OPD™', 'Cashflow'],
    publishedAt: '2026-03-30',
  },
  {
    slug: 'agro-traders-crm-adoption',
    company: 'Greenfield Agro Traders',
    industry: 'Agri Trading',
    founder: 'Amit Patil, Partner',
    challenge:
      'Pipeline lived in notebooks and WhatsApp. Nobody could forecast the quarter or see who owned follow-ups.',
    solution:
      'Defined a simple sales motion, then rolled out NBBS CRM fitted to their stages — not a generic enterprise template.',
    approach:
      'Before software, we wrote stage definitions with the partners and two senior traders. Weekly pipeline review became non-negotiable. CRM tracked only what the review needed. Adoption followed usefulness — not training slides.',
    results: [
      { value: '3x', label: 'Pipeline visibility' },
      { value: '25%', label: 'Fewer lost follow-ups' },
      { value: '8', label: 'Weeks to full team adoption' },
    ],
    quote:
      'Finally we argue about deals — not about whose notebook had the latest number.',
    servicesUsed: ['Business OPD™', 'NBBS CRM', 'BCW Workshop'],
    publishedAt: '2026-02-18',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
