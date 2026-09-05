import { apiClient } from './client.api';
import { ANCHOR_CUSTOMERS_ENDPOINT } from '@/src/const';
import { type AnchorCustomer, type PaginatedResponse } from '@/src/types';

/**
 * Fetch all anchor customers.
 */
export async function fetchAnchorCustomers(): Promise<AnchorCustomer[]> {
  const data = await apiClient<AnchorCustomer[] | PaginatedResponse<AnchorCustomer>>(
    ANCHOR_CUSTOMERS_ENDPOINT,
  );

  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === 'object' && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}
