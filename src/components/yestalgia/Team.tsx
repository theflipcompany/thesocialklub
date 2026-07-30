import React, { useState } from "react";
import { motion } from "framer-motion";
import { MobileTeamCard, TeamMemberData } from "./MobileTeamCard";

const teamMembers: TeamMemberData[] = [
  {
    id: "sourav",
    name: "Sourav",
    role: "Co-Founder",
    badgeBg: "#d7dd44",
    badgeTextColor: "text-black",
    roleTextColor: "text-[#00966e]",
    image: `${import.meta.env.BASE_URL}sourav-image.jpeg`,
    description: "Building safe, welcoming spaces where strangers become lifelong friends.",
  },
  {
    id: "mehak",
    name: "Mehak",
    role: "Co-Founder",
    badgeBg: "#e95f95",
    badgeTextColor: "text-white",
    roleTextColor: "text-[#e95f95]",
    image: `${import.meta.env.BASE_URL}mehak-image.jpg`,
    description: (
      <span>
        The creative spark who asked{" "}
        <span className="italic font-bold">"Aaj kuch karein?"</span> and started it all.
      </span>
    ),
  },
  {
    id: "granthik",
    name: "Granthik",
    role: "Managing Head",
    badgeBg: "#0693e3",
    badgeTextColor: "text-white",
    roleTextColor: "text-[#0693e3]",
    image: `${import.meta.env.BASE_URL}granthik-image.jpeg`,
    description:
      "I came with a camera, stayed for the people, and now build experiences that bring them together.",
  },
];

export function Team() {
  const [activeFlippedId, setActiveFlippedId] = useState<string | null>(null);

  const handleToggleFlip = (id: string) => {
    setActiveFlippedId((prev) => (prev === id ? null : id));
  };

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

        {/* DESKTOP LAYOUT (>768px): Exact Existing 3-Column Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            {/* Sourav Image Frame */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 mb-5 rounded-full border-3 border-black overflow-hidden shadow-[4px_4px_0px_#000] bg-[#f9faf7] shrink-0">
              <img
                src={teamMembers[0].image}
                alt="Sourav - Co-founder"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="font-condensed text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-1">
              Sourav
            </h3>
            <p className="font-mono text-xs font-bold text-[#00966e] uppercase tracking-widest mb-4">
              Co-Founder
            </p>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              {teamMembers[0].description}
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

            {/* Mehak Image Frame */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 mb-5 rounded-full border-3 border-black overflow-hidden shadow-[4px_4px_0px_#000] bg-[#f9faf7] shrink-0">
              <img
                src={teamMembers[1].image}
                alt="Mehak - Co-founder"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="font-condensed text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-1">
              Mehak
            </h3>
            <p className="font-mono text-xs font-bold text-[#e95f95] uppercase tracking-widest mb-4">
              Co-Founder
            </p>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              {teamMembers[1].description}
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

            {/* Granthik Image Frame */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 mb-5 rounded-full border-3 border-black overflow-hidden shadow-[4px_4px_0px_#000] bg-[#f9faf7] shrink-0">
              <img
                src={teamMembers[2].image}
                alt="Granthik - Managing Head"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="font-condensed text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-1">
              Granthik
            </h3>
            <p className="font-mono text-xs font-bold text-[#0693e3] uppercase tracking-widest mb-4">
              Managing Head
            </p>
            <p className="text-gray-700 text-sm font-medium leading-relaxed">
              {teamMembers[2].description}
            </p>
          </motion.div>
        </div>

        {/* MOBILE LAYOUT (≤768px): Dynamic Island Inspired Pill Cards */}
        <div className="block md:hidden max-w-md mx-auto space-y-4 px-2">
          {teamMembers.map((member, index) => (
            <MobileTeamCard
              key={member.id}
              member={member}
              index={index}
              isFlipped={activeFlippedId === member.id}
              onToggleFlip={() => handleToggleFlip(member.id)}
            />
          ))}
        </div>

        {/* WHY WE STARTED Section (Directly after Meet The Team) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20 w-full max-w-4xl mx-auto"
          id="why-we-started"
        >
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
                Mehak said it one evening, and we realised we never had an answer beyond cafés,
                clubs, or sitting together while scrolling on our phones.
              </p>

              <p className="font-semibold text-black">
                So, in our early twenties, we decided to build the kind of space we wished existed.
              </p>

              <p>
                There were sleepless nights, endless venue hunts, ideas that failed, and countless
                baby steps. But the vision never changed to create a place where people could truly
                gather. A space that felt safe, especially for women, where strangers could become
                friends, and where moments were lived instead of recorded.
              </p>

              <div className="pt-4 border-t-2 border-gray-200">
                <p className="font-bold text-black text-lg sm:text-xl">
                  The Social कlub isn't just about events.
                </p>
                <p className="mt-2 text-[#00966e] font-semibold max-w-2xl mx-auto">
                  It's about giving people a reason to put their phones away, be present, and leave
                  feeling a little more connected than when they arrived.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
