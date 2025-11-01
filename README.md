## Movie App (React + Vite)

A small React application built with Vite that shows lists of movies (popular, top rated, upcoming) fetched from The Movie Database (TMDb) API. The app includes sorting, filtering, a dark/light theme toggle, and a small preloader.

This README explains how to run the project, the project's structure, and important implementation notes.

## Table of contents

- Project overview
- Features
- Quick start (install & run)
- Available scripts
- Project structure (file/folder explanations)
- Important implementation details
- Troubleshooting & notes
- Next steps / improvements

## Project overview

The app is a front-end-only React project scaffolded with Vite. It fetches movie lists from the TMDb API and displays them with a few UI helpers:

- Paging via sections: Popular, Top Rated, Upcoming
- Client-side filtering by minimum rating
- Client-side sorting by release_date, vote_average, popularity
- Theme provider for dark/light theme saved to localStorage

This repository is intended as a learning/demo project rather than a production-ready, secure implementation.

## Features

- Vite + React 19
- Theme provider (dark / light) with `localStorage` persistence
- Movie lists fetched from TMDb (client-side)
- Filtering and sorting UI
- Small, componentized structure: Navbar, MovieList, MovieCard, FilterGroup, Preloader, Sidebar
- Uses `react-icons` and `lodash` (for orderBy sorting)

## Quick start

These commands assume you are in the project root (`Movie_App`). Use PowerShell on Windows or your preferred shell.

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Open the URL printed by Vite (usually http://localhost:5173)

4. Build for production

```powershell
npm run build
```

5. Preview a production build locally

```powershell
npm run preview
```

## Available scripts

These scripts come from `package.json`:

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint (configured in the repo)

## Key dependencies (from package.json)

- `react`, `react-dom` — main UI library
- `vite` — build/dev tool
- `react-icons` — icon set
- `lodash` — used for ordering lists (`orderBy`)

## Project structure and explanation

Top-level files

- `index.html` — Vite entry HTML that mounts the app to `<div id="root">` and loads `/src/main.jsx`.
- `package.json` — scripts and dependencies.

Source files (in `src/`)

- `src/main.jsx` — app entry. Creates root and renders `<App />`.
- `src/App.jsx` — top-level app component. Wraps the UI with `ThemeProvider`, shows `Preloader` while loading, and renders several `MoviList` sections.

Components (folder `src/components`)

- `Navbar/` — navigation UI and theme toggle.
- `MovieList/MoviList.jsx` — main list component that fetches movies from TMDb for a given `type` (e.g. `popular`, `top_rated`, `upcoming`). Implements filtering (by minimum rating) and sorting. It uses `MovieCard`, `FIlterGroup`, and CSS in `Movielist.css`.
- `MovieList/MovieCard.jsx` — individual movie card (poster, title, rating, etc.).
- `MovieList/FIlterGroup.jsx` — UI for selecting minimum rating filters.
- `Preloader/Preloader.jsx` — simple preloader shown while the app initializes.
- `Sidebar/Sidebar.jsx` — optional sidebar UI (if used in the app).

Dark mode

- `src/DarkMode/ThemeContext.jsx` — React context/provider for theme. Persists the user's choice to `localStorage` under key `theme`. Applies a `dark-theme` or `light-theme` class to `document.body`.
- `src/DarkMode/themes.css` — CSS variables and theme classes.

Styles

- App and components have local CSS files (e.g. `App.css`, `Movielist.css`, `MovieCard.css`, `nav.css`, etc.). These are standard CSS imports inside the corresponding components.

## Important implementation details & security notes

- TMDb API key is currently embedded in `MoviList.jsx` as a query parameter:

```
https://api.themoviedb.org/3/movie/${type}?api_key=ba95fe50ab4602e2eb2d6d965018e1de
```

    - This is insecure for public repositories or production builds. For any real app, move the API key to an environment variable and never commit secrets.
    - For Vite, create a `.env` file and use a prefixed variable like `VITE_TMDB_API_KEY=your_key_here`. Access in code with `import.meta.env.VITE_TMDB_API_KEY`.

- Error handling: `MoviList` has basic error handling and a retry button if fetch fails. The UI shows a loading state initially and a friendly error message when appropriate.

- Sorting uses `lodash.orderBy`.

- Theme persistence uses `localStorage` and adds `dark-theme`/`light-theme` class to `document.body`.

## Troubleshooting

- If the movie list stays empty or you see a CORS/401 error, check the API key and ensure it is valid and not rate-limited.
- If styles look broken, ensure CSS files are correctly imported and that `themes.css` class names are present on `body`.

## Next steps and recommended improvements

1. Remove the hard-coded API key and use environment variables (`.env`) with `VITE_` prefix.
2. Add pagination or infinite scroll for large result sets.
3. Add unit tests for core components (Jest + React Testing Library) and a simple e2e integration test.
4. Improve accessibility (ARIA labels, keyboard navigation) and keyboard focus management on the filter and sort controls.
5. Add proper error logging and a small retry/backoff strategy for fetch failures.

## License

This repo does not include a license file. If you want to open-source it, add a `LICENSE` (MIT, Apache-2.0, etc.).

## Contact / Questions

If you'd like me to:

- move the TMDb API key into a `.env` file and wire it in (I can create `.env.example` and update code),
- add basic unit tests,
- or add CI scripts (GitHub Actions) to run lint/build,

tell me which you'd like and I will implement the changes.
