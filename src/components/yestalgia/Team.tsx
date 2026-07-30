import React from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles, UserCheck } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 bg-[#ecece7] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 yestalgia-grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block bg-[#00966e] text-white font-condensed text-base font-black px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] uppercase mb-4">
            The People Behind The Magic
          </div>
          <h2 className="font-condensed text-5xl sm:text-7xl font-black text-black tracking-tight uppercase leading-none mb-4">
            MEET THE <span className="text-[#e95f95]">TEAM</span>
          </h2>
          <p className="text-gray-700 font-semibold text-base sm:text-lg">
            The passionate crew building authentic community & real-world connections.
          </p>
        </div>

        {/* Team Members Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* SOURAV - CO-FOUNDER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform"
          >
            <div className="absolute top-4 right-4 bg-[#d7dd44] text-black font-condensed font-black text-xs px-3 py-1 rounded-full border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
              Co-Founder
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 rounded-2xl bg-[#00966e]/10 border-3 border-black flex items-center justify-center p-3 shadow-[4px_4px_0px_#000]">
              <UserCheck className="w-10 h-10 text-[#00966e]" />
            </div>

            <h3 className="font-condensed text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-1">
              Sourav
            </h3>
            <p className="font-mono text-xs font-bold text-[#00966e] uppercase tracking-widest mb-4">
              Co-Founder
            </p>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              Building safe, welcoming spaces where strangers become lifelong friends.
            </p>
          </motion.div>

          {/* MEHAK - CO-FOUNDER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform"
          >
            <div className="absolute top-4 right-4 bg-[#e95f95] text-white font-condensed font-black text-xs px-3 py-1 rounded-full border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
              Co-Founder
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 rounded-2xl bg-[#e95f95]/10 border-3 border-black flex items-center justify-center p-3 shadow-[4px_4px_0px_#000]">
              <Sparkles className="w-10 h-10 text-[#e95f95]" />
            </div>

            <h3 className="font-condensed text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-1">
              Mehak
            </h3>
            <p className="font-mono text-xs font-bold text-[#e95f95] uppercase tracking-widest mb-4">
              Co-Founder
            </p>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              The creative spark who asked{" "}
              <span className="italic font-bold">"Aaj kuch karein?"</span> and started it all.
            </p>
          </motion.div>

          {/* GRANTHIK - MANAGING HEAD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#0693e3] flex flex-col items-center text-center relative group hover:-translate-y-1.5 transition-transform"
          >
            <div className="absolute top-4 right-4 bg-[#0693e3] text-white font-condensed font-black text-xs px-3 py-1 rounded-full border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
              Managing Head
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 rounded-2xl bg-[#0693e3]/10 border-3 border-black flex items-center justify-center p-3 shadow-[4px_4px_0px_#000]">
              <Camera className="w-10 h-10 text-[#0693e3]" />
            </div>

            <h3 className="font-condensed text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-1">
              Granthik
            </h3>
            <p className="font-mono text-xs font-bold text-[#0693e3] uppercase tracking-widest mb-4">
              Managing Head
            </p>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              I came with a camera, stayed for the people, and now build experiences that bring them
              together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
