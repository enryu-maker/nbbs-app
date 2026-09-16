import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Case Studies from NB Business Solutions — coming soon.',
  // Placeholder page: keep it out of the index until it has real content.
  robots: { index: false, follow: true },
  alternates: { canonical: '/case-studies' },
};

export default function Page() {
  return <ComingSoon title="Case Studies" />;
}
