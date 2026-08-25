"use client";

import IMAGES from "@/assets/images";
import { Container } from "../layout/Container";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function IntroductionSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div 
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="text-brand-600 mb-2 text-sm font-semibold tracking-wider uppercase">
              About Me
            </motion.p>
            <motion.h1 variants={itemVariants} className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Nguyễn An Phú
            </motion.h1>
            <motion.p variants={itemVariants} className="mb-8 text-xl font-medium text-muted-foreground">
              Developer
            </motion.p>
            <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert text-muted-foreground glass-panel p-6 rounded-2xl">
              <p>
                As a software developer with 2 years of hands-on experience, I focus on developing and deploying Website and Zalo Mini App solutions, alongside experience in Native App development. My technical strengths lie in building user interfaces and integrating APIs using TypeScript, ReactJS, Redux Toolkit, RTK Query, complemented by backend development using PHP.
              </p>
              <p>
                I consistently prioritize SEO-standard structures, page load performance optimization, and writing clean, maintainable code designed for easy structural upgrades and future scalability. To maximize efficiency, I actively leverage AI tools (GitHub Copilot, Gemini) for coding, debugging, and solution analysis.
              </p>
              <p>
                Beyond technical capabilities, I am proactive in organizing tasks, bridging business requirements across departments, and managing time to meet project deadlines. My goal is to continuously refine my expertise and evolve into a well-rounded Fullstack Developer.
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-4 border-background shadow-2xl glass-2"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image
                src={IMAGES.avatar}
                alt="Nguyễn An Phú Avatar"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </motion.div>
            {/* Decorative background circle */}
            <div className="absolute -z-10 h-72 w-72 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem] rounded-full bg-brand-100/50 dark:bg-brand-900/20 blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
