import React, { useState } from "react";
import { SocialKlubLogo } from "./DecathlonLogo";
import { FlipCoLogo } from "./FlipCoLogo";
import { Send, ArrowUp, Check, Instagram } from "lucide-react";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="signup"
      className="relative bg-[#000] text-white pt-16 pb-12 border-t-4 border-black"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-center">
          {/* Logo & Slogan + Backed By */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <SocialKlubLogo />
            <FlipCoLogo />
            <p className="text-gray-400 text-sm max-w-sm">
              The Social कlub is a community in Lucknow for new people, real conversations and
              unforgettable experiences.
            </p>
          </div>

          {/* Newsletter / Join Form */}
          <div className="md:col-span-7">
            <div className="bg-[#18181b] border-3 border-black p-5 sm:p-6 rounded-3xl shadow-[6px_6px_0px_#d7dd44]">
              <h3 className="font-condensed text-2xl font-black uppercase text-[#d7dd44] mb-2">
                JOIN THE SOCIAL KLUB
              </h3>
              <p className="text-xs text-gray-300 mb-4">
                Be the first to know about upcoming cafe meetups, open mics, game nights and
                exclusive community gatherings in Lucknow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <a
                  href="https://chat.whatsapp.com/F3IgLKfIZDc8CdHgL1VDOw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-button -pink py-3 px-6 font-black uppercase text-xs flex items-center justify-center gap-2"
                >
                  Join WhatsApp Klub <Send className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/thesocialklub.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-button -teal py-3 px-6 font-black uppercase text-xs flex items-center justify-center gap-2"
                >
                  Instagram <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>© 2026 THE SOCIAL KLUB LUCKNOW • BACKED BY THE FLIP CO. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#d7dd44]">
              About
            </a>
            <a href="#events" className="hover:text-[#d7dd44]">
              Events
            </a>
            <a href="#vibe" className="hover:text-[#d7dd44]">
              The Vibe
            </a>
            <button
              onClick={scrollToTop}
              className="c-button -dark !py-1.5 !px-3 text-[10px] flex items-center gap-1"
            >
              Top <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
