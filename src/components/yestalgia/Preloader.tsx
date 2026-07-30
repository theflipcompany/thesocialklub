import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialKlubLogo } from "./DecathlonLogo";
import { FlipCoLogo } from "./FlipCoLogo";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#ecece7] text-black select-none overflow-hidden"
        >
          {/* VHS Grid Background */}
          <div className="absolute inset-0 yestalgia-grid-bg opacity-40 pointer-events-none" />

          {/* Centered Content */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-6 px-4 text-center"
          >
            {/* Main THE SOCIAL कLUB Logo */}
            <div className="transform scale-110 sm:scale-125">
              <SocialKlubLogo />
            </div>

            {/* THE FLIP CO. Blinking Eyelashes Logo */}
            <div className="mt-2 transform scale-110 sm:scale-125">
              <FlipCoLogo />
            </div>

            {/* Animated Retro Loading Progress Bar */}
            <div className="mt-8 w-48 sm:w-64 bg-white border-2 border-black rounded-full h-4 p-0.5 shadow-[3px_3px_0px_#000] overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#00966e] via-[#d7dd44] to-[#e95f95] rounded-full"
              />
            </div>

            <span className="font-mono text-xs font-black uppercase tracking-widest text-gray-700 animate-pulse">
              LOADING THE VIBE...
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
