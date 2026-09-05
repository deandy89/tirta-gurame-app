"use client";

import { useRef, useCallback } from "react";

export function useAudioEffects(audioEnabled: boolean) {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioContextRef.current = new AudioCtx();
      }
    }
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  const playInspectSound = useCallback(() => {
    if (!audioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(680, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch {
      // Ignore audio policy errors
    }
  }, [audioEnabled, getAudioContext]);

  const playFilletSliceSound = useCallback(() => {
    if (!audioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // 1. Noise buffer for crisp knife cutting swoosh
      const bufferSize = ctx.sampleRate * 0.25;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(3200, now);
      filter.frequency.exponentialRampToValueAtTime(900, now + 0.22);
      filter.Q.setValueAtTime(4.5, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

      noiseSource.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noiseSource.start(now);
      noiseSource.stop(now + 0.25);

      // 2. Subtle metallic blade slice pitch
      const bladeOsc = ctx.createOscillator();
      const bladeGain = ctx.createGain();

      bladeOsc.type = "sine";
      bladeOsc.frequency.setValueAtTime(1400, now);
      bladeOsc.frequency.exponentialRampToValueAtTime(450, now + 0.18);

      bladeGain.gain.setValueAtTime(0.05, now);
      bladeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      bladeOsc.connect(bladeGain);
      bladeGain.connect(ctx.destination);

      bladeOsc.start(now);
      bladeOsc.stop(now + 0.19);
    } catch {
      // Ignore audio policy errors
    }
  }, [audioEnabled, getAudioContext]);

  return { playInspectSound, playFilletSliceSound };
}
