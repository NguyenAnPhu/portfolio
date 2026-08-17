import Image from "next/image";

import { Skill } from "@/types";

interface SkillItemProps {
  skill: Skill;
}

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border bg-card p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-brand-200 cursor-pointer">
      <div className="relative h-12 w-12 grayscale transition-all duration-300 group-hover:grayscale-0">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-center text-sm font-medium text-foreground group-hover:text-brand-700 transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  );
}
