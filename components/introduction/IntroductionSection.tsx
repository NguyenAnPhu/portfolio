import Image from "next/image";

import IMAGES from "@/assets/images";

import { Container } from "../layout/Container";

export function IntroductionSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-center animate-appear">
            <h2 className="text-brand-600 mb-2 text-sm font-semibold tracking-wider uppercase">
              About Me
            </h2>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Nguyễn An Phú
            </h1>
            <p className="mb-8 text-xl font-medium text-muted-foreground">
              FullStack Developer
            </p>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                As a software developer with 2 years of hands-on experience, I focus on developing and deploying Website and Zalo Mini App solutions, alongside experience in Native App development. My technical strengths lie in building user interfaces and integrating APIs using TypeScript, ReactJS, Redux Toolkit, RTK Query, complemented by backend development using PHP.
              </p>
              <p>
                I consistently prioritize SEO-standard structures, page load performance optimization, and writing clean, maintainable code designed for easy structural upgrades and future scalability. To maximize efficiency, I actively leverage AI tools (GitHub Copilot, Gemini) for coding, debugging, and solution analysis.
              </p>
              <p>
                Beyond technical capabilities, I am proactive in organizing tasks, bridging business requirements across departments, and managing time to meet project deadlines. My goal is to continuously refine my expertise and evolve into a well-rounded Fullstack Developer.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-appear-zoom">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-4 border-background shadow-2xl glass-2">
              <Image
                src={IMAGES.avatar}
                alt="Nguyễn An Phú Avatar"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute -z-10 h-72 w-72 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem] rounded-full bg-brand-100/50 dark:bg-brand-900/20 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
