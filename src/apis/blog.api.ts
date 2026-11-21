import { apiClient, isNotFoundError } from './client.api';
import { BLOG_ENDPOINT } from '@/src/const';
import { type ApiBlogPost, type BlogPost, type PaginatedResponse } from '@/src/types';
import { isBlogPostActive, normalizeBlogPost } from './blog.normalize';

/**
 * Fetch all blog posts from the NBBS API.
 */
export async function fetchBlogPosts(): Promise<ApiBlogPost[]> {
  const data = await apiClient<ApiBlogPost[] | PaginatedResponse<ApiBlogPost>>(BLOG_ENDPOINT);

  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === 'object' && Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

/**
 * Fetch a single blog post by id.
 */
export async function fetchBlogPost(id: number | string): Promise<ApiBlogPost | null> {
  try {
    return await apiClient<ApiBlogPost>(`${BLOG_ENDPOINT}${id}/`);
  } catch (error) {
    if (!isNotFoundError(error)) throw error;
    const posts = await fetchBlogPosts();
    return posts.find((p) => String(p.id) === String(id)) ?? null;
  }
}

function sortNormalized(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/**
 * Active blog posts from the live API only.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const raw = await fetchBlogPosts();
  return sortNormalized(raw.filter(isBlogPostActive).map(normalizeBlogPost));
}

/**
 * Single active blog post by id. Inactive or missing posts return null.
 */
export async function getBlogPost(idOrSlug: string): Promise<BlogPost | null> {
  const raw = await fetchBlogPost(idOrSlug);
  if (!raw || !isBlogPostActive(raw)) return null;
  return normalizeBlogPost(raw);
}
