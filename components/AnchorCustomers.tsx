"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { useAnchorCustomers } from "@/src/hooks";

export default function AnchorCustomers() {
  const { customers } = useAnchorCustomers();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current || customers.length < 2) {
        return;
      }

      const totalCards = customers.length;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(totalCards - 1) * window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,

          onUpdate: (self) => {
            const slide = Math.min(
              totalCards - 1,
              Math.max(0, Math.round(self.progress * (totalCards - 1))),
            );

            setCurrentSlide((previousSlide) =>
              previousSlide === slide ? previousSlide : slide,
            );
          },
        },
      });

      timeline.to(trackRef.current, {
        xPercent: -100 * (totalCards - 1),
        ease: "none",
      });

      timelineRef.current = timeline;
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    // Images/fonts finishing after the initial mount change section
    // heights, which silently invalidates the start/end math above and
    // is the main cause of the overlap flash when scrolling back up.
    // Re-measure once everything has actually finished loading.
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", handleLoad);
      timelineRef.current = null;
      ctx.revert();
    };
  }, [customers]);

  const moveToSlide = (slide: number) => {
    const targetSlide = Math.max(0, Math.min(customers.length - 1, slide));

    const timeline = timelineRef.current;

    if (!timeline || !timeline.scrollTrigger) {
      setCurrentSlide(targetSlide);
      return;
    }

    const scrollTrigger = timeline.scrollTrigger;

    const progress =
      customers.length > 1 ? targetSlide / (customers.length - 1) : 0;

    const targetScroll =
      scrollTrigger.start +
      (scrollTrigger.end - scrollTrigger.start) * progress;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    moveToSlide(currentSlide + 1);
  };

  const previousSlide = () => {
    moveToSlide(currentSlide - 1);
  };

  if (!customers || customers.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative isolate z-10 bg-paper py-6 md:py-8"
    >
      {/* HEADER */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
        </div>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-medium max-w-3xl text-3xl font-black leading-[0.92] tracking-[-0.045em] text-navy sm:text-4xl md:text-5xl"
           style={{
                fontFamily: "Bodoni Moda, serif",
              }}
          >
            Anchor Customers
          </h2>
        </div>
      </div>

      {/* SLIDER */}
      <div className="mt-8 w-full">
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex">
            {customers.map((customer, index) => (
              <div
                key={`${customer.company}-${index}`}
                className="w-full shrink-0 px-1"
              >
                <article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border-navy/[0.07]
                    bg-white
                    shadow-[0_18px_60px_rgba(15,23,42,0.07)]
                  "
                >
                  {/* MAIN CONTENT */}
                  <div className="grid md:grid-cols-[1.08fr_0.92fr]">
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col px-7 pb-8 pt-8 sm:px-9 sm:pt-9 md:px-11 md:pb-10 md:pt-10">
                      {/* COMPANY */}
                      <h3 className="mt-7 max-w-150 font-medium text-3xl font-black leading-[0.98] tracking-[-0.04em] text-navy sm:text-4xl md:text-[2.8rem]"  style={{
                fontFamily: "Bodoni Moda, serif",
              }}>
                        {customer.company}
                      </h3>

                      {/* FOUNDER */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-left text-[14px] font-bold uppercase tracking-[0.18em] text-secondary">
                          {customer.founder}
                        </span>
                      </div>

                      {/* CHALLENGE */}
                      {customer.challenge ? (
                        <div className="mt-10">
                          <div className="mb-3 flex items-center gap-4">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/50">
                              Challenge
                            </span>

                            <span className="h-px w-10 bg-navy/10" />
                          </div>

                          <p className="max-w-140 text-sm leading-6 text-navy/65 md:text-[15px] md:leading-7">
                            {customer.challenge}
                          </p>
                        </div>
                      ) : null}

                      {/* SOLUTION */}
                      {customer.solution ? (
                        <div className="mt-7">
                          <div className="mb-3 flex items-center gap-4">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/50">
                              Solution
                            </span>

                            <span className="h-px w-10 bg-gold/40" />
                          </div>

                          <p className="max-w-140 text-sm font-medium leading-6 text-navy md:text-[15px] md:leading-7">
                            {customer.solution}
                          </p>
                        </div>
                      ) : null}

                      {/* RESULTS */}
                      {customer.results && customer.results.length > 0 ? (
                        <div className="mt-6">
                          <hr className="mb-3 text-primary/50" />

                          <div className="grid grid-cols-3">
                            {customer.results.map((result, resultIndex) => (
                              <div
                                key={`${result.label}-${resultIndex}`}
                                className={`
                                    ${
                                      resultIndex > 0
                                        ? "border-l border-navy/10 pl-4 sm:pl-5"
                                        : ""
                                    }

                                    ${resultIndex < 2 ? "pr-4 sm:pr-5" : ""}
                                  `}
                              >
                                <div className="font-display text-2xl font-black leading-none tracking-tighter text-navy sm:text-3xl md:text-4xl">
                                  {result.value}
                                </div>

                                <p className="mt-2 max-w-32.5 text-[8px] font-bold uppercase leading-[1.45] tracking-[0.07em] text-navy/40 sm:text-[9px]">
                                  {result.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* RIGHT QUOTE */}
                    <div className="flex items-center justify-center bg-[#f4f0e8] px-6 h-[500px] sm:px-9 md:px-10">
                      <div
                        className="
                          relative
                          w-full
                          max-w-102.5
                          
                          rounded-[20px]
                          bg-[#141a32]
                          px-7
                          py-8
                          shadow-[0_20px_50px_rgba(15,23,42,0.25)]
                          transition-transform
                          duration-500
                          ease-out
                          sm:px-9
                          sm:py-10
                          group-hover:scale-[1.03]
                        "
                      >
                        {/* GOLD ACCENT */}
                        <span className="absolute bottom-7 left-0 top-7 w-0.75 bg-[#e9c176]" />

                        {/* QUOTE MARK */}
                        <div className="font-serif text-6xl leading-none text-[#e9c176]">
                          “
                        </div>

                        {/* QUOTE */}
                        <blockquote className="mt-5 font-serif text-2xl italic leading-9 text-white sm:text-[26px]">
                          {customer.quote || "-"}
                        </blockquote>

                        {/* FOOTER */}
                        <div className="mt-10 flex items-end justify-between gap-5">
                          <div>
                            <div className="mb-2 h-px w-8 bg-[#e9c176]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="h-0.5 w-full bg-navy/[0.04]">
                    <div className="h-full w-16 bg-gold" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="mt-8 flex items-center justify-between">
         

          {/* CONTROLS */}
          <div className="flex items-center gap-3">
            {/* PROGRESS */}
            <div className="flex items-center gap-2">
              {customers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => moveToSlide(index)}
                  aria-label={`Go to customer ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      currentSlide === index
                        ? "w-10 bg-gold"
                        : "w-2 bg-navy/15 hover:bg-navy/30"
                    }
                  `}
                />
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
