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
      </Container>
    </section>
  );
}
