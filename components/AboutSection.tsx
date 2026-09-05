// components/AboutSection.tsx
"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import DiagnosticCTA from "@/components/DiagnosticCTA";
import GoogleReview from "@/components/GoogleReview";
import { VideoTestimonials } from "./VideoTestimonials";

export default function AboutSection() {
  return (
    <section id="about">
      <ScrollReveal>
        <Hero />
        <Philosophy />
        <VideoTestimonials />
        <GoogleReview />
        <DiagnosticCTA />
      </ScrollReveal>
    </section>
  );
}