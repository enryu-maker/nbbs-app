// components/Philosophy.tsx
const principles = [
  {
    number: "01",
    title: "INTEGRITY",
    tagline: "Do what is right for the business. ",
    description:
      "We give honest advice, even when it isn’t the easiest answer. Our recommendations are driven by what genuinely serves the business. We start with facts, not assumptions.",
  },
  {
    number: "02",
    title: " TRUST ",
    tagline: "Earn it through every interaction. ",
    description:
      "Business decisions require confidence. We build trust through consistency, accountability, and standing by our commitments.",
  },
  {
    number: "03",
    title: " TRANSPARENCY ",
    tagline: "Clarity starts with the truth. ",
    description:
      "We believe you cannot solve what you cannot see. We work with facts, open conversations, and a clear understanding of the business before recommending what comes next. ",
  },
  {
    number: "04",
    title: "  RESULTS  ",
    tagline: "Make every action count.  ",
    description:
      "      Ideas have value only when they create change. We focus on practical actions, measurable progress, and outcomes that strengthen the business. ",
  },
  {
    number: "05",
    title: "  SOLUTIONS  ",
    tagline: "Solve the real problem. ",
    description:
      "     We don't believe in one-size-fits-all answers. We diagnose the root cause, find the right approach, and build solutions that can actually work.  ",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-primary text-surface py-12 md:py-14">
      <div className="max-w-[1720px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3 reveal">
          <span className="h-px w-9 bg-secondary sm:w-12" />
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-secondary sm:text-[10px] sm:tracking-[0.27em]">
            CORE VALUES
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-medium text-display text-surface leading-tight mb-8 max-w-2xl reveal"
          style={{
            fontFamily: "Bodoni Moda, serif",
          }}
        >
          What we believe shapes how we work.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-surface/15 reveal ">
          {principles.map((p) => (
            <div
              key={p.number}
              className="group flex flex-col min-h-[340px] sm:min-h-[380px] md:min-h-[440px] border-r border-b border-surface/15 px-5 py-6 sm:px-6 sm:py-8 hover:bg-secondary/5"
            >
              <span className="block text-[10px] font-bold tracking-[0.15em] text-surface/40">
                {p.number}
              </span>

              <h3 className="font-display text-headline-md text-[28px] text-surface mt-4 mb-2">
                {p.title}
              </h3>

              <p className="font-body-md font-semibold text-surface-variant text-[24px] mb-2 ">
                {p.tagline}
              </p>

              <p className="font-body-md text-surface-variant text-[18px] opacity-80 ">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}