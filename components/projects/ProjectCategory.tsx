"use client";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

import { Project, ProjectCategory as CategoryType } from "@/types";

import { ProjectCard } from "./ProjectCard";

interface ProjectCategoryProps {
  title: string;
  category: CategoryType;
  projects: Project[];
}

export function ProjectCategory({ title, category, projects }: ProjectCategoryProps) {
  const categoryProjects = projects.filter((p) => p.category === category);

  if (categoryProjects.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <h3 className="mb-8 flex items-center text-2xl font-bold text-foreground">
        <span className="mr-4 inline-block h-8 w-2 rounded-full bg-brand-600"></span>
        {title}
      </h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
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
        className="project-swiper pb-12!"
      >
        {categoryProjects.map((project) => (
          <SwiperSlide key={project.id} className="h-auto!">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
