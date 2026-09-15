// components/GoogleReview.tsx
'use client';

import { useAnchorCustomers } from '@/src/hooks';
import { googleReviews } from '@/lib/google-reviews';

interface ReviewItem {
  id: string;
  name: string;
  review: string;
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article
      className="
        mr-5
        flex
        w-[300px]
        shrink-0
        flex-col
        rounded-2xl
        border
        border-white/[0.06]
        bg-[#141a32]
        px-6
        py-7
        transition-colors
        duration-300
        hover:bg-[#17213D]
        sm:w-[340px]
        md:w-[360px]
      "
    >
      {/* QUOTE MARK */}
      <div
        className="
          font-serif
          text-3xl
          font-bold
          leading-none
          text-white
        "
      >
        &rdquo;
      </div>

      {/* REVIEW TEXT */}
      <p
        className="
          mt-4
          text-[15px]
          leading-7
          text-white
        "
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {review.review}
      </p>

      {/* FOUNDER NAME */}
      <div className="mt-auto pt-8">
        <p
          className="
            whitespace-nowrap
            text-[15px]
            font-bold
            text-white
          "
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {review.name}
        </p>
      </div>
    </article>
  );
}

export default function GoogleReview() {
  const { customers } = useAnchorCustomers();

  const customerReviews: ReviewItem[] = (customers || [])
    .filter((customer) => Boolean(customer.quote))
    .map((customer, index) => ({
      id: `${customer.company || 'customer'}-${index}`,
      name: customer.founder,
      review: customer.quote,
    }));

  const fallbackReviews: ReviewItem[] = googleReviews.map((item) => ({
    id: item.id,
    name: item.name,
    review: item.review,
  }));

  const baseReviews = customerReviews.length > 0 ? customerReviews : fallbackReviews;

  if (!baseReviews || baseReviews.length === 0) {
    return null;
  }

  // Each track needs just enough cards to exceed the widest screen (7 × 380px ≈ 2660px).
  // More than that only widens the animated layer; very wide layers get rasterized in
  // tiles, and tiles not painted in time flash as white blocks.
  const repeatCount = Math.ceil(7 / baseReviews.length);
  const displayReviews = Array.from({ length: repeatCount }, () => baseReviews).flat();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-12
        md:py-12
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-5
          text-center
        "
      >
        {/* SMALL HEADING */}
        <p
          className="
            text-sm
            font-semibold
            tracking-[0.08em]
            text-[#111827]
            sm:text-base
          "
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          What Founders Say
        </p>

        {/* MAIN HEADING */}
        <h2
          className="
            font-bold
            tracking-[-0.03em]
            text-[#111827]
            sm:text-4xl
            md:text-5xl
            lg:whitespace-nowrap
          "
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Trusted by businessmen & women like you.
        </h2>
      </div>

      {/* =====================================================
          MARQUEE
      ====================================================== */}
      <div
        className="
          relative
          mt-12
          w-full
          overflow-hidden
        "
      >
        <div
          className="
            animate-marquee-slow
            flex
            w-max
            items-stretch
          "
        >
          {/* =================================================
              TRACK 1
          ================================================== */}
          <div
            className="
              flex
              shrink-0
              items-stretch
            "
            aria-hidden={false}
          >
            {displayReviews.map((review, idx) => (
              <ReviewCard key={`track-1-${review.id}-${idx}`} review={review} />
            ))}
          </div>

          {/* =================================================
              TRACK 2
              Exact duplicate for seamless continuous loop
          ================================================== */}
          <div
            className="
              flex
              shrink-0
              items-stretch
            "
            aria-hidden="true"
          >
            {displayReviews.map((review, idx) => (
              <ReviewCard key={`track-2-${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
