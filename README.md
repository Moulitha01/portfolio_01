# Moulitha Chandrasekar — Portfolio

A React + Vite + Tailwind single-page portfolio.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Where to edit your details

Everything personal (name, role, socials, skills, project links, experience,
certifications, contact text) lives in **one file**:

```
src/data/portfolioData.js
```

Open it and edit the values directly — you shouldn't need to touch any
component file for normal content changes.

### ⚠️ Placeholders you need to fill in

A few values couldn't be filled in automatically and are marked with
`⚠️ PLACEHOLDER` comments in `portfolioData.js`:

- **`projects[].deployedUrl`** — the live/deployed URL for NeuralForge and
  Scheme-Sathi. Clicking a project card opens this URL in a new tab.
- **`certifications[].url`** — the certificate/credential link for each of
  the 3 certifications. Clicking a certification opens this URL in a new tab.
- **`socials.resumeUrl`** — currently points to `/resume.pdf`. Drop your
  resume PDF into the `public/` folder as `resume.pdf`, or replace this
  with a hosted link (e.g. Google Drive).

Your GitHub, LinkedIn, and email are already filled in from your resume:

- GitHub: https://github.com/Moulitha01
- LinkedIn: https://www.linkedin.com/in/moulitha-chandrasekar-8046522a5
- Email: moulithac@gmail.com

These appear in the top nav and in the footer of the Contact section.

## Structure

```
src/
  data/portfolioData.js   ← edit your content here
  components/
    Navbar.jsx
    Hero.jsx               (core emblem + intro + CTA buttons)
    CoreEmblem.jsx          (the animated circular hero graphic)
    About.jsx               (profile + skills grid)
    Projects.jsx             (project cards → deployed URLs)
    Experience.jsx            (experience + stats row)
    Certifications.jsx         (NEW — certifications list → certificate URLs)
    Contact.jsx                (closing CTA + footer socials)
    Icons.jsx                  (shared inline SVG icons)
  App.jsx
  main.jsx
  index.css
```

## Deploying

This is a standard Vite app, so it deploys as-is to Vercel, Netlify, GitHub
Pages, or any static host — just point the build command to `npm run build`
and serve the `dist/` folder.
