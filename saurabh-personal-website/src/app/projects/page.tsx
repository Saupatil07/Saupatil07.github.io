import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Research and engineering projects by Saurabh Patil." };

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <Container>
        <SectionHeading eyebrow="Selected work" title="Projects" description="Research directions, experiments, and engineering projects in computer vision and multimodal AI." />
        <div className="project-grid project-grid-all">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </Container>
    </section>
  );
}
