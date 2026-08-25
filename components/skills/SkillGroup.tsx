"use client";

import { SkillGroup as SkillGroupType } from "@/types";
import { motion } from "framer-motion";

import { SkillItem } from "./SkillItem";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <motion.div 
      className="rounded-2xl glass-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="mb-6 text-center text-lg font-bold text-foreground">
        {group.title}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {group.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
