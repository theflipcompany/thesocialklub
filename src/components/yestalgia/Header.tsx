import React from "react";
import { SocialKlubLogo } from "./DecathlonLogo";
import { X } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Header({ isMenuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="pointer-events-none fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between pl-3 pr-0 py-3 sm:pl-8 sm:pr-0 sm:py-5 bg-transparent border-none">
      {/* Left: Menu Trigger Button */}
      <div className="pointer-events-auto flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className={`c-button ${isMenuOpen ? "-dark" : ""} flex items-center gap-1.5 font-bold tracking-wider !px-3 !py-1.5 text-xs sm:text-sm sm:!px-4 sm:!py-2.5`}
        >
          <span className="relative flex h-3.5 w-4 flex-col justify-between">
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <>
                <span className="h-[2.5px] w-full rounded-full bg-black"></span>
                <span className="h-[2.5px] w-full rounded-full bg-black"></span>
                <span className="h-[2.5px] w-full rounded-full bg-black"></span>
              </>
            )}
          </span>
          <span className="hidden sm:inline">{isMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Center: Absolute 100% Centered Main Logo */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-2 sm:top-3 flex flex-col items-center justify-center text-center z-10">
        <a
          href="#"
          className="transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center transform scale-85 sm:scale-100 origin-top"
          aria-label="The Social Klub Home"
        >
          <SocialKlubLogo className="drop-shadow-md" />
        </a>
      </div>

      {/* Right: Semicircle Peeping 'Join The Klub' Tab */}
      <div className="pointer-events-auto flex items-center ml-auto">
        <a
          href="https://chat.whatsapp.com/F3IgLKfIZDc8CdHgL1VDOw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-condensed font-black text-[11px] sm:text-xs uppercase tracking-wider py-2 sm:py-2.5 pl-3.5 pr-2.5 sm:pl-5 sm:pr-3.5 rounded-l-full border-2 border-r-0 border-black shadow-[-2px_2px_0px_#d7dd44] sm:shadow-[-3px_3px_0px_#d7dd44] transition-all hover:-translate-x-1 flex items-center leading-none group shrink-0"
        >
          <span className="whitespace-nowrap">JOIN THE KLUB</span>
        </a>
      </div>
    </header>
  );
}
