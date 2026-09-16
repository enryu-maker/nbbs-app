import type { ApiBlogPost, BlogPost } from '@/src/types';
import { API_BASE_URL } from './client.api';

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function buildExcerpt(description: string): string {
  const plain = stripHtml(description);
  if (!plain) return 'No description yet.';
  if (plain.length <= 180) return plain;
  return `${plain.slice(0, 180).trimEnd()}…`;
}

function buildBody(description: string): string[] {
  const plain = stripHtml(description);
  if (!plain) return ['This post does not have a description yet.'];
  return [plain];
}

function estimateReadingMinutes(description: string): number {
  const words = stripHtml(description).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200) || 1);
}

/**
 * Turns relative Django media paths into absolute URLs.
 */
export function resolveBlogImageUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  const trimmed = url.trim();
  if (!trimmed) return undefined;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  return `${API_BASE_URL}${trimmed.startsWith('/') ? '' : '/'}${trimmed}`;
}

function pickImage(item: ApiBlogPost): string | undefined {
  return resolveBlogImageUrl(
    item.image_url || item.image || item.cover_image || item.blog_image || item.thumbnail || null,
  );
}

/**
 * Maps an API blog item into the UI BlogPost shape.
 * Supports paginated GET /api/nbbs/blog/ results with `image_url` + HTML `description`.
 */
export function isBlogPostActive(item: ApiBlogPost): boolean {
  // Treat missing is_active as visible for older payloads; explicit false hides the post.
  return item.is_active !== false;
}

export function normalizeBlogPost(item: ApiBlogPost): BlogPost {
  const description = item.description ?? '';
  const html = description.trim();

  return {
    id: item.id,
    slug: String(item.id),
    title: item.title?.trim() || 'Untitled',
    excerpt: buildExcerpt(description),
    body: buildBody(description),
    htmlBody: looksLikeHtml(html) ? html : undefined,
    category: 'Insights',
    author: item.author?.trim() || 'NB Business Solutions',
    publishedAt: item.date || item.created_at?.slice(0, 10) || '',
    readingMinutes: estimateReadingMinutes(description),
    image: pickImage(item),
    isActive: isBlogPostActive(item),
  };
}
