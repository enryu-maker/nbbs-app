import Link from 'next/link';
import type { CaseStudy } from '@/src/types';

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const highlight = study.results[0];

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col rounded-2xl border border-[#141a32]/10 bg-white p-7 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c0923e]">
            {study.industry}
          </span>
          <h2
            className="mt-3 text-[22px] font-medium leading-snug transition-colors group-hover:text-[#c0923e]"
            style={{ fontFamily: 'Bodoni Moda, serif' }}
          >
            {study.company}
          </h2>
          <p className="mt-1 text-[12px] uppercase tracking-wider text-[#141a32]/45">
            {study.founder}
          </p>
        </div>
        {highlight && (
          <div className="shrink-0 text-right">
            <p
              className="text-[28px] font-medium text-[#141a32]"
              style={{ fontFamily: 'Bodoni Moda, serif' }}
            >
              {highlight.value}
            </p>
            <p className="max-w-[100px] text-[11px] leading-4 text-[#141a32]/50">
              {highlight.label}
            </p>
          </div>
        )}
      </div>
      <p className="mt-5 text-[14px] leading-6 text-[#141a32]/65">{study.challenge}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#141a32]">
        Read case study <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
