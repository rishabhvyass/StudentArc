# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

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

### Project Structure
```
src/
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
