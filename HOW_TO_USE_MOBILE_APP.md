# 📱 HOW TO USE THE PATIENT PORTAL MOBILE APP

## ⚡ FASTEST WAY (Zero Setup)

### 1. Open File
```
mobile-app-pwa/PATIENT_PORTAL_SINGLE_FILE.html
```

### 2. Login (Pre-filled)
- Email: sarah.johnson@email.com
- Password: password123
- Hospital: SAINT PAUL

### 3. Click "Sign In"

### 4. Done! ✅

---

## 📱 What You Can Do

### Dashboard
- See patient name
- Access all features
- Logout

### Profile
- View patient information
- Medical record number (MRN)
- Blood type
- Allergies
- Contact details

### Appointments
- View all appointments
- See dates and times
- Check status

### Prescriptions
- List of medications
- Dosage and frequency
- Refills remaining

### Lab Results
- Test results
- Order dates
- Status indicators

### Messages
- Read communications
- Send messages to providers

### Bills
- View claims
- See charges
- Insurance payments
- Your responsibility

---

## 📱 Install on Phone

### iPhone
1. Open file in Safari
2. Tap Share button
3. Select "Add to Home Screen"
4. App appears on home screen!

### Android
1. Open file in Chrome
2. Tap menu (3 dots)
3. Select "Install App"
4. App appears on home screen!

---

## 🚀 Alternative: Full React PWA

If you want the production-ready version:

```bash
cd mobile-app-pwa
npm install
npm run dev
```

Opens at: http://localhost:3000

---

## ⚠️ Important Note

**Production API Deployment Needed:**

The mobile app connects to `https://navimedi.org/api`

Before it fully works in production, deploy the backend updates:

```bash
# On your VPS:
cd /var/www/vhosts/navimedi.org/httpdocs/NaviMed
git pull origin main
npm install
npm run db:push --force
pm2 restart navimed
```

See `DEPLOY_TO_PRODUCTION.md` for details.

---

## 📁 Files Created

```
mobile-app-pwa/
├── PATIENT_PORTAL_SINGLE_FILE.html  ⭐ START HERE!
├── QUICKSTART.md
├── README.md
├── src/
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Profile.tsx
│   │   ├── Appointments.tsx
│   │   ├── Prescriptions.tsx
│   │   ├── LabResults.tsx
│   │   ├── Messages.tsx
│   │   └── Bills.tsx
│   └── ...
└── ...
```

---

## ✅ Status

- ✅ Mobile app built
- ✅ Single-file version ready
- ✅ Full PWA ready
- ✅ All patient portal features included
- ✅ Mobile-optimized design
- ⏳ Production backend deployment pending

---

**Open `PATIENT_PORTAL_SINGLE_FILE.html` to start using the app!**
