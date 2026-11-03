import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PublicationList } from "@/components/PublicationList";
import { publications } from "@/data/publications";

export const metadata: Metadata = { title: "Publications", description: "Publications and research papers by Saurabh Patil." };

export default function PublicationsPage() {
  return (
    <section className="page-section">
      <Container>
        <SectionHeading eyebrow="Research output" title="Publications" description="Peer-reviewed papers, preprints, and public technical reports." />
        <PublicationList items={publications} />
        <p className="editor-note">No publication entries have been added yet. Add verified public citations in <code>src/data/publications.ts</code>.</p>
      </Container>
    </section>
  );
}
