import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Sparkles } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "New People",
    description:
      "Meet interesting people, break out of small routines and make real, meaningful connections in Lucknow.",
    badge: "Community",
    icon: Users,
    color: "#d7dd44",
  },
  {
    num: "02",
    title: "Real Stories",
    description:
      "Every gathering leaves a mark. Share shayari, open mic moments, deep talks and stories worth remembering.",
    badge: "Memories",
    icon: BookOpen,
    color: "#e95f95",
  },
  {
    num: "03",
    title: "Good Vibes",
    description:
      "Positive energy, warm hospitality, open minds and great company every single weekend.",
    badge: "Energy",
    icon: Heart,
    color: "#0693e3",
  },
  {
    num: "04",
    title: "Always Exciting",
    description:
      "Something exciting is always around the corner — rooftop jams, board games, pottery & cafe hop meetups.",
    badge: "Always",
    icon: Sparkles,
    color: "#00966e",
  },
];

export function Histoire() {
  return (
    <section id="vibe" className="relative py-24 bg-[#121212] text-white overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 yestalgia-grid-bg opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#e95f95] text-white font-condensed text-base font-black px-4 py-1.5 rounded-full border-2 border-white shadow-[3px_3px_0px_#fff] uppercase mb-4">
            Our Core Values & Vibe
          </div>
          <h2 className="font-condensed text-5xl sm:text-7xl font-black text-[#d7dd44] tracking-tight uppercase leading-none mb-4">
            IT'S MORE THAN EVENTS. <span className="text-white">IT'S A VIBE.</span>
          </h2>
          <p className="text-gray-300 font-semibold text-base sm:text-lg">
            From cozy cafes to rooftop sunsets, game nights to deep talks — if it brings people
            together, it's The Social कlub.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#1e1e24] border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#000] flex flex-col justify-between relative group hover:border-[#d7dd44]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-condensed font-black text-4xl sm:text-5xl tracking-tighter"
                      style={{ color: item.color }}
                    >
                      {item.num}
                    </span>
                    <div
                      className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="h-5 w-5 text-black" />
                    </div>
                  </div>

                  <span className="inline-block bg-white text-black font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-black uppercase mb-3">
                    {item.badge}
                  </span>

                  <h3 className="font-condensed text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
