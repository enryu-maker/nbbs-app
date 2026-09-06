import type { Metadata } from 'next';

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
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
