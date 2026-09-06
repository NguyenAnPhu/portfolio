"use client";

import { useRef } from "react";
import { SkillGroup as SkillGroupType } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { SkillItem } from "./SkillItem";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".skill-card-item");

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.75, y: 15 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="rounded-2xl glass-card p-6 border border-white/10 shadow-lg"
    >
      <h3 className="mb-6 text-center text-lg font-bold text-foreground">
        {group.title}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {group.skills.map((skill) => (
          <div key={skill.name} className="skill-card-item">
            <SkillItem skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
