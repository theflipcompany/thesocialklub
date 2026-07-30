import React from "react";

interface FlipCoLogoProps {
  className?: string;
  href?: string;
}

export function FlipCoLogo({
  className = "",
  href = "https://theflipcompany.in/",
}: FlipCoLogoProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col items-center justify-center select-none group cursor-pointer transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label="Backed by The FLIP Co. - Visit Website"
    >
      {/* "BACKED BY" Pill */}
      <div className="bg-[#d7dd44] border-2 border-black rounded-full px-3.5 py-0.5 text-[10px] sm:text-[11px] font-black font-mono tracking-widest text-black shadow-[2px_2px_0px_#000] uppercase leading-none">
        BACKED BY
      </div>

      {/* Eyelash Rays */}
      <svg
        className="w-10 h-3 my-0.5"
        viewBox="0 0 40 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="8" y1="1" x2="14" y2="11" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        <line
          x1="16"
          y1="1"
          x2="18"
          y2="11"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="1"
          x2="22"
          y2="11"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="1"
          x2="26"
          y2="11"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* "THE FLIP CO." Badge */}
      <div className="bg-[#0052cc] text-white border-2 border-black rounded-full px-4 py-1 text-xs sm:text-sm font-black tracking-wider shadow-[3px_3px_0px_#000] uppercase font-sans leading-none">
        THE FLIP CO.
      </div>
    </a>
  );
}
