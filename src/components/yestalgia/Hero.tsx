import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 sm:pt-44 md:pt-48 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background VHS Grid Lines */}
      <div className="absolute inset-0 yestalgia-grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Community Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 sm:mt-6 mb-4 sm:mb-6 inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-[#d7dd44] px-3 py-1 sm:px-4 sm:py-1.5 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000]"
        >
          <Sparkles
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <span className="font-condensed text-xs sm:text-base font-black tracking-widest text-black uppercase">
            Lucknow's Premier Social Community
          </span>
        </motion.div>

        {/* Main Retro CRT Frame / Video Showcase */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative my-2 sm:my-4 max-w-2xl w-full"
        >
          {/* CRT Monitor Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-black bg-black p-2.5 sm:p-4 shadow-[8px_8px_0px_#000] sm:shadow-[12px_12px_0px_#000] overflow-hidden">
            {/* Monitor Header Screen Controls */}
            <div className="flex items-center justify-between px-2.5 py-1 mb-2 bg-[#222] rounded-t-lg border border-white/20 font-mono text-[9px] sm:text-[10px] text-[#d7dd44]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold truncate">REC ● PLAY [LUCKNOW-VIBES]</span>
              </div>
              <span className="hidden xs:inline">THE SOCIAL KLUB / LUCKNOW</span>
            </div>

            {/* Video Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl border-2 border-black bg-neutral-900 group">
              <video
                src={`${import.meta.env.BASE_URL}Video-580.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />

              {/* Scanline CRT Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40" />

              {/* CRT Corner Vignette */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Monitor Dial Footer */}
            <div className="flex items-center justify-between pt-2.5 px-1 sm:px-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#d7dd44] border border-black" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00966e] border border-black" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e95f95] border border-black" />
              </div>
              <span className="font-mono text-[9px] sm:text-[11px] font-black text-white tracking-widest uppercase">
                REAL PEOPLE • REAL STORIES
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3D Chromatic Slogan Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-6 sm:mt-8 mb-4 max-w-4xl"
        >
          <div className="relative inline-block px-2 sm:px-4">
            <h1 className="font-condensed text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-black uppercase leading-none">
              FOR YOUR{" "}
              <span className="inline-block transform -skew-x-6 text-[#e95f95] drop-shadow-[2px_2px_0px_#000] sm:drop-shadow-[4px_4px_0px_#000]">
                AAJ KYA TRY करें?
              </span>
              <br />
              AND YOUR{" "}
              <span className="inline-block transform -skew-x-6 text-[#d7dd44] drop-shadow-[2px_2px_0px_#000] sm:drop-shadow-[4px_4px_0px_#000]">
                HAPPY HOURS.
              </span>
            </h1>

            {/* Vintage Stripe Graphic Behind Title */}
            <div className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#00966e] via-[#d7dd44] to-[#e95f95] border-2 border-black -skew-x-12 -z-10 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000]" />
          </div>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-xl font-semibold text-gray-800 leading-relaxed px-2">
            The Social कlub is a space for new people, real conversations and unforgettable
            experiences.
          </p>
        </motion.div>

        {/* Statement Card */}
        <div className="mt-8 sm:mt-12 w-full max-w-4xl" id="about">
          <div className="relative bg-white border-3 sm:border-4 border-black p-5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] text-center overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute right-2 bottom-0 font-condensed text-[80px] sm:text-[160px] font-black text-black/5 leading-none select-none pointer-events-none">
              KLUB
            </div>

            <h2 className="font-condensed text-3xl sm:text-6xl font-black text-black tracking-tight uppercase leading-none mb-3 sm:mb-4">
              WHAT IS{" "}
              <span className="text-[#00966e] underline decoration-[#d7dd44] decoration-4 sm:decoration-8">
                THE SOCIAL कLUB?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-sm sm:text-lg font-semibold text-gray-700 leading-relaxed mb-6 sm:mb-8">
              We're not just another social page. We're a community originated in Lucknow that brings people
              together through experiences that feel real — from cozy cafe meetups to open mics,
              game nights and rooftop sunsets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://chat.whatsapp.com/F3IgLKfIZDc8CdHgL1VDOw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto c-button -pink text-sm sm:text-base py-3 px-6 sm:py-3.5 sm:px-8 flex items-center justify-center gap-2"
              >
                Join The Klub <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#events"
                className="w-full sm:w-auto c-button -teal text-sm sm:text-base py-3 px-6 sm:py-3.5 sm:px-8 text-center"
              >
                See Upcoming Events
              </a>
            </div>
          </div>
        </div>

        {/* WHY WE STARTED Section (Directly before Behind This Klub) */}
        <div className="mt-10 sm:mt-16 w-full max-w-4xl" id="why-we-started">
          <div className="relative bg-white border-3 sm:border-4 border-black p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#00966e] text-black text-center overflow-hidden">
            {/* Tag */}
            <div className="inline-block bg-[#d7dd44] text-black font-condensed text-xs sm:text-sm font-black px-3.5 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] uppercase mb-4">
              OUR ORIGIN STORY
            </div>

            <h2 className="font-condensed text-4xl sm:text-6xl font-black text-black tracking-tight uppercase leading-none mb-6 text-center">
              WHY WE <span className="text-[#e95f95]">STARTED</span>
            </h2>

            <div className="space-y-4 text-gray-800 font-medium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              <p className="font-bold text-gray-900 text-lg sm:text-xl">
                It all started with a simple question.
              </p>

              <blockquote className="my-4 italic font-condensed font-bold text-2xl sm:text-4xl text-[#00966e] bg-[#f9faf7] py-3 px-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#e95f95] inline-block mx-auto">
                "Aaj kuch karein?"
              </blockquote>

              <p>
                Mehak said it one evening, and we realised we never had an answer beyond cafés, clubs, or sitting together while scrolling on our phones.
              </p>

              <p className="font-semibold text-black">
                So, in our early twenties, we decided to build the kind of space we wished existed.
              </p>

              <p>
                There were sleepless nights, endless venue hunts, ideas that failed, and countless baby steps. But the vision never changed to create a place where people could truly gather. A space that felt safe, especially for women, where strangers could become friends, and where moments were lived instead of recorded.
              </p>

              <div className="pt-4 border-t-2 border-gray-200">
                <p className="font-bold text-black text-lg sm:text-xl">
                  The Social कlub isn't just about events.
                </p>
                <p className="mt-2 text-[#00966e] font-semibold max-w-2xl mx-auto">
                  It's about giving people a reason to put their phones away, be present, and leave feeling a little more connected than when they arrived.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BEHIND THIS KLUB Section (Directly under Why We Started) */}
        <div className="mt-10 sm:mt-16 w-full max-w-4xl" id="behind-this-klub">
          <div className="relative bg-[#18181b] border-3 sm:border-4 border-black p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#d7dd44] text-white text-center overflow-hidden">
            {/* Tag */}
            <div className="inline-block bg-[#e95f95] text-white font-condensed text-xs sm:text-sm font-black px-3.5 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] uppercase mb-4">
              THE FACES & THE STORY
            </div>

            <h2 className="font-condensed text-4xl sm:text-6xl font-black text-[#d7dd44] tracking-tight uppercase leading-none mb-4">
              BEHIND THIS <span className="text-white">KLUB</span>
            </h2>

            <p className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-300 font-semibold leading-relaxed mb-6">
              Founded by passionate creators in Lucknow who wanted to break the routine, turn
              weekends into memories and build spaces where nobody feels like a stranger.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono text-xs text-gray-300">
              <div className="bg-[#242429] p-4 rounded-xl border border-zinc-700">
                <span className="text-[#d7dd44] font-black uppercase text-sm block mb-1">
                  ⚡ THE VISION
                </span>
                Bringing people out of screen routines into real-life conversations, cozy cafe jams
                & board game nights.
              </div>
              <div className="bg-[#242429] p-4 rounded-xl border border-zinc-700">
                <span className="text-[#e95f95] font-black uppercase text-sm block mb-1">
                  ✨ THE COMMUNITY
                </span>
                Over 1,000+ happy faces, 50+ weekend gatherings and endless memories created across
                Lucknow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
