# Fullstack Portfolio Web App

A modern, recruiter‑focused portfolio built with React + Tailwind. The app highlights skills, projects, timeline, and GitHub activity with polished UI, animations, and responsive layouts.

## Highlights

- **Hero + About**: clear role positioning and availability
- **Projects**: optimized cards with lazy‑loaded media and “Show More”
- **Skills**: structured skill showcase
- **Timeline**: professional journey in a clean, readable format
- **GitHub Activity**: contribution graph embedding
- **Dark / Light Mode**: toggle with persisted preference
- **Performance‑minded**: lazy loading, deferred rendering, reduced‑motion support
- **Responsive**: mobile‑first layouts and typography

## Tech Stack

- **React 18** + **React Router**
- **Tailwind CSS**
- **MUI (Timeline components)**
- **AOS** for scroll reveal animations
- **React Icons**, **React Scroll**, **React Toastify**

## Getting Started

From the project root:

```bash
cd frontend
npm install
npm start
```

Build for production:

```bash
cd frontend
npm run build
```

## Project Structure (frontend)

```
frontend/
  public/
    index.html
  src/
    components/
      Header.jsx
      Home.jsx
      Skills.jsx
      ProjectCard.jsx
      TimeLine.jsx
      GitHub.jsx
      Footer.jsx
      ShimmerUi/
    Data/
      Data.js
    index.css
    App.js
    index.js
```

## Notes

- The app uses a proxy in `frontend/package.json` (`http://127.0.0.1:4000`).  
  If you’re not running a backend, you can ignore it or remove the proxy entry.
- External images are loaded from third‑party URLs. For reliability, consider hosting them locally or on your own CDN.

## Scripts

- `npm start` – run the development server
- `npm run build` – create a production build
- `npm test` – run tests

## License

MIT
