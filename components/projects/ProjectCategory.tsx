"use client";

import { useRef } from "react";
import { Pagination, Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/grid';

import { Project, ProjectCategory as CategoryType } from "@/types";

import { ProjectCard } from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ProjectCategoryProps {
  title: string;
  category: CategoryType;
  projects: Project[];
}

export function ProjectCategory({ title, category, projects }: ProjectCategoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);

  const categoryProjects = projects.filter((p) => p.category === category);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
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
      swiperWrapperRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
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

  if (categoryProjects.length === 0) return null;

  return (
    <div ref={containerRef} className="mb-16 last:mb-0">
      <h3 ref={titleRef} className="scroll-title mb-8 flex items-center text-2xl font-bold text-foreground">
        <span className="mr-4 inline-block h-8 w-2 rounded-full bg-gradient-to-b from-brand-500 to-indigo-600 shadow-sm shadow-brand-500/50"></span>
        {title}
      </h3>
      <div ref={swiperWrapperRef} className="scroll-fade-up w-full min-w-0">
        <Swiper
          grid={{
            rows: category == "website" ? 2 : 1,
            fill: "row",
          }}
          modules={[Grid, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="project-swiper w-full min-w-0 pb-12! pt-4!"
        >
          {categoryProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
