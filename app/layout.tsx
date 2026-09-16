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

import { SITE_URL as siteUrl } from '@/src/const/site.const';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NB Business Solutions | Integrated MSME Business Solutions, Nashik',
    template: '%s | NB Business Solutions',
  },
  description:
    'Business diagnosis, clarity and practical implementation for MSME founders in Nashik. Diagnose before you prescribe.',
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
      'Business diagnosis, clarity and practical implementation for MSME founders in Nashik. Diagnose before you prescribe.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NB Business Solutions | Integrated MSME Business Solutions, Nashik',
    description:
      'Business diagnosis, clarity and practical implementation for MSME founders in Nashik. Diagnose before you prescribe.',
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
  verification: {
    google: 'pt7Rv_vUJ95GjDUa5KPZhQO4YzhpH5ae6bsMPzkICBY',
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
  geo: { '@type': 'GeoCoordinates', latitude: 20.0057655, longitude: 73.7690401 },
  hasMap: 'https://www.google.com/maps/place/NB+Business+Solutions/@20.0057655,73.7690401,17z',
  sameAs: [
    'https://www.linkedin.com/in/nbakliwal/',
    'https://www.instagram.com/nb.businesssolutions',
  ],
  subOrganization: [
    { '@type': 'Organization', name: 'Business Clarity Workshop', url: 'https://workshop.nbbs.in' },
    { '@type': 'Organization', name: 'The Business OPD', url: 'https://businessopd.nbbs.in' },
    { '@type': 'Organization', name: 'Incentiwise', url: 'https://incentiwise.nbbs.in' },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NB Business Solutions',
  alternateName: 'NBBS',
  url: siteUrl,
  publisher: { '@type': 'Organization', name: 'NB Business Solutions', url: siteUrl },
  inLanguage: 'en-IN',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
