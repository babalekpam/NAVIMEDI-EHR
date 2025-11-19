# Carnet Patient Portal

## Overview

Carnet is a full-stack patient health portal developed for NaviMED. It enables patients to access medical records, appointments, prescriptions, lab results, and communicate with healthcare providers through a modern, mobile-first responsive interface. This self-contained application includes an Express backend, PostgreSQL database, and React frontend, designed to run locally within the Replit environment. Its core capabilities include comprehensive multi-language (English, Spanish, French) and multi-currency support with 50+ currencies including major world currencies, 19 African currencies, Middle Eastern, Latin American, and Asia-Pacific currencies. All preferences persist in localStorage for an enhanced user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Architecture Overview

The application utilizes a full-stack architecture with **React 18 + TypeScript + Vite + Tailwind CSS** for the frontend, an **Express.js + TypeScript** backend, and a **PostgreSQL database** managed with **Drizzle ORM**. Authentication is handled via **JWT tokens** and **bcrypt** for password hashing. Internationalization is supported through `i18next` and `react-i18next`, alongside comprehensive multi-currency support for 50+ currencies across all major regions.

### Backend Architecture

The Express.js backend provides a RESTful API on port 5000, serving both API endpoints and the frontend. It handles authentication, data access, and business logic. Key API endpoints include authentication (`/api/auth/*`), patient data (`/api/patient/*` for profile, appointments, prescriptions, lab results, bills), and medical communications (`/api/medical-communications/*`). Authentication is JWT-based, with tokens valid for 24 hours and passwords hashed using bcrypt (10 salt rounds). Protected routes are validated via JWT middleware.

### Database Schema

The PostgreSQL database, accessed via Drizzle ORM, includes tables for `tenants`, `users`, `patients`, `appointments`, `prescriptions`, `lab_results`, `bills`, and `medical_communications`. Schema changes are managed with `npm run db:push`, and test data can be seeded using `npm run db:seed`.

### Frontend Architecture

The React 18 frontend is a single-page application built with TypeScript, using functional components and hooks. Client-side routing is handled by Wouter. Vite serves as the build system, providing a fast development server and handling TypeScript and JSX compilation. Styling is implemented with Tailwind CSS 3.4, following a mobile-first responsive design philosophy. Lucide React provides consistent iconography.

### Authentication & Authorization

Authentication is token-based, storing JWT tokens in localStorage. The system manages token generation on login, validation on API requests, and automatic logout on expiry or invalidation. The login process involves user credential validation, JWT token generation by the backend, storage on the frontend, and inclusion of the token in subsequent API requests. Security measures include bcrypt hashing, JWT expiration, and protected API routes.

### Data Architecture

A centralized API client (`src/lib/api.ts`) manages all API interactions, including header injection and standardized error handling. State management primarily uses React hooks (useState, useEffect) at the component level. Data flows from frontend component API calls to the Express backend, which queries the database via Drizzle ORM and returns JSON responses to update the UI.

### Routing Structure

The application features public routes, primarily the `/` login page, and protected routes requiring authentication. Protected routes include `/dashboard`, `/profile`, `/appointments`, `/prescriptions`, `/lab-results`, `/messages`, and `/bills`. Unauthenticated access to protected routes redirects to the login page.

### Component Design Patterns

Page components are self-contained, handling their own data fetching, loading, and error states, and feature consistent headers and card-based layouts. Error handling includes automatic logout for 401 errors, "feature not available" for 404s, and user-friendly messages for 500 errors.

## External Dependencies

- **PostgreSQL**: Used as the primary database, accessed via `@neondatabase/serverless` (Neon HTTP driver).
- **React**: Frontend UI library.
- **Express.js**: Backend web application framework.
- **Drizzle ORM**: Type-safe ORM for database interactions.
- **jsonwebtoken**: For JWT token generation and verification.
- **bcrypt**: For password hashing.
- **i18next & react-i18next**: For internationalization and multi-language support (English, Spanish, French).
- **date-fns**: For date formatting utilities.
- **Wouter**: Lightweight client-side routing for React.
- **Lucide React**: Icon library.
- **Tailwind CSS**: Utility-first CSS framework.
- **Vite**: Frontend build tool.
- **cors**: Express middleware for handling Cross-Origin Resource Sharing.
- **dotenv**: For loading environment variables.
- **zod**: For schema validation.