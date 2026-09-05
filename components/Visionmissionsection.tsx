// components/VisionMissionSection.tsx

export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="w-full border-y border-black/5 bg-[#fbf9f8]"
    >
      <div
        className="
          mx-auto
          max-w-[1500px]
          px-6
          py-10
          sm:px-10
          sm:py-12
          md:px-14
          md:py-14
          lg:px-[8%]
          lg:py-16
          xl:px-[7.5%]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-2
            lg:gap-12
            xl:gap-14
          "
        >
          {/* ============================================================
              OUR VISION
          ============================================================ */}
          <div
            className="
              group/vision
              rounded-2xl
              p-6
              -m-6
              transition-all
              duration-300
              hover:scale-[1.015]
              hover:bg-[#c9a86a]/[0.05]
              sm:p-8
              sm:-m-8
            "
          >
            <div className="flex items-start gap-3">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3">
                <span
                  className="
                    h-px w-9
                    bg-[#c9a86a]
                    transition-all
                    duration-300
                    group-hover/vision:w-14
                    sm:w-12
                    sm:group-hover/vision:w-16
                  "
                />
                <span
                  className="
                  whitespace-nowrap
                  md:text-[14px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-primary
                  sm:text-[10px]
                  sm:tracking-[0.27em]
                "
                >
                  VISION
                </span>
              </div>
            </div>

            <h2
              className="
                mt-7
                max-w-[820px]
                font-medium
                leading-[1.05]
                tracking-[-0.03em]
                text-[#172039]
                text-[34px]
                transition-colors
                duration-300
                group-hover/vision:text-[#0f1729]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[38px]
                xl:text-[44px]
              "
              style={{
                fontFamily: "Bodoni Moda, serif",
              }}
            >
              Building businesses that grow with clarity.
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[13px]
                leading-[1.7]
                text-[#34415c]
                sm:mt-8
                sm:text-[14px]
                md:text-[15px]
              "
            >
              To build a business ecosystem where MSMEs move from uncertainty to
              clarity, from clarity to action, and from action to sustainable
              growth.
            </p>
          </div>

          {/* ============================================================
              OUR MISSION
          ============================================================ */}
          <div
            className="
              group/mission
              rounded-2xl
              p-6
              -m-6
              transition-all
              duration-300
              hover:scale-[1.015]
              hover:bg-[#c9a86a]/[0.05]
              sm:p-8
              sm:-m-8
            "
          >
            <div className="flex items-start gap-3">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-px w-9
                    bg-[#c9a86a]
                    transition-all
                    duration-300
                    group-hover/mission:w-14
                    sm:w-12
                    sm:group-hover/mission:w-16
                  "
                />
                <span
                  className="
                  whitespace-nowrap
md:text-[14px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-primary
                  sm:text-[10px]
                  sm:tracking-[0.27em]
                "
                >
                  MISSION
                </span>
              </div>
            </div>

            <h2
              className="
                mt-7
                max-w-[820px]
                font-medium
                leading-[1.05]
                tracking-[-0.03em]
                text-primary
                text-[34px]
                transition-opacity
                duration-300
                group-hover/mission:opacity-90
                sm:text-[42px]
                md:text-[48px]
                lg:text-[38px]
                xl:text-[44px]
              "
              style={{
                fontFamily: "Bodoni Moda, serif",
              }}
            >
              Turning business complexity into clear, actionable decisions.
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[13px]
                leading-[1.7]
                text-primary
                sm:mt-8
                sm:text-[14px]
                md:text-[15px]
              "
            >
              NBBS combines business diagnosis, strategic thinking, practical
              frameworks and technology to help MSME founders move from
              uncertainty to clarity and from clarity to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
