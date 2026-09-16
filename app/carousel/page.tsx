import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Carousel',
  description: 'Carousel from NB Business Solutions — coming soon.',
  alternates: { canonical: '/carousel' },
};

export default function Page() {
  return <ComingSoon title="Carousel" />;
}
