"use client";

import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

import { Project } from "@/types";

interface ProjectDetailDialogProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export function ProjectDetailDialog({ project, open, onClose }: ProjectDetailDialogProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "1rem",
          backgroundColor: "var(--background)",
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle className="flex items-center justify-between border-b border-border/50 bg-muted/20 pb-4 transition-colors duration-200">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <p className="mt-1 font-medium text-brand-600">{project.role}</p>
        </div>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: "var(--muted-foreground)",
            "&:hover": { color: "var(--foreground)", backgroundColor: "var(--muted)" },
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent className="py-6">
        <div className="mb-6 flex gap-4">
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-700 cursor-pointer active:scale-95"
          >
            <LaunchIcon fontSize="small" />
            Preview Project
          </a>
        </div>
        
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Responsibilities & Achievements</h3>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground marker:text-brand-400">
            {project.responsibilities.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
