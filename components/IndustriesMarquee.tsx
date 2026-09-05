
"use client";

import { useMemo } from "react";
import { LucideSparkles } from "lucide-react";
import { useIndustryNamesQuery } from "@/src/hooks";

export default function IndustriesMarquee() {
  const { data: dynamicIndustries } = useIndustryNamesQuery();

  const currentIndustries = useMemo(() => {
    const active = dynamicIndustries || [];
    if (active.length === 0) return [];

    // Ensure the list has enough items to span large screens before duplication
    let extendedList = [...active];
    while (extendedList.length > 0 && extendedList.length < 10) {
      extendedList = [...extendedList, ...active];
    }
    return extendedList;
  }, [dynamicIndustries]);

  if (!currentIndustries || currentIndustries.length === 0) {
    return null;
  }

  return (
    <section className="w-full overflow-hidden border-y border-black/8 bg-primary py-8 md:py-10">
      {/* HEADING */}
      <div className="mb-6 text-center md:mb-8">
        <span className="text-label-caps text-secondary text-2xl">
          Industries We Serve
        </span>
      </div>

      {/* MARQUEE */}
      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex w-max items-center">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center">
            {currentIndustries.map((industry, index) => (
              <div
                key={`track-1-${industry}-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="whitespace-nowrap px-6 font-display text-lg font-bold text-white sm:px-8 sm:text-xl md:text-2xl">
                  {industry}
                </span>

                <LucideSparkles
                  aria-hidden="true"
                  className="h-3 w-3 sm:h-3 sm:w-3 shrink-0 text-secondary"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (exact duplicate for seamless continuous loop) */}
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {currentIndustries.map((industry, index) => (
              <div
                key={`track-2-${industry}-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="whitespace-nowrap px-6 font-display text-lg font-bold text-white sm:px-8 sm:text-xl md:text-2xl">
                  {industry}
                </span>

                <LucideSparkles
                  aria-hidden="true"
                  className="h-3 w-3 sm:h-3 sm:w-3 shrink-0 text-secondary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
