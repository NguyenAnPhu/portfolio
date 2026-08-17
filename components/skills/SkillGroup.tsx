import { SkillGroup as SkillGroupType } from "@/types";

import { SkillItem } from "./SkillItem";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border bg-muted/20 p-6 transition-all duration-200 hover:border-border/80">
      <h3 className="mb-6 text-center text-lg font-bold text-foreground">
        {group.title}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {group.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
