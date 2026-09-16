import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Case Studies from NB Business Solutions — coming soon.',
  alternates: { canonical: '/case-studies' },
};

export default function Page() {
  return <ComingSoon title="Case Studies" />;
}
