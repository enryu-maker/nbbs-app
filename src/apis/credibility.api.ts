import { apiClient } from './client.api';
import { CREDIBILITY_ENDPOINT } from '@/src/const';
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
