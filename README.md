# Wesfolio

A modern, responsive portfolio website built with Vite + React. The content is centralized in a single config file for easy updates.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Motion (Framer Motion compatible)

## Project structure

- `src/app/data/portfolio.ts` contains all content (links, experience, projects, education, skills).
- `src/styles/theme.css` holds shared styles and theme tokens.

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

If deploying to GitHub Pages, make sure the Vite base path is configured and run:

```bash
npm run build
```

Then publish the `dist/` folder using your preferred GitHub Pages workflow.
