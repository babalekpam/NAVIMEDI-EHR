# 🚀 Deploy CARNET to navimedi.org VPS

## Simple 3-Step Deployment

---

## Step 1: Upload Files to VPS

### Option A: Using SCP (Command Line)
```bash
# From Replit or your computer, upload carnet-standalone folder
scp -r carnet-standalone/ root@navimedi.org:/var/www/vhosts/navimedi.org/httpdocs/
```

### Option B: Using FTP (FileZilla/WinSCP)
1. Connect to: `navimedi.org`
2. Navigate to: `/var/www/vhosts/navimedi.org/httpdocs/`
3. Upload the entire `carnet-standalone` folder

---

## Step 2: Run Setup Script on VPS

SSH into your VPS:
```bash
ssh root@navimedi.org
```

Run the automated setup:
```bash
cd /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone
bash QUICK_VPS_SETUP.sh
```

This script will:
- ✅ Install dependencies
- ✅ Create .env file
- ✅ Setup database tables
- ✅ Build frontend
- ✅ Start server with PM2

**IMPORTANT:** After script runs, edit `.env` file:
```bash
nano .env
```

Update these lines:
```env
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/navimed_db
JWT_SECRET=<paste random string here>
SESSION_SECRET=<paste random string here>
```

Generate random secrets:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Step 3: Configure Web Server

### For Nginx (most common)

Edit your NaviMED config:
```bash
sudo nano /etc/nginx/sites-available/navimedi.org
```

Add these location blocks inside your `server { }` block:

```nginx
# CARNET frontend
location /carnet {
    alias /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/dist;
    try_files $uri $uri/ /carnet/index.html;
}

# CARNET API
location /api/carnet {
    rewrite ^/api/carnet/(.*)$ /api/$1 break;
    proxy_pass http://localhost:5001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Restart nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### For Apache

Edit your NaviMED config:
```bash
sudo nano /etc/apache2/sites-available/navimedi.org.conf
```

Add inside `<VirtualHost>`:

```apache
# CARNET frontend
Alias /carnet /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/dist
<Directory /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/dist>
    Options +FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>

# CARNET API
ProxyPass /api/carnet http://localhost:5001/api
ProxyPassReverse /api/carnet http://localhost:5001/api
```

Restart Apache:
```bash
sudo systemctl reload apache2
```

---

## Step 4: Add Landing Page to Your Website

Copy the patient landing page:
```bash
cp /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/patient-landing-page.html \
   /var/www/vhosts/navimedi.org/httpdocs/patient-portal.html
```

Or add CARNET section to your existing homepage - see examples in `VPS_DEPLOYMENT_STEPS.md`

---

## Step 5: Test Everything

Visit these URLs:
1. **CARNET Portal:** https://navimedi.org/carnet
2. **Landing Page:** https://navimedi.org/patient-portal.html
3. **Health Check:** https://navimedi.org/api/carnet/health

Test login:
- Email: `sarah.johnson@email.com`
- Password: `password123`
- Hospital: `SAINT PAUL`

---

## Quick Reference Commands

### Check CARNET Status
```bash
pm2 status carnet
pm2 logs carnet
```

### Restart CARNET
```bash
pm2 restart carnet
```

### Stop CARNET
```bash
pm2 stop carnet
```

### Update CARNET
```bash
cd /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone
git pull  # or upload new files
npm install
npm run build
pm2 restart carnet
```

---

## Troubleshooting

### CARNET won't start
```bash
pm2 logs carnet  # Check for errors
```

### Can't access /carnet URL
```bash
sudo nginx -t  # Test nginx config
sudo systemctl status nginx
```

### Database errors
```bash
cat .env  # Check database URL
psql <your-database-url> -c "SELECT 1"  # Test connection
```

---

## 📂 Files Included

**Deployment Guides:**
- `VPS_DEPLOYMENT_STEPS.md` - Detailed step-by-step guide
- `QUICK_VPS_SETUP.sh` - Automated setup script
- `DEPLOYMENT_GUIDE.md` - Complete production deployment guide

**Patient Resources:**
- `patient-landing-page.html` - Ready-to-use landing page
- `PATIENT_INSTALL_GUIDE.html` - Patient installation instructions

**Documentation:**
- `CARNET_SYSTEMS_FIXED.md` - All systems overview
- `CARNET_PWA_COMPLETE.md` - PWA features guide

---

## 🎉 You're Done!

After deployment, CARNET will be live at:
- **Portal:** https://navimedi.org/carnet
- **Landing:** https://navimedi.org/patient-portal.html

Share with your patients! 🎊
