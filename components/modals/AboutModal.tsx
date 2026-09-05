"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon, Sparkles, Droplets, Wind, ShieldCheck, ChevronRight } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenOrder,
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<"all" | "photos" | "videos">("all");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-paper-texture max-w-3xl w-full rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl border border-amber-900/20 max-h-[88vh] overflow-y-auto no-scrollbar relative z-10 text-slate-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-slate-500 hover:text-slate-800 transition active:scale-95 z-20"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Intro */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accentOrange bg-accentOrange/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> Profil Budidaya & Usaha
                </span>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Tirta Gurame ID
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-teal-950 font-serif leading-tight">
                Tentang Usaha Tirta Gurame
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Tirta Gurame adalah sentra budidaya ikan gurame modern yang berdedikasi menghadirkan pasokan gurame konsumsi berkualitas tinggi. Kami menerapkan teknologi akuakultur <strong>kolam terpal higienis</strong> dipadukan dengan <strong>sistem aerasi gelembung oksigen</strong> terpadu guna menjamin kesehatan ikan dan mutu daging terbaik.
              </p>
            </div>

            {/* Highlight Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3.5 bg-white/80 rounded-xl border border-amber-900/10 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-xs mb-1">
                  <Droplets className="w-4 h-4 text-accentOrange" />
                  <span>Kolam Terpal Higienis</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Mencegah kontak langsung dengan lumpur tanah, menghasilkan daging putih bersih 100% tanpa aroma lumpur.
                </p>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-amber-900/10 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-xs mb-1">
                  <Wind className="w-4 h-4 text-emerald-600" />
                  <span>Teknik Aerasi Oksigen</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Injeksi gelembung mikro-oksigen terus-menerus untuk memicu metabolisme aktif dan tekstur daging padat kenyal.
                </p>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-amber-900/10 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Standar Resto & Pasar</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Sortir ketat bobot konsumsi 500g hingga 1kg+, siap suplai rutin ke restoran, hotel, maupun katering.
                </p>
              </div>
            </div>

            {/* Media Gallery Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3 border-b border-amber-900/10 pb-2 flex-wrap gap-2">
                <h4 className="text-sm font-bold text-teal-950 uppercase tracking-wide flex items-center gap-1.5">
                  <span>Dokumentasi Fasilitas & Lapangan</span>
                </h4>
                <div className="flex items-center gap-1 bg-amber-900/5 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveMediaTab("all")}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition ${
                      activeMediaTab === "all"
                        ? "bg-accentOrange text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => setActiveMediaTab("photos")}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1 ${
                      activeMediaTab === "photos"
                        ? "bg-accentOrange text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" /> Foto
                  </button>
                  <button
                    onClick={() => setActiveMediaTab("videos")}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition flex items-center gap-1 ${
                      activeMediaTab === "videos"
                        ? "bg-accentOrange text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Play className="w-3 h-3" /> Video
                  </button>
                </div>
              </div>

              {/* Photo Showcase */}
              {(activeMediaTab === "all" || activeMediaTab === "photos") && (
                <div className="mb-4">
                  <div className="relative group overflow-hidden rounded-xl border border-amber-900/15 shadow-md bg-slate-950">
                    <img
                      src="/images/tentang-kami.jpg"
                      alt="Fasilitas Budidaya Tirta Gurame"
                      className="w-full h-56 sm:h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accentOrange">
                        Dokumentasi Kolam Utama
                      </span>
                      <h5 className="text-white text-sm sm:text-base font-bold font-serif">
                        Ekosistem Kolam Budidaya Tirta Gurame
                      </h5>
                      <p className="text-white/80 text-[11px] sm:text-xs mt-0.5">
                        Area instalasi kolam terpal berpeneduh dengan sistem manajemen sirkulasi air dan aerasi presisi.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Videos Grid */}
              {(activeMediaTab === "all" || activeMediaTab === "videos") && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Video 1 */}
                  <div className="bg-white/90 p-3 rounded-xl border border-amber-900/10 shadow-sm flex flex-col">
                    <div className="relative rounded-lg overflow-hidden bg-black aspect-video mb-2.5 border border-black/10">
                      <video
                        src="/videos/tentang-kami1.mp4"
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        Browser Anda tidak mendukung pemutaran video.
                      </video>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-accentOrange font-bold uppercase tracking-wide mb-0.5">
                          <span>Video Dokumentasi 01</span>
                          <span className="text-slate-400">MP4</span>
                        </div>
                        <h5 className="font-bold text-teal-950 text-xs sm:text-sm">
                          Sistem Aerasi & Aliran Gelembung O2
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Pemberian aerasi aktif untuk suplai oksigen maksimal, menjaga nafsu makan dan vitalitas ikan di kolam terpal.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video 2 */}
                  <div className="bg-white/90 p-3 rounded-xl border border-amber-900/10 shadow-sm flex flex-col">
                    <div className="relative rounded-lg overflow-hidden bg-black aspect-video mb-2.5 border border-black/10">
                      <video
                        src="/videos/tentang-kami2.mp4"
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        Browser Anda tidak mendukung pemutaran video.
                      </video>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-accentOrange font-bold uppercase tracking-wide mb-0.5">
                          <span>Video Dokumentasi 02</span>
                          <span className="text-slate-400">MP4</span>
                        </div>
                        <h5 className="font-bold text-teal-950 text-xs sm:text-sm">
                          Monitoring Kualitas & Kondisi Ikan
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Pengawasan rutin perkembangan gurame soang untuk memastikan ukuran seragam dan ketebalan daging standar resto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Call to action */}
            <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-slate-500">
                Tertarik bermitra atau memesan pasokan rutin? Hubungi tim kami sekarang.
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-black/5 transition"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenOrder();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-accentOrange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center gap-1.5 active:scale-95"
                >
                  <span>Pesan Pasokan</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

