// app/page.tsx

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsStatics';
import IndustriesMarquee from '@/components/IndustriesMarquee';
import VisionMissionSection from '@/components/Visionmissionsection';
import ContactSection from '@/components/ContactSection';

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
          <div className="w-full px-margin-mobile py-unit-lg sm:py-unit-xl">
            <div className="grid grid-cols-1 items-center gap-unit-lg md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-unit-md">
              {/* EYEBROW — same 1fr / auto / 1fr center track as the column divider */}
              <div className="col-span-full mb-unit-lg grid w-full grid-cols-[1fr_auto_1fr] items-center gap-unit-sm sm:mb-unit-xl">
                <span className="h-px w-unit-lg justify-self-end bg-primary/40 sm:w-unit-xl" />

                <span className="text-label-caps text-center uppercase text-on-surface-variant">
                  INTEGRATED BUSINESS SOLUTIONS
                </span>

                <span className="h-px w-unit-lg justify-self-start bg-primary/40 sm:w-unit-xl" />
              </div>

              {/* LEFT CONTENT */}
              <div className="flex w-full min-w-0 flex-col items-center justify-center text-center md:items-start md:pr-unit-md md:text-left">
                {/* TITLE */}
                <h1 className="w-full font-display text-4xl font-semibold leading-none tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="inline-block">
                    From <span className="font-normal italic text-secondary">Diagnosis</span>
                  </span>

                  <br />

                  <span className="inline-block">to Solution</span>

                  <br />

                  <span className="inline-block">Implementation.</span>
                </h1>

                {/* BODY */}
                <p className="text-body-md mt-unit-lg w-full text-on-surface-variant sm:text-body-lg">
                  NB Business Solutions helps MSME founders identify what is holding their business
                  back, create clarity on what needs attention, and implement practical business
                  solutions for sustainable growth.
                </p>
              </div>

              {/* DIVIDER */}
              <div
                className="bg-primary/30 h-px w-full md:my-unit-sm md:h-full md:min-h-80 md:w-px md:self-stretch"
                aria-hidden="true"
              />

              {/* RIGHT CONTENT (SCRIBBLE + CTA + TAGLINE) */}
              <div className="flex w-full min-w-0 flex-col items-center justify-center text-center md:pl-unit-md">
                {/* SCRIBBLE IMAGE */}
                <div className="relative w-full">
                  <Image
                    src="/scribble-update.png"
                    alt="From Chaos to Clarity - Business Diagnosis and Solution Implementation"
                    width={2572}
                    height={724}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* CTA */}
                <div className="mt-unit-lg sm:mt-unit-xl">
                  <a
                    href="/#services"
                    className="text-button group inline-flex min-h-12 items-center justify-center gap-unit-sm rounded-md bg-primary px-unit-lg py-unit-sm uppercase tracking-widest text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary sm:px-unit-xl"
                  >
                    <span>Explore NBBS Ecosystem</span>

                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                      strokeWidth={2.25}
                    />
                  </a>
                </div>

                {/* META */}
                <div className="text-label-caps mt-unit-md flex items-center justify-center gap-unit-sm uppercase text-secondary">
                  <span>STRATEGY</span>
                  <span>•</span>
                  <span>EXECUTION</span>
                  <span>•</span>
                  <span>GROWTH</span>
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
