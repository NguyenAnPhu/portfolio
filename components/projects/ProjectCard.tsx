"use client";

import InfoIcon from "@mui/icons-material/Info";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
import { useState } from "react";

import { Project } from "@/types";

import { ProjectDetailDialog } from "./ProjectDetailDialog";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:border-border/80 cursor-pointer">
        <div className="relative h-48 w-full overflow-hidden bg-muted transition-colors duration-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-sm uppercase tracking-wider transition-all duration-200 group-hover:bg-background/95">
            {project.category.replace(/-/g, " ")}
          </div>
        </div>
        
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold text-foreground line-clamp-1">{project.title}</h3>
          <p className="mb-4 text-sm font-medium text-brand-600">{project.role}</p>
          <p className="mb-6 flex-1 text-muted-foreground line-clamp-3">
            {project.shortDescription}
          </p>
          
          <div className="flex items-center gap-3 mt-auto">
            <button
              onClick={() => setDialogOpen(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-100 cursor-pointer active:scale-95"
            >
              <InfoIcon fontSize="small" />
              Details
            </button>
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-border bg-background p-2.5 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:border-border/80 cursor-pointer active:scale-90"
              aria-label="Preview"
            >
              <LaunchIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      <ProjectDetailDialog
        project={project}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
