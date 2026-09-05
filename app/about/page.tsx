// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import DiagnosticCTA from "@/components/DiagnosticCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatsSection from "@/components/StatsStatics";
import GoogleReview from "@/components/GoogleReview";
import { VideoTestimonials } from "@/components/VideoTestimonials";

export default function Home() {
  return (
    <ScrollReveal>
      <Header />
      <main>
        <Hero />
        <StatsSection/>
        <Philosophy />
        <VideoTestimonials />
        <GoogleReview />
        <DiagnosticCTA />
      </main>
      <Footer />
    </ScrollReveal>
  );
}