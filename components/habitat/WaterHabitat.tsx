"use client";

import React, { useRef } from "react";
import { Scissors, RotateCcw } from "lucide-react";
import { useWaterCaustics } from "@/hooks/useWaterCaustics";

interface WaterHabitatProps {
  onToggleDetail: () => void;
  isDetailMode: boolean;
}

export const WaterHabitat: React.FC<WaterHabitatProps> = ({
  onToggleDetail,
  isDetailMode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  // Hook encapsulates canvas ripple simulation & bubbles with unmount cleanup
  useWaterCaustics(canvasRef, bubblesRef);

  return (
    <section className="w-full md:w-[52%] h-[40vh] sm:h-[43vh] md:h-full order-1 md:order-2 relative overflow-hidden freshwater-pond-bg flex items-center justify-center flex-shrink-0">
      {/* Underwater Environment Radial Overlay */}
      <div className="absolute inset-0 water-caustic z-0 pointer-events-none" />

      {/* Natural Sunbeams Penetrating Freshwater */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at 75% 0%, rgba(255, 245, 200, 0.45) 0%, rgba(50, 160, 140, 0.15) 55%, transparent 80%)",
        }}
      />

      {/* Light Rays & Water Ripple Caustics Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none z-0"
      />

      {/* Aquatic Riverbed Moss & Plants Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-28 md:h-44 pointer-events-none z-[1] opacity-70">
        <svg viewBox="0 0 800 240" fill="none" className="w-full h-full object-cover">
          <path
            d="M0,240 C110,195 160,110 200,240 C260,170 310,80 380,240 C480,150 550,90 640,240 C700,185 750,130 800,240 Z"
            fill="#051615"
          />
          <path
            d="M40,240 C80,130 130,60 160,240 C240,120 290,50 350,240 C430,90 510,70 590,240 C660,150 710,110 770,240 Z"
            fill="#092725"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Floating Aquatic Badge */}
      <div className="absolute top-14 left-4 md:top-24 md:left-auto md:right-8 z-10 pointer-events-none flex items-center gap-1.5 md:gap-2 bg-black/50 backdrop-blur-md px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full border border-emerald-400/30 text-[10px] md:text-[11px] text-emerald-200 shadow-lg">
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="tracking-wide font-medium">Sistem Aerasi Gelembung O2</span>
      </div>

      {/* Interactive Hint Marker on Right */}
      <div
        onClick={onToggleDetail}
        className="absolute bottom-3 right-3 md:bottom-auto md:right-10 md:top-1/2 md:-translate-y-1/2 z-30 flex items-center md:flex-col gap-1.5 md:gap-2 cursor-pointer group transition-transform duration-300 hover:scale-105 bg-black/40 md:bg-transparent px-2.5 py-1 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none"
      >
        <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full backdrop-blur-md border flex items-center justify-center text-white shadow-xl transition-all duration-300 ${
          isDetailMode
            ? "bg-slate-900/80 border-amber-400/50 group-hover:bg-amber-500"
            : "bg-white/15 border-amber-300/40 group-hover:bg-accentOrange group-hover:border-white"
        }`}>
          {isDetailMode ? (
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-300 group-hover:text-white transition-transform group-hover:-rotate-90" />
          ) : (
            <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-300 group-hover:text-white rotate-90 animate-pulse" />
          )}
        </div>
        <div className="text-left md:text-center font-bold tracking-widest text-[9px] sm:text-[10px] text-teal-100 uppercase leading-tight drop-shadow-md">
          {isDetailMode ? (
            <>
              <span className="hidden md:inline">KEMBALI<br /></span>
              <span className="text-amber-300 font-extrabold group-hover:underline">IKAN UTUH</span>
            </>
          ) : (
            <>
              <span className="hidden md:inline">KLIK BEDAH<br /></span>
              <span className="text-accentOrange font-extrabold group-hover:underline">FILLET</span>
            </>
          )}
        </div>
      </div>

      {/* Floating Bubbles Container */}
      <div
        ref={bubblesRef}
        className="absolute inset-0 pointer-events-none z-[2] overflow-hidden"
      />
    </section>
  );
};
