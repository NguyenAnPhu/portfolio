"use client";

import { useRef } from "react";
import SchoolIcon from "@mui/icons-material/School";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <Section id="education" title="Education" className="bg-transparent relative z-10">
      <Container>
        <div ref={containerRef} className="mx-auto max-w-3xl">
          <article 
            ref={cardRef}
            className="relative flex flex-col gap-6 rounded-2xl glass-card p-6 cursor-default sm:flex-row sm:p-8 transition-shadow hover:shadow-2xl hover:border-brand-500/30"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
              <SchoolIcon />
            </div>
            <div className="flex-1">
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-foreground">
                  Industrial University of Ho Chi Minh City
                </h3>
                <span className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400 sm:mt-0 bg-brand-50 dark:bg-brand-950/80 px-3 py-1 rounded-full whitespace-nowrap text-center">
                  2019 – 2023
                </span>
              </div>
              <p className="mb-4 font-semibold text-muted-foreground uppercase text-sm tracking-wide">
                FACULTY OF INFORMATION TECHNOLOGY
              </p>
              <p className="text-muted-foreground">
                During my studies, I developed a foundational understanding of Website Development, Internet of Things (IoT), and Computer Networking. I gained practical experience through programming assignments and projects involving application development, device connectivity, and network system configuration.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
