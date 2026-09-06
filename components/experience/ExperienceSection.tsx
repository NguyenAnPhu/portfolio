"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { experiences } from "@/data/experience";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ExperienceItem } from "./ExperienceItem";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const updateContentHeight = () => {
      setContentHeight(content.scrollHeight);
      ScrollTrigger.refresh();
    };
    updateContentHeight();

    const resizeObserver = new ResizeObserver(updateContentHeight);
    resizeObserver.observe(content);

    return () => resizeObserver.disconnect();
  }, [isExpanded]);

  return (
    <Section id="experience" title="Work Experience">
      <Container>
        <div className="mx-auto max-w-4xl relative">
          <div className="relative">
            <div
              ref={contentRef}
              id="experience-content"
              className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
              style={{
                maxHeight: contentHeight
                  ? `${isExpanded ? contentHeight : contentHeight / 2}px`
                  : undefined,
              }}
            >
              <div className="flex flex-col space-y-2">
                {experiences.map((experience) => (
                  <ExperienceItem key={experience.id} experience={experience} />
                ))}
              </div>
            </div>

            {/* Sleek bottom gradient collapse overlay */}
            <div
              className={`absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-2 pt-28 transition-all duration-500 ${
                isExpanded ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              aria-hidden={isExpanded}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none rounded-b-2xl" />
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                aria-controls="experience-content"
                aria-expanded={isExpanded}
                className="hover:cursor-pointer transition-all relative z-10 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-background/90 px-6 py-2.5 text-sm font-semibold text-brand-600 dark:text-brand-400 shadow-xl shadow-brand-500/10 backdrop-blur-md hover:scale-105 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950/80 active:scale-95"
              >
                View more
                <KeyboardArrowDownIcon fontSize="small" />
              </button>
            </div>

            {isExpanded && (
              <div className="flex justify-center pt-8">
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  aria-controls="experience-content"
                  aria-expanded={isExpanded}
                  className="hover:cursor-pointer transition-all inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground shadow-md hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 cursor-pointer active:scale-95"
                >
                  Show less
                  <KeyboardArrowUpIcon fontSize="small" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
