'use client';

import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { fetchBlogPosts } from '@/src/apis';
import { type BlogPost } from '@/src/types';
import { isBlogPostActive, normalizeBlogPost } from '@/src/apis/blog.normalize';

export const blogKeys = {
  all: ['blog'] as const,
  lists: () => [...blogKeys.all, 'list'] as const,
  detail: (id: number | string) => [...blogKeys.all, 'detail', String(id)] as const,
};

export function useBlogPostsQuery<TData = BlogPost[]>(
  options?: Omit<UseQueryOptions<BlogPost[], Error, TData>, 'queryKey' | 'queryFn'>,
) {
  return useQuery({
    queryKey: blogKeys.lists(),
    queryFn: async (): Promise<BlogPost[]> => {
      const raw = await fetchBlogPosts();
      const active = raw.filter(isBlogPostActive);
      const sorted = [...active].sort((a, b) => {
        const da = a.date || a.created_at || '';
        const db = b.date || b.created_at || '';
        return db.localeCompare(da);
      });
      return sorted.map(normalizeBlogPost);
    },
    ...options,
  });
}

export function useBlogPosts() {
  const query = useBlogPostsQuery();
  return {
    ...query,
    posts: query.data ?? [],
  };
}
