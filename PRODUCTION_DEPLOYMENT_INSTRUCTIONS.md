# Production Deployment Instructions - Authentication Fixes

## Overview
This deployment applies two critical authentication fixes to your NAVIMEDI production server:
1. **Patient Registration** - Fixes missing authentication causing registration failures
2. **Prescription Sending** - Fixes missing authentication when sending prescriptions to pharmacy

## Quick Deployment (Recommended)

### Option 1: Automated Script
1. **Upload the deployment script to your VPS:**
   ```bash
   scp deploy_auth_fixes.sh root@navimedi.org:/root/
   ```

2. **SSH into your VPS:**
   ```bash
   ssh root@navimedi.org
   ```

3. **Make the script executable and run it:**
   ```bash
   chmod +x /root/deploy_auth_fixes.sh
   bash /root/deploy_auth_fixes.sh
   ```

4. **Verify the deployment:**
   - Test patient registration
   - Test prescription sending to pharmacy
   - Monitor logs: `pm2 logs navimed`

---

## Manual Deployment (Step-by-Step)

### Step 1: SSH into VPS
```bash
ssh root@navimedi.org
```

### Step 2: Navigate to Production Directory
```bash
cd /var/www/vhosts/navimedi.org/httpdocs/NaviMed
```

### Step 3: Create Backup
```bash
cp server/routes.ts server/routes.ts.backup.$(date +%Y%m%d_%H%M%S)
```

### Step 4: Apply Fix 1 - Patient Registration
```bash
sed -i "s|app\.post('/api/patients', async (req, res) => {|app.post('/api/patients', authenticateToken, setTenantContext, requireTenant, async (req, res) => {|g" server/routes.ts
```

**Verify Fix 1:**
```bash
grep -A 2 "app.post('/api/patients'" server/routes.ts
```

You should see:
```javascript
app.post('/api/patients', authenticateToken, setTenantContext, requireTenant, async (req, res) => {
```

### Step 5: Apply Fix 2 - Prescription Sending
```bash
sed -i "s|app\.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', async (req, res) => {|app.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', authenticateToken, setTenantContext, requireTenant, async (req, res) => {|g" server/routes.ts
```

**Verify Fix 2:**
```bash
grep -A 2 "send-to-pharmacy" server/routes.ts
```

You should see:
```javascript
app.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', authenticateToken, setTenantContext, requireTenant, async (req, res) => {
```

### Step 6: Restart Application
```bash
pm2 restart navimed
```

### Step 7: Verify Application is Running
```bash
pm2 status navimed
pm2 logs navimed --lines 30
```

---

## Verification Checklist

After deployment, test these features in production:

### ✅ Patient Registration
1. Login to NaviMED at https://navimedi.org
2. Navigate to "Register Patient" or Patients page
3. Fill in patient details:
   - First Name
   - Last Name
   - Date of Birth
   - Gender
   - Email
   - Phone
4. Submit the form
5. **Expected**: Patient is created successfully without authentication errors

### ✅ Prescription Sending
1. Login as a physician
2. Navigate to Prescriptions page
3. Create or select a prescription
4. Click "Send to Pharmacy"
5. Select a pharmacy from the list
6. Submit
7. **Expected**: Prescription is sent successfully without authentication errors

### ✅ Lab Orders (Already Working)
1. Login to NaviMED
2. Check sidebar for "Lab Orders" menu item (should be visible)
3. Click on "Lab Orders"
4. **Expected**: Lab orders page loads successfully
5. Go to Patient Medical Records
6. Click "Order Lab Test" quick action button
7. **Expected**: Navigates to lab orders with patient pre-selected

---

## Rollback Instructions

If something goes wrong, restore the backup:

```bash
cd /var/www/vhosts/navimedi.org/httpdocs/NaviMed

# List backups
ls -la server/routes.ts.backup.*

# Restore from specific backup (replace timestamp)
cp server/routes.ts.backup.20241120_120000 server/routes.ts

# Restart application
pm2 restart navimed
```

---

## Monitoring

### Check Application Status
```bash
pm2 status navimed
```

### View Real-time Logs
```bash
pm2 logs navimed
```

### View Last 50 Lines
```bash
pm2 logs navimed --lines 50 --nostream
```

### Check Error Logs
```bash
pm2 logs navimed --err
```

---

## Technical Details

### What Changed?
Both endpoints now require authentication middleware before processing requests:

**Before:**
```javascript
app.post('/api/patients', async (req, res) => {
  const { tenantId } = req.user; // ❌ req.user is undefined, causes crash
```

**After:**
```javascript
app.post('/api/patients', authenticateToken, setTenantContext, requireTenant, async (req, res) => {
  const { tenantId } = req.user; // ✅ req.user is populated by middleware
```

### Middleware Chain
1. `authenticateToken` - Validates JWT token and populates req.user
2. `setTenantContext` - Loads tenant information into req.user
3. `requireTenant` - Ensures tenant exists and is active

This ensures that `req.user.tenantId` is always available when the endpoint logic executes.

---

## Support

If you encounter any issues:
1. Check PM2 logs: `pm2 logs navimed`
2. Verify backup exists before making changes
3. Test in browser with network inspector to see exact error messages
4. Rollback if needed using backup file

**Production Path:** `/var/www/vhosts/navimedi.org/httpdocs/NaviMed`
**PM2 App Name:** `navimed`
**CARNET App Name:** `carnet-patient-portal`
