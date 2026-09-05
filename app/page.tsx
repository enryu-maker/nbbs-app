// app/page.tsx

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsStatics";
import IndustriesMarquee from "@/components/IndustriesMarquee";
import VisionMissionSection from "@/components/Visionmissionsection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fbf9f8] text-[#172039] antialiased">
      <Header />

      <main className="w-full grow overflow-x-hidden">
        {/* HERO */}
        <section
          id="home"
          className="mt-20 w-full overflow-hidden border-y border-black/5 bg-[#fbf9f8]"
        >
          <div className="mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 md:px-12 lg:px-20 xl:px-28">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16 xl:gap-24">
              {/* LEFT CONTENT */}
              <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
                {/* EYEBROW */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#172039]/40" />

                  <span className="text-[8px] font-semibold tracking-[0.2em] text-[#34415c] sm:text-[9px] md:text-[10px]">
                    INTEGRATED BUSINESS SOLUTIONS
                  </span>

                  <span className="h-px w-7 bg-[#172039]/40" />
                </div>

                {/* TITLE */}
                <h1 className="w-full max-w-[700px] font-[var(--font-display)] text-[clamp(2.5rem,5.5vw,5.125rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[#172039]">
                  <span className="inline-block whitespace-nowrap">
                    From{" "}
                    <span className="font-normal italic text-[#c9a86a]">
                      Diagnosis
                    </span>
                  </span>

                  <br />

                  <span className="inline-block whitespace-nowrap">
                    to Solution
                  </span>

                  <br />

                  <span className="inline-block whitespace-nowrap">
                    Implementation.
                  </span>
                </h1>

                {/* BODY */}
                <p className="mt-7 w-full max-w-[620px] text-sm leading-7 text-[#34415c] sm:text-[15px] md:text-base">
                  NB Business Solutions helps MSME founders identify what is
                  holding their business back, create clarity on what needs
                  attention, and implement practical business solutions for
                  sustainable growth.
                </p>

                {/* CTA */}
                <div className="mt-7">
                  <a
                    href="/#services"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#172039] px-6 py-3 text-[10px] font-bold tracking-[0.1em] text-white shadow-[0_12px_30px_rgba(23,32,57,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9a86a] hover:text-[#172039] sm:px-8 sm:text-[11px]"
                  >
                    <span>Explore NBBS Ecosystem</span>

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                      strokeWidth={2.25}
                    />
                  </a>
                </div>

                {/* META */}
                <div className="mt-7 flex items-center gap-2 text-[9px] font-medium tracking-[0.16em] text-[#34415c]/70 sm:text-[10px]">
                  <span>STRATEGY</span>
                  <span>•</span>
                  <span>EXECUTION</span>
                  <span>•</span>
                  <span>GROWTH</span>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex w-full items-center justify-center md:justify-end">
                <div className="relative w-[140%] max-w-[1100px] md:-mr-32">
                  <Image
                    src="/scribble-main.png"
                    alt="From Chaos to Clarity - Business Diagnosis and Solution Implementation"
                    width={2572}
                    height={724}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-black/5" />
        </section>

        {/* STATS */}
        <section className="w-full overflow-hidden">
          <StatsSection />
        </section>

        {/* INDUSTRIES */}
        <section className="w-full overflow-hidden">
          <IndustriesMarquee />
        </section>

        {/* VISION & MISSION */}
        <section className="w-full overflow-hidden">
          <VisionMissionSection />
        </section>

        {/* SERVICES */}
        <section id="services" className="w-full overflow-hidden">
          <ServicesSection />
        </section>  

        {/* ABOUT */}
        <section id="about" className="w-full overflow-hidden">
          <AboutSection />
        </section>

        {/* CONTACT */}
        <section className="w-full overflow-hidden">
          <ContactSection />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
