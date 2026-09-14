import { apiClient } from './client.api';
import { CREDIBILITY_ENDPOINT, VISITORS_ENDPOINT } from '@/src/const';
import { type CredibilityMetric, type PaginatedResponse } from '@/src/types';

/**
 * Fetch all active credibility metrics / trust signals.
 * GET /api/nbbs/credibility/
 */
export async function fetchCredibilityMetrics(): Promise<CredibilityMetric[]> {
  const data = await apiClient<CredibilityMetric[] | PaginatedResponse<CredibilityMetric>>(
    CREDIBILITY_ENDPOINT,
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
 * Live website visitor count. Counts this browser once (POST), afterwards only reads (GET).
 * /api/nbbs/visitors/
 */
export async function fetchVisitorCount(): Promise<number> {
  const KEY = 'nbbs-visit-counted';
  let counted = false;
  try {
    counted = localStorage.getItem(KEY) === '1';
  } catch {}

  const { count } = await apiClient<{ count: number }>(VISITORS_ENDPOINT, {
    method: counted ? 'GET' : 'POST',
  });

  try {
    localStorage.setItem(KEY, '1');
  } catch {}
  return count;
}
