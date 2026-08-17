import { projects } from "@/data/projects";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ProjectCategory } from "./ProjectCategory";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" className="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-6xl">
          <ProjectCategory
            title="Website"
            category="website"
            projects={projects}
          />
          <ProjectCategory
            title="Zalo Mini App"
            category="zalo-mini-app"
            projects={projects}
          />
          <ProjectCategory
            title="Mobile App"
            category="mobile-app"
            projects={projects}
          />
        </div>
      </Container>
    </Section>
  );
}
