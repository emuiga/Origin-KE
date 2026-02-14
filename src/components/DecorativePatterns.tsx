/**
 * Decorative SVG background patterns used across pages to break up plain white backgrounds.
 * Each variant uses a different selection and positioning of patterns.
 */

import React from "react";

// Individual pattern components for mixing and matching

/** Circle overlapping a rounded square — geometric, modern */
function CircleSquare({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
    >
      <path
        fill="#77CBB9"
        d="M115.28 23.94c-47.15 0-85.37 38.23-85.37 85.37s38.22 85.37 85.37 85.37c2.02 0 4.02-.07 6-.21 42.37-2.94 76.22-36.79 79.16-79.16.14-1.98.21-3.98.21-6 0-47.14-38.22-85.37-85.37-85.37zm6 164.52c-1.98.14-3.98.22-6 .22-43.76 0-79.37-35.6-79.37-79.37s35.61-79.37 79.37-79.37 79.37 35.61 79.37 79.37c0 2.02-.08 4.02-.22 6-2.93 39-34.16 70.22-73.15 73.15z"
      />
      <path
        fill="#77CBB9"
        d="M230.36 109.31h-78.2c-20.37 0-36.88 16.51-36.88 36.88v78.2c0 20.37 16.51 36.88 36.88 36.88h78.2c20.37 0 36.88-16.51 36.88-36.88v-78.2c0-20.37-16.51-36.88-36.88-36.88zm30.88 115.08c0 17.03-13.85 30.88-30.88 30.88h-78.2c-17.03 0-30.88-13.85-30.88-30.88v-78.2c0-17.03 13.85-30.88 30.88-30.88h78.2c17.03 0 30.88 13.85 30.88 30.88v78.2z"
      />
      <path
        fill="#77CBB9"
        d="M194.43 115.31c-2.93 39-34.16 70.22-73.15 73.15v-42.27c0-17.03 13.85-30.88 30.88-30.88h42.27z"
      />
    </svg>
  );
}

/** Filled circle with outlined circle offset — playful depth */
function DoubleCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
    >
      <circle cx="159.09" cy="160.12" r="119.42" fill="#77CBB9" />
      <circle
        cx="140.91"
        cy="139.88"
        r="119.42"
        fill="none"
        stroke="#252634"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
    </svg>
  );
}

/** Two L-shapes — architectural, minimal */
function LShapes({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
    >
      <path fill="#d6d6e9" d="M25.36 226.56L25.36 20.92 222.12 20.92" />
      <path fill="#77CBB9" d="M77.88 279.08L77.88 73.44 274.64 73.44" />
    </svg>
  );
}

/** Leaf/vine organic shape */
function LeafVine({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
    >
      <path
        fill="#77CBB9"
        d="M224.49 197.82c-25.8-11.64-51.65-23.18-77.4-34.92-13.9-6.34-32.02-15.07-39.07-29.66 4.38.79 8.82 1.3 13.26 1.55 12.26.69 25.01-2.38 29.18-15.31 3.41-10.56-.88-22.85-10.74-28.23-10.49-5.73-24.41-3.62-32.96 4.63-7 6.75-10.2 16.72-9.65 26.36-3.68-1.19-6.84-2.41-9.08-3.44-23.99-11.06-41.64-34.78-38.98-61.99.5-5.12-7.5-5.09-8 0-2.76 28.22 14.85 54.36 39.32 67.11 5.86 3.05 12.03 5.43 18.37 7.19 3.59 11.33 12.19 20.06 21.86 26.63 13.67 9.3 29.6 15.28 44.59 22.05l55.26 24.93c4.66 2.1 8.73-4.79 4.04-6.91zM105.06 121.5c-.46-10.87 5.27-22.11 16.42-24.86 9.83-2.43 20.82 2.51 22.04 13.32 2.24 19.81-20.27 18.95-38.15 14.61-.15-1-.26-2.02-.3-3.07z"
      />
      <path
        fill="#77CBB9"
        d="M258.06 206.7a805.18 805.18 0 01-47.48-48.18c-3.47-3.82-9.11 1.85-5.66 5.66a806.35 806.35 0 0042.69 43.65c-21.36 7.36-41.45 17.93-59.56 31.5-4.07 3.05-.09 10 4.04 6.91 19.42-14.55 41.03-25.67 64.21-32.86 2.77-.86 4.04-4.56 1.77-6.69z"
      />
    </svg>
  );
}

/** Flowing parallel curves */
function FlowingCurves({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
    >
      <path
        fill="none"
        stroke="#77CBB9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
        d="M81.72 62.56c.41.71 28.63-18.15 29.33-16.93 1.85 3.21-67.31 69.61-66.13 71.66 2.42 4.2 123.46-78.01 126.38-72.96 3.18 5.51-130.65 105.21-128.83 108.36 2.54 4.39 160.71-101.53 164.49-94.97 2.81 4.86-168.92 120.85-164.58 128.37 2.3 3.98 191.16-117.05 194.06-112.04 3.86 6.68-183.87 133.91-181.15 138.63 2.17 3.76 195.06-117.62 197.23-113.87 4.67 8.08-182.21 129.73-178.27 136.55s183.31-112.81 186.33-107.58c3.86 6.68-158.76 118.78-156.03 123.51 1.87 3.24 150.31-95.25 153.98-88.9 3.11 5.39-110.46 91.16-107.66 96.02 1.76 3.05 95.18-60.86 97.74-56.43"
      />
    </svg>
  );
}

// ─── Page-specific pattern layouts ───────────────────────────────────
// Patterns are distributed so that at no point is the viewport without a pattern.
// Opacity in 0.06–0.08 range for subtle, barely-there visibility.
// Patterns repeat freely across pages.

export function AboutPatterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — hero area */}
      <LeafVine className="absolute -top-10 -right-16 w-[340px] sm:w-[420px] opacity-[0.08]" />
      <LShapes className="absolute top-4 -left-12 w-[200px] sm:w-[260px] opacity-[0.07] -rotate-12" />
      {/* Mid-upper — between hero and team heading */}
      <FlowingCurves className="absolute top-[18%] right-[5%] w-[320px] sm:w-[440px] opacity-[0.06]" />
      <CircleSquare className="absolute top-[28%] -left-20 w-[280px] sm:w-[360px] opacity-[0.07]" />
      {/* Mid — team members area */}
      <DoubleCircle className="absolute top-[42%] -right-16 w-[300px] sm:w-[400px] opacity-[0.06]" />
      <LeafVine className="absolute top-[55%] -left-16 w-[280px] sm:w-[360px] opacity-[0.07] rotate-180" />
      {/* Mid-lower — later team members / join us */}
      <LShapes className="absolute top-[68%] right-[8%] w-[220px] sm:w-[300px] opacity-[0.08] rotate-90" />
      <FlowingCurves className="absolute top-[78%] -left-24 w-[360px] sm:w-[480px] opacity-[0.06]" />
      {/* Bottom */}
      <CircleSquare className="absolute -bottom-10 -right-16 w-[260px] sm:w-[340px] opacity-[0.07]" />
      <DoubleCircle className="absolute -bottom-20 left-[10%] w-[240px] sm:w-[320px] opacity-[0.06]" />
    </div>
  );
}

export function HomePatterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — hero area */}
      <CircleSquare className="absolute -top-8 -left-16 w-[260px] sm:w-[340px] opacity-[0.07]" />
      <LeafVine className="absolute top-[8%] -right-12 w-[300px] sm:w-[400px] opacity-[0.08]" />
      {/* Upper-mid — why choose us */}
      <LShapes className="absolute top-[22%] left-[5%] w-[220px] sm:w-[300px] opacity-[0.08] -rotate-6" />
      <FlowingCurves className="absolute top-[30%] -right-20 w-[340px] sm:w-[460px] opacity-[0.06]" />
      {/* Mid — clients section */}
      <DoubleCircle className="absolute top-[42%] -left-20 w-[280px] sm:w-[360px] opacity-[0.06]" />
      <CircleSquare className="absolute top-[50%] right-[3%] w-[240px] sm:w-[320px] opacity-[0.07]" />
      {/* Lower-mid — featured projects / testimonials */}
      <LeafVine className="absolute top-[62%] -left-12 w-[260px] sm:w-[340px] opacity-[0.07] rotate-180" />
      <LShapes className="absolute top-[72%] -right-16 w-[200px] sm:w-[280px] opacity-[0.08] rotate-45" />
      {/* Bottom — GMT+3 / footer area */}
      <FlowingCurves className="absolute top-[85%] left-[8%] w-[360px] sm:w-[480px] opacity-[0.06]" />
      <DoubleCircle className="absolute -bottom-16 -right-20 w-[300px] sm:w-[400px] opacity-[0.06]" />
    </div>
  );
}

export function ContactPatterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — hero */}
      <DoubleCircle className="absolute -top-12 -left-20 w-[300px] sm:w-[400px] opacity-[0.06]" />
      <LeafVine className="absolute top-[5%] -right-12 w-[280px] sm:w-[360px] opacity-[0.08]" />
      {/* Mid-upper — calendar + form area */}
      <FlowingCurves className="absolute top-[22%] -left-16 w-[320px] sm:w-[440px] opacity-[0.06]" />
      <CircleSquare className="absolute top-[30%] -right-20 w-[260px] sm:w-[360px] opacity-[0.07]" />
      {/* Mid — form area */}
      <LShapes className="absolute top-[45%] left-[6%] w-[220px] sm:w-[300px] opacity-[0.08] rotate-180" />
      <DoubleCircle className="absolute top-[55%] -right-16 w-[260px] sm:w-[340px] opacity-[0.06]" />
      {/* Lower — FAQ area */}
      <LeafVine className="absolute top-[70%] -left-14 w-[280px] sm:w-[380px] opacity-[0.07]" />
      <FlowingCurves className="absolute top-[80%] right-[5%] w-[340px] sm:w-[460px] opacity-[0.06]" />
      {/* Bottom */}
      <CircleSquare className="absolute -bottom-10 left-[15%] w-[240px] sm:w-[320px] opacity-[0.07]" />
      <LShapes className="absolute -bottom-8 -right-12 w-[200px] sm:w-[280px] opacity-[0.08] -rotate-12" />
    </div>
  );
}

export function PortfolioPatterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — hero / services header */}
      <FlowingCurves className="absolute -top-10 -right-16 w-[340px] sm:w-[460px] opacity-[0.06]" />
      <LShapes className="absolute top-[5%] -left-12 w-[220px] sm:w-[300px] opacity-[0.08]" />
      {/* Upper-mid — services grid */}
      <CircleSquare className="absolute top-[18%] -right-20 w-[280px] sm:w-[380px] opacity-[0.07]" />
      <LeafVine className="absolute top-[25%] -left-16 w-[260px] sm:w-[340px] opacity-[0.08]" />
      {/* Mid — statistics */}
      <DoubleCircle className="absolute top-[38%] right-[5%] w-[280px] sm:w-[360px] opacity-[0.06]" />
      <FlowingCurves className="absolute top-[48%] -left-20 w-[320px] sm:w-[440px] opacity-[0.06]" />
      {/* Lower-mid — carousel */}
      <LShapes className="absolute top-[58%] -right-12 w-[240px] sm:w-[320px] opacity-[0.08] rotate-90" />
      <CircleSquare className="absolute top-[68%] -left-16 w-[260px] sm:w-[340px] opacity-[0.07]" />
      {/* Bottom */}
      <LeafVine className="absolute top-[80%] right-[8%] w-[280px] sm:w-[380px] opacity-[0.07] rotate-180" />
      <DoubleCircle className="absolute -bottom-16 -left-20 w-[300px] sm:w-[400px] opacity-[0.06]" />
    </div>
  );
}

export function ProcessPatterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — hero */}
      <LeafVine className="absolute -top-8 -right-16 w-[300px] sm:w-[400px] opacity-[0.08]" />
      <DoubleCircle className="absolute top-[5%] -left-16 w-[260px] sm:w-[340px] opacity-[0.06]" />
      {/* Upper-mid — process steps 1-2 */}
      <CircleSquare className="absolute top-[18%] right-[5%] w-[260px] sm:w-[360px] opacity-[0.07]" />
      <FlowingCurves className="absolute top-[28%] -left-20 w-[340px] sm:w-[460px] opacity-[0.06]" />
      {/* Mid — process steps 3-4 */}
      <LShapes className="absolute top-[40%] -right-12 w-[240px] sm:w-[320px] opacity-[0.08] rotate-45" />
      <LeafVine className="absolute top-[50%] -left-14 w-[260px] sm:w-[340px] opacity-[0.07] rotate-180" />
      {/* Lower-mid — process steps 5-6 */}
      <DoubleCircle className="absolute top-[62%] right-[3%] w-[280px] sm:w-[380px] opacity-[0.06]" />
      <CircleSquare className="absolute top-[72%] -left-16 w-[240px] sm:w-[320px] opacity-[0.07]" />
      {/* Bottom — CTA */}
      <FlowingCurves className="absolute top-[85%] -right-20 w-[360px] sm:w-[480px] opacity-[0.06]" />
      <LShapes className="absolute -bottom-8 left-[10%] w-[220px] sm:w-[300px] opacity-[0.08] -rotate-12" />
    </div>
  );
}

export function BlogPatterns() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top — hero */}
      <LShapes className="absolute -top-8 -right-16 w-[220px] sm:w-[300px] opacity-[0.08]" />
      <FlowingCurves className="absolute top-[5%] -left-16 w-[320px] sm:w-[440px] opacity-[0.06]" />
      {/* Mid — posts grid */}
      <DoubleCircle className="absolute top-[25%] right-[3%] w-[280px] sm:w-[360px] opacity-[0.06]" />
      <LeafVine className="absolute top-[38%] -left-14 w-[260px] sm:w-[340px] opacity-[0.08]" />
      <CircleSquare className="absolute top-[50%] -right-20 w-[260px] sm:w-[360px] opacity-[0.07]" />
      {/* Lower */}
      <LShapes className="absolute top-[65%] left-[5%] w-[220px] sm:w-[300px] opacity-[0.08] rotate-90" />
      <FlowingCurves className="absolute top-[78%] -right-16 w-[340px] sm:w-[460px] opacity-[0.06]" />
      {/* Bottom */}
      <DoubleCircle className="absolute -bottom-16 left-[15%] w-[280px] sm:w-[360px] opacity-[0.06]" />
      <LeafVine className="absolute -bottom-10 -right-12 w-[260px] sm:w-[340px] opacity-[0.07] rotate-180" />
    </div>
  );
}
