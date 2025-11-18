# 🚀 Deploy Updated Code to Production

## Status
✅ All endpoints fixed and working locally  
❌ Production server needs updated code

---

## What's Fixed (Locally)
1. ✅ Created /api/medical-communications endpoints
2. ✅ Created /api/patient/bills endpoint  
3. ✅ Fixed validation on POST requests
4. ✅ All endpoints tested locally - working perfectly

---

## Why Production Still Has Errors
Production server at https://navimedi.org is running **old code** without the new endpoints.

---

## Deploy Commands (Run on VPS)

```bash
# 1. Go to project directory
cd /var/www/vhosts/navimedi.org/httpdocs/NaviMed

# 2. Backup .env file
cp .env .env.backup

# 3. Pull latest code
git pull origin main

# 4. Install dependencies (if package.json changed)
npm install

# 5. Push database schema changes
npm run db:push --force

# 6. Rebuild if needed
npm run build

# 7. Restart server
pm2 restart navimed

# 8. Check logs
pm2 logs navimed --lines 50
```

---

## After Deployment

Test endpoints:
```bash
# Test login
curl -X POST https://navimedi.org/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"sarah.johnson@email.com","password":"password123","tenantId":"SAINT PAUL"}'

# Should return token ✅
```

---

## Files Changed
- `server/routes.ts` - Added 3 new endpoints
- `shared/schema.ts` - Added validation schemas

---

**After deployment, all endpoints will work!**
