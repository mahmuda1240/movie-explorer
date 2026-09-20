# Reelist — Movie Explorer

A responsive React app for browsing and searching shows, built against the
[TVMaze API](https://www.tvmaze.com/api).

## Stack
- React + Vite
- React Router
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Notes
- Search hits `GET /search/shows?q=`, the empty-query
  state falls back to `GET /shows`.
- The details modal is closable via the ✕ button, the "Close" button
- Layout is responsive: 2 columns on small screens up to 4 on desktop.
