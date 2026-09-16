import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Carousel',
  description: 'Carousel from NB Business Solutions — coming soon.',
  // Placeholder page: keep it out of the index until it has real content.
  robots: { index: false, follow: true },
  alternates: { canonical: '/carousel' },
};

export default function Page() {
  return <ComingSoon title="Carousel" />;
}
