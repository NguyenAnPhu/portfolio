"use client";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Experience, ResponsibilityGroup } from "@/types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current || !dotRef.current) return;

    gsap.fromTo(
      dotRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cardRef.current,
      { x: 25, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: itemRef });

  const renderResponsibilityGroup = (group: ResponsibilityGroup, isSubGroup = false) => {
    return (
      <div key={group.title} className={isSubGroup ? "mt-4" : "mt-6"}>
        <h4 className={`font-semibold text-foreground ${isSubGroup ? "text-sm" : "text-base"}`}>
          {group.title}
        </h4>
        {group.items && group.items.length > 0 && (
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground text-sm marker:text-brand-400">
            {group.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
        {group.subGroups && group.subGroups.length > 0 && (
          <div className="ml-4 border-l-2 border-border/50 pl-4">
            {group.subGroups.map((subGroup) => renderResponsibilityGroup(subGroup, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={itemRef} className="relative pl-10 sm:pl-16 py-5 group">
      {/* Timeline connector and dot */}
      <div className="absolute left-0 sm:left-2 top-5 flex h-full w-8 sm:w-9 flex-col items-center">
        <div 
          ref={dotRef}
          className="scroll-dot flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-brand-400/80 bg-background text-brand-600 shadow-md shadow-brand-500/20 z-10 relative dark:bg-card dark:text-brand-400 group-hover:scale-110 group-hover:border-brand-500 transition-transform duration-300"
        >
          <BusinessCenterIcon fontSize="small" />
        </div>
        {/* Connecting line terminates at the last item's dot */}
        <div className="w-[2px] bg-gradient-to-b from-brand-500/80 via-indigo-500/50 to-border/40 h-full -mt-2 group-last:hidden"></div>
      </div>

      <div 
        ref={cardRef}
        className="scroll-slide-in rounded-2xl glass-card p-6 cursor-default transition-all duration-300 hover:shadow-xl hover:border-brand-500/30 border border-white/10"
      >
        <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight">
              {experience.position}
            </h3>
            <p className="mt-1 font-semibold text-brand-600 dark:text-brand-400 text-sm tracking-wide">
              {experience.company}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-brand-50 dark:bg-brand-950/80 px-3.5 py-1 text-sm font-medium text-brand-600 dark:text-brand-300 text-center shadow-xs border border-brand-200/50 dark:border-brand-800/50">
            {experience.period}
          </span>
        </div>

        <div className="divide-y divide-border/50">
          {experience.responsibilityGroups.map((group, index) => (
            <React.Fragment key={index}>
              {renderResponsibilityGroup(group)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
