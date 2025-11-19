# 🚀 Deploy CARNET to Your VPS (navimedi.org)

## Step-by-Step Deployment Guide

---

## Part 1: Deploy CARNET to VPS

### Step 1: Build CARNET for Production

On your local machine or Replit:

```bash
cd carnet-standalone
npm install
npm run build
```

This creates a `dist/` folder with all compiled files.

---

### Step 2: Copy Files to VPS

**Option A: Using SCP (Secure Copy)**

```bash
# From your local machine/Replit, copy the entire carnet-standalone folder
scp -r carnet-standalone/ root@navimedi.org:/var/www/vhosts/navimedi.org/httpdocs/
```

**Option B: Using FTP/SFTP**

1. Connect to your VPS via FileZilla/WinSCP
2. Navigate to `/var/www/vhosts/navimedi.org/httpdocs/`
3. Upload the entire `carnet-standalone/` folder

**Option C: Using Git**

```bash
# On your VPS
cd /var/www/vhosts/navimedi.org/httpdocs/
git clone [your-repo-url] carnet-standalone
cd carnet-standalone
npm install
npm run build
```

---

### Step 3: Setup Environment on VPS

SSH into your VPS:

```bash
ssh root@navimedi.org
```

Navigate to CARNET directory:

```bash
cd /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone
```

Create `.env` file:

```bash
nano .env
```

Add this content:

```env
# Database - Use your existing NaviMED database
DATABASE_URL=postgresql://username:password@localhost:5432/navimed_db

# Security - Generate random secrets
JWT_SECRET=your-random-32-char-secret-here
SESSION_SECRET=your-random-32-char-secret-here

# Environment
NODE_ENV=production
PORT=5001
```

**Generate secure secrets:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Run this twice and paste the outputs for JWT_SECRET and SESSION_SECRET.

---

### Step 4: Setup Database Tables

```bash
cd /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone

# Install dependencies
npm install

# Create CARNET tables in your database
npm run db:push

# Seed with test data (optional)
npm run db:seed
```

This creates all CARNET tables with `carnet_` prefix (won't conflict with NaviMED tables).

---

### Step 5: Start CARNET Server

**Option A: Using PM2 (Recommended)**

```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Start CARNET server
cd /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone
pm2 start server/index.ts --name carnet --interpreter tsx

# Save PM2 configuration
pm2 save

# Auto-start on reboot
pm2 startup
```

**Option B: Using systemd service**

Create service file:

```bash
sudo nano /etc/systemd/system/carnet.service
```

Add:

```ini
[Unit]
Description=CARNET Patient Portal
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/vhosts/navimedi.org/httpdocs/carnet-standalone
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Start service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable carnet
sudo systemctl start carnet
sudo systemctl status carnet
```

---

### Step 6: Configure Nginx/Apache

**For Nginx:**

Edit your existing NaviMED nginx config:

```bash
sudo nano /etc/nginx/sites-available/navimedi.org
```

Add CARNET location block:

```nginx
server {
    listen 443 ssl http2;
    server_name navimedi.org www.navimedi.org;
    
    # Your existing SSL config...
    
    # Existing NaviMED location blocks...
    
    # Add CARNET routes
    location /carnet {
        alias /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/dist;
        try_files $uri $uri/ /carnet/index.html;
    }
    
    # CARNET API proxy
    location /api/carnet {
        rewrite ^/api/carnet/(.*)$ /api/$1 break;
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Test and reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

**For Apache:**

Edit your existing NaviMED Apache config:

```bash
sudo nano /etc/apache2/sites-available/navimedi.org.conf
```

Add:

```apache
<VirtualHost *:443>
    ServerName navimedi.org
    
    # Your existing SSL config...
    
    # CARNET static files
    Alias /carnet /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/dist
    <Directory /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # SPA routing
        RewriteEngine On
        RewriteBase /carnet/
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /carnet/index.html [L]
    </Directory>
    
    # CARNET API proxy
    ProxyPass /api/carnet http://localhost:5001/api
    ProxyPassReverse /api/carnet http://localhost:5001/api
</VirtualHost>
```

Test and reload:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

---

## Part 2: Create Patient Landing Page

### Option 1: Add to Existing NaviMED Home Page

Edit your main homepage file (usually `index.html` or `index.php`):

```html
<!-- Add to your existing homepage -->

<!-- CARNET Patient Portal Section -->
<section class="patient-portal-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 80px 20px; color: white;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <img src="/carnet-standalone/public/carnet-logo.png" alt="CARNET" style="width: 120px; margin-bottom: 20px;">
        <h2 style="font-size: 42px; margin-bottom: 20px;">CARNET Patient Portal</h2>
        <p style="font-size: 20px; margin-bottom: 40px; opacity: 0.9;">
            Access your medical records, appointments, prescriptions, and more - anytime, anywhere
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin: 50px 0;">
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 48px; margin-bottom: 15px;">📅</div>
                <h3 style="font-size: 20px; margin-bottom: 10px;">Appointments</h3>
                <p style="opacity: 0.8;">View and manage your medical appointments</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 48px; margin-bottom: 15px;">💊</div>
                <h3 style="font-size: 20px; margin-bottom: 10px;">Prescriptions</h3>
                <p style="opacity: 0.8;">Track medications and refills</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 48px; margin-bottom: 15px;">🔬</div>
                <h3 style="font-size: 20px; margin-bottom: 10px;">Lab Results</h3>
                <p style="opacity: 0.8;">Access test results securely</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 48px; margin-bottom: 15px;">💬</div>
                <h3 style="font-size: 20px; margin-bottom: 10px;">Messages</h3>
                <p style="opacity: 0.8;">Communicate with your healthcare team</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 48px; margin-bottom: 15px;">💳</div>
                <h3 style="font-size: 20px; margin-bottom: 10px;">Bills</h3>
                <p style="opacity: 0.8;">View and pay medical bills</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 48px; margin-bottom: 15px;">📱</div>
                <h3 style="font-size: 20px; margin-bottom: 10px;">Mobile App</h3>
                <p style="opacity: 0.8;">Install on your phone - no app store needed!</p>
            </div>
        </div>
        
        <div style="margin-top: 40px;">
            <a href="/carnet" style="display: inline-block; background: white; color: #667eea; padding: 18px 50px; border-radius: 50px; text-decoration: none; font-size: 20px; font-weight: bold; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: transform 0.3s;">
                Access CARNET Portal →
            </a>
        </div>
        
        <p style="margin-top: 30px; opacity: 0.8; font-size: 16px;">
            Available in English, Spanish, and French | Works on all devices
        </p>
    </div>
</section>
```

---

### Option 2: Create Dedicated Landing Page

Create `/var/www/vhosts/navimedi.org/httpdocs/patient-portal.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CARNET - Patient Portal | NaviMED</title>
    <meta name="description" content="Access your health records, appointments, prescriptions, and more with CARNET Patient Portal">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
        }
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 20px;
            text-align: center;
        }
        .logo {
            width: 150px;
            margin-bottom: 30px;
        }
        h1 {
            font-size: 56px;
            margin-bottom: 20px;
        }
        .subtitle {
            font-size: 24px;
            opacity: 0.9;
            margin-bottom: 40px;
        }
        .cta-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 20px 60px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 22px;
            font-weight: bold;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            transition: all 0.3s;
        }
        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 50px rgba(0,0,0,0.4);
        }
        .features {
            max-width: 1200px;
            margin: 80px auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }
        .feature {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .feature-icon {
            font-size: 64px;
            margin-bottom: 20px;
        }
        .feature h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: #333;
        }
        .feature p {
            color: #666;
            font-size: 16px;
        }
        .install-section {
            background: #f8f9fa;
            padding: 80px 20px;
            text-align: center;
        }
        .install-section h2 {
            font-size: 40px;
            margin-bottom: 40px;
            color: #333;
        }
        .install-steps {
            max-width: 800px;
            margin: 0 auto;
            text-align: left;
        }
        .step {
            background: white;
            padding: 30px;
            margin-bottom: 20px;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .step-number {
            background: #667eea;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
        }
    </style>
</head>
<body>
    <section class="hero">
        <img src="/carnet-standalone/public/carnet-logo.png" alt="CARNET" class="logo">
        <h1>CARNET Patient Portal</h1>
        <p class="subtitle">Your Health, Always Within Reach</p>
        <a href="/carnet" class="cta-button">Access Your Portal →</a>
        <p style="margin-top: 30px; opacity: 0.8;">No App Store Required • Install Directly from Browser</p>
    </section>

    <div class="features">
        <div class="feature">
            <div class="feature-icon">📅</div>
            <h3>Appointments</h3>
            <p>View upcoming appointments, check-in remotely, and receive reminders</p>
        </div>

        <div class="feature">
            <div class="feature-icon">💊</div>
            <h3>Prescriptions</h3>
            <p>Track your medications, request refills, and view dosage instructions</p>
        </div>

        <div class="feature">
            <div class="feature-icon">🔬</div>
            <h3>Lab Results</h3>
            <p>Access your test results as soon as they're ready, with easy-to-read formats</p>
        </div>

        <div class="feature">
            <div class="feature-icon">💬</div>
            <h3>Secure Messaging</h3>
            <p>Communicate directly with your healthcare team through secure messages</p>
        </div>

        <div class="feature">
            <div class="feature-icon">💳</div>
            <h3>Billing & Payments</h3>
            <p>View bills, check insurance claims, and make secure payments online</p>
        </div>

        <div class="feature">
            <div class="feature-icon">🌍</div>
            <h3>Multi-Language</h3>
            <p>Available in English, Spanish, and French for your convenience</p>
        </div>
    </div>

    <section class="install-section">
        <h2>Install CARNET on Your Phone</h2>
        <div class="install-steps">
            <div class="step">
                <span class="step-number">1</span>
                <strong>Visit navimedi.org/carnet</strong> on your mobile browser (Safari for iPhone, Chrome for Android)
            </div>
            <div class="step">
                <span class="step-number">2</span>
                <strong>Tap "Install"</strong> when prompted, or use your browser's menu to add to home screen
            </div>
            <div class="step">
                <span class="step-number">3</span>
                <strong>Open from your home screen</strong> - CARNET will work just like a native app!
            </div>
        </div>
        <div style="margin-top: 40px;">
            <a href="/carnet" class="cta-button">Get Started Now →</a>
        </div>
    </section>

    <footer style="background: #333; color: white; padding: 40px 20px; text-align: center;">
        <p>&copy; 2024 NaviMED Healthcare Platform. All rights reserved.</p>
        <p style="margin-top: 10px;">CARNET Patient Portal - Secure, Fast, Accessible</p>
    </footer>
</body>
</html>
```

Then link to it from your main navigation:

```html
<a href="/patient-portal.html">Patient Portal</a>
```

---

## Part 3: Test Your Deployment

### 1. Check CARNET is Running

```bash
# SSH into VPS
ssh root@navimedi.org

# Check PM2 status
pm2 status

# Check CARNET logs
pm2 logs carnet

# Or if using systemd
sudo systemctl status carnet
```

### 2. Test URLs

Visit these URLs in your browser:

- Main portal: `https://navimedi.org/carnet`
- Health check: `https://navimedi.org/api/carnet/health`
- Landing page: `https://navimedi.org/patient-portal.html`

### 3. Test Login

1. Go to `https://navimedi.org/carnet`
2. Enter test credentials:
   - Email: `sarah.johnson@email.com`
   - Password: `password123`
   - Hospital: `SAINT PAUL`
3. Test all features:
   - Dashboard
   - Appointments
   - Prescriptions
   - Lab Results
   - Messages
   - Bills

### 4. Test PWA Install

1. Open `https://navimedi.org/carnet` on mobile
2. Look for install prompt
3. Install app
4. Open from home screen

---

## Part 4: Update NaviMED Navigation

Add CARNET link to your main NaviMED navigation menu:

**In your header/navigation file:**

```html
<nav>
    <!-- Your existing menu items -->
    <a href="/about">About</a>
    <a href="/services">Services</a>
    
    <!-- Add CARNET link -->
    <a href="/carnet" style="background: #667eea; color: white; padding: 10px 20px; border-radius: 25px;">
        Patient Portal
    </a>
    
    <a href="/contact">Contact</a>
</nav>
```

---

## Troubleshooting

### CARNET won't start
```bash
pm2 logs carnet
# Check for errors in logs
```

### Can't access /carnet URL
```bash
# Check nginx/apache config
sudo nginx -t
sudo systemctl status nginx
```

### Database connection error
```bash
# Check .env file
cat /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone/.env

# Test database connection
psql $DATABASE_URL -c "SELECT 1"
```

### API endpoints not working
```bash
# Check if CARNET server is running
pm2 status carnet

# Check if port 5001 is open
netstat -tulpn | grep 5001
```

---

## 🎉 You're Done!

CARNET is now live at:
- **Patient Portal:** https://navimedi.org/carnet
- **Landing Page:** https://navimedi.org/patient-portal.html
- **API:** https://navimedi.org/api/carnet

Share with your patients!
