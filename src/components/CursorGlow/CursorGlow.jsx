import React, { useEffect } from "react";
import "./cursorGlow.css";

export default function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById("cursor-glow");
    if (!el) return;

    let rafId = 0;
    let lastX = -100;
    let lastY = -100;
    let currentX = -100;
    let currentY = -100;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Keep it hidden for reduced motion.
      el.style.opacity = "0";
      return;
    }

    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      el.style.opacity = "1";

      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    const tick = () => {
      rafId = 0;
      // Smooth follow
      currentX += (lastX - currentX) * 0.18;
      currentY += (lastY - currentY) * 0.18;

      el.style.transform = `translate3d(${currentX - 60}px, ${currentY - 60}px, 0)`;

      const dx = Math.abs(lastX - currentX);
      const dy = Math.abs(lastY - currentY);
      if (dx > 0.5 || dy > 0.5) {
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      id="cursor-glow"
      aria-hidden="true"
      style={{ opacity: 0 }}
    />
  );
}

