// components/HeroDiagram.tsx

export default function HeroDiagram() {
  /*
   * Dense hand-drawn / tangled circle
   * ---------------------------------------------------------
   * We intentionally use many slightly different ellipses
   * so the circle feels manually scribbled rather than
   * perfectly geometric.
   */

  const scribbles = Array.from({ length: 42 }, (_, i) => {
    const angle = i * 17.3;

    const cx = 300 + Math.sin(angle * 0.11) * 7;
    const cy = 300 + Math.cos(angle * 0.13) * 8;

    const rx = 108 + Math.sin(angle * 0.17) * 25;
    const ry = 112 + Math.cos(angle * 0.19) * 23;

    const rotation =
      -22 + Math.sin(angle * 0.21) * 42;

    return {
      cx,
      cy,
      rx,
      ry,
      rotation,
      opacity: 0.68 + (i % 5) * 0.045,
    };
  });

  return (
    <svg
      viewBox="0 0 1000 600"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* =====================================================
          SCRIBBLE
      ===================================================== */}

      <g
        fill="none"
        stroke="#172039"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.9"
      >
        {scribbles.map((s, i) => (
          <ellipse
            key={i}
            cx={s.cx}
            cy={s.cy}
            rx={s.rx}
            ry={s.ry}
            transform={`rotate(${s.rotation} ${s.cx} ${s.cy})`}
            opacity={s.opacity}
          />
        ))}

        {/* Extra irregular loops inside the scribble */}
        <path
          d="
            M 190 300
            C 188 235 250 180 315 195
            C 380 210 420 270 397 330
            C 375 390 308 422 250 392
            C 195 363 174 320 190 300
          "
        />

        <path
          d="
            M 210 275
            C 245 205 335 188 385 245
            C 430 297 400 370 340 400
            C 275 430 200 385 190 325
            C 182 300 194 285 210 275
          "
        />

        <path
          d="
            M 235 235
            C 285 180 365 215 392 275
            C 418 335 365 397 300 400
            C 235 402 190 350 205 290
            C 210 268 220 250 235 235
          "
        />

        <path
          d="
            M 250 205
            C 320 180 385 235 390 300
            C 394 365 335 410 270 390
            C 210 370 188 310 215 255
            C 224 235 235 220 250 205
          "
        />
      </g>

      {/* Darker central tangled mass */}

      <g
        fill="none"
        stroke="#172039"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.82"
      >
        <ellipse
          cx="300"
          cy="300"
          rx="74"
          ry="82"
          transform="rotate(-18 300 300)"
        />

        <ellipse
          cx="300"
          cy="300"
          rx="86"
          ry="68"
          transform="rotate(27 300 300)"
        />

        <ellipse
          cx="300"
          cy="300"
          rx="62"
          ry="92"
          transform="rotate(55 300 300)"
        />

        <ellipse
          cx="300"
          cy="300"
          rx="95"
          ry="57"
          transform="rotate(-42 300 300)"
        />

        <ellipse
          cx="300"
          cy="300"
          rx="52"
          ry="76"
          transform="rotate(12 300 300)"
        />
      </g>

      {/* =====================================================
          GOLD CIRCUIT / SOLUTION LINES
      ===================================================== */}

      <g
        fill="none"
        stroke="#c9a86a"
        strokeWidth="1.4"
        strokeLinecap="square"
      >
        {/* Upper lines */}

        <path d="M405 246 H505 L535 220 H875" />
        <path d="M410 258 H525 L555 232 H875" />
        <path d="M418 270 H540 L565 248 H875" />
        <path d="M425 282 H555 L580 264 H875" />

        {/* Main central lines */}

        <path d="M410 294 H875" />
        <path d="M410 305 H875" />
        <path d="M410 316 H875" />
        <path d="M410 327 H875" />

        {/* Lower lines */}

        <path d="M425 340 H555 L580 358 H875" />
        <path d="M418 352 H540 L565 372 H875" />
        <path d="M410 364 H525 L555 386 H875" />
        <path d="M405 376 H505 L535 400 H875" />

        {/* Branching upper connections */}

        <path d="M535 220 H640 L665 195 H875" />
        <path d="M555 232 H690 L715 207 H875" />
        <path d="M580 264 H730 L750 242 H875" />

        {/* Branching lower connections */}

        <path d="M580 358 H730 L750 380 H875" />
        <path d="M565 372 H690 L715 398 H875" />
        <path d="M555 386 H640 L665 410 H875" />

        {/* Small horizontal branches */}

        <path d="M620 220 H690" />
        <path d="M660 195 H735" />
        <path d="M700 248 H770" />
        <path d="M700 352 H770" />
        <path d="M660 410 H735" />
      </g>

      {/* =====================================================
          CIRCUIT NODES
      ===================================================== */}

      <g fill="#c9a86a">
        <circle cx="410" cy="294" r="2.4" />
        <circle cx="410" cy="316" r="2.4" />
        <circle cx="505" cy="246" r="2.2" />
        <circle cx="535" cy="220" r="2.2" />
        <circle cx="555" cy="232" r="2.2" />
        <circle cx="580" cy="264" r="2.2" />
        <circle cx="580" cy="358" r="2.2" />
        <circle cx="555" cy="386" r="2.2" />
        <circle cx="535" cy="400" r="2.2" />

        <circle cx="690" cy="207" r="2.1" />
        <circle cx="750" cy="242" r="2.1" />
        <circle cx="750" cy="380" r="2.1" />
      </g>

      {/* =====================================================
          FAR RIGHT VERTICAL SOLUTION GRID
      ===================================================== */}

      <g
        stroke="#c9a86a"
        strokeWidth="1.5"
        opacity="0.9"
      >
        <line x1="900" y1="130" x2="900" y2="470" />
        <line x1="910" y1="130" x2="910" y2="470" />
        <line x1="920" y1="130" x2="920" y2="470" />
        <line x1="930" y1="130" x2="930" y2="470" />
        <line x1="940" y1="130" x2="940" y2="470" />
        <line x1="950" y1="130" x2="950" y2="470" />
      </g>

      {/* =====================================================
          SMALL GOLD FLOATING DOT
      ===================================================== */}

      <circle
        cx="470"
        cy="95"
        r="4"
        fill="#c9a86a"
      />
    </svg>
  );
}