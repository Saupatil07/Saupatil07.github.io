import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return <section className="page-section"><Container><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you’re looking for may have moved.</p><Link className="text-link" href="/">Return home →</Link></Container></section>;
}
