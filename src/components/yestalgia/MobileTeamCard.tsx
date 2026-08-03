import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  badgeBg: string;
  badgeTextColor: string;
  roleTextColor: string;
  image: string;
  description: React.ReactNode;
}

interface MobileTeamCardProps {
  member: TeamMemberData;
  index: number;
  isFlipped: boolean;
  onToggleFlip: () => void;
}

export function MobileTeamCard({ member, index, isFlipped, onToggleFlip }: MobileTeamCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleFlip();
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      }}
      className="w-full"
    >
      <div className="relative w-full h-[80px] [perspective:1000px]">
        <div
          role="button"
          tabIndex={0}
          aria-expanded={isFlipped}
          aria-label={`${member.name}, ${member.role}. Tap to view bio.`}
          onClick={onToggleFlip}
          onKeyDown={handleKeyDown}
          className={`relative w-full h-full cursor-pointer transition-transform duration-600 flip-card-preserve-3d focus:outline-none focus:ring-4 focus:ring-black rounded-full ${
            isFlipped && !shouldReduceMotion
              ? "[transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)]"
              : ""
          }`}
        >
          {/* FRONT SIDE */}
          <div
            className={`absolute inset-0 bg-white border-3 border-black rounded-full px-4 py-2 shadow-[5px_5px_0px_#000] flex items-center justify-between flip-card-backface-hidden overflow-hidden [transform:translateZ(1px)] [-webkit-transform:translateZ(1px)] ${
              isFlipped
                ? "pointer-events-none opacity-0 invisible"
                : "pointer-events-auto opacity-100 visible flex"
            }`}
          >
            <div className="flex items-center gap-3.5 w-full">
              {/* Profile Image */}
              <div className="w-14 h-14 rounded-full border-2 border-black overflow-hidden shrink-0 bg-[#f9faf7] shadow-[2px_2px_0px_#000]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Name & Designation */}
              <div className="flex flex-col justify-center flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="font-mono text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_#000] inline-block"
                    style={{
                      backgroundColor: member.badgeBg,
                      color: member.badgeTextColor === "text-white" ? "#ffffff" : "#000000",
                    }}
                  >
                    {member.role}
                  </span>
                </div>
                <h3 className="font-condensed text-2xl font-black text-black uppercase tracking-tight leading-none truncate">
                  {member.name}
                </h3>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div
            className={`absolute inset-0 bg-[#18181b] border-3 border-black rounded-full px-6 py-2 shadow-[5px_5px_0px_#000] flex flex-col items-center justify-center text-center flip-card-backface-hidden [transform:rotateY(180deg)_translateZ(1px)] [-webkit-transform:rotateY(180deg)_translateZ(1px)] overflow-hidden ${
              isFlipped
                ? "pointer-events-auto opacity-100 visible flex"
                : "pointer-events-none opacity-0 invisible"
            }`}
          >
            <p className="text-white text-xs sm:text-sm font-semibold leading-tight line-clamp-3 px-2">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
