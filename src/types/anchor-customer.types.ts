export interface AnchorCustomerResult {
  value: string;
  label: string;
}

export interface AnchorCustomerMetric {
  value?: string;
  description?: string;
  label?: string;
}

export interface AnchorCustomer {
  id?: number | string;
  // Backend API fields
  organization_name?: string;
  representative_name?: string;
  challenges?: string;
  solutions?: string;
  quotes?: string;
  metrics?: AnchorCustomerMetric[] | string;
  order?: number;

  // Fallback aliases
  company?: string;
  company_name?: string;
  founder?: string;
  founder_name?: string;
  founder_title?: string;
  challenge?: string;
  solution?: string;
  results?: AnchorCustomerResult[] | string;
  quote?: string;
  testimonial?: string;
  is_deleted?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Customer {
  company: string;
  founder: string;
  challenge: string;
  solution: string;
  results: AnchorCustomerResult[];
  quote: string;
}
