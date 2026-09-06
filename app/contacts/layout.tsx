import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NB Business Solutions in Nashik, Maharashtra. Call, email, or book a business diagnostic consultation.',
  alternates: { canonical: '/contacts' },
  openGraph: {
    title: 'Contact Us | NB Business Solutions',
    description:
      'Get in touch with NB Business Solutions in Nashik, Maharashtra. Call, email, or book a business diagnostic consultation.',
    url: '/contacts',
  },
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
