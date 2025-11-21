# Overview

NaviMED is a comprehensive, multi-tenant healthcare management platform designed to serve hospitals, pharmacies, laboratories, and clinics. The platform provides HIPAA-compliant electronic health records (EHR), prescription management, appointment scheduling, laboratory order processing, billing and insurance claims management, and patient engagement tools. Built as a full-stack web application, NaviMED enables healthcare organizations to streamline operations while maintaining security and regulatory compliance.

# Recent Changes

## November 21, 2025 - Critical Bug Fixes

### CSRF Token Handling Improvements
- **Fixed CSRF token fetch error handling**: Changed `fetchCSRFToken()` to throw errors instead of returning empty strings, preventing silent failures
- **Added comprehensive logging**: CSRF token fetch attempts now log success (🔐) and failure (❌) messages for easier debugging
- **Enhanced retry logic**: apiRequest now properly retries once on 403 CSRF errors with fresh tokens
- **Token caching**: CSRF tokens are cached for 50 minutes (server expires at 60 minutes) to minimize unnecessary fetches

### Patient Registration & Appointments Fixed
- **Patient registration working**: Successfully tested with CSRF protection
- **Appointment booking working**: Confirmed automatic CSRF retry on token mismatch
- **Verified endpoints**: `/api/patients` (POST) and `/api/appointments` (POST) both functioning correctly

### Previous Fixes
- **Appointments endpoint**: Added `authenticateToken`, `setTenantContext`, and `requireTenant` middleware
- **Removed double JSON.stringify**: Fixed in patient registration and pharmacy customer forms (frontend was double-stringifying data)
- **Fixed mutation override bugs**: Removed direct reassignment of React Query mutation.mutate that broke promise chains

### Testing Status
- ✅ Patient registration tested and working
- ✅ Appointment booking tested and working (with CSRF retry)
- ⏳ Pharmacy customer registration (pending user test)
- ⏳ Prescription creation (pending user test)
- ⏳ Lab order creation (pending user test)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: React-based single-page application (SPA) built with Vite as the build tool and bundler.

**UI Framework**: Component-based architecture using a combination of custom components and third-party UI libraries. The application uses Tailwind CSS for styling with a responsive, mobile-first design approach.

**State Management**: React Query (TanStack Query) for server state management, with local state managed through React hooks. The queryClient is dynamically imported to optimize bundle size.

**Routing**: Client-side routing handles navigation between different modules including patient management, pharmacy operations, laboratory workflows, billing systems, and administrative dashboards.

**Key Frontend Features**:
- Multi-tenant support with organization-specific branding and configuration
- Role-based UI rendering for different user types (physicians, nurses, pharmacists, lab technicians, administrators)
- Real-time data updates and notifications
- Progressive Web App (PWA) capabilities with offline support manifest
- Comprehensive documentation and help center components

## Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript for type safety.

**API Design**: RESTful API architecture with organized route modules for different functional areas (auth, patients, prescriptions, lab orders, billing, analytics).

**Process Management**: PM2 for production deployment with process monitoring and automatic restarts. The application runs as a forked process managed by PM2.

**Build System**: esbuild for fast server-side TypeScript compilation, with the build output targeting ESM format for modern Node.js environments.

**Security Layers**:
- Custom CSRF protection implementation (replacing deprecated csurf) with token-based validation
- Session-based authentication with JWT tokens for API access
- IP-based rate limiting and session management
- CORS configuration for cross-origin request handling
- HIPAA compliance measures for healthcare data protection

**Key Backend Components**:
- Medical imaging support with DICOM integration
- BI reports and analytics endpoints
- Patient engagement tracking
- Developer portal for third-party integrations
- Platform statistics and monitoring

## Data Storage Solutions

**Database**: PostgreSQL as the primary relational database (though the application is designed to support Drizzle ORM which can work with multiple database providers).

**Schema Design**: Multi-tenant architecture with tenant isolation at the database level, supporting separate data spaces for hospitals, pharmacies, and laboratories while sharing the common platform infrastructure.

**Data Categories**:
- Patient records and medical history
- Prescription and medication data
- Laboratory test results and sample tracking
- Appointment and scheduling information
- Billing and insurance claims
- Audit logs for compliance tracking
- User accounts and role permissions

## Authentication and Authorization

**Authentication Flow**:
- JWT-based token authentication with configurable expiration
- Session management with server-side session storage
- Secure password hashing and validation
- Multi-factor authentication support (preparatory)

**Authorization Model**:
- Role-based access control (RBAC) with hierarchical permissions
- User roles include: Super Admin, Organization Admin, Physician, Nurse, Pharmacist, Lab Technician, Billing Staff, and Patients
- Tenant-level isolation ensuring organizations only access their own data
- Feature-based permissions tied to subscription plans

**Session Security**:
- Configurable session timeout (default 30 minutes)
- Maximum login attempt tracking to prevent brute force attacks
- Session invalidation on logout and password changes

## External Dependencies

### Payment Processing

**Stripe Integration**:
- Subscription management for different pricing tiers (Free Trial, Starter, Professional, Enterprise)
- One-time payment processing for services
- Setup intent creation for saved payment methods
- Customer portal for subscription management
- Webhook handling for payment events
- Test mode support with public and secret key configuration

### Email Services

**SMTP Configuration**:
- Custom SMTP server (navimedi.org) for transactional emails
- Email notifications for appointments, prescriptions, lab results
- Support for both standard SMTP (port 587) and secure SMTP (port 465)
- Templated email system for consistent branding

### Cloud Storage

**AWS S3 Integration**:
- Medical document storage and retrieval
- Lab result file management
- Patient record attachments
- Video content hosting for training modules
- Thumbnail generation for video files
- Secure, pre-signed URL generation for private content access

### Video Platforms

**Multi-Platform Video Support**:
- YouTube integration for public educational content
- Vimeo integration for professional healthcare training
- Custom video player with healthcare-specific features
- Embed code generation for external sharing

### Third-Party APIs

**Healthcare Integrations**:
- HL7/FHIR support for interoperability (in development)
- Pharmacy networks for prescription routing
- Laboratory information systems (LIS) integration
- Insurance verification and claims submission APIs

### Monitoring and Analytics

**Platform Analytics**:
- Custom analytics endpoints for platform statistics
- User activity tracking
- Performance monitoring
- Audit logging for compliance

### SEO and Marketing

**Search Engine Optimization**:
- Google Search Console verification
- Sitemap generation for search engine indexing
- Structured metadata for healthcare services
- Robots.txt configuration for selective content indexing

### Security and Compliance

**Compliance Tools**:
- Semgrep static analysis for security scanning
- HIPAA compliance monitoring
- Automated security rule enforcement
- Sensitive parameter detection in configuration files