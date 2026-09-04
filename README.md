# Portfolio

A single-page portfolio built with Next.js (App Router), Tailwind, GSAP and
Three.js (via react-three-fiber). Frontend only, no backend/database.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. For a production build: `npm run build && npm start`.

## What's where

- `app/layout.tsx` — fonts (Space Grotesk / Inter / IBM Plex Mono) and page metadata
- `app/page.tsx` — assembles the page from the sections below
- `components/Hero.tsx` — headline + GSAP entrance timeline + the 3D orb
- `components/NetworkOrb.tsx` — the Three.js network/node visual (rotates, gently follows the cursor)
- `components/About.tsx` — scroll-scrubbed paragraph reveal
- `components/Skills.tsx` — grouped skills with icons
- `components/Projects.tsx` — project list with a scroll-linked accent bar
- `components/Contact.tsx` — links + footer

## Make it yours

1. Replace "Your Name" in `Hero.tsx`, `Contact.tsx` and `app/layout.tsx`.
2. Swap the copy in `About.tsx` for your own story.
3. Edit the `groups` array in `Skills.tsx` to match your stack.
4. Edit the `projects` array in `Projects.tsx` — add real links, drop the placeholder ones.
5. Update the `links` array in `Contact.tsx` with your real email/GitHub/LinkedIn.
6. Colors and fonts are tokenized in `tailwind.config.ts` (`signal`, `ink`, `paper`, etc.) — change them there and they update everywhere.

## Deploying

This is a static-friendly Next.js app. The easiest path is Vercel
(`vercel.com`) — connect the repo and it deploys on push, free for personal
projects. Netlify and Cloudflare Pages also work with their Next.js adapters.
"# deqxk" 
