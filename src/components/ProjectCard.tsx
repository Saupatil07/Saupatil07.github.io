import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}/`} className="project-image-link" aria-label={`View ${project.title}`}>
        <Image src={project.image} alt="" width={720} height={420} className="project-image" />
      </Link>
      <div className="project-card-body">
        <p className="eyebrow">{project.category}</p>
        <h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <Link className="text-link" href={`/projects/${project.slug}/`}>View project <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
