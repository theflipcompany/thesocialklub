import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Check, MapPin, Users, Disc } from "lucide-react";

import cardLights from "@/assets/card-lights.jpg";
import cardMic from "@/assets/card-mic.jpg";
import cardChess from "@/assets/card-chess.jpg";
import cardPlant from "@/assets/card-plant.jpg";
import groupScene from "@/assets/group-scene.jpg";
import heroScene from "@/assets/hero-scene.jpg";

interface EventItem {
  id: string;
  name: string;
  category: "meetups" | "music" | "games" | "workshops";
  price: string;
  tagline: string;
  image: string;
  badge?: string;
  location: string;
  capacity: string;
  tapeColor: string;
  tapeNumber: string;
}

const eventsList: EventItem[] = [
  {
    id: "cafe-meetups",
    name: "Cafe Meetups",
    category: "meetups",
    price: "Free Entry",
    tagline:
      "Conversations over artisanal coffee, pastries and deep talks in Lucknow's cozy spots.",
    image: cardLights,
    badge: "Popular",
    location: "Hazratganj, Lucknow",
    capacity: "25 Seats",
    tapeColor: "#00966E", // Teal
    tapeNumber: "SIDE A • 90 MIN",
  },
  {
    id: "open-mic",
    name: "Open Mic Nights",
    category: "music",
    price: "₹299",
    tagline: "Stories, poetry, shayari, live acoustic sets and everything in between.",
    image: cardMic,
    badge: "Featured",
    location: "Gomti Nagar, Lucknow",
    capacity: "40 Seats",
    tapeColor: "#e95f95", // Pink
    tapeNumber: "SIDE B • 60 MIN",
  },
  {
    id: "game-nights",
    name: "Board Game Nights",
    category: "games",
    price: "₹199",
    tagline: "Catan, Monopoly, Secret Hitler, laughs and friendly competition with new friends.",
    image: cardChess,
    badge: "Weekend Vibe",
    location: "Indira Nagar, Lucknow",
    capacity: "30 Seats",
    tapeColor: "#d7dd44", // Yellow
    tapeNumber: "SIDE A • 45 MIN",
  },
  {
    id: "unique-experiences",
    name: "Pottery & Workshops",
    category: "workshops",
    price: "₹499",
    tagline: "Hands-on pottery, canvas painting, stargazing and unique weekend sessions.",
    image: cardPlant,
    badge: "Limited Spots",
    location: "Aliganj, Lucknow",
    capacity: "15 Seats",
    tapeColor: "#0693e3", // Blue
    tapeNumber: "SIDE B • 76 MIN",
  },
  {
    id: "rooftop-sunsets",
    name: "Rooftop Sunsets & Jamming",
    category: "music",
    price: "₹349",
    tagline: "Acoustic guitar sessions, golden hour views, cold brews and great company.",
    image: groupScene,
    badge: "Must Visit",
    location: "Gomti Nagar Riverfront",
    capacity: "35 Seats",
    tapeColor: "#f09341", // Orange
    tapeNumber: "SIDE A • 60 MIN",
  },
  {
    id: "social-mixer",
    name: "Speed Friending Mixer",
    category: "meetups",
    price: "₹249",
    tagline: "Fun icebreaker games designed to help you meet 15+ new people in a single evening.",
    image: heroScene,
    badge: "Icebreaker",
    location: "Hazratganj, Lucknow",
    capacity: "30 Seats",
    tapeColor: "#9b51e0", // Purple
    tapeNumber: "SIDE B • 90 MIN",
  },
];

export function Collection() {
  const [activeTab, setActiveTab] = useState<string>("tous");
  const [rsvpItems, setRsvpItems] = useState<{ [key: string]: boolean }>({});
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filteredEvents = eventsList.filter((e) => activeTab === "tous" || e.category === activeTab);

  const handleRSVP = (id: string) => {
    setRsvpItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setRsvpItems((prev) => ({ ...prev, [id]: false }));
    }, 2500);
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
            { id: "meetups", label: "Cafe Meetups" },
            { id: "music", label: "Music & Open Mics" },
            { id: "games", label: "Game Nights" },
            { id: "workshops", label: "Workshops" },
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
            const isRSVPed = rsvpItems[eventItem.id];
            const isHovered = hoveredCardId === eventItem.id;

            return (
              <motion.div
                key={eventItem.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCardId(eventItem.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="bg-white border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0px_#000] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#000]"
              >
                <div>
                  {/* Cassette Tape Hero Visual (Image 2 style) */}
                  <div
                    className="relative rounded-2xl border-3 border-black p-4 mb-5 shadow-[4px_4px_0px_#000] transition-colors"
                    style={{ backgroundColor: eventItem.tapeColor }}
                  >
                    {/* Top Screws + Tape Number + Price */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-3 h-3 rounded-full border border-black bg-gray-300 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-black transform rotate-45" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black bg-white/80 px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]">
                          {eventItem.tapeNumber}
                        </span>
                        <span className="font-condensed font-black text-xs text-white bg-black px-2.5 py-0.5 rounded-full border border-black uppercase shadow-[1px_1px_0px_#000]">
                          {eventItem.price}
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

                  {/* Description & Venue Info */}
                  <p className="text-xs font-medium text-gray-700 mb-4 leading-relaxed">
                    {eventItem.tagline}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-800 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#00966e]" /> {eventItem.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-[#e95f95]" /> {eventItem.capacity}
                    </span>
                  </div>
                </div>

                {/* RSVP Button */}
                <div>
                  <button
                    onClick={() => handleRSVP(eventItem.id)}
                    className={`w-full c-button ${
                      isRSVPed ? "-teal" : "-dark"
                    } py-3 text-center flex items-center justify-center gap-2 uppercase font-black shadow-[4px_4px_0px_#000]`}
                  >
                    {isRSVPed ? (
                      <>
                        <Check className="h-4 w-4" /> Spot Reserved!
                      </>
                    ) : (
                      <>
                        <Ticket className="h-4 w-4" /> Reserve Your Spot
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
