// app/about/page.tsx
import type { Metadata } from 'next';
import { SITE_URL } from '@/src/const/site.const';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import DiagnosticCTA from '@/components/DiagnosticCTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import StatsSection from '@/components/StatsStatics';
import GoogleReview from '@/components/GoogleReview';
import { VideoTestimonials } from '@/components/VideoTestimonials';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about NB Business Solutions — our philosophy, track record, and approach to helping MSME founders build sustainable, well-run businesses.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | NB Business Solutions',
    description:
      'Learn about NB Business Solutions — our philosophy, track record, and approach to helping MSME founders build sustainable, well-run businesses.',
    url: '/about',
    images: ['/opengraph-image'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About NB Business Solutions',
  url: `${SITE_URL}/about`,
  isPartOf: { '@type': 'WebSite', name: 'NB Business Solutions', url: SITE_URL },
  about: { '@type': 'Organization', name: 'NB Business Solutions', url: SITE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` },
    ],
  },
};

export default function Home() {
  return (
    <ScrollReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <Philosophy />
        <VideoTestimonials />
        <GoogleReview />
        <DiagnosticCTA />
      </main>
      <Footer />
    </ScrollReveal>
  );
}
