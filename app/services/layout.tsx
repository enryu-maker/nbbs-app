import type { Metadata } from 'next';
import { SITE_URL } from '@/src/const/site.const';

export const metadata: Metadata = {
  title: 'NBBS Ecosystem — Services',
  description:
    'Explore the NBBS ecosystem: Business OPD diagnostics, CRM, Incentiwise, Quotation, and Cashflow solutions built for MSME growth.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'NBBS Ecosystem — Services | NB Business Solutions',
    description:
      'Explore the NBBS ecosystem: Business OPD diagnostics, CRM, Incentiwise, Quotation, and Cashflow solutions built for MSME growth.',
    url: '/services',
    images: ['/opengraph-image'],
  },
};

const provider = { '@type': 'Organization', name: 'NB Business Solutions', url: SITE_URL };

const services = [
  {
    name: 'Business OPD',
    description:
      'A structured business diagnostic that finds where a business breaks down and returns a prescription roadmap before any solution is recommended.',
    url: 'https://businessopd.nbbs.in',
    category: 'Business Diagnosis',
  },
  {
    name: 'Business Clarity Workshop',
    description:
      'A three-hour interactive workshop built around the 8-Pillar Business Clarity Diagnostic, ending with a personalised clarity report.',
    url: 'https://workshop.nbbs.in',
    category: 'Business Consulting',
  },
  {
    name: 'NBBS CRM',
    description:
      'Centralised lead tracking, follow-up visibility and pipeline management for growing SMB sales teams.',
    category: 'Sales Operations',
  },
  {
    name: 'Incentiwise',
    description:
      'Incentive and commission scheme management that replaces spreadsheets with consistent, visible payout tracking.',
    url: 'https://incentiwise.nbbs.in',
    category: 'Incentive Management',
  },
  {
    name: 'Quotation',
    description:
      'Professional, consistent proposals that cut manual quotation work and shorten decision cycles.',
    category: 'Sales Operations',
  },
  {
    name: 'Cashflow',
    description:
      'Practical day-to-day financial visibility so owners know what is coming before it arrives.',
    category: 'Financial Management',
  },
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'NBBS Ecosystem — Services',
  url: `${SITE_URL}/services`,
  isPartOf: { '@type': 'WebSite', name: 'NB Business Solutions', url: SITE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        serviceType: service.category,
        provider,
        areaServed: { '@type': 'Place', name: 'Nashik, Maharashtra, India' },
        ...(service.url ? { url: service.url } : {}),
      },
    })),
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  );
}
