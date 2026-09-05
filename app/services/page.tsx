"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import opd from "@/public/opd.jpg";
import crm from "@/public/crm.jpg";
import cash from "@/public/cash.jpg";
import quotation from "@/public/quo.jpg";
import incentive from "@/public/incentive.jpg";

import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    number: "01",
    category: "DIAGNOSIS",
    title: "Business OPD",
    subtitle: "Diagnose before you prescribe.",
    image: opd,
    problem:
      "Most SMB owners can feel something is off — but don't know where to start. Wrong diagnosis leads to expensive consulting and software that never sticks.",
    points: [
      "Structured 30-min discovery call",
      "Operations leakage assessment",
      "Custom prescription roadmap",
      "Zero sales pressure",
    ],
    audience: "Owners who want clarity before committing to a solution.",
    proof: "50+ diagnostics delivered across Nashik",
  },
  {
    number: "02",
    category: "OPERATIONS",
    title: "NBBS CRM",
    subtitle: "Make every opportunity visible.",
    image: crm,
    problem:
      "Leads get lost, follow-ups are forgotten, and sales information remains scattered across spreadsheets, WhatsApp and individual team members.",
    points: [
      "Centralized lead tracking",
      "Follow-up visibility",
      "Sales pipeline management",
      "Team accountability",
    ],
    audience: "Growing teams that need a simple CRM their people actually use.",
    proof: "Designed around real SMB workflows",
  },
  {
    number: "03",
    category: "OPERATIONS",
    title: "Incentiwise",
    subtitle: "Turn commission chaos into clarity.",
    image: incentive,
    problem:
      "Manual commission calculations create disputes, slow down payouts and make it difficult for sales teams to understand exactly what they have earned.",
    points: [
      "Automated commission tracking",
      "Transparent calculations",
      "Sales performance visibility",
      "Fewer commission disputes",
    ],
    audience:
      "Sales-driven businesses with field teams and incentive structures.",
    proof: "30% reduction in commission disputes",
  },
  {
    number: "04",
    category: "OPTIMIZATION",
    title: "Quotation",
    subtitle: "Professional proposals. Faster decisions.",
    image: quotation,
    problem:
      "Inconsistent quotations slow down sales, create pricing confusion and make businesses look less professional than they actually are.",
    points: [
      "Standardized quotations",
      "Faster proposal creation",
      "Pricing consistency",
      "Professional customer experience",
    ],
    audience: "Businesses that generate frequent quotations and proposals.",
    proof: "Designed to reduce manual proposal work",
  },
  {
    number: "05",
    category: "OPTIMIZATION",
    title: "Cashflow",
    subtitle: "Know what is coming before it arrives.",
    image: cash,
    problem:
      "Businesses can be profitable on paper while still struggling to know when money will come in, when payments are due and where liquidity is going.",
    points: [
      "Cashflow visibility",
      "Payment tracking",
      "Liquidity planning",
      "Better financial decisions",
    ],
    audience: "Owners who need a clearer view of business cash movement.",
    proof: "Built for practical day-to-day financial visibility",
  },
];

export default function ServicesPage() {
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".service-panel");

      if (sections.length && servicesSectionRef.current) {
        gsap.set(sections, {
          yPercent: 100,
          opacity: 1,
          force3D: true,
        });
        gsap.set(sections[0], { yPercent: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: "top top",
            end: `+=${sections.length * 100}%`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        sections.forEach((section, index) => {
          if (index === 0) return;

          timeline.to(
            section,
            { yPercent: 0, duration: 1, ease: "none" },
            `service-${index}`,
          );
        });
      }

      ScrollTrigger.refresh();
    }, servicesSectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#fbf9f8] text-[#1a1b22] antialiased flex flex-col min-h-screen font-sans">
      <Header />

      <main className="grow">
        <section className="bg-[#141A32] relative overflow-hidden py-12 sm:py-14 md:py-18 lg:py-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.1) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.1) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-9 lg:col-span-8 flex flex-col items-start space-y-6 sm:space-y-8">
              <h1
                className="text-[34px] xs:text-[40px] sm:text-[52px] md:text-[62px] lg:text-[72px] leading-[1.1] font-semibold text-white tracking-tight"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                NBBS Ecosystem
              </h1>

              <p
                className="text-[26px] xs:text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] font-medium text-[#e8e7f0] md:w-4/5"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                One connected journey. From diagnosis to implementation.
              </p>

              <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#c0c5e5] md:w-4/5 lg:w-3/4">
                We look beyond symptoms to understand the real challenge,
                identify the right priorities, and connect strategy with
                practical implementation for sustainable business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contacts"
                  className="bg-[#ffdea5] text-[#261900] text-[11px] sm:text-[12px] leading-none rounded-xl tracking-widest font-bold uppercase px-6 py-3.5 sm:py-4 hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-2 group"
                >
                  EXPLORE The Business OPD™
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="#solutions"
                  className="border border-[#c7c5ce] text-white text-[11px] sm:text-[12px] leading-none tracking-widest font-bold uppercase px-6 rounded-xl py-3.5 sm:py-4 hover:bg-white hover:text-[#141a32] transition-colors flex items-center justify-center"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* solution  */}
        <section id="solutions" className="bg-[#fbf9f8]">
          <div className="max-w-320 mx-auto px-5 sm:px-8 md:px-10 lg:px-16 pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-10 sm:pb-12">
            <div className="max-w-3xl">
              <h2
                className="text-[#141A32] text-[32px] xs:text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[68px] leading-[1.05]"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                Business problems.
                <br />
                <span className="text-[#c49b55] italic">
                  Practical solutions.
                </span>
              </h2>

              <p className="mt-5 sm:mt-7 max-w-2xl text-[14.5px] sm:text-[16px] md:text-[18px] leading-[1.65] sm:leading-[1.7] text-[#4b4b54]">
                We diagnose how your business works today, identify where things
                break down, and build practical systems that help you operate,
                decide and grow better.
              </p>
            </div>
          </div>

          <div
            ref={servicesSectionRef}
            className="services-scroll relative w-full"
          >
            <div className="relative h-dvh overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="service-panel absolute inset-0 w-full h-full bg-[#e4e6ee] overflow-hidden"
                  style={{
                    zIndex: index + 1,
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  }}
                >
                  <article className="h-full w-full overflow-y-auto overscroll-contain">
                    {/* Top Gold Line */}
                    <div className="sticky top-0 left-0 right-0 h-0.75 bg-[#e9c176] z-30" />

                    {/* Service Number */}
                    <div className="pt-7 sm:pt-8 px-5 sm:px-8 md:px-10 lg:px-16 lg:absolute lg:top-8 lg:left-16 lg:pt-0  z-20 flex items-center justify-between lg:block">
                      <div>
                        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold text-[#5c5c68]">
                          Service
                        </span>

                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-[12px] sm:text-[13px] font-bold text-[#141A32]">
                            {service.number}
                          </span>

                          <span className="w-8 h-px bg-[#e9c176]" />

                          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-[#141A32]">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Top Right Label (inline on mobile/tablet, absolute on lg) */}
                      <span className="hidden sm:inline-block lg:absolute lg:top-8 lg:right-16 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-medium text-[#5c5c68]">
                        NBBS BUSINESS SOLUTIONS
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:h-full flex items-start lg:items-center px-5 sm:px-8 md:px-10 lg:px-16 pt-6 sm:pt-8 lg:pt-20 pb-10 sm:pb-12">
                      <div className="w-full lg:h-full max-w-400 mx-auto flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 sm:gap-10 lg:gap-0">
                          {/* LEFT */}
                          <div
                            className="
                            lg:col-span-4
                            lg:pr-12
                            xl:pr-20
                            flex
                            flex-col
                            justify-center
                            py-2
                            lg:py-8
                          "
                          >
                            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold text-[#a3763a]">
                              {service.category}
                            </span>

                            <h3
                              className="
                              mt-4
                              sm:mt-5
                              text-[32px]
                              xs:text-[36px]
                              sm:text-[44px]
                              md:text-[50px]
                              lg:text-[54px]
                              xl:text-[64px]
                              leading-[1.05]
                              lg:leading-none
                              text-[#141A32]
                            "
                              style={{
                                fontFamily: "Bodoni Moda, serif",
                              }}
                            >
                              {service.title}
                            </h3>

                            <p
                              className="
                              mt-5
                              sm:mt-7
                              text-[16px]
                              sm:text-[18px]
                              md:text-[20px]
                              lg:text-[20px]
                              xl:text-[22px]
                              leading-normal
                              font-medium
                              text-[#1f2333]
                              max-w-xl
                            "
                            >
                              {service.subtitle}
                            </p>

                            <div className="mt-6 sm:mt-8 flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-[#e9c176] shrink-0" />

                              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-semibold text-[#4b4b58]">
                                Business Solution
                              </span>
                            </div>

                            <Link
                              href="/contacts"
                              className="
                              mt-7
                              sm:mt-10
                              inline-flex
                              items-center
                              gap-3
                              w-fit
                              px-5
                              sm:px-6
                              py-3.5
                              sm:py-4
                              rounded-xl
                              bg-[#141A32]
                              text-white
                              text-[9px]
                              sm:text-[10px]
                              tracking-[0.18em]
                              uppercase
                              font-bold
                              hover:bg-[#1d2642]
                              transition-all
                              group
                            "
                            >
                              Book a Diagnostic
                              <span className="material-symbols-outlined text-[16px] sm:text-[17px] group-hover:translate-x-1 transition-transform">
                                arrow_forward
                              </span>
                            </Link>
                          </div>

                          {/* MIDDLE */}
                          <div
                            className="
                            lg:col-span-4
                            lg:border-l
                            lg:border-r
                            border-t
                            lg:border-t-0
                            border-[#b7bad0]
                            pt-8
                            lg:pt-8
                            px-0
                            lg:px-10
                            xl:px-14
                            flex
                            flex-col
                            justify-center
                            py-2
                            lg:py-8
                          "
                          >
                            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] uppercase font-bold text-[#a3763a]">
                              The Business Problem
                            </span>

                            <p
                              className="
                              mt-5
                              sm:mt-6
                              text-[15px]
                              sm:text-[16px]
                              md:text-[17px]
                              lg:text-[18px]
                              leading-[1.7]
                              sm:leading-[1.75]
                              text-[#3a3d4b]
                            "
                            >
                              {service.problem}
                            </p>

                            <div className="w-16 h-px bg-[#e9c176] my-6 sm:my-8" />

                            <span
                              className="
                              block
                              text-[9px]
                              sm:text-[10px]
                              tracking-[0.2em]
                              sm:tracking-[0.22em]
                              uppercase
                              font-bold
                              text-[#141A32]
                              mb-5
                              sm:mb-6
                            "
                            >
                              What changes
                            </span>

                            <div className="space-y-3.5 sm:space-y-4">
                              {service.points.map((point) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-3"
                                >
                                  <span
                                    className="
                                    flex
                                    shrink-0
                                    items-center
                                    justify-center
                                    w-5
                                    h-5
                                    rounded-full
                                    bg-[#e9c176]
                                    text-[#141A32]
                                    mt-0.5
                                  "
                                  >
                                    <span className="material-symbols-outlined text-[12px]">
                                      check
                                    </span>
                                  </span>

                                  <span className="text-[13px] md:text-[14px] leading-normal text-[#2c2f3c] font-medium">
                                    {point}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div
                            className="
                            lg:col-span-4
                            lg:pl-10
                            xl:pl-14
                            border-t
                            lg:border-t-0
                            border-[#b7bad0]
                            pt-8
                            lg:pt-8
                            flex
                            flex-col
                            justify-center
                            py-2
                            lg:py-8
                          "
                          >
                            {/* Image */}
                            <div
                              className="
                              relative
                              w-full
                              h-50
                              xs:h-[230px]
                              sm:h-65
                              md:h-75
                              lg:h-75
                              xl:h-90
                              overflow-hidden
                              rounded-lg
                              bg-[#fbf9f8]
                              border
                              border-[#b7bad0]
                            "
                            >
                              <Image
                                src={service.image}
                                alt={`${service.title} business solution`}
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                hover:scale-105
                              "
                              />

                              <div
                                className="
                                absolute
                                inset-0
                                bg-linear-to-t
                                from-[#141A32]/60
                                via-transparent
                                to-transparent
                              "
                              />

                              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between">
                                <span
                                  className="
                                  px-2.5
                                  sm:px-3
                                  py-1.5
                                  bg-[#141A32]
                                  text-white
                                  text-[7px]
                                  sm:text-[8px]
                                  tracking-[0.16em]
                                  uppercase
                                  font-bold
                                "
                                >
                                  NBBS Solution
                                </span>

                                <div
                                  className="
                                  w-9
                                  h-9
                                  sm:w-10
                                  sm:h-10
                                  rounded-full
                                  bg-[#e9c176]
                                  flex
                                  items-center
                                  justify-center
                                  text-[#141A32]
                                  shrink-0
                                "
                                >
                                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                                    north_east
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-4 sm:mt-5">
                              <div className="p-4 sm:p-5 bg-white rounded-lg border border-[#c3c6d6]">
                                <span
                                  className="
                                  block
                                  text-[7px]
                                  sm:text-[8px]
                                  tracking-[0.16em]
                                  uppercase
                                  text-[#5c5c68]
                                  font-bold
                                "
                                >
                                  Perfect For
                                </span>

                                <p
                                  className="
                                  mt-2.5
                                  sm:mt-3
                                  text-[11.5px]
                                  sm:text-[12px]
                                  leading-normal
                                  font-medium
                                  text-[#141A32]
                                "
                                >
                                  {service.audience}
                                </p>
                              </div>

                              <div className="p-4 sm:p-5 bg-white rounded-lg border border-[#c3c6d6]">
                                <span
                                  className="
                                  block
                                  text-[7px]
                                  sm:text-[8px]
                                  tracking-[0.16em]
                                  uppercase
                                  text-[#5c5c68]
                                  font-bold
                                "
                                >
                                  Business Proof
                                </span>

                                <p
                                  className="
                                  mt-2.5
                                  sm:mt-3
                                  text-[11.5px]
                                  sm:text-[12px]
                                  leading-normal
                                  font-bold
                                  text-[#141A32]
                                "
                                >
                                  {service.proof}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Progress */}
                    <div className="relative left-0 right-0 px-5 sm:px-8 md:px-10 lg:px-16 py-4 border-t border-[#b7bad0] flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between">
                      <p className="text-[8px] sm:text-[9px] tracking-[0.14em] sm:tracking-[0.16em] uppercase font-medium text-[#4b4b58] text-center sm:text-left">
                        Diagnose
                        <span className="mx-2 text-[#c49b55]">→</span>
                        Design
                        <span className="mx-2 text-[#c49b55]">→</span>
                        Implement
                      </p>

                      <p className="text-[8px] sm:text-[9px] tracking-[0.14em] sm:tracking-[0.16em] uppercase font-medium text-[#5c5c68]">
                        {service.number} / {service.category}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* cta  */}
        <section
          className="
            bg-[#fbf9f8]
            py-12
            sm:py-14
            md:py-18
            lg:py-20
            border-t
            border-[#c7c5ce]
          "
          id="diagnostic"
        >
          <div className="max-w-320 mx-auto px-5 sm:px-8 md:px-16 flex justify-center">
            <div
              className="
                border
                border-[#c7c5ce]
                bg-white
                p-6
                sm:p-10
                md:p-16
                text-center
                max-w-2xl
                w-full
                rounded-[20px]
                shadow-[0_15px_50px_rgba(20,26,50,0.05)]
              "
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                <span className="w-8 sm:w-10 h-px bg-[#e9c176]" />

                <span className="text-[8px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.2em] uppercase font-bold text-[#141A32]">
                  Start Here
                </span>

                <span className="w-8 sm:w-10 h-px bg-[#e9c176]" />
              </div>

              <h2
                className="
                  text-[30px]
                  xs:text-[34px]
                  sm:text-[40px]
                  md:text-[48px]
                  leading-[1.2]
                  font-medium
                  text-[#141a32]
                  mb-5
                  sm:mb-6
                "
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                Start with clarity.
              </h2>

              <p
                className="
                  text-[15px]
                  sm:text-[17px]
                  md:text-[18px]
                  leading-[1.6]
                  text-[#3a3d4b]
                  mb-8
                  sm:mb-10
                  mx-auto
                  max-w-lg
                "
              >
                A focused 30-minute conversation to understand your current
                operational friction and determine if our ecosystem is the right
                fit.
              </p>

              <Link
                href="/contacts"
                className="
                  bg-[#141A32]
                  text-white
                  rounded-xl
                  px-5
                  sm:px-6
                  py-3.5
                  sm:py-4
                  text-[10px]
                  sm:text-[12px]
                  leading-none
                  tracking-widest
                  font-bold
                  uppercase
                  hover:bg-[#1d2642]
                  transition-all
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  group
                  w-full
                  sm:w-auto
                "
              >
                Book Your Business Diagnostic
                <span
                  className="
                    material-symbols-outlined
                    text-sm
                    group-hover:translate-x-1
                    transition-transform
                  "
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
