import Link from "next/link";
import { Container } from "./Container";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#research", label: "Research" },
  { href: "/projects/", label: "Projects" },
  { href: "/publications/", label: "Publications" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <Container>
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/">Saurabh Patil<span>.</span></Link>
          <div className="nav-links">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link className="nav-contact" href="/#contact">Contact</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
