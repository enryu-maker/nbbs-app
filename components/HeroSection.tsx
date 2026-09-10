import HeroScribble from './Scribble';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mt-12 w-full overflow-hidden border-y border-black/5 bg-[#fbf9f8] px-2 sm:px-4 md:px-2"
    >
      <div className="mx-auto w-full max-w-container-max px-margin-mobile py-unit-lg sm:py-unit-xl">
        {/* EYEBROW */}
        <div className="mb-unit-lg sm:mb-unit-xl grid w-full grid-cols-[1fr_auto_1fr] items-center gap-unit-sm">
          <span className="h-px w-unit-lg justify-self-end bg-primary/40 sm:w-unit-xl" />

          <span className="text-label-caps text-center uppercase text-on-surface-variant">
            INTEGRATED BUSINESS SOLUTIONS
          </span>

          <span className="h-px w-unit-lg justify-self-start bg-primary/40 sm:w-unit-xl" />
        </div>

        {/* TWO-COLUMN HERO CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_auto_minmax(0,0.95fr)] items-center gap-unit-lg md:gap-x-unit-lg lg:gap-x-unit-xl">
          {/* LEFT CONTENT (TITLE + DESCRIPTION) */}
          <div className="flex w-full min-w-0 flex-col items-center justify-center text-center md:items-start md:text-left md:pr-unit-md">
            {/* TITLE */}
            <h1 className="w-full font-display text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] xl:text-[54px] font-medium tracking-tight text-primary leading-[1.14]">
              <span className="inline-block">
                From <span className="font-normal italic text-secondary">Diagnosis</span>
              </span>

              <br />

              <span className="inline-block">to Solution</span>

              <br />

              <span className="inline-block">Implementation.</span>
            </h1>

            {/* BODY */}
            <p className="mt-5 sm:mt-6 text-body-md sm:text-[17px] text-on-surface-variant/85 leading-relaxed max-w-xl">
              NB Business Solutions helps MSME founders identify what is holding their business
              back, create clarity on what needs attention, and implement practical business
              solutions for sustainable growth.
            </p>
          </div>

          {/* DIVIDER */}
          <div
            className="hidden md:block w-px bg-primary/20 self-stretch my-2"
            aria-hidden="true"
          />

          {/* RIGHT CONTENT (SCRIBBLE + CTA + TAGLINE) */}
          <div className="flex w-full min-w-0 flex-col items-center justify-center text-center md:pl-unit-md">
            {/* SCRIBBLE */}
            <div className="w-full max-w-[480px] lg:max-w-[510px]">
              <HeroScribble />
            </div>

            {/* CTA LOCKUP */}
            <div className="mt-5 sm:mt-6 flex flex-col items-center">
              <a
                href="/#services"
                className="text-button group inline-flex min-h-12 items-center justify-center gap-unit-sm rounded-md bg-primary px-unit-lg py-unit-sm uppercase tracking-widest text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary sm:px-unit-xl"
              >
                <span>Explore NBBS Ecosystem</span>

                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                  strokeWidth={2.25}
                />
              </a>

              {/* META */}
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] mt-3 sm:mt-3.5 flex items-center justify-center gap-unit-sm uppercase text-secondary">
                <span>STRATEGY</span>
                <span>•</span>
                <span>EXECUTION</span>
                <span>•</span>
                <span>GROWTH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-black/5" />
    </section>
  );
}
