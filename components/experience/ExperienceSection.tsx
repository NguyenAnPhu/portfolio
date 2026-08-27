"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useRef, useState } from "react";

import { experiences } from "@/data/experience";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const updateContentHeight = () => setContentHeight(content.scrollHeight);
    updateContentHeight();

    const resizeObserver = new ResizeObserver(updateContentHeight);
    resizeObserver.observe(content);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Section id="experience" title="Work Experience">
      <Container>
        <div className="mx-auto max-w-4xl relative">
          {/* Main timeline line for desktop */}
          <div className="absolute left-4 top-10 bottom-10 hidden w-0.5 bg-border sm:left-26 sm:block"></div>

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
              <div className="flex flex-col">
                {experiences.map((experience) => (
                  <ExperienceItem key={experience.id} experience={experience} />
                ))}
              </div>
            </div>

            <div
              className={`absolute inset-x-0 bottom-0 flex justify-center pt-20 transition-opacity duration-500 ${
                isExpanded ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              aria-hidden={isExpanded}
            >
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-transparent backdrop-blur-[2px] rounded-b-lg" />
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                aria-controls="experience-content"
                aria-expanded={isExpanded}
                className="hover:cursor-pointer transition-all relative z-10 inline-flex items-center gap-1 rounded-full border border-brand-200/80 bg-background/90 px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-lg shadow-brand-900/10 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
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
                  className="hover:cursor-pointer transition-all inline-flex items-center gap-1 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
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
