import { apiClient } from './client.api';
import { CAROUSELS_ENDPOINT } from '@/src/const';
import { type ApiCarousel, type Carousel, type PaginatedResponse } from '@/src/types';
import { normalizeCarousel } from './carousel.normalize';

/**
 * Fetch all carousels from the NBBS API.
 * GET /api/nbbs/carousels/
 */
export async function fetchCarousels(): Promise<ApiCarousel[]> {
  const data = await apiClient<ApiCarousel[] | PaginatedResponse<ApiCarousel>>(CAROUSELS_ENDPOINT);

  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === 'object' && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

/**
 * Fetch a single carousel by id.
 */
export async function fetchCarousel(id: number | string): Promise<ApiCarousel | null> {
  try {
    return await apiClient<ApiCarousel>(`${CAROUSELS_ENDPOINT}${id}/`);
  } catch {
    const all = await fetchCarousels();
    return all.find((c) => String(c.id) === String(id)) ?? null;
  }
}

/**
 * Normalized carousels from the live API only.
 */
export async function getCarousels(): Promise<Carousel[]> {
  try {
    const raw = await fetchCarousels();
    return raw
      .map(normalizeCarousel)
      .filter((c) => c.images.length > 0)
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  } catch {
    return [];
  }
}

/**
 * Single normalized carousel by id from the live API.
 */
export async function getCarousel(idOrSlug: string): Promise<Carousel | null> {
  try {
    const raw = await fetchCarousel(idOrSlug);
    if (!raw) return null;
    const normalized = normalizeCarousel(raw);
    return normalized.images.length > 0 ? normalized : null;
  } catch {
    return null;
  }
}
