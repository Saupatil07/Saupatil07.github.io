import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, GraduationCap, FileText, Brain, Plane, Gamepad2, Clapperboard, Dumbbell } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationList } from "@/components/PublicationList";
import { ChessStats } from "@/components/ChessStats";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { publications } from "@/data/publications";
import { experience, education } from "@/data/experience";

const interests = [
  { title: "Image Geolocalization", detail: "Learning visual representations that connect images with geographic locations." },
  { title: "Visual Place Recognition", detail: "Robust place retrieval across viewpoint, appearance, and environment changes." },
  { title: "Representation Learning", detail: "Learning transferable visual features for retrieval and recognition." },
  { title: "Multimodal AI", detail: "Combining vision and language models for richer visual understanding." },
];

const beyondResearch = [
  { title: "Chess", detail: "Enjoying strategy, problem-solving, and the occasional competitive game.", Icon: Brain },
  { title: "Travelling", detail: "Discovering new places, cultures, and experiences.", Icon: Plane },
  { title: "Video games", detail: "Enjoying gaming, immersive worlds, and interactive storytelling.", Icon: Gamepad2 },
  { title: "Movies & shows", detail: "A fan of good storytelling, films, and TV series.", Icon: Clapperboard },
  { title: "Fitness", detail: "Keeping active through strength training and regular workouts.", Icon: Dumbbell },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Research Engineer · India</p>
              <h1>Hi, I’m <span>Saurabh Patil.</span></h1>
              <p className="hero-subtitle">{profile.headline}</p>
              <p className="hero-intro">{profile.introduction}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a>
                <a className="button button-secondary" href={profile.links.email}><Mail size={17}/> Get in touch</a>
              </div>
              <div className="social-links">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
                {profile.links.scholar && <a href={profile.links.scholar} target="_blank" rel="noreferrer"><GraduationCap size={16}/> Google Scholar</a>}
                <a href={profile.links.cv}><FileText size={16}/> CV</a>
              </div>
            </div>
            <div className="profile-wrap">
              <div className="profile-frame">
                <Image src="/images/saurabh-patil.webp" alt="Saurabh Patil outdoors" width={900} height={980} priority />
              </div>
              <p className="image-note">Research, engineering, and a little time outdoors.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="about">
        <Container>
          <div className="narrow">
            <SectionHeading eyebrow="A little about me" title="About" />
            <p className="body-large">{profile.about}</p>
            <p className="body-copy">I enjoy building practical systems from advances in computer vision, visual representation learning, and multimodal AI.</p>
          </div>
        </Container>
      </section>

      <section className="section section-muted" id="research">
        <Container>
          <SectionHeading eyebrow="What I work on" title="Research interests" description="A few areas that currently shape my research and engineering interests." />
          <div className="interest-grid">
            {interests.map((item, index) => (
              <article className="interest-item" key={item.title}>
                <span className="interest-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="projects">
        <Container>
          <div className="section-topline">
            <SectionHeading eyebrow="Selected work" title="Research & projects" description="A selection of research directions and engineering projects." />
            <Link className="text-link desktop-link" href="/projects/">All projects <span>→</span></Link>
          </div>
          <div className="project-grid">
            {featuredProjects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <Link className="text-link mobile-link" href="/projects/">View all projects <span>→</span></Link>
        </Container>
      </section>

      <section className="section section-muted" id="publications">
        <Container>
          <div className="section-topline">
            <SectionHeading eyebrow="Research output" title="Selected publications" description="Papers, preprints, and other public research contributions." />
            <Link className="text-link desktop-link" href="/publications/">All publications <span>→</span></Link>
          </div>
          <PublicationList items={publications.slice(0, 3)} />
          <Link className="text-link mobile-link" href="/publications/">View publications <span>→</span></Link>
        </Container>
      </section>

      <section className="section" id="experience">
        <Container>
          <SectionHeading eyebrow="Background" title="Experience" />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.organization}`}>
                <div><h3>{item.role}</h3><p className="timeline-org">{item.organization}</p></div>
                <div><p className="timeline-period">{item.period}</p><p>{item.description}</p></div>
              </article>
            ))}
          </div>
          {education.length > 0 && <div className="education-block"><h3>Education</h3>{education.map((item) => <p key={item.qualification}>{item.qualification} · {item.institution} · {item.period}</p>)}</div>}
        </Container>
      </section>

      <section className="contact-section" id="contact">
        <Container>
          <div className="contact-inner">
            <div><p className="eyebrow">Get in touch</p><h2>Have an interesting idea or want to collaborate?</h2><p>I’m always happy to connect about research, computer vision, and related opportunities.</p></div>
            <a className="button button-light" href={profile.links.email}>Email me <ArrowUpRight size={16}/></a>
          </div>
        </Container>
      </section>


      <section className="section" id="beyond-research">
        <Container>
          <SectionHeading eyebrow="Away from the screen" title="Beyond research" description="A few things I enjoy outside of work." />
          <div className="beyond-grid">
            {beyondResearch.map(({ title, detail, Icon }) => (
              <article className="beyond-item" key={title}>
                <span className="beyond-icon"><Icon size={19} strokeWidth={1.7} /></span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
          <ChessStats />
        </Container>
      </section>

      <section className="section section-muted" id="photo-slideshow">
        <Container>
          <SectionHeading eyebrow="Travel, food & everyday moments" title="Photo stories" description="A rotating collection of places I’ve explored, meals I’ve enjoyed, and moments worth remembering." />
          <div className="photo-slideshow-empty">
            <p>Your photo slideshow will appear here once you share your pictures.</p>
            <span>Travel · Food · Everyday moments</span>
          </div>
        </Container>
      </section>    </>
  );
}
