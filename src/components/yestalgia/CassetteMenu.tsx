import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CassetteMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    id: "about",
    title: "About The Klub",
    color: "#00966E",
    bgAccent: "#6eb5a2",
    href: "#about",
    tapeNumber: "A-90",
  },
  {
    id: "events",
    title: "Upcoming Events",
    color: "#e95f95",
    bgAccent: "#f78da7",
    href: "#events",
    tapeNumber: "B-60",
  },
  {
    id: "vibe",
    title: "The Vibe",
    color: "#d7dd44",
    bgAccent: "#e2e84a",
    href: "#vibe",
    tapeNumber: "C-90",
  },
  {
    id: "signup",
    title: "Join The Klub",
    color: "#0693e3",
    bgAccent: "#8ed1fc",
    href: "https://chat.whatsapp.com/F3IgLKfIZDc8CdHgL1VDOw",
    tapeNumber: "D-45",
  },
];

export function CassetteMenu({ isOpen, onClose }: CassetteMenuProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-center bg-[#111111]/95 backdrop-blur-md pt-24 pb-12 px-6 overflow-y-auto"
        >
          {/* Grid pattern background */}
          <div className="absolute inset-0 yestalgia-grid-bg opacity-15 pointer-events-none" />

          <div className="relative mx-auto max-w-6xl w-full">
            <h2 className="text-center font-condensed text-3xl sm:text-5xl text-[#d7dd44] mb-8 tracking-wider uppercase">
              Select A Cassette Tape
            </h2>

            {/* Grid of 4 Cassette Tape Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {menuItems.map((item) => {
                const isHovered = hoveredId === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ scale: 1.04, rotate: (Math.random() - 0.5) * 4 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative block group cursor-pointer"
                  >
                    {/* Cassette Tape Shell */}
                    <div
                      className="relative rounded-2xl border-3 border-black p-4 sm:p-5 shadow-[6px_6px_0px_#000] transition-shadow duration-300 group-hover:shadow-[10px_10px_0px_#000]"
                      style={{ backgroundColor: item.color }}
                    >
                      {/* Top Screws */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="w-3 h-3 rounded-full border border-black bg-gray-300 flex items-center justify-center">
                          <div className="w-full h-[1px] bg-black transform rotate-45" />
                        </div>
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black bg-white/70 px-2 py-0.5 rounded border border-black">
                          {item.tapeNumber}
                        </span>
                        <div className="w-3 h-3 rounded-full border border-black bg-gray-300 flex items-center justify-center">
                          <div className="w-full h-[1px] bg-black transform -rotate-45" />
                        </div>
                      </div>

                      {/* Label Area */}
                      <div className="bg-white border-2 border-black rounded-lg p-3 text-center mb-4">
                        <div className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-1">
                          The Social कlub Lucknow
                        </div>
                        <h3 className="font-condensed text-2xl font-black text-black leading-tight uppercase">
                          {item.title}
                        </h3>
                      </div>

                      {/* Cassette Spools Window */}
                      <div className="bg-[#222] border-2 border-black rounded-xl p-2.5 flex items-center justify-around relative overflow-hidden">
                        {/* Magnetic Tape Strip Background */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-amber-900/80 border-y border-amber-950 opacity-90" />

                        {/* Left Spool */}
                        <div className="relative z-10 w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center">
                          <div
                            className={`w-8 h-8 rounded-full border-2 border-dashed border-white flex items-center justify-center ${
                              isHovered ? "animate-spool-fast" : "animate-spool"
                            }`}
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          </div>
                        </div>

                        {/* Tape Window Counter */}
                        <div className="relative z-10 font-mono text-[11px] text-[#d7dd44] font-bold bg-black/80 px-2 py-0.5 rounded border border-white/20">
                          00:26
                        </div>

                        {/* Right Spool */}
                        <div className="relative z-10 w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center">
                          <div
                            className={`w-8 h-8 rounded-full border-2 border-dashed border-white flex items-center justify-center ${
                              isHovered ? "animate-spool-fast" : "animate-spool"
                            }`}
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Grip Notches */}
                      <div className="flex justify-between items-center mt-3 pt-1 border-t border-black/20">
                        <div className="w-8 h-2 bg-black/30 rounded-full" />
                        <span className="font-mono text-[9px] font-bold text-black uppercase">
                          HIGH BIAS / LUCKNOW VIBES
                        </span>
                        <div className="w-8 h-2 bg-black/30 rounded-full" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Close Button */}
            <div className="mt-12 text-center">
              <button onClick={onClose} className="c-button -pink text-sm uppercase px-8 py-3">
                Close Menu ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
