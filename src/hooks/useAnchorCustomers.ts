"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchAnchorCustomers } from "@/src/apis";
import {
  type AnchorCustomer,
  type AnchorCustomerResult,
  type Customer,
} from "@/src/types";

export const anchorCustomerKeys = {
  all: ["anchor-customers"] as const,
  lists: () => [...anchorCustomerKeys.all, "list"] as const,
};

/**
 * Normalizes an API response item into the shape expected by the frontend UI.
 */
export function normalizeAnchorCustomer(item: AnchorCustomer): Customer {
  let parsedResults: AnchorCustomerResult[] = [];
  const rawMetrics = item.metrics ?? item.results;

  if (Array.isArray(rawMetrics)) {
    parsedResults = rawMetrics.map((r) => {
      const metricObj = r as Record<string, unknown>;
      return {
        value: String(metricObj?.value ?? ""),
        label: String(metricObj?.description ?? metricObj?.label ?? ""),
      };
    });
  } else if (typeof rawMetrics === "string") {
    try {
      const parsed = JSON.parse(rawMetrics) as unknown;
      if (Array.isArray(parsed)) {
        parsedResults = parsed.map((entry) => {
          const r = entry as Record<string, unknown>;
          return {
            value: String(r?.value ?? ""),
            label: String(r?.description ?? r?.label ?? ""),
          };
        });
      }
    } catch {
      parsedResults = [];
    }
  }

  const founderText = [
    item.representative_name || item.founder || item.founder_name,
    item.founder_title,
  ]
    .filter(Boolean)
    .join(", ");

  return {
    company:
      item.organization_name || item.company || item.company_name || "",
    founder:
      founderText ||
      item.representative_name ||
      item.founder ||
      item.founder_name ||
      "",
    challenge: item.challenges || item.challenge || "",
    solution: item.solutions || item.solution || "",
    results: parsedResults,
    quote: item.quotes || item.quote || item.testimonial || "",
  };
}

/**
 * Query hook to fetch and normalize anchor customers.
 */
export function useAnchorCustomersQuery<TData = Customer[]>(
  options?: Omit<
    UseQueryOptions<Customer[], Error, TData>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: anchorCustomerKeys.lists(),
    queryFn: async (): Promise<Customer[]> => {
      const rawCustomers = await fetchAnchorCustomers();
      const sorted = [...rawCustomers].sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return (a.order ?? 0) - (b.order ?? 0);
        }
        return Number(a.id ?? 0) - Number(b.id ?? 0);
      });
      return sorted.map(normalizeAnchorCustomer);
    },
    ...options,
  });
}

/**
 * Convenience hook providing the active customers list from the API.
 */
export function useAnchorCustomers() {
  const query = useAnchorCustomersQuery();

  const activeCustomers =
    query.data && query.data.length > 0 ? query.data : [];

  return {
    ...query,
    customers: activeCustomers,
  };
}

