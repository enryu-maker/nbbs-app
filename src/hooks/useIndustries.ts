"use client";

import {
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import {
  fetchIndustries,
  fetchIndustryById,
} from "@/src/apis";
import { type Industry } from "@/src/types";

export const industryKeys = {
  all: ["industries"] as const,
  lists: () => [...industryKeys.all, "list"] as const,
  detail: (id: number) => [...industryKeys.all, "detail", id] as const,
};

/**
 * Query hook to fetch all active industries.
 */
export function useIndustriesQuery<TData = Industry[]>(
  options?: Omit<
    UseQueryOptions<Industry[], Error, TData>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: industryKeys.lists(),
    queryFn: fetchIndustries,
    ...options,
  });
}

/**
 * Convenience query hook to fetch only the industry name strings.
 * Perfect for ticker, marquee, and select dropdowns.
 */
export function useIndustryNamesQuery() {
  return useIndustriesQuery<string[]>({
    select: (data) =>
      data
        .map((item) => item.name?.trim())
        .filter((name): name is string => Boolean(name)),
  });
}

/**
 * Query hook to fetch a single industry by its ID.
 */
export function useIndustryQuery(
  id: number,
  options?: Omit<
    UseQueryOptions<Industry, Error, Industry>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: industryKeys.detail(id),
    queryFn: () => fetchIndustryById(id),
    enabled: Boolean(id),
    ...options,
  });
}