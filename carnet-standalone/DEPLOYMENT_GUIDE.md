# 🚀 CARNET Deployment Guide

## Quick Start

All systems are ready and working! Here's how to deploy CARNET to production.

---

## 📋 Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Domain or subdomain (e.g., carnet.navimedi.org)
- SSL certificate (for HTTPS)

---

## 🔧 Deployment Steps

### Step 1: Prepare Environment

Create `.env` file in `carnet-standalone/` directory:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/database

# Security
JWT_SECRET=your-secure-random-jwt-secret-here
SESSION_SECRET=your-secure-random-session-secret-here

# Environment
NODE_ENV=production
PORT=5000
```

**Generate secure secrets:**
```bash
# Generate random secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

### Step 2: Install Dependencies

```bash
cd carnet-standalone
npm install --production
```

---

### Step 3: Setup Database

```bash
# Push schema to database
npm run db:push

# Seed with test data (optional)
npm run db:seed
```

---

### Step 4: Build Frontend

```bash
npm run build
```

This creates `dist/` folder with optimized frontend files.

---

### Step 5: Start Production Server

```bash
npm start
```

Or use PM2 for process management:

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start server/index.ts --name carnet --interpreter tsx

# Save PM2 configuration
pm2 save

# Auto-restart on system reboot
pm2 startup
```

---

## 🌐 Server Configuration

### Option 1: Nginx Reverse Proxy

Create `/etc/nginx/sites-available/carnet`:

```nginx
server {
    listen 80;
    server_name carnet.navimedi.org;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name carnet.navimedi.org;
    
    # SSL Configuration
    ssl_certificate /path/to/ssl/certificate.crt;
    ssl_certificate_key /path/to/ssl/private.key;
    
    # Frontend static files
    location / {
        root /var/www/carnet/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # API proxy
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/carnet /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### Option 2: Apache Reverse Proxy

Create `/etc/apache2/sites-available/carnet.conf`:

```apache
<VirtualHost *:80>
    ServerName carnet.navimedi.org
    Redirect permanent / https://carnet.navimedi.org/
</VirtualHost>

<VirtualHost *:443>
    ServerName carnet.navimedi.org
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/ssl/certificate.crt
    SSLCertificateKeyFile /path/to/ssl/private.key
    
    # Frontend static files
    DocumentRoot /var/www/carnet/dist
    <Directory /var/www/carnet/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # SPA routing
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # API proxy
    ProxyPreserveHost On
    ProxyPass /api http://localhost:5000/api
    ProxyPassReverse /api http://localhost:5000/api
</VirtualHost>
```

Enable site:
```bash
sudo a2enmod proxy proxy_http rewrite ssl
sudo a2ensite carnet
sudo systemctl restart apache2
```

---

## 🔐 Security Checklist

- ✅ HTTPS enabled (SSL certificate)
- ✅ Strong JWT_SECRET and SESSION_SECRET
- ✅ Database credentials secured
- ✅ Environment variables in .env (not in code)
- ✅ NODE_ENV=production
- ✅ CORS configured for production domain
- ✅ Rate limiting enabled
- ✅ Firewall configured (only 80/443 open)

---

## 📊 Monitoring

### Check Server Status
```bash
# PM2 status
pm2 status

# PM2 logs
pm2 logs carnet

# Server health check
curl https://carnet.navimedi.org/api/health
```

### Database Check
```bash
# Connect to database
psql $DATABASE_URL

# Check tables
\dt carnet_*

# Check data
SELECT COUNT(*) FROM carnet_users;
SELECT COUNT(*) FROM carnet_patients;
SELECT COUNT(*) FROM carnet_appointments;
```

---

## 🔄 Updates & Maintenance

### Update CARNET
```bash
cd carnet-standalone

# Pull latest code
git pull

# Install dependencies
npm install

# Build
npm run build

# Restart server
pm2 restart carnet
```

### Database Migrations
```bash
# Push schema changes
npm run db:push
```

### Backup Database
```bash
# Backup
pg_dump $DATABASE_URL > carnet_backup_$(date +%Y%m%d).sql

# Restore
psql $DATABASE_URL < carnet_backup_20231119.sql
```

---

## 🐛 Troubleshooting

### Server Won't Start
```bash
# Check logs
pm2 logs carnet

# Check environment variables
cat .env

# Test database connection
node -e "const { Pool } = require('pg'); const pool = new Pool({ connectionString: process.env.DATABASE_URL }); pool.query('SELECT NOW()', (err, res) => { console.log(err || res.rows); pool.end(); });"
```

### API Errors
```bash
# Check API health
curl https://carnet.navimedi.org/api/health

# Check specific endpoint
curl -H "Authorization: Bearer YOUR_TOKEN" https://carnet.navimedi.org/api/patient/profile
```

### Database Issues
```bash
# Check if tables exist
psql $DATABASE_URL -c "\dt carnet_*"

# Re-create tables
npm run db:push

# Re-seed data
npm run db:seed
```

---

## 📱 Production URLs

After deployment, CARNET will be available at:

```
Main App:      https://carnet.navimedi.org
API:           https://carnet.navimedi.org/api
Health Check:  https://carnet.navimedi.org/api/health
Install Guide: https://carnet.navimedi.org/install
```

---

## 👥 User Access

### Test Credentials
```
Email: sarah.johnson@email.com
Password: password123
Hospital: SAINT PAUL
```

### Create New Patients
```bash
# Run seed script with different data
# Or use NaviMED admin panel to create patients
```

---

## 📈 Performance Optimization

### Enable Gzip Compression (Nginx)
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
```

### Enable Caching (Nginx)
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### PM2 Cluster Mode
```bash
pm2 start server/index.ts --name carnet --interpreter tsx -i max
```

---

## ✅ Deployment Checklist

Before going live:

- [ ] Environment variables set (.env)
- [ ] Database created and configured
- [ ] npm install completed
- [ ] npm run build successful
- [ ] Database schema pushed (npm run db:push)
- [ ] Test data seeded (optional)
- [ ] Server running (pm2 start)
- [ ] Nginx/Apache configured
- [ ] SSL certificate installed
- [ ] Domain pointing to server
- [ ] Health check working
- [ ] Test login successful
- [ ] All features tested
- [ ] PWA install working
- [ ] Backups configured

---

## 🎉 You're Done!

CARNET is now deployed and ready for patients!

Share with patients:
- **Web:** https://carnet.navimedi.org
- **Install Guide:** https://carnet.navimedi.org/install
- **Support:** Your contact info

---

## 📞 Support

For issues or questions:
1. Check logs: `pm2 logs carnet`
2. Check health: `curl https://carnet.navimedi.org/api/health`
3. Review documentation
4. Contact development team
