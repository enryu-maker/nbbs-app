'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import type { Carousel } from '@/src/types';

export default function CarouselViewer({ carousel }: { carousel: Carousel }) {
  const [index, setIndex] = useState(0);
  const total = carousel.images.length;
  const slide = carousel.images[index];

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(total - 1, next)));
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(index + 1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(index - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, index]);

  if (!slide) {
    return (
      <p className="text-center text-[14px] text-[#141a32]/50">No images in this carousel.</p>
    );
  }

  return (
    <div className="w-full max-w-[360px] sm:max-w-[400px]">
      <div className="overflow-hidden rounded-3xl border border-[#141a32]/10 bg-white shadow-xl">
        <div
          className="relative w-full bg-[#141a32]/5"
          style={{ aspectRatio: '4 / 5' }}
        >
          <Image
            src={slide.url}
            alt={slide.caption || `${carousel.title} — slide ${index + 1}`}
            fill
            className="object-cover"
            sizes="400px"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#141a32]/80 to-transparent p-6 pt-16">
            <div className="flex items-end justify-between gap-4">
              <p className="text-[16px] font-medium text-white sm:text-[18px]">
                {slide.caption || carousel.title}
              </p>
              {/* <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e9c176]">
                {index + 1} / {total}
              </span> */}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="rounded-xl border border-[#141a32]/15 px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider text-[#141a32] transition enabled:hover:border-[#c0923e] enabled:hover:text-[#c0923e] disabled:opacity-30"
          >
            Prev
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {carousel.images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? 'bg-[#c0923e]' : 'bg-[#141a32]/20 hover:bg-[#141a32]/40'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className="rounded-xl bg-[#141a32] px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white transition enabled:hover:bg-[#c0923e] enabled:hover:text-[#141a32] disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-[12px] text-[#141a32]/40">
        Use arrow keys to navigate
      </p>
    </div>
  );
}
