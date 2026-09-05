export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16  pb-12 md:pt-16 md:pb-16 ">
      <div className="max-w-4xl reveal">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-9 bg-[#c9a86a] sm:w-12" />
          <span className="md:text-[12px] font-bold uppercase tracking-[0.24em] text-[#c9a86a] sm:text-[10px] sm:tracking-[0.27em]">
            About NBBS
          </span>
        </div>
        <h1
          className="font-medium text-display text-primary leading-tight mb-8"
          style={{
            fontFamily: "Bodoni Moda, serif",
          }}
        >
          We don’t just tell you what to do. We help you understand what needs
          to change and why.
        </h1>
        {/* Description */}
        <p className="font-body-lg text-body-lg text-primary/50 max-w-2xl leading-relaxed mb-6">
          NB Business Solutions works with MSME leaders to bring clarity to
          complex business challenges and turn strategy into practical action.
        </p>
        <p className="font-body-lg text-body-lg text-primary/50 max-w-2xl leading-relaxed">
          With 20+ years of business experience, NBBS combines strategic
          thinking, practical frameworks, and implementation-focused solutions
          to help growing businesses understand, prioritise, and act for
          sustainable growth.
        </p>
      </div>
    </section>
  );
}
