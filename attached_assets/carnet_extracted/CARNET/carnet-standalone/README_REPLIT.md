# 🚀 CARNET - Complete Full-Stack Patient Portal

**Ready for Replit!** This is a complete standalone project with frontend + backend + database.

---

## 📦 What's Included

✅ **Frontend** - React patient portal with all 8 pages  
✅ **Backend** - Express API with all endpoints  
✅ **Database** - PostgreSQL with Drizzle ORM  
✅ **Authentication** - JWT-based login system  
✅ **CARNET Logo** - Your custom logo included  
✅ **Test Data** - Sample patient account ready to use  

---

## 🎯 Quick Start (3 Steps!)

### 1. Enable PostgreSQL Database

- Click "Tools" (left sidebar)
- Click "Database"  
- Click "PostgreSQL"
- Database created automatically! ✅

### 2. Setup Database & Test Data

Click "Shell" (bottom) and run:
```bash
npm install
npm run db:setup
```

This creates tables and adds test data.

### 3. Run the App

Click the **"Run"** button at the top!

Or in Shell:
```bash
npm run dev
```

**That's it!** 🎉

---

## 📱 Test the App

**Login:**
- Email: sarah.johnson@email.com
- Password: password123
- Hospital: SAINT PAUL

**Features:**
- Dashboard
- Profile
- Appointments
- Prescriptions  
- Lab Results
- Messages
- Bills & Claims

---

## 🏗️ Project Structure

```
carnet-standalone/
├── server/              Backend (Express + API)
│   ├── index.ts         Main server file
│   ├── db.ts            Database connection
│   ├── seed.ts          Test data
│   ├── middleware/      Auth middleware
│   └── routes/          API routes
├── shared/              
│   └── schema.ts        Database schema (Drizzle)
├── src/                 Frontend (React)
│   ├── pages/           All 8 pages
│   ├── lib/             API client + auth
│   └── App.tsx          Main app
├── public/
│   └── carnet-logo.png  Your CARNET logo
├── .replit              Replit config
├── package.json         Dependencies
└── drizzle.config.ts    Database config
```

---

## 🔧 Available Commands

```bash
npm run dev         # Start development server
npm run db:push     # Update database schema
npm run db:seed     # Add test data
npm run db:setup    # Do both: push schema + seed data
npm run build       # Build for production
```

---

## 🌐 How It Works

1. **Backend** runs on port 5000
2. **Frontend** served by Vite (integrated with backend)
3. **Database** PostgreSQL (Replit provides this)
4. **API** at `/api/auth`, `/api/patient`, `/api/medical-communications`

When you click "Run", everything starts together!

---

## ✅ Features Working

✅ Patient login/authentication  
✅ View profile information  
✅ See appointments  
✅ View prescriptions  
✅ Check lab results  
✅ Read/send messages  
✅ View bills & claims  
✅ Mobile-responsive design  
✅ Secure JWT authentication  

---

## 🔒 Security

- Passwords hashed with bcrypt
- JWT tokens for authentication
- Session management
- Protected API routes

---

## 🎨 Customize

**Change Logo:**
Replace `public/carnet-logo.png` with your logo

**Change Colors:**
Edit Tailwind classes in component files

**Add More Test Data:**
Edit `server/seed.ts` and run `npm run db:seed`

---

## 📝 Test Account Details

**Email:** sarah.johnson@email.com  
**Password:** password123  
**Hospital:** SAINT PAUL  
**Name:** Sarah Johnson  
**DOB:** May 15, 1990  

---

## 🚀 Deploy to Production

1. Click "Deploy" in Replit (coming soon)
2. Or build manually:
```bash
npm run build
```
Upload `dist/` folder to your server.

---

## ⚠️ Troubleshooting

**Login fails:**
- Run `npm run db:setup` to create tables and test data

**Database error:**
- Make sure PostgreSQL is enabled in Tools → Database

**Port in use:**
- Replit handles ports automatically, just click Run

**Build errors:**
- Run `npm install` first

---

## 📚 Documentation Files

- `README_REPLIT.md` - This file (quick start)
- `SETUP_INSTRUCTIONS.md` - Detailed setup guide
- `DEPLOYMENT_STATUS.md` - Production deployment info
- `QUICKSTART.txt` - Simple text guide

---

## 💡 Tips

- Database persists across runs (your data is saved)
- Environment variables set automatically by Replit
- Logs appear in Console tab (bottom)
- Use Shell tab for commands

---

**CARNET is ready! Just click "Run"!** 🎉

Questions? See `SETUP_INSTRUCTIONS.md` for more details.
