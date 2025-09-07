# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

StudentArc is an "Academics Hub" React application built with Vite. It's designed as a student portal featuring webinars, courses, grades, and academic resources. The application uses modern React 19 with functional components and JSX.

## Architecture

### Frontend Stack
- **React 19.1.1** - Latest React with functional components
- **Vite 7.1.2** - Build tool and dev server with Hot Module Replacement (HMR)
- **ESLint 9.33.0** - Linting with React Hooks and React Refresh plugins

### Project Structure
```
src/
├── App.jsx           # Main application component with navigation and webinar listings
├── main.jsx          # React app entry point
├── App.css           # Main application styles (currently empty)
├── index.css         # Global styles (currently empty)
└── pages/            # Page components (currently empty stubs)
    ├── courses.jsx
    ├── dashboatd.jsx # Note: Contains typo in filename
    ├── grades.jsx
    ├── home.jsx
    ├── resources.jsx
    ├── support.jsx
    └── webinars.jsx
```

### Key Components
- **App.jsx** - Contains the complete UI including navbar, webinar cards, and footer
- **Navigation** - Fixed header with logo, navigation links, and profile section
- **Webinar Cards** - Dynamically generated from an array of webinar data

## Development Commands

### Essential Commands
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

### Development Workflow
```bash
# Install dependencies
npm install

# Start development (runs on http://localhost:5173 by default)
npm run dev
```

## Architecture Notes

### Current State
- The application is currently a single-page application with all content in `App.jsx`
- Page components in `src/pages/` are empty stubs, indicating the application may be in early development
- CSS files are empty, suggesting styling may be incomplete or handled elsewhere
- The webinar data is hardcoded in the App component

### Development Considerations
- **Router Implementation Needed** - The pages/ directory suggests multi-page functionality, but no router is currently implemented
- **Styling System** - CSS files are empty; may need to implement a styling approach
- **Data Management** - Webinar data is currently hardcoded; may need API integration
- **Image Assets** - Placeholder URLs are used for images; actual assets may be needed

### ESLint Configuration
- Configured for modern React with hooks
- Uses recommended ESLint rules plus React-specific plugins
- Custom rule: unused variables starting with uppercase are ignored (for constants)
- Ignores `dist` directory from linting

### Development Notes
- Uses ES modules (`"type": "module"` in package.json)
- React StrictMode is enabled in development
- Vite provides fast HMR and modern build pipeline
- TypeScript types are available as dev dependencies but not actively used

### Common Development Tasks
When working on this codebase, you'll likely need to:
1. Implement routing between the different page components
2. Add styling to the empty CSS files
3. Connect to actual data sources for webinars and user information
4. Implement interactivity for buttons and navigation
5. Add responsive design for mobile devices

### File Naming Convention
Note: There's a typo in `dashboatd.jsx` - should likely be `dashboard.jsx`
