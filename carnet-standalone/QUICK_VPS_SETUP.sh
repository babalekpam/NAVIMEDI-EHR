#!/bin/bash
# CARNET VPS Quick Setup Script
# Run this on your VPS after uploading files

echo "🚀 CARNET VPS Setup Starting..."

# Navigate to CARNET directory
cd /var/www/vhosts/navimedi.org/httpdocs/carnet-standalone

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup environment variables
echo "🔧 Setting up environment..."
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << 'EOF'
# Database - Update with your credentials
DATABASE_URL=postgresql://username:password@localhost:5432/navimed_db

# Security - IMPORTANT: Generate new secrets!
JWT_SECRET=CHANGE_THIS_TO_RANDOM_32_CHAR_STRING
SESSION_SECRET=CHANGE_THIS_TO_RANDOM_32_CHAR_STRING

# Environment
NODE_ENV=production
PORT=5001
EOF
    echo "⚠️  IMPORTANT: Edit .env file and add your database credentials!"
    echo "⚠️  Generate secrets with: node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\""
else
    echo "✅ .env file already exists"
fi

# Create database tables
echo "🗄️  Setting up database..."
npm run db:push

# Seed test data (optional)
read -p "Do you want to seed test data? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm run db:seed
    echo "✅ Test data seeded"
    echo "Test login: sarah.johnson@email.com / password123 / SAINT PAUL"
fi

# Build frontend
echo "🏗️  Building frontend..."
npm run build

# Setup PM2
echo "🔄 Setting up PM2..."
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Stop existing CARNET process if running
pm2 delete carnet 2>/dev/null || true

# Start CARNET with PM2
echo "🚀 Starting CARNET server..."
pm2 start server/index.ts --name carnet --interpreter tsx

# Save PM2 configuration
pm2 save

# Setup PM2 to start on reboot
pm2 startup

echo ""
echo "✅ CARNET Setup Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Edit .env file and update DATABASE_URL and secrets"
echo "2. Configure nginx/Apache (see VPS_DEPLOYMENT_STEPS.md)"
echo "3. Test at: https://navimedi.org/carnet"
echo ""
echo "📊 Useful Commands:"
echo "  pm2 status          - Check CARNET status"
echo "  pm2 logs carnet     - View CARNET logs"
echo "  pm2 restart carnet  - Restart CARNET"
echo "  pm2 stop carnet     - Stop CARNET"
echo ""
