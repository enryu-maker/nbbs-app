import type { ApiCarousel, Carousel, CarouselImage } from '@/src/types';
import { API_BASE_URL } from './client.api';

function resolveMediaUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  const trimmed = url.trim();
  if (!trimmed) return undefined;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  return `${API_BASE_URL}${trimmed.startsWith('/') ? '' : '/'}${trimmed}`;
}

/**
 * Maps an API carousel into the UI shape (images sorted by order).
 */
export function normalizeCarousel(item: ApiCarousel): Carousel {
  const images: CarouselImage[] = [...(item.images ?? [])]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((img) => ({
      id: img.id,
      url: resolveMediaUrl(img.image_url) || '',
      caption: img.caption?.trim() || '',
      order: img.order ?? 0,
    }))
    .filter((img) => Boolean(img.url));

  return {
    id: item.id,
    slug: String(item.id),
    title: item.title?.trim() || 'Untitled carousel',
    description: item.description?.trim() || '',
    images,
    coverImage: images[0]?.url || resolveMediaUrl(item.first_image?.image_url),
    publishedAt: item.created_at?.slice(0, 10) || '',
  };
}
