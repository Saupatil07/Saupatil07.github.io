"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type PhotoCategory = "Travel" | "Food" | "Moments";
type Photo = { src: string; alt: string; title: string; location: string; category: PhotoCategory };

const photos: Photo[] = [
  { src: "/images/01-japan-miyajima-torii.webp", alt: "The red floating torii gate at Miyajima, Japan", title: "The floating torii", location: "Miyajima, Japan", category: "Travel" },
  { src: "/images/02-japan-cherry-blossoms.webp", alt: "Standing beneath cherry blossoms in Japan", title: "Cherry blossom season", location: "Japan", category: "Travel" },
  { src: "/images/03-pistachio-pastry.webp", alt: "A pistachio-topped pastry", title: "A pistachio treat", location: "Food memories", category: "Food" },
  { src: "/images/04-carnegie-mellon-pittsburgh.webp", alt: "Carnegie Mellon University campus in autumn", title: "Autumn on campus", location: "Carnegie Mellon University · Pittsburgh", category: "Travel" },
  { src: "/images/05-pug.webp", alt: "A sleepy pug resting on a blanket", title: "A sleepy companion", location: "Everyday moments", category: "Moments" },
  { src: "/images/06-autumn-street.webp", alt: "A tree with vivid autumn foliage along a street", title: "Autumn colours", location: "A walk to remember", category: "Travel" },
  { src: "/images/07-statue-of-liberty.webp", alt: "The Statue of Liberty viewed across the water", title: "An iconic view", location: "New York City, USA", category: "Travel" },
  { src: "/images/08-george-washington-bridge.webp", alt: "George Washington Bridge over the Hudson River", title: "Across the Hudson", location: "New York City, USA", category: "Travel" },
  { src: "/images/09-white-flower.webp", alt: "A white flower in a green garden", title: "A little detail in nature", location: "Everyday moments", category: "Moments" },
];

const filters = ["All", "Travel", "Food", "Moments"] as const;

export function PhotoSlideshow() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const visiblePhotos = useMemo(() => filter === "All" ? photos : photos.filter((photo) => photo.category === filter), [filter]);
  const current = visiblePhotos[index] ?? visiblePhotos[0];

  useEffect(() => { setIndex(0); }, [filter]);
  useEffect(() => {
    if (lightbox || visiblePhotos.length < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % visiblePhotos.length), 5500);
    return () => window.clearInterval(timer);
  }, [lightbox, visiblePhotos.length, filter]);

  const move = (direction: number) => setIndex((value) => (value + direction + visiblePhotos.length) % visiblePhotos.length);

  return (
    <div className="photo-stories">
      <div className="photo-filters" role="group" aria-label="Filter photo stories">
        {filters.map((item) => <button key={item} type="button" className={filter === item ? "photo-filter active" : "photo-filter"} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      {current && <div className="photo-feature">
        <button type="button" className="photo-image-button" onClick={() => setLightbox(true)} aria-label={`View ${current.title} larger`}>
          <Image key={current.src} src={current.src} alt={current.alt} width={1600} height={1100} priority={index === 0} />
        </button>
        <div className="photo-caption">
          <div><span className="photo-category">{current.category}</span><h3>{current.title}</h3><p>{current.location}</p></div>
          <div className="photo-controls">
            <span className="photo-count">{String(index + 1).padStart(2, "0")} / {String(visiblePhotos.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft size={19}/></button>
            <button type="button" onClick={() => move(1)} aria-label="Next photo"><ChevronRight size={19}/></button>
          </div>
        </div>
      </div>}
      <div className="photo-thumbnails">
        {visiblePhotos.map((photo, photoIndex) => <button key={photo.src} type="button" className={photoIndex === index ? "photo-thumb selected" : "photo-thumb"} onClick={() => setIndex(photoIndex)} aria-label={`Show ${photo.title}`}>
          <Image src={photo.src} alt="" width={240} height={160}/>
        </button>)}
      </div>
      {lightbox && current && <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setLightbox(false)}>
        <button type="button" className="photo-lightbox-close" onClick={() => setLightbox(false)} aria-label="Close photo"><X size={24}/></button>
        <Image src={current.src} alt={current.alt} width={1800} height={1400} onClick={(event) => event.stopPropagation()} />
        <p>{current.title} · {current.location}</p>
      </div>}
    </div>
  );
}
