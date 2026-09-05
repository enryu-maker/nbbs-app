"use client";

import { useCredibility } from "@/src/hooks";

interface LayoutConfig {
  containerClass: string;
  getItemBorder: (index: number) => string;
}

function getLayoutConfig(count: number): LayoutConfig {
  switch (count) {
    case 1:
      return {
        containerClass: "grid grid-cols-1 max-w-md",
        getItemBorder: () => "",
      };
    case 2:
      return {
        containerClass: "grid grid-cols-2 max-w-3xl",
        getItemBorder: (index: number) =>
          index === 0 ? "border-r border-secondary" : "",
      };
    case 3:
      return {
        containerClass: "grid grid-cols-1 sm:grid-cols-3 max-w-5xl",
        getItemBorder: (index: number) =>
          index < 2
            ? "border-b sm:border-b-0 sm:border-r border-secondary"
            : "",
      };
    default:
      return {
        containerClass: "grid grid-cols-2 md:grid-cols-4 max-w-350",
        getItemBorder: (index: number) => {
          const isLast = index === count - 1;
          const isOddColumn = index % 2 === 0;
          const isTopRowOnMobile = index < 2 && count > 2;

          return [
            // Mobile 2-column borders
            isOddColumn ? "border-r border-secondary" : "",
            isTopRowOnMobile ? "border-b border-secondary" : "",
            // Reset for desktop 4-column
            "md:border-b-0",
            !isLast ? "md:border-r md:border-secondary" : "md:border-r-0",
          ]
            .filter(Boolean)
            .join(" ");
        },
      };
  }
}

export default function StatsSection() {
  const { stats } = useCredibility();

  if (!stats || stats.length === 0) {
    return null;
  }

  const { containerClass, getItemBorder } = getLayoutConfig(stats.length);

  return (
    <section className="w-full border-y border-black/8 bg-primary">
      <div className={`mx-auto ${containerClass}`}>
        {stats.map(({ value, label }, index) => (
          <div
            key={`${label}-${index}`}
            className={`
              flex min-h-37.5 flex-col items-center justify-center
              px-5 py-8 text-center
              ${getItemBorder(index)}
            `}
          >
            <span className="mb-2 text-4xl font-display text-secondary">
              {value}
            </span>

            <span className="text-xs font-sans font-medium uppercase tracking-widest text-white">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
