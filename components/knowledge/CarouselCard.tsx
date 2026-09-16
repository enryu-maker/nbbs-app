import Image from 'next/image';
import Link from 'next/link';
import type { Carousel } from '@/src/types';

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function CarouselCard({ carousel }: { carousel: Carousel }) {
  return (
    <Link
      href={`/carousel/${carousel.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#141a32]/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div
        className="relative w-full overflow-hidden bg-[#141a32]/5"
        style={{ aspectRatio: '4 / 5' }}
      >
        {carousel.coverImage ? (
          <Image
            src={carousel.coverImage}
            alt={carousel.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-end bg-linear-to-br from-[#141a32] to-[#2a3358] p-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e9c176]">
              Carousel
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h2
          className="text-[22px] font-medium leading-snug transition-colors group-hover:text-[#c0923e]"
          style={{ fontFamily: 'Bodoni Moda, serif' }}
        >
          {carousel.title}
        </h2>
        <div className="mt-auto flex items-center justify-between pt-2 text-[12px] text-[#141a32]/45">
          <span>{formatDate(carousel.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
