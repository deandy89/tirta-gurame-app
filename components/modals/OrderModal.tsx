"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";
import { OrderFormData } from "@/types/fish";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    product: "Gurame Soang Konsumsi (500g - 1kg)",
    qty: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Tirta Gurame Nusantara, saya ${formData.name} dari ${formData.location}. Saya tertarik dengan pasokan ${formData.product} dengan estimasi kebutuhan sekitar ${formData.qty}. Mohon informasi ketersediaan kolam dan skema harga kemitraan. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6281220305500?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-paper-texture max-w-md w-full rounded-2xl p-6 md:p-8 shadow-2xl border border-amber-900/20 relative z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-slate-500 hover:text-slate-800 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Konsultasi & Pemesanan
              </span>
            </div>

            <h3 className="text-2xl font-black text-teal-950 font-serif mb-1">
              Hubungi Pembudidaya
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Pesan ikan gurame segar panen harian untuk restoran, rumah makan, catering, atau
              kebutuhan bibit pembesaran.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Nama / Nama Usaha
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Rumah Makan Lesehan Barokah"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-900/20 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accentOrange text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Pilihan Produk
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-amber-900/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accentOrange"
                  >
                    <option value="Gurame Soang Konsumsi (500g - 1kg)">Gurame Konsumsi Super</option>
                    <option value="Gurame Padang Hias / Indukan">Gurame Padang Indukan</option>
                    <option value="Fillet Gurame Segar Boneless">Fillet Gurame Bersih</option>
                    <option value="Bibit Gurame F1 Ukuran Silet/Korek">Bibit Gurame Unggul F1</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Volume Kebutuhan
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.qty}
                    onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                    placeholder="Misal: 50 kg / minggu"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-900/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accentOrange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Kota / Lokasi Pengiriman
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Contoh: Bandung / Jabodetabek"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-900/20 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accentOrange"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 mt-4 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
