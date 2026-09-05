"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles, CheckCircle2, ShieldCheck, Flame, RotateCcw } from "lucide-react";
import { FishSlide } from "@/types/fish";

interface HybridFishSplitterProps {
  slide: FishSlide;
  isDetailMode: boolean;
  onToggleDetail: () => void;
}

export const HybridFishSplitter: React.FC<HybridFishSplitterProps> = ({
  slide,
  isDetailMode,
  onToggleDetail,
}) => {
  // Slicing laser blade animation state when transitioning to detail mode
  const [isSlicing, setIsSlicing] = useState(false);

  useEffect(() => {
    if (isDetailMode) {
      setIsSlicing(true);
      const timer = setTimeout(() => {
        setIsSlicing(false);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsSlicing(false);
    }
  }, [isDetailMode]);

  const springTransition = {
    type: "spring" as const,
    stiffness: 220,
    damping: 26,
  };

  return (
    <div
      id="fish-centerpiece-wrapper"
      className="absolute top-[23vh] sm:top-[24vh] lg:my-20 md:top-1/2 left-0 right-0 mx-auto md:left-[48%] md:right-auto md:mx-0 md:-translate-x-0 -translate-y-1/2 z-30 w-[90%] sm:w-[80%] md:w-[740px] lg:w-[840px] h-[170px] sm:h-[220px] md:h-[420px] flex items-center justify-center pointer-events-none select-none"
    >
      <motion.div
        id="fish-centerpiece"
        animate={{
          scale: isDetailMode ? 1.03 : 1,
          y: isDetailMode ? -4 : 0,
        }}
        transition={springTransition}
        className="w-full h-full flex items-center justify-center pointer-events-none cursor-pointer"
      >
        {/* Interactive Click Target Area */}
      <div
        onClick={onToggleDetail}
        className="pointer-events-auto relative w-full h-full flex items-center justify-center group"
        title={
          isDetailMode
            ? "Klik untuk menutup fillet & melihat ikan utuh kembali"
            : "Klik untuk membedah ikan & melihat fillet daging segar"
        }
      >
        {/* Subtle Organic Swimming Motion Container */}
        <motion.div
          animate={{
            y: isDetailMode ? [0, 3, 0] : [-4, 5, -4],
            rotate: isDetailMode ? [0, 0.4, 0] : [-0.8, 1, -0.8],
          }}
          transition={{
            duration: isDetailMode ? 5 : 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* BASE LAYER: Filleted Fish with exposed fresh succulent white meat */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              isDetailMode ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <motion.img
              src="/images/fish-filleted.png"
              alt={`${slide.title} Filleted`}
              className="w-full h-auto max-h-[160px] sm:max-h-[210px] md:max-h-[380px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
              animate={{
                scale: isDetailMode ? 1 : 0.96,
              }}
              transition={springTransition}
            />

            {/* Specular Moist Glistening Sheen on the Meat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isDetailMode ? [0.4, 0.8, 0.4] : 0 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-r from-transparent via-white/25 to-transparent"
              style={{
                clipPath: "ellipse(36% 22% at 48% 36%)",
              }}
            />
          </div>

          {/* TOP LAYER: 100% Whole Realistic Living Gourami Fish */}
          {/* When filleted, peels/lifts open with 3D perspective to reveal the meat underneath */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={
              isDetailMode
                ? {
                    opacity: 0,
                    scale: 1.04,
                    y: -18,
                    rotateX: 35,
                    filter: "blur(2px)",
                    pointerEvents: "none",
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    pointerEvents: "auto",
                  }
            }
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: "top center",
              perspective: 1000,
            }}
          >
            <img
              src="/images/fish-whole.png"
              alt={`${slide.title} Utuh`}
              className="w-full h-auto max-h-[160px] sm:max-h-[210px] md:max-h-[380px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)] filter group-hover:brightness-105 transition-all duration-300"
            />

            {/* Ambient Water Caustic Light Shimmer over Fish Scales */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-30 group-hover:opacity-45 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(ellipse at 45% 40%, rgba(255, 230, 180, 0.5) 0%, transparent 65%)",
              }}
            />
          </motion.div>

          {/* SLICING LASER / CHEF BLADE STREAK ANIMATION */}
          <AnimatePresence>
            {isSlicing && (
              <motion.div
                initial={{ left: "18%", opacity: 0, scaleY: 0.2 }}
                animate={{
                  left: ["18%", "45%", "78%"],
                  opacity: [0, 1, 1, 0],
                  scaleY: [0.4, 1.2, 0.6],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute top-[28%] -translate-y-1/2 z-50 pointer-events-none flex flex-col items-center"
              >
                {/* Glowing Blade Line */}
                <div className="w-[3px] h-28 bg-gradient-to-b from-amber-100 via-orange-400 to-amber-200 shadow-[0_0_20px_#ff7a00,0_0_40px_#ffaa00]" />

                {/* Laser Cutter Spark Tip */}
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-[0_0_25px_#ff9500] flex items-center justify-center animate-spin">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FLOATING CULINARY CALLOUT BADGES (Visible when filleted) */}
          <AnimatePresence>
            {isDetailMode && (
              <>
                {/* Badge 1: 100% Bebas Duri */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ delay: 0.15, ...springTransition }}
                  className="absolute top-2 left-2 sm:top-4 sm:left-6 md:top-6 md:left-24 z-40 bg-slate-900/90 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl border border-emerald-400/40 text-emerald-300 text-[9px] sm:text-[10px] md:text-[11px] font-bold shadow-xl flex items-center gap-1 md:gap-1.5 pointer-events-none"
                >
                  <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-400" />
                  <span>100% Boneless (Bebas Duri)</span>
                </motion.div>

                {/* Badge 2: Daging Putih Padat & Manis Alami */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ delay: 0.25, ...springTransition }}
                  className="absolute bottom-2 left-2 sm:bottom-4 sm:left-6 md:bottom-10 md:left-28 z-40 bg-slate-900/90 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl border border-amber-400/40 text-amber-200 text-[9px] sm:text-[10px] md:text-[11px] font-bold shadow-xl flex items-center gap-1 md:gap-1.5 pointer-events-none"
                >
                  <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-400" />
                  <span>Daging Putih Padat & Bersih</span>
                </motion.div>

                {/* Badge 3: Kadar Protein & Nutrisi */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, x: 15 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 10 }}
                  transition={{ delay: 0.35, ...springTransition }}
                  className="hidden sm:flex absolute top-2 right-2 sm:top-4 sm:right-6 md:top-10 md:right-24 z-40 bg-slate-900/90 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl border border-orange-400/40 text-orange-200 text-[9px] sm:text-[10px] md:text-[11px] font-bold shadow-xl items-center gap-1 md:gap-1.5 pointer-events-none"
                >
                  <Flame className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-400" />
                  <span>Protein {slide.protein} | Rendah Lemak {slide.fat}</span>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* TOP PILL STATUS BADGE / INTERACTION TRIGGER */}
          <div className="absolute -top-6 sm:-top-7 md:-top-9 left-1/2 -translate-x-1/2 whitespace-nowrap z-40 max-w-[92vw]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border text-[9px] sm:text-[10px] md:text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md shadow-2xl flex items-center gap-1.5 sm:gap-2 transition-colors duration-300 ${
                isDetailMode
                  ? "bg-slate-900/90 border-amber-400/50 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  : "bg-slate-950/85 border-white/20 text-white hover:border-accentOrange hover:text-accentOrange"
              }`}
            >
              {isDetailMode ? (
                <>
                  <RotateCcw className="w-3 h-3 md:w-3.5 md:h-3.5 text-amber-400 animate-spin-reverse" />
                  <span className="text-amber-200">Mode Fillet</span>
                  <span className="text-white/40 hidden sm:inline">|</span>
                  <span className="text-emerald-300 hover:underline hidden sm:inline">Klik untuk Ikan Utuh</span>
                </>
              ) : (
                <>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-300 font-bold">Ikan Gurame Utuh</span>
                  <span className="text-white/40 hidden sm:inline">|</span>
                  <span className="text-accentOrange flex items-center gap-1 font-black">
                    <Scissors className="w-3 h-3 md:w-3.5 md:h-3.5 rotate-90" />
                    <span className="hidden sm:inline">Klik</span> Bedah Fillet
                  </span>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};
