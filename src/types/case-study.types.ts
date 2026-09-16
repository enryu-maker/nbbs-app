export interface ApiCaseStudyKpi {
  value?: string;
  description?: string;
  label?: string;
}

export interface ApiCaseStudy {
  id: number;
  tag?: string;
  business_name?: string;
  business_owner?: string;
  kpis?: ApiCaseStudyKpi[] | string | null;
  /** HTML from the CMS editor. */
  challenges?: string;
  solution?: string;
  approach?: string;
  quote?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  company: string;
  industry: string;
  founder: string;
  /** Plain-text, for cards, meta descriptions and schema. */
  challenge: string;
  solution: string;
  approach: string;
  quote: string;
  /** Original CMS HTML, rendered on the detail page when present. */
  challengeHtml?: string;
  solutionHtml?: string;
  approachHtml?: string;
  results: CaseStudyResult[];
  publishedAt: string;
  isActive: boolean;
}
