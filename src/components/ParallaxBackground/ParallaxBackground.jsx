import React, { useEffect, useRef } from "react";
import "./parallaxBackground.css";

export default function ParallaxBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = ref.current;
    if (!root) return;

    if (prefersReduced) {
      root.setAttribute("data-parallax", "0");
      return;
    }

    let rafId = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2; // -1..1
      targetY = (e.clientY / innerHeight - 0.5) * 2;

      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const tick = () => {
      rafId = 0;
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;

      root.style.setProperty("--px", x.toFixed(3));
      root.style.setProperty("--py", y.toFixed(3));

      // keep animating lightly while moving
      if (Math.abs(targetX - x) > 0.001 || Math.abs(targetY - y) > 0.001) {
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={ref} className="parallax-bg" aria-hidden="true">
      <div className="parallax-layer layer-1" />
      <div className="parallax-layer layer-2" />
      <div className="parallax-layer layer-3" />
      <div className="parallax-grid" />
    </div>
  );
}

