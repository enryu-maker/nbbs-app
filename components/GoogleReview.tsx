// components/GoogleReview.tsx
'use client';

import { useAnchorCustomers } from '@/src/hooks';

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

  const reviews: ReviewItem[] = customers
    .filter((customer) => Boolean(customer.quote))
    .map((customer, index) => ({
      id: `${customer.company || 'customer'}-${index}`,
      name: customer.founder,
      review: customer.quote,
    }));

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        md:py-20
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      {/* =====================================================
    HEADER
====================================================== */}
      <div
        className="
    mx-auto
    w-full
    max-w-4xl
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
      mt-3
      text-3xl
      font-bold
      leading-tight
      tracking-[-0.03em]
      text-[#111827]
      sm:text-4xl
      md:text-5xl
    "
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Trusted by businessmen like you.
        </h2>
      </div>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <div
        className="
          group
          relative
          mt-12
          w-full
          overflow-hidden
        "
      >
        <div
          className="
            animate-marquee-slow
            group-hover:[animation-play-state:paused]
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
            {reviews.map((review) => (
              <ReviewCard key={`track-1-${review.id}`} review={review} />
            ))}
          </div>

          {/* =================================================
              TRACK 2
              Exact duplicate for seamless loop
          ================================================== */}

          <div
            className="
              flex
              shrink-0
              items-stretch
            "
            aria-hidden="true"
          >
            {reviews.map((review) => (
              <ReviewCard key={`track-2-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
