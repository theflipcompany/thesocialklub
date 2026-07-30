import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export function FoundersFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissedLeft, setIsDismissedLeft] = useState(false);
  const [isDismissedRight, setIsDismissedRight] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById("behind-this-klub");
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Trigger when 15% of Behind This Klub section is in view
      },
    );

    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* LEFT SIDE: Male Founder - SOURAV */}
      <AnimatePresence>
        {isVisible && !isDismissedLeft && (
          <motion.div
            initial={{ x: -120, rotate: -25, opacity: 0 }}
            animate={{ x: -20, rotate: 12, opacity: 1 }}
            exit={{ x: -120, rotate: -25, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="fixed bottom-10 left-0 z-40 flex items-end group cursor-pointer origin-bottom-left"
          >
            <div className="relative transform group-hover:translate-x-5 group-hover:rotate-4 transition-all duration-300">
              {/* Male Founder Cutout (Sourav) */}
              <div className="relative w-16 sm:w-22 md:w-26">
                <img
                  src="/founder-male.png"
                  alt="Sourav - Social Klub Founder"
                  className="w-full h-auto drop-shadow-[4px_4px_0px_#000]"
                />
              </div>

              {/* Speech Tag: SOURAV */}
              <div className="absolute -top-10 left-4 sm:left-6 whitespace-nowrap bg-[#d7dd44] text-black font-condensed font-black text-[9px] sm:text-xs px-2.5 py-0.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] uppercase flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Sourav
              </div>

              {/* Dismiss Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDismissedLeft(true);
                }}
                aria-label="Dismiss Sourav"
                className="absolute -top-3 -right-2 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-[9px] font-bold border border-white hover:bg-red-600 transition-colors"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RIGHT SIDE: Female Co-Founder - MEHAK */}
      <AnimatePresence>
        {isVisible && !isDismissedRight && (
          <motion.div
            initial={{ x: 120, rotate: 25, opacity: 0 }}
            animate={{ x: 20, rotate: -12, opacity: 1 }}
            exit={{ x: 120, rotate: 25, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="fixed bottom-24 right-0 z-40 flex items-end group cursor-pointer origin-bottom-right"
          >
            <div className="relative transform group-hover:-translate-x-5 group-hover:-rotate-4 transition-all duration-300">
              {/* Female Founder Cutout (Mehak) */}
              <div className="relative w-20 sm:w-28 md:w-32">
                <img
                  src="/founder-female.png"
                  alt="Mehak - Social Klub Co-Founder"
                  className="w-full h-auto drop-shadow-[4px_4px_0px_#000]"
                />
              </div>

              {/* Speech Tag: MEHAK */}
              <div className="absolute -top-10 right-4 sm:right-6 whitespace-nowrap bg-[#e95f95] text-white font-condensed font-black text-[9px] sm:text-xs px-2.5 py-0.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] uppercase flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Mehak ✨
              </div>

              {/* Dismiss Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDismissedRight(true);
                }}
                aria-label="Dismiss Mehak"
                className="absolute -top-3 -left-2 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-[9px] font-bold border border-white hover:bg-red-600 transition-colors"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
