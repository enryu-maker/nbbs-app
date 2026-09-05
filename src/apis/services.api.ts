import { apiClient } from "./client.api";
import { SERVICES_ENDPOINT } from "@/src/const";
import { type ApiServiceItem, type PaginatedResponse } from "@/src/types";

/**
 * Fetch all active services for the ecosystem.
 * GET /api/nbbs/services/
 */
export async function fetchServices(): Promise<ApiServiceItem[]> {
  const data = await apiClient<
    ApiServiceItem[] | PaginatedResponse<ApiServiceItem>
  >(SERVICES_ENDPOINT);

  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === "object" && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

