"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ children, id, title, subtitle, className, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-12 md:py-16", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
