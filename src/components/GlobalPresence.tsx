'use client';

import Globe from "../components/Globe";

export default function GlobalPresence() {
  return (
    <section className="relative px-4 sm:px-8 py-12 sm:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <Globe
          fluid
          opacity={0.4}
          positionClassName="absolute bottom-0 left-1/2 -translate-x-1/2"
          className="w-[220%] h-[220%]"
        />
      </div>
      <div className="relative w-full text-center">
        <h2 className="w-full text-4xl sm:text-6xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
          Serving The World, Based In
        </h2>
        <p className="mt-4 w-full text-4xl sm:text-6xl lg:text-7xl font-extrabold text-blue-600 tracking-tight">
          GMT+3
        </p>
      </div>
    </section>
  );
}


