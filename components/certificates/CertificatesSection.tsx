import { certificates } from "@/data/certificates";

import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { CertificateCard } from "./CertificateCard";

export function CertificatesSection() {
  return (
    <Section id="certificates" title="Certificates" className="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
