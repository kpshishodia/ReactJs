# Part 01 — Props, State, Events & Conditional Rendering (React + Vite)

This project is a small React practice app focused on core fundamentals:
**props**, **state**, **event handling**, and **conditional rendering**.

## What’s inside

- **Props demo**: `Greeting` component receives `name` and `age`
- **Conditional rendering**: renders different messages based on age (`age >= 18`)
- **State + events**:
  - Controlled input (`useState`) that echoes what you type
  - Toggle button to show/hide a greeting component

## Tech stack

- React
- Vite
- ESLint

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm (or an equivalent package manager)

### Install

```bash
npm install
```

### Run the app (development)

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`).

## Available scripts

- **Start dev server**:

```bash
npm run dev
```

- **Production build**:

```bash
npm run build
```

- **Preview production build locally**:

```bash
npm run preview
```

- **Lint**:

```bash
npm run lint
```

## Project structure

```text
part-01-props-state-events-conditional-rendering/
  src/
    App.jsx
  package.json
  README.md
```

## Notes

- The main learning examples live in `src/App.jsx`.
- This repo contains multiple parts; this README covers **only** `part-01-props-state-events-conditional-rendering`.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
