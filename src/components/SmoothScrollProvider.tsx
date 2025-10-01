"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Respect user preference: do not initialize smooth scrolling
      return;
    }

    const lenis = new Lenis({
      duration: 0.8, // Reduced duration for better performance
      smoothWheel: true,
      syncTouch: false,
      gestureOrientation: "vertical",
      touchMultiplier: 1.0, // Reduced for better performance
    });
    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}







