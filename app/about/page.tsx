// app/about/page.tsx
import type { Metadata } from 'next';
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
  },
};

export default function Home() {
  return (
    <ScrollReveal>
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
