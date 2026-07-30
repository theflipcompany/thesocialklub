import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Ticket,
  MapPin,
  Users,
  RotateCcw,
  ExternalLink,
  Eye,
  Clock,
  Lock,
} from "lucide-react";

import { useWeeklyRegistration } from "@/hooks/useWeeklyRegistration";

import cardLights from "@/assets/card-lights.jpg";
import cardMic from "@/assets/card-mic.jpg";
import cardChess from "@/assets/card-chess.jpg";

export interface EventItem {
  id: string;
  name: string;
  category: "meetups" | "music" | "games" | "workshops";
  day: "friday" | "saturday" | "sunday";
  tagline?: string;
  image: string;
  badge?: string;
  location?: string;
  capacity: string;
  tapeColor: string;
  tapeNumber: string;
  flippedDescription?: string;
  flippedCtaText?: string;
  flippedCtaLink?: string;
}

const eventsList: EventItem[] = [
  {
    id: "jam-e-shaam",
    name: "Jam-e-शाम: — Friday Evening",
    category: "games",
    day: "friday",
    tagline: "",
    image: cardChess,
    badge: "Weekend Vibe",
    location: "",
    capacity: "35-40 Slots",
    tapeColor: "#d7dd44", // Yellow
    tapeNumber: "SIDE A • 45 MIN",
    flippedDescription:
      "Unplug, tune in, and vibe out. An open, easy evening of live music and good company to kick off the weekend right. Bring your instrument or just your voice, grab a seat, and let the night flow. No pressure, just pure music and connection.",
    flippedCtaText: "Register Now",
    flippedCtaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDwMAb3CUHhUWKj_YaErnPH4xeWVvztJPCqu0tbNMRuEqVuA/viewform?usp=header",
  },
  {
    id: "outdoor-sport",
    name: "Outdoor Sport - Saturday",
    category: "music",
    day: "saturday",
    tagline: "",
    image: cardMic,
    badge: "Featured",
    location: "",
    capacity: "10-15 Slots",
    tapeColor: "#e95f95", // Pink
    tapeNumber: "SIDE B • 60 MIN",
    flippedDescription:
      "Get out, get moving, get competitive. A Saturday full of outdoor sport, fresh air, and friendly rivalry with new people. Team up, break a sweat, and swap the screens for sunshine. It's the perfect reset before the week catches up with you again.",
    flippedCtaText: "Register Now",
    flippedCtaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeFvpO3-Y-gBMmATXY7A85e47ZhMQKieCRnCFh5NBo3mYtf1A/viewform?usp=header",
  },
  {
    id: "openhouse",
    name: "Openहouse - Sunday",
    category: "meetups",
    day: "sunday",
    tagline: "",
    image: cardLights,
    badge: "Popular",
    location: "",
    capacity: "25-30 Slots",
    tapeColor: "#00966E", // Teal
    tapeNumber: "SIDE A • 90 MIN",
    flippedDescription:
      "The Social कlub's signature indoor party games night. New games, new faces, and the kind of energy that keeps selling out. Whether you're a regular or walking in for the first time, expect laughter, a little chaos, and a room full of new connections.",
    flippedCtaText: "Register Now",
    flippedCtaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe6tH1aA6CHkL4a0LuKM5cV0PdjlOsZv5X5517nUmmhawAuiw/viewform?usp=header",
  },
];

export function Collection() {
  const [activeTab, setActiveTab] = useState<string>("tous");
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const { isLive, closesInText, tooltip } = useWeeklyRegistration();

  const filteredEvents = eventsList.filter((e) => activeTab === "tous" || e.day === activeTab);

  const flipTimersRef = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>({});

  useEffect(() => {
    return () => {
      // Clean up timers on unmount
      Object.values(flipTimersRef.current).forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => {
      const isFlippedNow = !prev[id];

      // Clear existing timer if user toggles manually
      if (flipTimersRef.current[id]) {
        clearTimeout(flipTimersRef.current[id]);
        delete flipTimersRef.current[id];
      }

      // If card flipped to back view, set a 10s auto-flip timer back to front state
      if (isFlippedNow) {
        flipTimersRef.current[id] = setTimeout(() => {
          setFlippedCards((current) => ({ ...current, [id]: false }));
          delete flipTimersRef.current[id];
        }, 10000);
      }

      return { ...prev, [id]: isFlippedNow };
    });
  };

  return (
    <section id="events" className="relative py-24 bg-[#ecece7] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 yestalgia-grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#00966e] text-white font-condensed text-base font-black px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] uppercase mb-4">
            Upcoming Experiences & Events
          </div>
          <h2 className="font-condensed text-5xl sm:text-7xl font-black text-black tracking-tight uppercase leading-none mb-4">
            WHAT'S <span className="text-[#e95f95]">COMING UP?</span>
          </h2>
          <p className="text-gray-700 font-semibold text-base sm:text-lg">
            We've got something exciting brewing every week. Select a cassette tape experience
            below!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "tous", label: "All Events" },
            { id: "friday", label: "Friday" },
            { id: "saturday", label: "Saturday" },
            { id: "sunday", label: "Sunday" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`c-button text-sm uppercase px-6 py-2.5 transition-all ${
                activeTab === tab.id
                  ? "-teal font-black shadow-[4px_4px_0px_#000]"
                  : "bg-white text-black font-bold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((eventItem) => {
            const isHovered = hoveredCardId === eventItem.id;
            const isFlipped = flippedCards[eventItem.id] || false;

            return (
              <motion.div
                key={eventItem.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCardId(eventItem.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="relative [perspective:1000px] w-full min-h-[480px]"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT OF CARD */}
                  <div className="bg-white border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_#000] flex flex-col justify-between [backface-visibility:hidden] w-full h-full transition-all duration-300 hover:shadow-[12px_12px_0px_#000]">
                    <div>
                      {/* Cassette Tape Hero Visual */}
                      <div
                        className="relative rounded-2xl border-3 border-black p-4 mb-5 shadow-[4px_4px_0px_#000] transition-colors"
                        style={{ backgroundColor: eventItem.tapeColor }}
                      >
                        {/* Top Screws + Tape Number */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="w-3 h-3 rounded-full border border-black bg-gray-300 flex items-center justify-center">
                            <div className="w-full h-[1px] bg-black transform rotate-45" />
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black bg-white/80 px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]">
                              {eventItem.tapeNumber}
                            </span>
                          </div>

                          <div className="w-3 h-3 rounded-full border border-black bg-gray-300 flex items-center justify-center">
                            <div className="w-full h-[1px] bg-black transform -rotate-45" />
                          </div>
                        </div>

                        {/* Cassette Label Box */}
                        <div className="bg-white border-2 border-black rounded-lg p-2.5 text-center mb-3 relative overflow-hidden flex items-center gap-3">
                          {/* Thumbnail Image */}
                          <img
                            src={eventItem.image}
                            alt={eventItem.name}
                            className="w-14 h-14 rounded-md object-cover border border-black shrink-0"
                          />
                          <div className="text-left overflow-hidden">
                            <div className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                              The Social कlub • {eventItem.badge || "Lucknow"}
                            </div>
                            <h3 className="font-condensed text-xl font-black text-black leading-tight uppercase truncate">
                              {eventItem.name}
                            </h3>
                          </div>
                        </div>

                        {/* Cassette Spools Window */}
                        <div className="bg-[#222] border-2 border-black rounded-xl p-2 flex items-center justify-around relative overflow-hidden">
                          {/* Magnetic Tape Strip */}
                          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-amber-900/80 border-y border-amber-950 opacity-90" />

                          {/* Left Spool */}
                          <div className="relative z-10 w-9 h-9 rounded-full border-2 border-white bg-black flex items-center justify-center">
                            <div
                              className={`w-7 h-7 rounded-full border-2 border-dashed border-white flex items-center justify-center ${
                                isHovered ? "animate-spool-fast" : "animate-spool"
                              }`}
                            >
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                          </div>

                          {/* Window Counter */}
                          <div className="relative z-10 font-mono text-[10px] text-[#d7dd44] font-bold bg-black/90 px-2 py-0.5 rounded border border-white/20">
                            00:76
                          </div>

                          {/* Right Spool */}
                          <div className="relative z-10 w-9 h-9 rounded-full border-2 border-white bg-black flex items-center justify-center">
                            <div
                              className={`w-7 h-7 rounded-full border-2 border-dashed border-white flex items-center justify-center ${
                                isHovered ? "animate-spool-fast" : "animate-spool"
                              }`}
                            >
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Grip Notches */}
                        <div className="flex justify-between items-center mt-2.5 pt-1 border-t border-black/20 text-[9px] font-mono font-bold text-black uppercase">
                          <span>TYPE II</span>
                          <span>HIGH BIAS STEREO</span>
                          <span>LUCKNOW</span>
                        </div>
                      </div>

                      {/* Description (Rendered only if non-empty) */}
                      {eventItem.tagline && (
                        <p className="text-xs font-medium text-gray-700 mb-4 leading-relaxed">
                          {eventItem.tagline}
                        </p>
                      )}

                      {/* Info Row (Location & Capacity) */}
                      <div className="flex items-center gap-4 text-xs font-bold text-gray-800 mb-3">
                        {eventItem.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-[#00966e]" /> {eventItem.location}
                          </span>
                        )}
                        {eventItem.capacity && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5 text-[#e95f95]" /> {eventItem.capacity}
                          </span>
                        )}
                      </div>

                      {/* Registration Status Pill */}
                      {isLive ? (
                        <div className="mb-4 bg-[#f9faf7] border-2 border-black p-3 rounded-2xl flex items-center justify-between shadow-[2px_2px_0px_#000]">
                          <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <span className="font-condensed font-black text-xs uppercase text-gray-900">
                              🟢 Registration Live • Closes in {closesInText}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-4 bg-[#f9faf7] border-2 border-black p-3 rounded-2xl flex items-center justify-between shadow-[2px_2px_0px_#000]">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#00966e]" />
                            <span className="font-condensed font-black text-xs uppercase text-gray-900">
                              Coming Soon • Next Monday
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Front Button: Always Take a Look to flip card and view info */}
                    <div>
                      <button
                        onClick={() => toggleFlip(eventItem.id)}
                        className="w-full c-button -dark py-3.5 text-center flex items-center justify-center gap-2 uppercase font-black shadow-[4px_4px_0px_#000] hover:scale-[1.02] transition-transform"
                      >
                        <Eye className="h-4 w-4 text-[#d7dd44]" /> Take a Look
                      </button>
                    </div>
                  </div>

                  {/* BACK OF CARD (Flipped) */}
                  <div className="absolute inset-0 bg-white border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_#000] flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Header with Tag & Flip Back Button */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block bg-[#d7dd44] text-black font-condensed font-black text-xs px-3 py-1 rounded-full border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
                            {eventItem.badge || "EVENT DETAILS"}
                          </span>
                          <button
                            onClick={() => toggleFlip(eventItem.id)}
                            className="font-mono text-xs font-bold text-gray-700 hover:text-black flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-lg border border-black transition-colors"
                          >
                            <RotateCcw className="h-3.5 w-3.5" /> Back
                          </button>
                        </div>

                        {/* Title */}
                        <h3 className="font-condensed text-2xl font-black text-black leading-tight uppercase mb-2">
                          {eventItem.name}
                        </h3>

                        {/* Capacity Tag */}
                        {eventItem.capacity && (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#00966e] mb-3">
                            <Users className="h-4 w-4" /> <span>{eventItem.capacity}</span>
                          </div>
                        )}

                        {/* Description Box */}
                        <div className="bg-[#f9faf7] border-2 border-black p-4 rounded-2xl text-gray-800 text-sm font-medium leading-relaxed shadow-[3px_3px_0px_#000]">
                          <p>{eventItem.flippedDescription}</p>
                        </div>
                      </div>

                      {/* Flipped Card Action Button: Disabled when registration is not live */}
                      <div className="mt-4 space-y-2">
                        {isLive ? (
                          <a
                            href={eventItem.flippedCtaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full c-button -pink py-3.5 text-center flex items-center justify-center gap-2 uppercase font-black shadow-[4px_4px_0px_#000] text-sm"
                          >
                            Register Now <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <button
                            disabled
                            title={tooltip || "Registration opens next Monday."}
                            className="w-full bg-gray-200 text-gray-500 border-3 border-black rounded-2xl py-3.5 text-center flex items-center justify-center gap-2 cursor-not-allowed font-condensed font-black text-sm uppercase opacity-60 shadow-none"
                          >
                            <Lock className="h-4 w-4 text-gray-400" /> Register Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
