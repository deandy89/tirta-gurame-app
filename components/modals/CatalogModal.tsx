"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onOpenOrder,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            className="bg-paper-texture max-w-2xl w-full rounded-2xl p-6 md:p-8 shadow-2xl border border-amber-900/20 max-h-[85vh] overflow-y-auto no-scrollbar relative z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-slate-500 hover:text-slate-800 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold text-accentOrange uppercase tracking-wider">
                Katalog Budidaya Terpadu
              </span>
              <h3 className="text-2xl font-black text-teal-950 font-serif">
                Pilihan Pasokan Ikan Gurame
              </h3>
              <p className="text-xs text-slate-600">
                Dipanen langsung dari kolam bioflok & tanah air mengalir, disortir berdasarkan
                standar mutu ketat.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white/80 rounded-xl border border-amber-900/10 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-teal-950 text-sm">
                    Gurame Konsumsi Standar Resto
                  </h4>
                  <p className="text-xs text-slate-500">
                    Bobot 500 gr - 800 gr | Daging manis gurih, tidak bau lumpur
                  </p>
                </div>
                <span className="text-xs font-extrabold text-accentOrange bg-accentOrange/10 px-3 py-1.5 rounded-lg">
                  Rp 38.000 - 45.000 / kg
                </span>
              </div>

              <div className="p-4 bg-white/80 rounded-xl border border-amber-900/10 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-teal-950 text-sm">
                    Gurame Jumbo / Indukan Pilihan
                  </h4>
                  <p className="text-xs text-slate-500">
                    Bobot 1.5 kg - 3 kg | Cocok untuk menu bakar besar & pembenihan
                  </p>
                </div>
                <span className="text-xs font-extrabold text-accentOrange bg-accentOrange/10 px-3 py-1.5 rounded-lg">
                  Rp 50.000 - 65.000 / kg
                </span>
              </div>

              <div className="p-4 bg-white/80 rounded-xl border border-amber-900/10 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-teal-950 text-sm">
                    Fillet Segar Gurame Vacuum Pack
                  </h4>
                  <p className="text-xs text-slate-500">
                    Tanpa duri, kulit bersih, langsung siap masak untuk hotel & resto
                  </p>
                </div>
                <span className="text-xs font-extrabold text-accentOrange bg-accentOrange/10 px-3 py-1.5 rounded-lg">
                  Rp 75.000 / pack (500g)
                </span>
              </div>

              <div className="p-4 bg-white/80 rounded-xl border border-amber-900/10 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-teal-950 text-sm">
                    Benih Gurame Unggul F1 (Ukuran Silet & Korek)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Daya tahan tinggi, cepat besar dengan pakan pelet & daun senthe
                  </p>
                </div>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg">
                  Mulai Rp 800 / ekor
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-900/10 flex justify-end">
              <button
                onClick={() => {
                  onClose();
                  onOpenOrder();
                }}
                className="px-6 py-2.5 rounded-xl bg-accentOrange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition active:scale-95"
              >
                Ajukan Kerjasama Pasokan
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
