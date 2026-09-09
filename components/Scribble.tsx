'use client';

import { useMemo } from 'react';
import { CornerRightDown, CornerUpRight } from 'lucide-react';

function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function createScribble(index: number): string {
  const cx = round(178 + Math.sin(index * 2.37) * 6);
  const cy = round(175 + Math.cos(index * 1.83) * 6);

  const rx = round(120 + Math.sin(index * 1.71) * 35 + Math.cos(index * 0.73) * 25);

  const ry = round(120 + Math.cos(index * 1.29) * 35 + Math.sin(index * 0.91) * 25);

  const rotation = round(-25 + Math.sin(index * 1.41) * 38 + index * 4.7);

  const points: { x: number; y: number }[] = [];

  for (let p = 0; p < 12; p++) {
    const angle = (Math.PI * 2 * p) / 12 + Math.sin(index * 0.91 + p * 1.73) * 0.14;

    const radiusX =
      rx * (0.82 + Math.sin(index * 1.17 + p * 2.11) * 0.17 + Math.cos(index * 0.63 + p) * 0.07);

    const radiusY =
      ry * (0.82 + Math.cos(index * 1.31 + p * 1.77) * 0.17 + Math.sin(index * 0.71 + p) * 0.07);

    const localX = Math.cos(angle) * radiusX;
    const localY = Math.sin(angle) * radiusY;

    const radians = (rotation * Math.PI) / 180;

    const rotatedX = localX * Math.cos(radians) - localY * Math.sin(radians);

    const rotatedY = localX * Math.sin(radians) + localY * Math.cos(radians);

    points.push({
      x: round(cx + rotatedX),
      y: round(cy + rotatedY),
    });
  }

  const midpoint = (a: { x: number; y: number }, b: { x: number; y: number }) => ({
    x: round((a.x + b.x) / 2),
    y: round((a.y + b.y) / 2),
  });

  let path = '';

  const firstMid = midpoint(points[0], points[1]);

  path += `M ${firstMid.x} ${firstMid.y} `;

  for (let i = 1; i <= points.length; i++) {
    const current = points[i % points.length];
    const next = points[(i + 1) % points.length];

    const mid = midpoint(current, next);

    path += `Q ${current.x} ${current.y} ${mid.x} ${mid.y} `;
  }

  path += 'Z';

  return path;
}

function createInnerLoop(index: number) {
  const cx = round(180 + Math.sin(index * 2.17) * 9);
  const cy = round(180 + Math.cos(index * 1.73) * 17);

  const rx = round(79 + Math.sin(index * 1.19) * 60);
  const ry = round(69 + Math.cos(index * 1.43) * 50);

  const rotation = Math.round(index * 19 - 35);

  return {
    cx,
    cy,
    rx,
    ry,
    rotation,
  };
}

/* ============================================================
   GOLD CIRCUIT LINE GROUPS
   ============================================================ */

const g1 = [590, 598, 606, 614];
const g2 = [642, 650, 658];
const g3 = [686, 694, 702];
const g4 = [730, 738, 746];

/*
 * All vertical lines.
 */
const verticalLines = [...g1, ...g2, ...g3, ...g4];

/*
 * Circuit starts here.
 */
const startX = 420;

/*
 * IMPORTANT:
 *
 * Every horizontal line now ends at the same coordinate as the
 * last remaining vertical bus line (the last entry in g4), so
 * nothing extends past it.
 */
const endX = g4[g4.length - 1];

/*
 * Vertical bus height.
 * Set vBottom = 244 (the bottom-most horizontal circuit line)
 * and vTop = 38 so the bus lines leave room for the Clarity label above them.
 */
const vTop = 38;
const vBottom = 244;

/* ============================================================
   GOLD CIRCUIT PATHS
   ============================================================ */

const goldCircuitPaths = [
  /* ----------------------------------------------------------
     TOP THROUGH-LINES
     ---------------------------------------------------------- */

  `M ${startX} 106 H ${endX}`,
  `M ${startX} 113 H ${endX}`,
  `M ${startX} 120 H ${endX}`,

  /* ----------------------------------------------------------
     UPPER STEPPED LINES
     ---------------------------------------------------------- */

  `M ${startX} 143 H ${g1[0] - (143 - 127)} L ${g1[0]} 127 H ${endX}`,

  `M ${startX} 149 H ${g1[1] - (149 - 133)} L ${g1[1]} 133 H ${endX}`,

  `M ${startX} 155 H ${g1[2] - (155 - 139)} L ${g1[2]} 139 H ${endX}`,

  `M ${startX} 161 H ${g1[3] - (161 - 145)} L ${g1[3]} 145 H ${endX}`,

  `M ${startX} 167 H ${g2[0] - (167 - 151)} L ${g2[0]} 151 H ${endX}`,

  /* ----------------------------------------------------------
     CENTER CHEVRON
     ---------------------------------------------------------- */

  `M ${g2[0]} 150 L ${g2[0] - 30} 175 L ${g2[0]} 193`,

  /* ----------------------------------------------------------
     CENTER LINE
     ---------------------------------------------------------- */

  `M ${startX} 175 H ${endX}`,

  /* ----------------------------------------------------------
     LOWER STEPPED LINES
     ---------------------------------------------------------- */

  `M ${startX} 183 H ${g2[0] - (199 - 183)} L ${g2[0]} 199 H ${endX}`,

  `M ${startX} 189 H ${g1[3] - (205 - 189)} L ${g1[3]} 205 H ${endX}`,

  `M ${startX} 195 H ${g1[2] - (211 - 195)} L ${g1[2]} 211 H ${endX}`,

  `M ${startX} 201 H ${g1[1] - (217 - 201)} L ${g1[1]} 217 H ${endX}`,

  `M ${startX} 207 H ${g1[0] - (223 - 207)} L ${g1[0]} 223 H ${endX}`,

  /* ----------------------------------------------------------
     BOTTOM THROUGH-LINES
     ---------------------------------------------------------- */

  `M ${startX} 230 H ${endX}`,
  `M ${startX} 237 H ${endX}`,
  `M ${startX} 244 H ${endX}`,
];

/* ============================================================
   HERO SCRIBBLE
   ============================================================ */

export default function HeroScribble({ className = '' }: { className?: string } = {}) {
  const scribbles = useMemo(
    () => Array.from({ length: 72 }, (_, index) => createScribble(index)),
    [],
  );

  return (
    <div
      className={`relative w-full max-w-[1050px] aspect-[610/350] select-none overflow-hidden border-none outline-none ${className}`}
    >
      {/* CHAOS LABEL */}
      <div className="absolute top-1.5 sm:top-0 left-[7%] sm:left-[9%] z-10 flex items-center gap-1 sm:gap-1.5 text-[#172039]">
        <span className="font-display italic font-semibold text-xs sm:text-sm md:text-base tracking-wide pb-6">
          Chaos
        </span>
        <CornerRightDown className="psize-6 sm:size-6" strokeWidth={2.25} />
      </div>

      {/* CLARITY LABEL */}
      <div className="absolute top-1.5 sm:top-0 right-[6%] sm:right-[8%] z-10 flex items-center gap-1 sm:gap-1.5 text-[#c9a86a]">
        <CornerUpRight className="size-6 sm:size-6" strokeWidth={2.25} />
        <span className="font-display italic font-semibold text-xs sm:text-sm md:text-base tracking-wide pb-2">
          Clarity
        </span>
      </div>

      <svg
        viewBox="145 0 610 350"
        preserveAspectRatio="xMidYMid meet"
        className="
          absolute
          inset-0
          h-full
          w-full
          border-none
          outline-none
        "
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* =====================================================
            HARD SVG BOUNDARY
            ===================================================== */}

        <defs>
          <clipPath id="hero-circuit-clip">
            <rect x="145" y="0" width="610" height="350" />
          </clipPath>
          <linearGradient
            id="circuit-linear-gradient"
            x1={startX}
            y1="0"
            x2={endX}
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#172039" />
            <stop offset="100%" stopColor="#c9a86a" />
          </linearGradient>
        </defs>

        <g clipPath="url(#hero-circuit-clip)">
          {/* ===================================================
              LAYER 1: GOLD CIRCUIT LINES
              =================================================== */}
          <g
            fill="none"
            stroke="url(#circuit-linear-gradient)"
            strokeWidth="1.35"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity="1"
          >
            {goldCircuitPaths.map((d, index) => (
              <path key={`circuit-${index}`} d={d} />
            ))}
          </g>
          {/* ===================================================
              LAYER 2: VERTICAL BUS
              =================================================== */}
          <g
            fill="none"
            stroke="#c9a86a"
            strokeWidth="1.35"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity="1"
          >
            {verticalLines.map((x) => (
              <path key={`bus-${x}`} d={`M ${x} ${vTop} V ${vBottom}`} />
            ))}
          </g>{' '}
          {/* ===================================================
              LAYER 3: OUTER TANGLED SCRIBBLE
              =================================================== */}
          <g
            transform="translate(165 0)"
            fill="none"
            stroke="#172039"
            strokeWidth="1.05"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          >
            {scribbles.map((path, index) => (
              <path key={index} d={path} />
            ))}
          </g>
          {/* ===================================================
              LAYER 4: INNER DENSE LOOPS
              =================================================== */}
          <g
            transform="translate(165 0)"
            fill="none"
            stroke="#172039"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.82"
          >
            {Array.from({ length: 35 }).map((_, index) => {
              const loop = createInnerLoop(index);

              return (
                <ellipse
                  key={`inner-${index}`}
                  cx={loop.cx}
                  cy={loop.cy}
                  rx={loop.rx}
                  ry={loop.ry}
                  transform={`rotate(
                      ${loop.rotation}
                      ${loop.cx}
                      ${loop.cy}
                    )`}
                />
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
