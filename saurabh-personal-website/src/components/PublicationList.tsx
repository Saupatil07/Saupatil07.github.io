import type { Publication } from "@/data/publications";

export function PublicationList({ items }: { items: Publication[] }) {
  if (items.length === 0) {
    return <div className="empty-state"><p>Publication details will appear here as papers and preprints become public.</p></div>;
  }

  return (
    <div className="publication-list">
      {items.map((item) => (
        <article className="publication-item" key={`${item.title}-${item.year}`}>
          <div className="publication-meta">{item.venue} · {item.year} · {item.type}</div>
          <h3>{item.title}</h3>
          <p>{item.authors}</p>
          {item.abstract && <p className="publication-abstract">{item.abstract}</p>}
          <div className="inline-links">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
        </article>
      ))}
    </div>
  );
}
