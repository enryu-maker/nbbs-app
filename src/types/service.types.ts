import type { StaticImageData } from "next/image";

export interface ApiServiceHighlight {
  title: string;
  description: string;
}

export interface ApiServiceCta {
  label?: string;
  url?: string;
}

export interface ApiServiceItem {
  id: number;
  category: string;
  subcategory: string;
  title: string;
  subtitle: string;
  identities: Record<string, string[]>;
  service_image: string;
  highlights: ApiServiceHighlight[];
  order: number;
  cta?: ApiServiceCta;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceIdentitySection {
  title: string;
  points: string[];
}

export interface ServiceItem {
  id: number | string;
  number: string;
  category: string;
  subcategory: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  cta: string;
  ctaUrl: string;
  primaryIdentity?: ServiceIdentitySection;
  secondaryIdentity?: ServiceIdentitySection;
  perfectFor: string;
  businessProof: string;
  highlights: ApiServiceHighlight[];

  // Backward-compatibility aliases
  title1?: string;
  problem?: string;
  identity?: string;
  points?: string[];
  identity1?: string;
  points2?: string[];
  audience?: string;
  proof?: string;
  title2?: string;
}

