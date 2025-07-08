import React from "react";

export default function CardStack() {
  return (
    <div className="relative w-[380px] h-[170px]">
      {/* Back card 2 */}
      <div
        className="absolute w-full h-[135px] rounded-2xl bg-zinc-800/30 shadow-md opacity-30 z-0 border border-zinc-700"
        style={{
          top: '32px',
          left: '18px',
          transform: 'rotate(-10deg) scale(0.98)',
          filter: 'blur(1.5px)'
        }}
      />
      {/* Back card 1 */}
      <div
        className="absolute w-full h-[145px] rounded-2xl bg-zinc-800/50 shadow-md opacity-50 z-10 border border-zinc-700"
        style={{
          top: '16px',
          left: '9px',
          transform: 'rotate(-5deg) scale(0.99)',
          filter: 'blur(0.7px)'
        }}
      />
      {/* Main card */}
      <div
        className="relative w-full h-[155px] rounded-2xl bg-zinc-800/80 shadow-xl p-6 flex flex-col justify-between z-20 border border-zinc-700 overflow-hidden"
        style={{
          transform: 'rotate(-2deg) scale(1)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          {/* Inline check icon SVG */}
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-400 font-semibold text-sm">On track</span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-white font-semibold text-base mb-2 leading-snug break-words">
            Nearly 30% of all business is now conducted online.<br />Your digital presence is your growth engine.
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-zinc-700 mt-2">
          <span className="text-zinc-400 text-xs">Insight • Sep 8</span>
          <span className="text-zinc-500 text-xs italic">Source: IBISWorld, 2024</span>
        </div>
      </div>
    </div>
  );
} 