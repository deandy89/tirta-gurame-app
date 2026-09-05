"use client";

import { useEffect, RefObject } from "react";

export function useWaterCaustics(
  canvasRef: RefObject<HTMLCanvasElement>,
  bubblesContainerRef: RefObject<HTMLDivElement>
) {
  // Canvas caustics water ripple simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    let t = 0;
    const renderCaustics = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.015;

      ctx.strokeStyle = "rgba(180, 240, 230, 0.18)";
      ctx.lineWidth = 2.5;

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 35) {
          const y =
            height * 0.25 +
            Math.sin(x * 0.008 + t + i) * 35 +
            Math.cos(x * 0.015 - t * 0.8) * 20 +
            i * 45;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animFrameId = requestAnimationFrame(renderCaustics);
    };

    renderCaustics();

    return () => {
      cancelAnimationFrame(animFrameId);
      resizeObserver.disconnect();
    };
  }, [canvasRef]);

  // Rising bubbles effect with DOM cleanup
  useEffect(() => {
    const container = bubblesContainerRef.current;
    if (!container) return;

    // Clear any previous bubbles
    container.innerHTML = "";

    const bubbleCount = 18;
    const bubbles: HTMLDivElement[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      const size = Math.random() * 7 + 3;
      const left = Math.random() * 90 + 5;
      const duration = Math.random() * 6 + 4;
      const delay = Math.random() * 5;

      bubble.className =
        "absolute rounded-full bg-white/20 border border-white/35 pointer-events-none";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.bottom = "-20px";
      bubble.style.animation = `riseBubble ${duration}s linear ${delay}s infinite`;

      container.appendChild(bubble);
      bubbles.push(bubble);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [bubblesContainerRef]);
}
