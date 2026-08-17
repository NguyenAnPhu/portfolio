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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
