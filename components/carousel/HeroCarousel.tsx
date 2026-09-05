"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Award, ShoppingBag, Info, Scissors, RotateCcw } from "lucide-react";
import { FishSlide } from "@/types/fish";
import { NutritionDrawer } from "./NutritionDrawer";

interface HeroCarouselProps {
  slide: FishSlide;
  slideIndex: number;
  totalSlides: number;
  isDetailMode: boolean;
  onToggleDetail: () => void;
  onOpenOrder: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slide,
  slideIndex,
  totalSlides,
  isDetailMode,
  onToggleDetail,
  onOpenOrder,
}) => {
  return (
    <section className="w-full md:w-[48%] flex-1 md:h-full bg-paper-texture relative z-20 flex flex-col justify-between px-5 sm:px-8 md:px-14 pt-4 sm:pt-6 md:pt-24 pb-5 md:pb-8 order-2 md:order-1 overflow-y-auto md:overflow-hidden no-scrollbar">
      {/* Big Number Watermark */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.number}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="absolute top-2 md:top-20 left-4 md:left-12 text-[70px] sm:text-[100px] md:text-[180px] font-black text-[#e8e1cf]/70 select-none pointer-events-none font-serif leading-none tracking-tighter"
        >
          {slide.number}
        </motion.div>
      </AnimatePresence>

      {/* Middle Left Content: Title, Script, & Description */}
      <div className="relative z-10 my-auto max-w-lg py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.number}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Scientific / Sub-label */}
            <span className="font-script text-2xl sm:text-3xl md:text-4xl text-accentOrange block -mb-1 md:-mb-2">
              {slide.subtitle}
            </span>

            {/* Main Bold Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-primaryTeal tracking-tight uppercase leading-[0.95] font-serif mt-1">
              {slide.title}
            </h1>

            {/* Quality Badges */}
            <div className="flex items-center gap-1.5 sm:gap-2 my-2.5 sm:my-3 md:my-4 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Leaf className="w-3 h-3" /> Kolam Terpal & Aerasi O2
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                <Award className="w-3 h-3" /> Grade Restoran & Ekspor
              </span>
            </div>

            {/* Dynamic Status Tags */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 flex-wrap">
              {isDetailMode ? (
                <>
                  <span className="px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-900/15 text-amber-950 border border-amber-900/30 flex items-center gap-1">
                    <Scissors className="w-3 h-3 text-accentOrange" /> Kondisi: Fillet Daging Segar
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-emerald-900/15 text-emerald-900 border border-emerald-900/25">
                    100% Boneless (Bebas Duri)
                  </span>
                </>
              ) : (
                <>
                  <span className="px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-teal-900/15 text-teal-900 border border-teal-900/25 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Kondisi: Ikan Utuh Segar
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-900/10 text-amber-950 border border-amber-900/20">
                    Klik Ikan untuk Bedah Fillet
                  </span>
                </>
              )}
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-sm mt-1 sm:mt-2">
              {slide.desc}
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
              <button
                onClick={onOpenOrder}
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-accentOrange hover:bg-orange-600 text-white font-bold text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-accentOrange/30 hover:shadow-accentOrange/40 hover:-translate-y-0.5 flex items-center gap-1.5 sm:gap-2 active:scale-95"
              >
                <span>Pesan Pasokan</span>
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Toggle Details / Fillet trigger */}
              <button
                onClick={onToggleDetail}
                className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-teal-900/10 hover:bg-teal-900/20 text-teal-900 font-semibold text-[11px] sm:text-xs tracking-wider transition flex items-center gap-1.5 active:scale-95 border border-teal-900/20"
                title={isDetailMode ? "Kembalikan ke tampilan ikan utuh" : "Bedah fillet dan cek gizi"}
              >
                {isDetailMode ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700" />
                    <span>Ikan Utuh</span>
                  </>
                ) : (
                  <>
                    <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accentOrange" />
                    <span>Bedah Fillet</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Expanded Detail View / Nutrition Drawer */}
      <NutritionDrawer
        isOpen={isDetailMode}
        onClose={onToggleDetail}
        slide={slide}
        onOrderClick={onOpenOrder}
      />

      {/* Bottom Controls / Status Indicator */}
      <div className="relative z-10 flex items-center justify-between pt-3 sm:pt-4 border-t border-amber-900/10 mt-auto">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Stok Kolam Aktif Siap Angkat</span>
        </div>
        <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
          <span>Spesies Premium</span> <span className="text-slate-800 font-bold">Gurame Soang</span>
        </div>
      </div>
    </section>
  );
};
