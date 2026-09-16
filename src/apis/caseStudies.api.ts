import { apiClient } from './client.api';
import { CASE_STUDIES_ENDPOINT } from '@/src/const';
import { looksLikeHtml, stripHtml } from './html';
import {
  type ApiCaseStudy,
  type ApiCaseStudyKpi,
  type CaseStudy,
  type CaseStudyResult,
  type PaginatedResponse,
} from '@/src/types';

function parseKpis(kpis: ApiCaseStudy['kpis']): CaseStudyResult[] {
  let list: ApiCaseStudyKpi[] = [];

  if (Array.isArray(kpis)) {
    list = kpis;
  } else if (typeof kpis === 'string') {
    // Some CMS rows store the KPI array as a JSON string.
    try {
      const parsed: unknown = JSON.parse(kpis);
      if (Array.isArray(parsed)) list = parsed as ApiCaseStudyKpi[];
    } catch {
      list = [];
    }
  }

  return list
    .map((kpi) => ({
      value: String(kpi?.value ?? '').trim(),
      label: stripHtml(String(kpi?.description ?? kpi?.label ?? '')),
    }))
    .filter((r) => r.value || r.label);
}

function isCaseStudyActive(item: ApiCaseStudy): boolean {
  // Missing is_active means visible; explicit false hides the study.
  return item.is_active !== false;
}

export function normalizeCaseStudy(item: ApiCaseStudy): CaseStudy {
  const html = (value?: string) => {
    const trimmed = (value ?? '').trim();
    return looksLikeHtml(trimmed) ? trimmed : undefined;
  };

  return {
    id: item.id,
    slug: String(item.id),
    company: item.business_name?.trim() || 'Client story',
    industry: item.tag?.trim() || 'MSME',
    founder: item.business_owner?.trim() || '',
    challenge: stripHtml(item.challenges ?? ''),
    solution: stripHtml(item.solution ?? ''),
    approach: stripHtml(item.approach ?? ''),
    quote: stripHtml(item.quote ?? ''),
    challengeHtml: html(item.challenges),
    solutionHtml: html(item.solution),
    approachHtml: html(item.approach),
    results: parseKpis(item.kpis),
    publishedAt: item.created_at?.slice(0, 10) || '',
    isActive: isCaseStudyActive(item),
  };
}

/**
 * Fetch all case studies from the NBBS API.
 */
export async function fetchCaseStudies(): Promise<ApiCaseStudy[]> {
  const data = await apiClient<ApiCaseStudy[] | PaginatedResponse<ApiCaseStudy>>(
    CASE_STUDIES_ENDPOINT,
  );

  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === 'object' && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

/**
 * Active case studies, newest first.
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const raw = await fetchCaseStudies();
    return raw
      .filter(isCaseStudyActive)
      .map(normalizeCaseStudy)
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  } catch {
    return [];
  }
}

/**
 * Single active case study by id. Inactive or missing studies return null.
 */
export async function getCaseStudy(idOrSlug: string): Promise<CaseStudy | null> {
  try {
    const raw = await apiClient<ApiCaseStudy>(`${CASE_STUDIES_ENDPOINT}${idOrSlug}/`);
    if (!raw || !isCaseStudyActive(raw)) return null;
    return normalizeCaseStudy(raw);
  } catch {
    const studies = await getCaseStudies();
    return studies.find((c) => c.slug === String(idOrSlug)) ?? null;
  }
}
