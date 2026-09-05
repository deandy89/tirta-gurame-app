"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, X, ShieldCheck, ChevronRight } from "lucide-react";
import { FishSlide } from "@/types/fish";

interface NutritionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slide: FishSlide;
  onOrderClick: () => void;
}

export const NutritionDrawer: React.FC<NutritionDrawerProps> = ({
  isOpen,
  onClose,
  slide,
  onOrderClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nutrition-drawer"
          initial={{ x: "100%", opacity: 0.6 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0.6 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute inset-y-0 right-0 w-full md:w-[85%] bg-parchment/98 backdrop-blur-md p-5 sm:p-8 md:p-12 z-50 border-l border-amber-900/10 flex flex-col justify-between shadow-2xl overflow-y-auto no-scrollbar"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-amber-900/10 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-teal-950 font-bold uppercase tracking-wider text-xs">
                <Microscope className="w-4 h-4 text-accentOrange" />
                <span>Data Anatomi & Nutrisi Ikan</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-black/5 text-slate-600 hover:text-slate-900 transition flex items-center gap-1 text-xs font-bold active:scale-95"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline uppercase">Tutup</span>
              </button>
            </div>

            {/* Spec Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Ukuran / Berat Panen
                </span>
                <p className="text-base sm:text-lg md:text-xl font-black text-teal-950 font-serif">
                  {slide.size}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Panjang rata-rata 32 - 45 cm</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Karakter Daging
                </span>
                <p className="text-base sm:text-lg md:text-xl font-black text-teal-950 font-serif">
                  {slide.texture}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Tanpa duri halus melintang di serat</p>
              </div>

              <div className="col-span-1 sm:col-span-2 bg-white/60 p-3 sm:p-4 rounded-xl border border-amber-900/10 shadow-sm">
                <span className="text-xs uppercase tracking-wider text-accentOrange font-bold flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-4 h-4" /> Nilai Gizi per 100 gram
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
                  <div className="bg-amber-50/70 p-2 rounded-lg">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500">Protein</span>
                    <span className="text-sm sm:text-base font-bold text-teal-900">{slide.protein}</span>
                  </div>
                  <div className="bg-amber-50/70 p-2 rounded-lg">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500">Lemak</span>
                    <span className="text-sm sm:text-base font-bold text-teal-900">{slide.fat}</span>
                  </div>
                  <div className="bg-amber-50/70 p-2 rounded-lg">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500">Kalori</span>
                    <span className="text-sm sm:text-base font-bold text-teal-900">{slide.calories}</span>
                  </div>
                  <div className="bg-amber-50/70 p-2 rounded-lg">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500">Omega-3</span>
                    <span className="text-sm sm:text-base font-bold text-teal-900">{slide.omega}</span>
                  </div>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Rekomendasi Olahan Kuliner
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  {slide.cooking}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
            <span className="text-xs text-slate-500">Sertifikasi Bebas Bahan Kimia & Formalin</span>
            <button
              onClick={() => {
                onClose();
                onOrderClick();
              }}
              className="text-xs font-bold text-accentOrange hover:underline flex items-center gap-1"
            >
              Order Sampel Resto <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
