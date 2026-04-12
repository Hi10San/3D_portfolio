# Project Overview

This is a 3D portfolio application built using the following key technologies:
- **Frontend Framework:** React
- **Build Tool:** Vite
- **3D Graphics:** Three.js, integrated with React via `@react-three/fiber` and `@react-three/drei`
- **Styling:** Tailwind CSS

The application likely features interactive 3D elements and a modern user interface.

# Building and Running

## Installation

To set up the project locally, install the dependencies using your preferred package manager:

```bash
npm install
# or yarn install
# or pnpm install
```

## Development Server

To run the application in development mode with hot-module reloading:

```bash
npm run dev
```

This will typically start the development server on `http://localhost:5173`.

## Build

To create a production-ready build of the application:

```bash
npm run build
```

The build artifacts will be generated in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Linting

To lint the codebase for potential issues and style guide violations:

```bash
npm run lint
```

# Development Conventions

-   **Code Formatting & Linting:** ESLint is configured for maintaining code quality and consistency.
-   **Styling:** Tailwind CSS is used for utility-first styling.
-   **Component Structure:** React components are organized in `src/components` and `src/sections`.
-   **Assets:** Static assets like images and 3D models are located in the `public/assets` and `public/models` directories.
