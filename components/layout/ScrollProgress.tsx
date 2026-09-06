"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressBarRef.current) return;

    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });
  }, []);

  return (
    <div
      ref={progressBarRef}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-[9999] origin-left scale-x-0 shadow-sm shadow-indigo-500/50 pointer-events-none"
    />
  );
}
