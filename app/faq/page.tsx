import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'FAQ from NB Business Solutions — coming soon.',
  alternates: { canonical: '/faq' },
};

export default function Page() {
  return <ComingSoon title="FAQ" />;
}
