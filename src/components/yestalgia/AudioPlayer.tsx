import React, { useState } from "react";
import { Play, Pause, SkipForward, Volume2, VolumeX, Disc, Radio } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const playlist = [
  { title: "Lucknow Sunset Acoustic", duration: "03:45", artist: "Social Klub Radio" },
  { title: "Aaj Kya Try करें Beat", duration: "02:50", artist: "Klub Beats" },
  { title: "Hazratganj Coffee Chill", duration: "04:12", artist: "Acoustic Session" },
];

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentTrack = playlist[trackIndex];

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40">
      {/* Expanded Deck Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-3 w-64 sm:w-80 bg-[#18181b] border-3 border-black rounded-3xl p-3.5 sm:p-4 shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-700 mb-3">
              <div className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-[#d7dd44] animate-pulse" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-[#d7dd44]">
                  Klub Radio FM
                </span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-xs font-bold text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Mini Cassette Tape Visualization */}
            <div className="bg-[#000] border-2 border-black rounded-xl p-3 mb-3 relative overflow-hidden">
              <div className="flex items-center justify-around relative z-10">
                {/* Left Spool */}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 border-dashed border-white flex items-center justify-center ${
                      isPlaying ? "animate-spool-fast text-[#d7dd44]" : ""
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Equalizer Waves */}
                <div className="flex items-end gap-1 h-6 px-2">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: isPlaying ? [6, 20, 10, 24, 8][i % 5] : 4,
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 0.4 + i * 0.1,
                      }}
                      className="w-1 bg-[#00966e] rounded-full"
                    />
                  ))}
                </div>

                {/* Right Spool */}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 border-dashed border-white flex items-center justify-center ${
                      isPlaying ? "animate-spool-fast text-[#d7dd44]" : ""
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="mb-4">
              <div className="font-condensed text-base sm:text-lg font-black uppercase text-white truncate">
                {currentTrack.title}
              </div>
              <div className="font-mono text-xs text-gray-400">
                {currentTrack.artist} • {currentTrack.duration}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-zinc-800 text-gray-300 hover:text-white border border-zinc-700"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>

              <button
                onClick={handleTogglePlay}
                className="c-button -teal text-black !p-2.5 sm:!p-3 rounded-full shadow-[3px_3px_0px_#000]"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                ) : (
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={handleNextTrack}
                className="p-2 rounded-full bg-zinc-800 text-gray-300 hover:text-white border border-zinc-700"
              >
                <SkipForward className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="c-button -teal flex items-center gap-2 font-black uppercase text-[11px] sm:text-xs !py-2.5 !px-3.5 sm:!py-3 sm:!px-5 shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000]"
      >
        <Disc
          className={`h-4 w-4 sm:h-5 sm:w-5 ${isPlaying ? "animate-spin text-[#d7dd44]" : ""}`}
        />
        <span>{isPlaying ? "Klub Beats" : "Klub Audio"}</span>
      </button>
    </div>
  );
}
