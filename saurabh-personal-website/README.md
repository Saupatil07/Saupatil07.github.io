# Saurabh Patil — Personal Research Website

A minimal, light-theme academic and professional website built with Next.js App Router, TypeScript, and custom CSS. It is configured for static export and GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before deployment:

```bash
npm run typecheck
npm run build
```

The static website is generated in `out/`.

## Personal content

- `src/data/profile.ts` — biography, email, and social links.
- `src/data/projects.ts` — research projects and project descriptions.
- `src/data/publications.ts` — publication metadata and links.
- `src/data/experience.ts` — experience and education.
- `public/images/saurabh-patil.webp` — profile photograph cropped from the supplied outdoor photo.
- `public/documents/Saurabh_Patil_CV.pdf` — supplied 2026 resume.

Publication entries were cross-checked against the supplied resume and public publisher, arXiv, medRxiv, OpenReview, and NeurIPS workshop records. The 2023 NeurIPS workshop paper and 2025 Journal of Computational Physics article are separate outputs. The 3D point-cloud item is labelled as a technical/course project report rather than a peer-reviewed publication.

Please review all project descriptions and ensure no employer-confidential or unpublished information is exposed before publishing.

## GitHub Pages deployment

Create a public repository named:

`Saupatil07.github.io`

Then run:

```bash
git init
git add .
git commit -m "Initial personal research website"
git branch -M main
git remote add origin https://github.com/Saupatil07/Saupatil07.github.io.git
git push -u origin main
```

Enable **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The included workflow builds the static export and deploys it on every push to `main`. Your intended URL is:

https://saupatil07.github.io

## Notes

- This uses Next.js static export (`output: "export"`), so it does not require a Node server at runtime.
- Next.js image optimization is disabled for static hosting.
- Do not add server actions or API routes unless you move to a host that supports a Next.js server runtime.
