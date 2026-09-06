// app/layout.tsx
import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://nbbs.in').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NB Business Solutions | Integrated MSME Business Solutions, Nashik',
    template: '%s | NB Business Solutions',
  },
  description:
    'NB Business Solutions helps MSME founders identify what is holding their business back, create clarity on what needs attention, and implement practical business solutions for sustainable growth.',
  keywords: [
    'NB Business Solutions',
    'NBBS',
    'business consulting Nashik',
    'MSME business solutions',
    'business diagnostic',
    'business OPD',
    'CRM for SMB',
    'cashflow management',
    'business incentive management',
  ],
  authors: [{ name: 'NB Business Solutions' }],
  creator: 'NB Business Solutions',
  publisher: 'NB Business Solutions',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'NB Business Solutions',
    title: 'NB Business Solutions | Integrated MSME Business Solutions, Nashik',
    description:
      'NB Business Solutions helps MSME founders identify what is holding their business back, create clarity on what needs attention, and implement practical business solutions for sustainable growth.',
    images: [
      {
        url: '/nbbs-logo.webp',
        alt: 'NB Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NB Business Solutions | Integrated MSME Business Solutions, Nashik',
    description:
      'NB Business Solutions helps MSME founders identify what is holding their business back, create clarity on what needs attention, and implement practical business solutions for sustainable growth.',
    images: ['/nbbs-logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NB Business Solutions',
  alternateName: 'NBBS',
  url: siteUrl,
  logo: `${siteUrl}/nbbs-logo.webp`,
  image: `${siteUrl}/nbbs-logo.webp`,
  description:
    'NB Business Solutions helps MSME founders identify what is holding their business back, create clarity on what needs attention, and implement practical business solutions for sustainable growth.',
  telephone: '+91-9145789151',
  email: 'connect@nbbs.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      '8, 2nd Floor, Smita Apartment 2 Patil Lane, 2, College Rd, opp. Magnum Hospital',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422005',
    addressCountry: 'IN',
  },
  areaServed: 'Nashik, Maharashtra, India',
};

import QueryProvider from '@/src/providers/QueryProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className="bg-surface text-on-surface font-sans antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
