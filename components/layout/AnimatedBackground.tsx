"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Blob 1 floating animation
    gsap.to(blob1Ref.current, {
      x: "15vw",
      y: "10vh",
      scale: 1.25,
      rotation: 45,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Blob 2 floating animation
    gsap.to(blob2Ref.current, {
      x: "-12vw",
      y: "15vh",
      scale: 0.85,
      rotation: -30,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Blob 3 floating animation
    gsap.to(blob3Ref.current, {
      x: "10vw",
      y: "-12vh",
      scale: 1.15,
      rotation: 20,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} suppressHydrationWarning className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      {/* GSAP Animated Ambient Gradient Blobs */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-10%] w-[32rem] h-[32rem] rounded-full bg-brand-400/40 mix-blend-multiply blur-[120px] dark:bg-brand-600/30 dark:mix-blend-lighten"
      />
      <div 
        ref={blob2Ref}
        className="absolute top-[15%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-primary/40 mix-blend-multiply blur-[120px] dark:bg-primary/30 dark:mix-blend-lighten"
      />
      <div 
        ref={blob3Ref}
        className="absolute bottom-[-10%] left-[20%] w-[34rem] h-[34rem] rounded-full bg-purple-400/40 mix-blend-multiply blur-[120px] dark:bg-purple-600/30 dark:mix-blend-lighten"
      />
    </div>
  );
};
