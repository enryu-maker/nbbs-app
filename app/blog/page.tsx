import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog from NB Business Solutions — coming soon.',
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return <ComingSoon title="Blog" />;
}
