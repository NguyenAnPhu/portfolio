"use client";

import { useRef } from "react";
import IMAGES from "@/assets/images";
import { Container } from "../layout/Container";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export function IntroductionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarCardRef = useRef<HTMLDivElement>(null);
  const avatarImageRef = useRef<HTMLDivElement>(null);

  useGSAP((context, contextSafe) => {
    // 1. Hero Entrance Timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(".hero-tag", {
      opacity: 0,
      y: 20,
      delay: 0.1,
    })
      .from(".hero-title", {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
      }, "-=0.6")
      .from(".hero-subtitle", {
        opacity: 0,
        y: 25,
      }, "-=0.6")
      .from(".hero-bio", {
        opacity: 0,
        y: 30,
        scale: 0.98,
      }, "-=0.5")
      .from(avatarCardRef.current, {
        opacity: 0,
        scale: 0.8,
        filter: "blur(12px)",
        duration: 1,
        ease: "back.out(1.4)",
      }, "-=0.8");

    // Continuous subtle floating for Avatar image wrapper
    gsap.to(avatarImageRef.current, {
      y: -14,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Interactive Magnetic 3D Tilt Effect on Mouse Move
    if (!avatarCardRef.current) return;

    const xTo = gsap.quickTo(avatarCardRef.current, "x", { duration: 0.4, ease: "power2.out" });
    const yTo = gsap.quickTo(avatarCardRef.current, "y", { duration: 0.4, ease: "power2.out" });
    const rotateXTo = gsap.quickTo(avatarCardRef.current, "rotateX", { duration: 0.4, ease: "power2.out" });
    const rotateYTo = gsap.quickTo(avatarCardRef.current, "rotateY", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = contextSafe((e: MouseEvent) => {
      if (!avatarCardRef.current) return;
      const rect = avatarCardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Magnetic offset & 3D tilt calculation
      xTo(mouseX * 0.15);
      yTo(mouseY * 0.15);
      rotateXTo(-mouseY * 0.08);
      rotateYTo(mouseX * 0.08);
    });

    const handleMouseLeave = contextSafe(() => {
      xTo(0);
      yTo(0);
      rotateXTo(0);
      rotateYTo(0);
    });

    const cardEl = avatarCardRef.current;
    cardEl.addEventListener("mousemove", handleMouseMove);
    cardEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardEl.removeEventListener("mousemove", handleMouseMove);
      cardEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-center">
            <p className="hero-tag text-brand-600 dark:text-brand-400 mb-2 text-sm font-semibold tracking-wider uppercase">
              About Me
            </p>
            <h1 className="hero-title mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Nguyễn An Phú
            </h1>
            <p className="hero-subtitle mb-8 text-xl font-medium text-muted-foreground">
              Software Developer
            </p>
            <div className="hero-bio prose prose-lg dark:prose-invert text-muted-foreground glass-panel p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
              <p>
                As a software developer with 2 years of hands-on experience, I focus on developing and deploying Website and Zalo Mini App solutions, alongside experience in Native App development. My technical strengths lie in building user interfaces and integrating APIs using TypeScript, ReactJS, Redux Toolkit, RTK Query, complemented by backend development using PHP.
              </p>
              <p>
                I consistently prioritize SEO-standard structures, page load performance optimization, and writing clean, maintainable code designed for easy structural upgrades and future scalability. To maximize efficiency, I actively leverage AI tools (GitHub Copilot, Gemini) for coding, debugging, and solution analysis.
              </p>
              <p>
                Beyond technical capabilities, I am proactive in organizing tasks, bridging business requirements across departments, and managing time to meet project deadlines. My goal is to continuously refine my expertise and evolve into a well-rounded Fullstack Developer.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end [perspective:1000px]">
            <div
              ref={avatarCardRef}
              className="relative transition-shadow duration-300 ease-out cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                ref={avatarImageRef}
                className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-4 border-background shadow-2xl glass-2"
              >
                <Image
                  src={IMAGES.avatar}
                  alt="Nguyễn An Phú Avatar"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Decorative background circle */}
              <div className="absolute -z-10 inset-0 -m-4 rounded-full bg-brand-500/20 dark:bg-brand-400/10 blur-3xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
