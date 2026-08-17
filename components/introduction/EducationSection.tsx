import SchoolIcon from "@mui/icons-material/School";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export function EducationSection() {
  return (
    <Section id="education" title="Education" className="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-3xl">
          <article className="relative flex flex-col gap-6 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-border/80 cursor-default sm:flex-row sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <SchoolIcon />
            </div>
            <div className="flex-1">
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-foreground">
                  Industrial University of Ho Chi Minh City
                </h3>
                <span className="mt-1 text-sm font-medium text-brand-600 sm:mt-0 bg-brand-50 px-3 py-1 rounded-full whitespace-nowrap">
                  2019 – 2023
                </span>
              </div>
              <p className="mb-4 font-semibold text-muted-foreground uppercase text-sm tracking-wide">
                FACULTY OF INFORMATION TECHNOLOGY
              </p>
              <p className="text-muted-foreground">
                During my studies, I developed a foundational understanding of Website Development, Internet of Things (IoT), and Computer Networking. I gained practical experience through programming assignments and projects involving application development, device connectivity, and network system configuration.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
