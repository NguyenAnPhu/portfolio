import { CertificatesSection } from "@/components/certificates/CertificatesSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { EducationSection } from "@/components/introduction/EducationSection";
import { IntroductionSection } from "@/components/introduction/IntroductionSection";
import { FloatingContactBar } from "@/components/layout/FloatingContactBar";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
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
