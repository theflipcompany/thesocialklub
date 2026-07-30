import React from "react";

export function SocialKlubLogo({ className = "h-auto" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Retro 90s Brutalist Badge Logo for THE SOCIAL कLUB */}
      <div className="relative transform -skew-x-6">
        <div className="bg-[#d7dd44] text-black font-condensed font-black text-2xl sm:text-3xl lg:text-4xl px-3.5 py-1 sm:px-4 sm:py-1.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000] flex items-center gap-1.5 sm:gap-2 uppercase tracking-tighter">
          <span className="text-black whitespace-nowrap">THE SOCIAL</span>
          <div className="inline-flex items-center">
            <span className="bg-[#e95f95] text-white px-1 sm:px-1.5 py-0 sm:py-0.5 rounded border-2 border-black transform -rotate-3 leading-none inline-flex items-center justify-center text-[0.88em]">
              क
            </span>
            <span className="text-[#00966e]">LUB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Keep DecathlonLogo export for backward compatibility
export { SocialKlubLogo as DecathlonLogo };
