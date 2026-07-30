import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FloatingElements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 30,
        y: (e.clientY / innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const yTranslate1 = useTransform(scrollY, [0, 1000], [0, -80]);
  const yTranslate2 = useTransform(scrollY, [0, 1000], [0, -120]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 90]);

  // Smoothly fade out floating elements as user scrolls past the Hero section (~600px - 900px)
  const heroOpacity = useTransform(scrollY, [0, 500, 850], [1, 0.6, 0]);

  return (
    <motion.div
      style={{ opacity: heroOpacity }}
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {/* Top-Left: Pink Terrazzo Donut Ring */}
      <motion.div
        style={{
          x: mousePos.x * 0.8,
          y: yTranslate1,
          rotate: rotate1,
        }}
        className="absolute top-20 left-2 sm:top-24 sm:left-10 w-16 h-16 sm:w-28 sm:h-28 animate-float-1"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[4px_4px_0px_#000]">
          <path
            d="M 50 10 A 40 40 0 1 0 90 50 A 40 40 0 0 0 50 10 Z M 50 30 A 20 20 0 1 1 30 50 A 20 20 0 0 1 50 30 Z"
            fill="#e95f95"
            stroke="#000"
            strokeWidth="3.5"
          />
          <line
            x1="30"
            y1="22"
            x2="36"
            y2="28"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="72"
            y1="35"
            x2="68"
            y2="42"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="65"
            x2="32"
            y2="60"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="65"
            y1="75"
            x2="73"
            y2="70"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Top-Right: Orange Textured Disc */}
      <motion.div
        style={{
          x: mousePos.x * -0.6,
          y: yTranslate2,
        }}
        className="absolute top-24 right-2 sm:top-28 sm:right-12 w-14 h-14 sm:w-24 sm:h-24 animate-float-2"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[4px_4px_0px_#000]">
          <circle cx="50" cy="50" r="42" fill="#f09341" stroke="#000" strokeWidth="3.5" />
          <line
            x1="32"
            y1="35"
            x2="40"
            y2="40"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="60"
            y1="30"
            x2="68"
            y2="35"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="45"
            y1="60"
            x2="55"
            y2="62"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="30"
            y1="70"
            x2="38"
            y2="72"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Crosshair Sparkle Elements */}
      <div className="absolute top-1/3 left-1/4 opacity-40">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-black animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-40">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-black animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
    </motion.div>
  );
}
