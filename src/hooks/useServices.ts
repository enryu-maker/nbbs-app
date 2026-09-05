"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchServices } from "@/src/apis";
import {
  type ApiServiceItem,
  type ServiceIdentitySection,
  type ServiceItem,
} from "@/src/types";

export const serviceKeys = {
  all: ["services"] as const,
  lists: () => [...serviceKeys.all, "list"] as const,
};

export function normalizeService(
  raw: ApiServiceItem,
  index: number,
): ServiceItem {
  // Parse identities dictionary into primary and secondary identity sections
  let primaryIdentity: ServiceIdentitySection | undefined;
  let secondaryIdentity: ServiceIdentitySection | undefined;

  if (raw.identities && typeof raw.identities === "object") {
    const identityEntries = Object.entries(raw.identities);
    if (identityEntries.length > 0) {
      primaryIdentity = {
        title: identityEntries[0][0],
        points: Array.isArray(identityEntries[0][1])
          ? identityEntries[0][1]
          : [],
      };
    }
    if (identityEntries.length > 1) {
      secondaryIdentity = {
        title: identityEntries[1][0],
        points: Array.isArray(identityEntries[1][1])
          ? identityEntries[1][1]
          : [],
      };
    }
  }

  // Parse highlights into perfectFor and businessProof
  let perfectFor = "";
  let businessProof = "";

  if (Array.isArray(raw.highlights)) {
    for (const h of raw.highlights) {
      const titleUpper = (h?.title || "").toUpperCase();
      if (
        titleUpper.includes("PERFECT") ||
        titleUpper.includes("AUDIENCE") ||
        titleUpper.includes("FOR")
      ) {
        perfectFor = h.description || "";
      } else if (
        titleUpper.includes("PROOF") ||
        titleUpper.includes("BUSINESS") ||
        titleUpper.includes("DELIVERED")
      ) {
        businessProof = h.description || "";
      }
    }

    if (!perfectFor && raw.highlights[0]) {
      perfectFor = raw.highlights[0].description || "";
    }
    if (!businessProof && raw.highlights[1]) {
      businessProof = raw.highlights[1].description || "";
    }
  }

  // Derive CTA & Link (prioritizing backend cta object)
  let cta = "";
  let ctaUrl = "";

  if (raw.cta && typeof raw.cta === "object") {
    if (typeof raw.cta.label === "string" && raw.cta.label.trim()) {
      cta = raw.cta.label.trim();
    }
    if (typeof raw.cta.url === "string" && raw.cta.url.trim()) {
      ctaUrl = raw.cta.url.trim();
    }
  }

  // Fallback to category-based or default CTA if not provided by backend
  if (!cta || !ctaUrl) {
    const catLower = (raw.category || "").toLowerCase();
    if (catLower.includes("clarity") || catLower.includes("workshop")) {
      cta = cta || "Explore Workshop";
      ctaUrl = ctaUrl || "https://workshop.nbbs.in/";
    } else if (catLower.includes("opd") || catLower.includes("diagnostic")) {
      cta = cta || "Book a Diagnostic";
      ctaUrl = ctaUrl || "https://businessopd.nbbs.in/";
    } else if (
      catLower.includes("incentiwise") ||
      catLower.includes("incentive")
    ) {
      cta = cta || "Explore Incentiwise";
      ctaUrl = ctaUrl || "https://incentiwise.nbbs.in/";
    } else {
      cta = cta || "Explore Solution";
      ctaUrl = ctaUrl || "/#services";
    }
  }

  const formattedNumber = String(raw.order ?? index + 1).padStart(2, "0");

  return {
    id: raw.id ?? index + 1,
    number: formattedNumber,
    category: raw.category || "",
    subcategory: raw.subcategory || "",
    title: raw.title || "",
    description: raw.subtitle || "",
    image: raw.service_image || "",
    cta,
    ctaUrl,
    primaryIdentity,
    secondaryIdentity,
    perfectFor,
    businessProof,
    highlights: raw.highlights || [],

    // Backward-compatible aliases
    title1: raw.subcategory || "",
    problem: raw.subtitle || "",
    identity: primaryIdentity?.title || "Key Takeaways",
    points: primaryIdentity?.points || [],
    identity1: secondaryIdentity?.title || "",
    points2: secondaryIdentity?.points || [],
    audience: perfectFor,
    proof: businessProof,
  };
}

/**
 * Query hook to fetch and sort services by order sequence.
 */
export function useServicesQuery<TData = ServiceItem[]>(
  options?: Omit<
    UseQueryOptions<ApiServiceItem[], Error, TData>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: serviceKeys.lists(),
    queryFn: fetchServices,
    select: (data) => {
      const sorted = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      return sorted.map((item, idx) =>
        normalizeService(item, idx),
      ) as unknown as TData;
    },
    ...options,
  });
}

/**
 * Convenience hook providing active services from the API.
 */
export function useServices() {
  const query = useServicesQuery();

  const activeServices = query.data && query.data.length > 0 ? query.data : [];

  return {
    ...query,
    services: activeServices,
  };
}
