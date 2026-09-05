"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchCredibilityMetrics } from "@/src/apis";
import { type CredibilityMetric, type StatItem } from "@/src/types";

export const credibilityKeys = {
  all: ["credibility"] as const,
  lists: () => [...credibilityKeys.all, "list"] as const,
};

/**
 * Normalizes a CredibilityMetric into a StatItem for UI consumption.
 */
export function normalizeCredibilityMetric(item: CredibilityMetric): StatItem {
  return {
    value: item.value || "",
    label: item.description || "",
  };
}

/**
 * Query hook to fetch and sort credibility metrics by order.
 */
export function useCredibilityQuery<TData = StatItem[]>(
  options?: Omit<
    UseQueryOptions<CredibilityMetric[], Error, TData>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: credibilityKeys.lists(),
    queryFn: fetchCredibilityMetrics,
    select: (data) => {
      const sorted = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      return sorted.map(normalizeCredibilityMetric) as unknown as TData;
    },
    ...options,
  });
}

/**
 * Convenience hook providing active credibility stats from the API.
 */
export function useCredibility() {
  const query = useCredibilityQuery();

  const activeStats = query.data && query.data.length > 0 ? query.data : [];

  return {
    ...query,
    stats: activeStats,
  };
}

