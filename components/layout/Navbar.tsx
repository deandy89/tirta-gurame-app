"use client";

import React from "react";
import { Fish, Volume2, VolumeX, ArrowUpRight, Info } from "lucide-react";

interface NavbarProps {
  audioEnabled: boolean;
  onToggleAudio: () => void;
  onOpenCatalog: () => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  audioEnabled,
  onToggleAudio,
  onOpenCatalog,
  onOpenAbout,
}) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-3 sm:px-6 md:px-12 py-3 md:py-5 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/50 via-black/20 to-transparent md:bg-none">
      {/* Logo Branding */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accentOrange/15 border border-accentOrange/40 flex items-center justify-center shadow-sm backdrop-blur-md">
          <Fish className="w-4 h-4 sm:w-5 sm:h-5 text-accentOrange" />
        </div>
        <div>
          <span className="block text-[11px] sm:text-xs font-black tracking-widest text-accentOrange uppercase">
            Tirta Gurame
          </span>
          <span className="hidden sm:block text-[10px] md:text-xs font-medium tracking-wider text-slate-300 md:text-slate-500 uppercase">
            Farm & Aquaculture ID
          </span>
        </div>
      </div>

      {/* Quick Actions / Audio / About / Catalog */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        <button
          onClick={onToggleAudio}
          className="px-2 sm:px-3 py-1.5 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white/90 hover:text-white transition text-xs font-semibold flex items-center gap-1.5 border border-white/15 active:scale-95"
          title="Suara Efek Atmosfer Air"
        >
          {audioEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-accentOrange" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-300" />
          )}
          <span className="hidden sm:inline">{audioEnabled ? "Audio On" : "Audio Off"}</span>
        </button>

        <button
          onClick={onOpenAbout}
          className="flex px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/85 hover:bg-white text-slate-900 text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md transition shadow-sm items-center gap-1.5 border border-white/40 md:border-slate-200/60 active:scale-95"
          title="Profil Usaha Budidaya Tirta Gurame"
        >
          <Info className="w-3.5 h-3.5 text-accentOrange" />
          <span>Tentang Kami</span>
        </button>

        <button
          onClick={onOpenCatalog}
          className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-accentOrange hover:bg-orange-600 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase transition shadow-lg shadow-accentOrange/25 flex items-center gap-1.5 active:scale-95"
        >
          <span>Katalog</span>
          <span className="hidden md:inline"> Bibit & Konsumsi</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
