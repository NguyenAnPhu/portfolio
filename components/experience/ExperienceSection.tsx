import { experiences } from "@/data/experience";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Work Experience">
      <Container>
        <div className="mx-auto max-w-4xl relative">
          {/* Main timeline line for desktop */}
          <div className="absolute left-4 sm:left-[6.5rem] top-10 bottom-10 w-[2px] bg-border hidden sm:block"></div>
          
          <div className="flex flex-col">
            {experiences.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
