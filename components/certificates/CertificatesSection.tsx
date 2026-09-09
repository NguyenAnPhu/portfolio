"use client";

import { useRef } from "react";
import { certificates } from "@/data/certificates";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { CertificateCard } from "./CertificateCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function CertificatesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".cert-card-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <Section id="certificates" title="Certificates" className="bg-transparent relative z-10">
      <Container>
        <div ref={containerRef} className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="scroll-scale-in cert-card-item">
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
