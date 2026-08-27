"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      {/* Animated Gradient Blobs */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-brand-400/40 mix-blend-multiply blur-[100px] animate-blob dark:bg-brand-600/30 dark:mix-blend-lighten"
      />
      <div 
        className="absolute top-[10%] right-[-10%] w-96 h-96 rounded-full bg-primary/40 mix-blend-multiply blur-[100px] animate-blob dark:bg-primary/30 dark:mix-blend-lighten"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-96 h-96 rounded-full bg-purple-400/40 mix-blend-multiply blur-[100px] animate-blob dark:bg-purple-600/30 dark:mix-blend-lighten"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};
