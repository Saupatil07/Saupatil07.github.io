import { Container } from "./Container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </Container>
    </footer>
  );
}
