# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

<<<<<<< HEAD
StudentArc is an "Academics Hub" React application built with Vite. It's designed as a student portal featuring webinars, courses, grades, and academic resources. The application uses modern React 19 with functional components and JSX.

## Architecture

### Frontend Stack
- **React 19.1.1** - Latest React with functional components
- **Vite 7.1.2** - Build tool and dev server with Hot Module Replacement (HMR)
- **ESLint 9.33.0** - Linting with React Hooks and React Refresh plugins
=======

StudentArc is a React-based web application built with Vite, featuring a student login portal. The application uses modern React patterns with React Router for navigation and React Icons for UI components.

## Essential Development Commands

### Development Server
```bash
npm run dev
```
Start the Vite development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Create optimized production build in the `dist` directory.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and style issues across JavaScript and JSX files.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally after running `npm run build`.

### Package Management
```bash
npm install
```
Install all dependencies (run this after cloning or when package.json changes).

## Architecture Overview

### Tech Stack
- **React 19.1.1** with modern hooks and patterns
- **Vite** for fast development and optimized builds
- **React Router DOM** for client-side routing
- **React Icons** for consistent iconography
- **ESLint** with React-specific plugins for code quality
>>>>>>> b7edaf4195e011d2f7635b8b0f941b8c4b512bee

### Project Structure
```
src/
<<<<<<< HEAD
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
=======
├── pages/           # Page components organized by route
│   ├── login/       # Login page with dedicated styles
│   └── home/        # Home page component
├── App.jsx          # Main app component with router configuration
├── main.jsx         # React DOM entry point
└── *.css           # Component and global styles
```

### Routing Configuration
The application uses React Router with a simple two-page structure:
- `/` - Login page (default route)
- `/home` - Home page (post-authentication)

### Styling Approach
- Individual CSS files for page-specific styles (e.g., `login/style.css`)
- Component-scoped styling with semantic class names
- Responsive design using viewport units and flexbox
- Color scheme uses blue primary (`#2563EB`) with neutral grays

## Development Guidelines

### Code Standards
- Uses modern JavaScript (ES2020+) with JSX
- ESLint configured with React Hooks and React Refresh rules
- Custom rule: unused variables starting with capital letters are ignored (useful for constants)
- Strict mode enabled in React for development warnings

### Component Patterns
- Functional components with hooks (no class components)
- Pages are organized in dedicated directories with co-located styles
- Icons imported from `react-icons` library for consistency
- Forms use semantic HTML with proper accessibility attributes

### File Organization
- Page components should be placed in `src/pages/[page-name]/index.jsx`
- Page-specific styles go in `src/pages/[page-name]/style.css`
- Import page styles in the main App.jsx when needed
- Use consistent naming: components are PascalCase, files are lowercase

### Common Issues to Watch For

1. **Router Configuration**: The App.jsx has unreachable code after the RouterProvider return statement (lines 23-25)
2. **Form Handling**: Login form currently lacks actual form submission logic
3. **Navigation**: Login button should use React Router's navigation instead of form submission
4. **ID Attributes**: Multiple elements use the same `id="input"` which violates HTML standards

### Testing and Quality
- No test framework currently configured
- ESLint provides code quality checks
- Consider adding Vitest for unit testing React components
- Consider adding React Testing Library for component testing

## Browser Support
- Modern browsers with ES2020 support
- Mobile-responsive design with viewport meta tag configured
=======
StudentArc is a React-based educational management system with an admin dashboard interface. The application provides user management, course management, analytics, and task tracking capabilities for educational institutions.
>>>>>>> b7edaf4195e011d2f7635b8b0f941b8c4b512bee

## Development Commands

### Essential Commands
<<<<<<< HEAD
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
=======
- `npm run dev` - Start development server with hot reload (Vite dev server)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all files

### Development Workflow
- Run `npm install` when dependencies change
- Use `npm run dev` for development with automatic browser refresh
- The dev server typically runs on `http://localhost:5173`

## Architecture & Structure

### Component Architecture
The application follows a hierarchical component structure with two main sections:

**Admin Section** (`src/components/Admin/`):
- `AdminDashboard/` - Main dashboard with analytics, user activity, tasks, and notifications
- `layout/Topbar/` - Global navigation bar with search, notifications, and user profile
- `layout/sidebar/` - Navigation sidebar with links to Dashboard, Users, Courses, and Settings

**Students Section** (`src/components/Students/`):
- `Header/` - Student-facing header component (currently minimal)

### Routing Structure
The application uses React Router v6 with these key routes:
- `/dashborad` - Main admin dashboard (note: contains typo in route)
- `/Sidebar` - Sidebar component route

### Styling Approach
- Each component has its own `style.css` file co-located with the component
- Global styles in `src/index.css` and `src/App.css`
- CSS modules are not used - components rely on class-based styling

### Key Dependencies
- **React 19.1.1** with React DOM
- **React Router DOM 7.8.2** for navigation
- **React Icons 5.5.0** for UI icons (Material Design and other icon sets)
- **Recharts 3.1.2** for data visualization (though currently unused in favor of custom SVG charts)
- **Vite 7.1.2** as build tool and dev server

## Development Patterns

### Component Structure
- Components are organized by feature/section (Admin, Students)
- Each component directory contains `index.jsx` and `style.css`
- Components use functional components with hooks

### State Management
- Currently no global state management (Redux, Zustand, etc.)
- Components manage local state with React hooks
- Props drilling for data flow between components

### Code Style
- ESLint configured with React hooks rules and refresh plugin
- No TypeScript - pure JavaScript with JSX
- Modern ES6+ syntax with modules
- Unused variables rule allows pattern `^[A-Z_]` for constants

## Known Issues & Technical Debt

### Route Configuration
- Typo in main dashboard route: `/dashborad` should be `/dashboard`
- Inconsistent Link usage in Sidebar (mixing `to` and `href` attributes)

### Component Architecture
- App.jsx has redundant Sidebar rendering (both in routes and main container)
- Hard-coded data in AdminDashboard component (users, revenue, tasks)
- Missing error boundaries and loading states

### Styling Issues
- Global CSS imports in App.jsx create potential conflicts
- No responsive design patterns implemented
- Inline styles mixed with CSS classes

## Future Enhancement Areas

### Data Integration
- Replace hard-coded dashboard data with API calls
- Implement proper state management for user sessions
- Add data fetching hooks or libraries (React Query, SWR)

### Navigation & Routing
- Fix route typos and implement proper routing structure  
- Add route guards for authentication
- Implement nested routing for admin sections

### User Experience
- Add loading spinners and error handling
- Implement responsive design for mobile users
- Add form validation and user feedback

### Code Quality
- Consider migrating to TypeScript for better type safety
- Implement proper testing strategy (Jest, React Testing Library)
- Add proper error boundaries and fallback UI components
>>>>>>> a5fe006 (make student Dashboard and some change in login)
>>>>>>> b7edaf4195e011d2f7635b8b0f941b8c4b512bee
