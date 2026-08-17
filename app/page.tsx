import { CertificatesSection } from "@/components/certificates/CertificatesSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { EducationSection } from "@/components/introduction/EducationSection";
import { IntroductionSection } from "@/components/introduction/IntroductionSection";
import { FloatingContactBar } from "@/components/layout/FloatingContactBar";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      {/* Subtle dotted background */}
      <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      
      <FloatingContactBar />
      <main className="flex min-h-screen flex-col">
        <IntroductionSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
      </main>
    </>
  );
}
