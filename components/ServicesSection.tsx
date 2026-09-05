"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useServices } from "@/src/hooks";


export default function ServicesSection() {
  const { services } = useServices();
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);

  // Scrolls the pinned GSAP carousel to a specific service card by index,
  // since the cards are stacked (position: absolute) and normal anchor
  // scrolling can't reach them on its own.
  const scrollToServiceIndex = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetIndex: number,
  ) => {
    e.preventDefault();

    // Make sure GSAP has up-to-date measurements before we read them.
    ScrollTrigger.refresh();

    const trigger = ScrollTrigger.getById("services-pin");
    const targetService = services[targetIndex] || services[0];
    const targetId = `service-${targetService?.number}`;

    if (trigger && services.length > 1) {
      const totalDuration = services.length - 1;
      const buffer = 0.15; // stay clear of the next card's reveal
      const targetTime = Math.max(targetIndex - buffer, 0);
      const progress = targetTime / totalDuration;
      const targetScroll =
        trigger.start + (trigger.end - trigger.start) * progress;

      window.scrollTo({ top: targetScroll, behavior: "auto" });
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const sections = gsap.utils.toArray<HTMLElement>(".service-panel");

        if (!sections.length || !servicesSectionRef.current) {
          return;
        }

        // Initial position of all cards
        gsap.set(sections, {
          yPercent: 100,
        });

        // First card stays visible
        gsap.set(sections[0], {
          yPercent: 0,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            id: "services-pin",
            trigger: servicesSectionRef.current,
            start: "top top",
            end: `+=${sections.length * 100}%`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        sections.forEach((section, index) => {
          if (index === 0) return;

          timeline.to(
            section,
            {
              yPercent: 0,
              duration: 1,
              ease: "none",
            },
            `service-${index}`,
          );
        });

        // gsap.matchMedia cleanup: reset inline styles this breakpoint set
        // so cards look right in normal flow if the viewport is resized
        // down past 1024px without a full remount.
        return () => {
          gsap.set(sections, { clearProps: "transform" });
        };
      });

      ScrollTrigger.refresh();
    }, servicesSectionRef);

    // Service card images/fonts finishing after mount change this
    // section's height, which silently invalidates the pin's start/end
    // math and is the main cause of the neighbouring section flashing
    // through it when scrolling back up fast. Re-measure once loaded.
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      ctx.revert();
    };
  }, [services]);

  return (
    <section
      id="services"
      className="relative isolate z-0 bg-[#fbf9f8] text-[#1a1b22] antialiased font-sans"
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#141A32] py-14 sm:py-16 md:py-20">
        {/* Grid Background */}

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
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

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="flex max-w-4xl flex-col items-start">
            {/* Label */}

            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <span className="h-px w-7 bg-[#e9c176] sm:w-12" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.25em]">
                Our Services
              </span>

              <span className="h-px w-7 bg-[#e9c176] sm:w-12" />
            </div>

            {/* Heading */}

            <h1
              className="text-[44px] font-medium leading-[1.05] tracking-tight text-white xs:text-[48px] sm:text-[56px] md:text-[72px]"
              style={{
                fontFamily: "Bodoni Moda, serif",
              }}
            >
              NBBS Ecosystem
            </h1>

            {/* Subheading */}

            <p
              className="mt-5 max-w-4xl text-[30px] font-medium leading-[1.15] text-[#e8e7f0] sm:mt-6 sm:text-[36px] md:text-[48px]"
              style={{
                fontFamily: "Bodoni Moda, serif",
              }}
            >
              One connected journey. From diagnosis to implementation.
            </p>

            {/* Description */}

            <p className="mt-6 max-w-3xl text-[15px] leading-[1.65] text-[#c0c5e5] sm:mt-7 sm:text-[17px] md:text-[18px]">
              We look beyond symptoms to understand the real challenge, identify
              the right priorities, and connect strategy with practical
              implementation for sustainable business growth.
            </p>

            {/* Buttons */}

            <div className="flex w-full flex-col gap-3 pt-7 sm:w-auto sm:flex-row sm:gap-4 sm:pt-8">
              <Link
                href="/#service-02"
                onClick={(e) => scrollToServiceIndex(e, 1)}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#261900] transition-colors hover:bg-gray-300 sm:w-auto sm:px-6 sm:text-[12px] sm:tracking-widest"
              >
                Not sure where to start?
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>

         
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      {services.length > 0 && (
        <section id="solutions" className="bg-[#fbf9f8]">
          {/* =========================================================
              GSAP SERVICES
          ========================================================= */}

        <div
          ref={servicesSectionRef}
          className="services-scroll relative w-full"
        >
          <div className="relative overflow-visible lg:h-screen lg:overflow-hidden">
            {services.map((service, index) => (
              <article
                key={service.number}
                id={`service-${service.number}`}
                className="service-panel relative mb-10 w-full overflow-visible bg-[#EEF0F3] last:mb-0 lg:absolute lg:inset-0 lg:mb-0 lg:h-screen lg:overflow-hidden"
                style={{
                  zIndex: index + 1,
                }}
              >
                {/* TOP GOLD LINE */}

                <div className="absolute left-0 right-0 top-0 h-0.5 bg-[#e9c176] sm:h-0.75" />

                {/* =================================================
                    TOP LEFT
                ================================================= */}

                <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-7 md:left-10 md:top-8 lg:left-16">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#8a8a91] sm:text-[10px] sm:tracking-[0.25em]">
                    Service
                  </span>

                  <div className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-3" />
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div className="w-full px-5 pb-14 pt-16 sm:px-8 sm:pb-14 sm:pt-20 md:px-10 lg:h-full lg:px-16">
                  <div className="mx-auto flex w-full max-w-[1600px] items-start lg:h-full lg:items-center">
                    <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 lg:max-h-[calc(100vh-130px)] lg:grid-cols-12 lg:gap-0 lg:overflow-hidden">
                      {/* =================================================
                          LEFT COLUMN — `order-1` pins it to the top of
                          the mobile stack. On lg+ it keeps its original
                          side-by-side width (col-span-4), just top-
                          aligned (`lg:justify-start` instead of
                          center) so the heading + CTA sit at the top
                          of the column instead of vertically centered.
                      ================================================= */}

                      <div className="order-1 flex flex-col justify-center py-2 lg:order-none lg:col-span-4 lg:justify-start lg:pr-10 xl:pr-20">
                        <h3
                          className="mb-3 text-[34px] font-medium leading-[0.98] text-primary sm:mt-4 sm:text-[40px] md:text-[48px] lg:mt-5 lg:text-[54px] xl:text-[52px]"
                          style={{
                            fontFamily: "Bodoni Moda, serif",
                          }}
                        >
                          {service.category}
                        </h3>
                        <span className="text-[8px] font-bold tracking-[0.2em] text-secondary sm:text-[10px] sm:tracking-[0.25em]">
                          {service.subcategory || service.title1}
                        </span>

                        {service.cta && service.ctaUrl && (
                          <Link
                            href={service.ctaUrl}
                            target={service.ctaUrl.startsWith("http") ? "_blank" : undefined}
                            rel={service.ctaUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#141A32] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#1d2642] sm:mt-7 sm:w-fit sm:gap-3 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.18em] lg:mt-8"
                          >
                            {service.cta}

                            <span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-1 sm:text-[17px]">
                              arrow_forward
                            </span>
                          </Link>
                        )}
                      </div>

                      {/* =================================================
                          MIDDLE COLUMN
                      ================================================= */}

                      <div className="order-2 flex flex-col justify-start py-2 lg:order-none lg:col-span-4 lg:max-h-full lg:overflow-y-auto lg:border-l lg:border-r lg:border-[#c6c6ce] lg:px-8 lg:py-6 lg:scrollbar-hide xl:px-14">
                        {/* TITLE */}

                        <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[10px] sm:tracking-[0.22em]">
                          {service.title}
                        </span>

                        {/* DESCRIPTION / PROBLEM */}

                        <p className="mt-3 text-[12px] leading-[1.5] text-[#62626a] sm:mt-4 sm:text-[14px] sm:leading-[1.65] md:text-[15px] lg:mt-5">
                          {service.description || service.problem}
                        </p>

                        {/* SECONDARY IDENTITY (e.g. "We Identify") */}

                        {(service.secondaryIdentity || service.identity1) && (
                          <>
                            {(service.secondaryIdentity?.title || service.identity1) && (
                              <span className="mb-1 mt-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#141A32] sm:mb-3 sm:text-[10px] sm:tracking-[0.22em]">
                                {service.secondaryIdentity?.title || service.identity1}
                              </span>
                            )}

                            <div className="space-y-2 sm:space-y-2.5 mt-2 lg:space-y-3">
                              {(service.secondaryIdentity?.points || service.points2)?.map((point) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-2 sm:gap-3"
                                >
                                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e9c176] text-[#141A32] sm:h-5 sm:w-5">
                                    <span className="material-symbols-outlined text-[9px] sm:text-[12px]">
                                      check
                                    </span>
                                  </span>

                                  <span className="text-[10px] leading-[1.35] text-[#46464d] sm:text-[12px] sm:leading-[1.4] md:text-[13px]">
                                    {point.replace("✓ ", "")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {/* GOLD DIVIDER */}

                        <div className="my-4 h-px w-10 bg-[#e9c176] sm:my-5 sm:w-16 lg:my-6" />

                        {/* PRIMARY IDENTITY (e.g. "Key Takeaways") */}

                        {(service.primaryIdentity || service.identity) && (
                          <>
                            <span className="mb-1 mt-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#141A32] sm:mb-3 sm:mt-3 sm:text-[10px] sm:tracking-[0.22em] lg:mt-3">
                              {service.primaryIdentity?.title || service.identity}
                            </span>

                            <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                              {(service.primaryIdentity?.points || service.points)?.map((point) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-2 sm:gap-3"
                                >
                                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e9c176] text-[#141A32] sm:h-5 sm:w-5">
                                    <span className="material-symbols-outlined text-[9px] sm:text-[12px]">
                                      check
                                    </span>
                                  </span>

                                  <span className="text-[10px] leading-[1.35] text-[#46464d] sm:text-[12px] sm:leading-[1.4] md:text-[13px]">
                                    {point}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {/* Optional title2 */}

                        {service.title2 && (
                          <p className="mt-6 text-[11px] leading-[1.5] text-[#62626a] sm:mt-7 sm:text-[13px] sm:leading-[1.6]">
                            {service.title2}
                          </p>
                        )}
                      </div>

                      {/* =================================================
                          RIGHT COLUMN
                      ================================================= */}

                      <div className="order-3 flex flex-col justify-center py-2 lg:order-none lg:col-span-4 lg:pl-8 xl:pl-14">
                        {/* IMAGE */}

                        <div className="relative h-36 w-full overflow-hidden border border-[#c6c6ce] bg-[#fbf9f8] sm:h-48 md:h-56 lg:h-[330px] xl:h-[380px]">
                          <Image
                            src={service.image}
                            alt={`${service.title} business solution`}
                            fill
                            unoptimized={typeof service.image === "string"}
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#141A32]/50 via-transparent to-transparent" />

                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between sm:bottom-5 sm:left-5 sm:right-5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9c176] text-[#141A32] sm:h-10 sm:w-10">
                              <span className="material-symbols-outlined text-[15px] sm:text-[18px]">
                                north_east
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* INFORMATION */}

                        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 lg:mt-5 lg:gap-4">
                          {/* PERFECT FOR */}

                          <div className="border border-[#c6c6ce] bg-[#fbf9f8] p-3 sm:p-4 lg:p-5">
                            <span className="block text-[7px] font-bold uppercase tracking-[0.12em] text-[#8a8a91] sm:text-[8px] sm:tracking-[0.16em]">
                              Perfect For
                            </span>

                            <p className="mt-1 text-[9px] font-medium leading-[1.4] text-[#141A32] sm:mt-2 sm:text-[10px] lg:text-[12px]">
                              {service.perfectFor || service.audience}
                            </p>
                          </div>

                          {/* BUSINESS PROOF */}

                          <div className="border border-[#c6c6ce] bg-[#fbf9f8] p-3 sm:p-4 lg:p-5">
                            <span className="block text-[7px] font-bold uppercase tracking-[0.12em] text-[#8a8a91] sm:text-[8px] sm:tracking-[0.16em]">
                              Business Proof
                            </span>

                            <p className="mt-2 text-[9px] font-bold leading-[1.4] text-[#141A32] sm:text-[10px] lg:text-[12px]">
                              {service.businessProof || service.proof}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      )}
    </section>
  );
}
