# Onsite Insight · Version 3.2

Single-page scrolling presentation built with Vite + React + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173. Vite hot-reloads on save — keep `npm run dev` running and edits show up immediately.

## How to keep editing

| What you want to change | File |
|---|---|
| Add / reorder slides, edit copy | `src/content.js` |
| Brand tokens | `src/theme.js` |
| Logo URLs / brand link | `src/logos.js` |
| Layout of a specific slide type | `src/sections/slides/<Type>Slide.jsx` |
| Hero / Closing | `src/sections/Hero.jsx`, `src/sections/Closing.jsx` |

`src/content.js` is the single source of truth. Almost all edits should happen there.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host.
