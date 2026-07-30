import { useState } from "react";
import { Preloader } from "@/components/yestalgia/Preloader";
import { Header } from "@/components/yestalgia/Header";
import { CassetteMenu } from "@/components/yestalgia/CassetteMenu";
import { FloatingElements } from "@/components/yestalgia/FloatingElements";
import { FoundersFloating } from "@/components/yestalgia/FoundersFloating";
import { Hero } from "@/components/yestalgia/Hero";
import { Collection } from "@/components/yestalgia/Collection";
import { Team } from "@/components/yestalgia/Team";
import { Histoire } from "@/components/yestalgia/Histoire";
import { AudioPlayer } from "@/components/yestalgia/AudioPlayer";
import { Footer } from "@/components/yestalgia/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ecece7] text-[#111111] overflow-x-hidden font-sans selection:bg-[#d7dd44] selection:text-black">
      {/* 1-2 sec Intro Preloader Screen */}
      <Preloader />

      {/* Floating Animated Memphis Shapes Layer */}
      <FloatingElements />

      {/* Founders Floating Characters */}
      <FoundersFloating />

      {/* Sticky Retro Brutalist Header */}
      <Header isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Cassette Menu Drawer Overlay */}
      <CassetteMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Page Sections */}
      <main id="top">
        <Hero />
        <Collection />
        <Team />
        <Histoire />
      </main>

      {/* Floating Interactive Audio Tape Deck Player */}
      <AudioPlayer />

      {/* Footer */}
      <Footer />
    </div>
  );
}
