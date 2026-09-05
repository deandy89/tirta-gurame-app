"use client";

import React, { useState, useCallback } from "react";
import { slidesData } from "@/data/slidesData";
import { Navbar } from "@/components/layout/Navbar";
import { HeroCarousel } from "@/components/carousel/HeroCarousel";
import { WaterHabitat } from "@/components/habitat/WaterHabitat";
import { HybridFishSplitter } from "@/components/carousel/HybridFishSplitter";

import { ActionModals } from "@/components/modals/ActionModals";
import { useAudioEffects } from "@/hooks/useAudioEffects";

export default function Home() {
  // State management replacing monolithic global let variables
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDetailMode, setIsDetailMode] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Web audio synthesis sound effects hook
  const { playInspectSound, playFilletSliceSound } = useAudioEffects(audioEnabled);

  const activeSlide = slidesData[currentSlide];


  // Fillet inspection mode toggle
  const handleToggleDetail = useCallback(() => {
    if (!isDetailMode) {
      playFilletSliceSound();
    } else {
      playInspectSound();
    }
    setIsDetailMode((prev) => !prev);
  }, [isDetailMode, playFilletSliceSound, playInspectSound]);

  const handleToggleAudio = useCallback(() => {
    setAudioEnabled((prev) => !prev);
  }, []);

  return (
    <main className="w-full max-w-[1360px] h-[100dvh] md:h-[92vh] md:min-h-[640px] md:max-h-[880px] bg-slate-900 rounded-none sm:rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col border-0 sm:border border-white/10">
      {/* Top Navigation Bar */}
      <Navbar
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onOpenCatalog={() => setIsCatalogModalOpen(true)}
        onOpenAbout={() => setIsAboutModalOpen(true)}
      />

      {/* Main Interactive Stage */}
      <div id="stage" className="w-full h-full relative flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Editorial Content & Nutrition Drawer */}
        <HeroCarousel
          slide={activeSlide}
          slideIndex={currentSlide}
          totalSlides={slidesData.length}
          isDetailMode={isDetailMode}
          onToggleDetail={handleToggleDetail}
          onOpenOrder={() => setIsOrderModalOpen(true)}
        />

        {/* Right Side: Underwater Habitat with Caustics & Bubbles */}
        <WaterHabitat
          onToggleDetail={handleToggleDetail}
          isDetailMode={isDetailMode}
        />

        {/* Centerpiece: Hybrid Slash/Split Fish Hero (Fillet vs Living Fish) */}
        <HybridFishSplitter
          slide={activeSlide}
          isDetailMode={isDetailMode}
          onToggleDetail={handleToggleDetail}
        />


      </div>

      {/* Action Modals (Order Modal, Catalog Modal, & About Modal) */}
      <ActionModals
        isOrderModalOpen={isOrderModalOpen}
        isCatalogModalOpen={isCatalogModalOpen}
        isAboutModalOpen={isAboutModalOpen}
        onCloseOrder={() => setIsOrderModalOpen(false)}
        onCloseCatalog={() => setIsCatalogModalOpen(false)}
        onCloseAbout={() => setIsAboutModalOpen(false)}
        onOpenOrder={() => {
          setIsCatalogModalOpen(false);
          setIsAboutModalOpen(false);
          setIsOrderModalOpen(true);
        }}
      />
    </main>
  );
}
