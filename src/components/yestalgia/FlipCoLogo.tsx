import React from "react";
import { motion } from "framer-motion";

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
      className={`inline-flex flex-col items-center justify-center select-none group cursor-pointer ${className}`}
      aria-label="Backed by The FLIP Co. - Visit Website"
      style={{ perspective: 1000 }}
    >
      {/* "BACKED BY" Pill */}
      <div className="bg-[#d7dd44] border-2 border-black rounded-full px-4 py-0.5 text-[11px] sm:text-xs font-black font-mono tracking-widest text-black shadow-[2px_2px_0px_#000] uppercase leading-none">
        BACKED BY
      </div>

      {/* Eyelash Rays with Blink Eye Motion */}
      <motion.svg
        animate={{ scaleY: [1, 0.15, 1, 1, 0.15, 1] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 1.8,
          ease: "easeInOut",
        }}
        className="w-11 h-3.5 my-0.5 origin-center"
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
      </motion.svg>

      {/* "THE FLIP CO." Badge with 3D Vertical Flip Motion */}
      <motion.div
        animate={{ rotateX: [0, 360] }}
        transition={{
          duration: 1.0,
          repeat: Infinity,
          repeatDelay: 2.5,
          delay: 0.15,
          ease: [0.65, 0, 0.35, 1],
        }}
        whileHover={{
          rotateX: 720,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        className="bg-[#0052cc] text-white border-2 border-black rounded-full px-4.5 py-1 text-xs sm:text-sm font-black tracking-wider shadow-[3px_3px_0px_#000] uppercase font-sans leading-none group-hover:bg-[#0040a8] transition-colors"
        style={{ transformStyle: "preserve-3d" }}
      >
        THE FLIP CO.
      </motion.div>
    </a>
  );
}
