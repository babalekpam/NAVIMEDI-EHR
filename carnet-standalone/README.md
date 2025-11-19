# CARNET - Patient Health Portal

Complete standalone patient portal application.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Test Login

- Email: sarah.johnson@email.com
- Password: password123
- Hospital: SAINT PAUL

## Features

✅ Login & Authentication
✅ Patient Dashboard
✅ Profile Information
✅ Appointments List
✅ Prescriptions
✅ Lab Results
✅ Medical Communications
✅ Bills & Insurance Claims
✅ Mobile-First Design
✅ CARNET Logo Included

## Backend API

Default API: https://navimedi.org/api

Change in `src/lib/api.ts`:
```typescript
const API_BASE = 'https://your-server.com/api';
```

## Build for Production

```bash
npm run build
```

Upload `dist/` folder to your server.

## Logo

Logo file: `public/carnet-logo.png`

Replace with your own logo (recommended size: 200px wide).

## Deploy

1. Run `npm run build`
2. Upload `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes
4. Ensure backend API is deployed and accessible

## Technology

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Wouter (routing)
- Lucide React (icons)

---

**CARNET connects to NaviMED platform API**
