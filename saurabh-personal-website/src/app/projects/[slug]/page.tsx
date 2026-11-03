import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project", description: project?.summary };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="page-section">
      <Container>
        <Link href="/projects/" className="back-link">← All projects</Link>
        <div className="detail-header">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          <span className="status-label">{project.status}</span>
        </div>
        <div className="detail-image"><Image src={project.image} alt="" width={1200} height={650} priority /></div>
        <div className="detail-content">
          <div><h2>Overview</h2><p>{project.description}</p></div>
          <div><h2>Methods & topics</h2><div className="tag-list">{project.methods.map((method) => <span className="tag" key={method}>{method}</span>)}</div></div>
          <div><h2>Highlights</h2><ul className="detail-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
          {project.links.length > 0 && <div><h2>Resources</h2><div className="inline-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div>}
          <p className="disclaimer">This page describes a research direction and selected areas of work. Specific results and affiliations should be added only when cleared for public sharing.</p>
        </div>
      </Container>
    </section>
  );
}
