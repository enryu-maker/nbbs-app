export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#fbf9f8] text-[#141a32]">
      {/* ============================================================
          CONTACT SECTION
      ============================================================ */}

      <div className="relative overflow-hidden py-10 md:py-10">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-105 w-105 rounded-full bg-[#e9c176]/10 blur-3xl" />

          <div className="absolute -left-32 top-1/3 h-90 w-90 rounded-full bg-[#141a32]/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#141a32 1px, transparent 1px), linear-gradient(90deg, #141a32 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        {/* ============================================================
            MAIN CONTAINER
        ============================================================ */}

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* ============================================================
              HEADING
          ============================================================ */}

          <h1
            className="mb-8 font-medium text-[44px] leading-none md:text-[50px]"
            style={{
              fontFamily: "Bodoni Moda, serif",
            }}
          >
            Contact Us
          </h1>

          {/* ============================================================
              CONTACT INFO
          ============================================================ */}

          <div className="mx-auto max-w-2xl">
            <div className="w-full">

              {/* ======================================================
                  CONTACT
              ====================================================== */}

              <a href="tel:+919145789151" className="group block py-2">
                <div className="flex items-center gap-4">

                  {/* Phone Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[#e9c176]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 2-1 3-3 3C10.8 21 3 13.2 3 7c0-2 1-3 2-3Z"
                      />
                    </svg>
                  </div>

                  {/* Contact Text */}
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#141a32]">
                      Contact
                    </p>

                    <p className="mt-1 text-[18px] font-semibold text-[#141a32]">
                      +91 9145789151
                    </p>
                  </div>
                </div>
              </a>

              {/* ======================================================
                  EMAIL
              ====================================================== */}

              <a href="mailto:connect@nbbs.in" className="group block py-2">
                <div className="flex items-center gap-4">

                  {/* Email Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[#e9c176]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />

                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  {/* Email Text */}
                  <div className="mb-5">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#141a32]">
                      Email
                    </p>

                    <p className="mt-1 text-[18px] font-semibold text-[#141a32]">
                      connect@nbbs.in
                    </p>
                  </div>
                </div>
              </a>

              {/* ======================================================
                  LOCATION
              ====================================================== */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=8%2C%202nd%20Floor%2C%20Smita%20Apartment%202%20Patil%20Lane%2C%202%2C%20College%20Rd%2C%20opp.%20Magnum%20Hospital%2C%20Nashik%2C%20Maharashtra%20422005%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-2"
              >
                <div className="flex items-start gap-4">

                  {/* Location Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[#e9c176]
                      transition-all
                      duration-300
                      ease-out
                      group-hover:scale-105
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                      />

                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                  </div>

                  {/* Location Text */}
                  <div className="mb-5">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#141a32]">
                      Location
                    </p>

                    <p className="mt-1 text-[18px] font-semibold leading-7 text-[#141a32]">
                      8, 2nd Floor, Smita Apartment 2 Patil Lane, 2,
                      College Rd, opp. Magnum Hospital, Nashik,
                      Maharashtra 422005, India
                    </p>
                  </div>
                </div>
              </a>

              {/* ======================================================
                  GOOGLE MAP
              ====================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#c6c6ce]
                  bg-white
                "
              >
                {/* Google Map */}
                <div className="h-64 w-full overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=8%2C%202nd%20Floor%2C%20Smita%20Apartment%202%20Patil%20Lane%2C%202%2C%20College%20Rd%2C%20opp.%20Magnum%20Hospital%2C%20Nashik%2C%20Maharashtra%20422005%2C%20India&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                    }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NB Business Solutions Location"
                  />
                </div>

                {/* Location Details */}
                <div className="flex items-center justify-between gap-4 px-5 py-4">

                  {/* View Map */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=8%2C%202nd%20Floor%2C%20Smita%20Apartment%202%20Patil%20Lane%2C%202%2C%20College%20Rd%2C%20opp.%20Magnum%20Hospital%2C%20Nashik%2C%20Maharashtra%20422005%2C%20India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      shrink-0
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#c0923e]
                      transition-colors
                      hover:text-[#141a32]
                    "
                  >
                    View Map →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
