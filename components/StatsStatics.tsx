'use client';

import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchVisitorCount } from '@/src/apis';
import { useCredibility } from '@/src/hooks';

// Animates the first number in a value like "350+", "40%", "10,000+ Visitors" from 0 once it scrolls into view.
function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const match = value.match(/\d[\d,]*/);
    const el = ref.current;
    if (!match || !el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(value);
      return;
    }

    const target = Number(match[0].replace(/,/g, ''));
    const format = (n: number) =>
      value.replace(match[0], match[0].includes(',') ? n.toLocaleString('en-IN') : String(n));
    setText(format(0));

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1500, 1);
        setText(format(Math.round(target * (1 - (1 - t) ** 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {text}
    </span>
  );
}

interface LayoutConfig {
  containerClass: string;
  getItemBorder: (index: number) => string;
}

function getLayoutConfig(count: number): LayoutConfig {
  switch (count) {
    case 1:
      return {
        containerClass: 'grid grid-cols-1 max-w-md',
        getItemBorder: () => '',
      };
    case 2:
      return {
        containerClass: 'grid grid-cols-2 max-w-3xl',
        getItemBorder: (index: number) => (index === 0 ? 'border-r border-secondary' : ''),
      };
    case 3:
      return {
        containerClass: 'grid grid-cols-1 sm:grid-cols-3 max-w-5xl',
        getItemBorder: (index: number) =>
          index < 2 ? 'border-b sm:border-b-0 sm:border-r border-secondary' : '',
      };
    default:
      return {
        containerClass: 'grid grid-cols-2 md:grid-cols-4 max-w-350',
        getItemBorder: (index: number) => {
          const isLast = index === count - 1;
          const isOddColumn = index % 2 === 0;
          const isTopRowOnMobile = index < 2 && count > 2;

          return [
            // Mobile 2-column borders
            isOddColumn ? 'border-r border-secondary' : '',
            isTopRowOnMobile ? 'border-b border-secondary' : '',
            // Reset for desktop 4-column
            'md:border-b-0',
            !isLast ? 'md:border-r md:border-secondary' : 'md:border-r-0',
          ]
            .filter(Boolean)
            .join(' ');
        },
      };
  }
}

export default function StatsSection() {
  const { stats: cmsStats } = useCredibility();
  const { data: visitorCount } = useQuery({
    queryKey: ['visitors'],
    queryFn: fetchVisitorCount,
    staleTime: Infinity,
  });

  const stats =
    visitorCount === undefined
      ? cmsStats
      : [...cmsStats, { value: visitorCount.toLocaleString('en-IN'), label: 'Website Visitors' }];

  if (stats.length === 0) {
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
            <CountUp
              value={value}
              className="mb-2 text-4xl font-display text-secondary tabular-nums"
            />

            <span className="text-xs font-sans font-medium uppercase tracking-widest text-white">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
