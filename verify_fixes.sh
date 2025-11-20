#!/bin/bash
# Verify Authentication Fixes on Production VPS
# Run this on your VPS to check if fixes are properly applied

echo "🔍 Verifying Authentication Fixes..."
echo ""

# Navigate to production directory
cd /var/www/vhosts/navimedi.org/httpdocs/NaviMed

echo "📂 Current Directory: $(pwd)"
echo ""

# Check Fix 1: Patient Registration
echo "✅ Checking Fix 1: Patient Registration Endpoint"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if grep -q "app.post('/api/patients', authenticateToken, setTenantContext, requireTenant," server/routes.ts; then
    echo "✅ PASS: Patient registration has authentication middleware"
    grep -A 1 "app.post('/api/patients'" server/routes.ts | head -2
else
    echo "❌ FAIL: Patient registration is missing authentication middleware"
    grep -A 1 "app.post('/api/patients'" server/routes.ts | head -2
fi

echo ""

# Check Fix 2: Prescription Sending
echo "✅ Checking Fix 2: Prescription Sending Endpoint"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if grep -q "app.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', authenticateToken, setTenantContext, requireTenant," server/routes.ts; then
    echo "✅ PASS: Prescription sending has authentication middleware"
    grep -A 1 "send-to-pharmacy'" server/routes.ts | head -2
else
    echo "❌ FAIL: Prescription sending is missing authentication middleware"
    grep -A 1 "send-to-pharmacy'" server/routes.ts | head -2
fi

echo ""

# Check PM2 Status
echo "📊 Application Status"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
pm2 status navimed

echo ""

# Check for errors in recent logs
echo "📝 Recent Logs (Last 20 lines)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
pm2 logs navimed --lines 20 --nostream

echo ""
echo "✅ Verification Complete"
echo ""
echo "📋 Summary:"
echo "  - Patient Registration Fix: $(grep -q "app.post('/api/patients', authenticateToken, setTenantContext, requireTenant," server/routes.ts && echo "APPLIED" || echo "NOT APPLIED")"
echo "  - Prescription Sending Fix: $(grep -q "app.post('/api/prescriptions/:prescriptionId/send-to-pharmacy', authenticateToken, setTenantContext, requireTenant," server/routes.ts && echo "APPLIED" || echo "NOT APPLIED")"
echo "  - Application Status: $(pm2 status navimed | grep -q "online" && echo "RUNNING" || echo "STOPPED")"
echo ""
