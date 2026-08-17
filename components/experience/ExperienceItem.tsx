import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import React from "react";

import { Experience, ResponsibilityGroup } from "@/types";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const renderResponsibilityGroup = (group: ResponsibilityGroup, isSubGroup = false) => {
    return (
      <div key={group.title} className={isSubGroup ? "mt-4" : "mt-6"}>
        <h4 className={`font-semibold text-foreground ${isSubGroup ? "text-sm" : "text-base"}`}>
          {group.title}
        </h4>
        {group.items && group.items.length > 0 && (
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground text-sm marker:text-brand-400">
            {group.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
        {group.subGroups && group.subGroups.length > 0 && (
          <div className="ml-4 border-l-2 border-border/50 pl-4">
            {group.subGroups.map((subGroup) => renderResponsibilityGroup(subGroup, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline connector and dot */}
      <div className="absolute left-0 sm:left-24 top-6 flex h-full w-8 sm:w-16 flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-200 bg-background text-brand-500 shadow-sm transition-all duration-200 group-hover:border-brand-500 group-hover:bg-brand-50 z-10 relative">
          <BusinessCenterIcon fontSize="small" />
        </div>
        <div className="h-full w-[2px] bg-border group-last:bg-transparent -mt-2"></div>
      </div>

      <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-border/80 cursor-default">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight">
              {experience.position}
            </h3>
            <p className="mt-1 font-semibold text-brand-700 text-sm tracking-wide">
              {experience.company}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-600">
            {experience.period}
          </span>
        </div>

        <div className="divide-y divide-border/50">
          {experience.responsibilityGroups.map((group, index) => (
            <React.Fragment key={index}>
              {renderResponsibilityGroup(group)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
