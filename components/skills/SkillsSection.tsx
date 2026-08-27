import { skillGroups } from "@/data/skills";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { SkillGroup } from "./SkillGroup";

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
