#!/bin/bash
# Deploy Authentication Fixes to Production VPS
# Run this script on your VPS at navimedi.org

set -e  # Exit on error

echo "🚀 Deploying Authentication Fixes to Production..."
echo ""

# Navigate to production directory
cd /var/www/vhosts/navimedi.org/httpdocs/NaviMed

# Backup current routes.ts file
echo "📦 Creating backup..."
cp server/routes.ts server/routes.ts.backup.$(date +%Y%m%d_%H%M%S)
echo "✅ Backup created"

# Apply Fix 1: Patient Registration Authentication
echo ""
echo "🔧 Fix 1: Adding authentication to patient registration endpoint..."
sed -i "s|app\.post('/api/patients', async (req, res) => {|app.post('/api/patients', authenticateToken, setTenantContext, requireTenant, async (req, res) => {|g" server/routes.ts

# Verify Fix 1
if grep -q "app.post('/api/patients', authenticateToken, setTenantContext, requireTenant," server/routes.ts; then
    echo "✅ Patient registration fix applied successfully"
else
    echo "❌ Failed to apply patient registration fix"
    echo "Restoring backup..."
    cp server/routes.ts.backup.* server/routes.ts
    exit 1
fi

# Apply Fix 2: Prescription Sending Authentication
echo ""
echo "🔧 Fix 2: Adding authentication to prescription sending endpoint..."
sed -i "s|app\.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', async (req, res) => {|app.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', authenticateToken, setTenantContext, requireTenant, async (req, res) => {|g" server/routes.ts

# Verify Fix 2
if grep -q "app.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', authenticateToken, setTenantContext, requireTenant," server/routes.ts; then
    echo "✅ Prescription sending fix applied successfully"
else
    echo "❌ Failed to apply prescription sending fix"
    echo "Restoring backup..."
    cp server/routes.ts.backup.* server/routes.ts
    exit 1
fi

# Restart PM2 application
echo ""
echo "🔄 Restarting navimed application..."
pm2 restart navimed

# Wait for app to start
echo "⏳ Waiting for application to restart..."
sleep 5

# Check PM2 status
echo ""
echo "📊 Application Status:"
pm2 status navimed

# Show recent logs
echo ""
echo "📝 Recent Logs:"
pm2 logs navimed --lines 20 --nostream

echo ""
echo "✅ Deployment Complete!"
echo ""
echo "🎯 Fixes Applied:"
echo "  ✓ Patient registration now requires authentication"
echo "  ✓ Prescription sending now requires authentication"
echo ""
echo "📋 Next Steps:"
echo "  1. Test patient registration in production"
echo "  2. Test prescription sending to pharmacy"
echo "  3. Monitor logs: pm2 logs navimed"
echo ""
echo "⚠️  Rollback if needed: cp server/routes.ts.backup.* server/routes.ts && pm2 restart navimed"
echo ""
