import { apiClient } from './client.api';
import { INDUSTRIES_ENDPOINT } from '@/src/const';
import { type Industry, type PaginatedResponse } from '@/src/types';

/**
 * Fetch active industries list.
 */
export async function fetchIndustries(): Promise<Industry[]> {
  const data = await apiClient<Industry[] | PaginatedResponse<Industry>>(INDUSTRIES_ENDPOINT);

  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === 'object' && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

/**
 * Fetch a single industry by ID.
 */
export async function fetchIndustryById(id: number): Promise<Industry> {
  return apiClient<Industry>(`${INDUSTRIES_ENDPOINT}${id}/`);
}
