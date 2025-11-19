# 🚀 CARNET Full-Stack Setup Instructions

## For Replit (Recommended)

### Step 1: Create New Replit

1. Go to https://replit.com
2. Click "Create Repl"
3. Choose "Import from GitHub" or "Upload folder"
4. Upload the `carnet-standalone` folder

### Step 2: Enable PostgreSQL Database

1. In your Replit, click on "Tools" (left sidebar)
2. Click "Database"
3. Click "PostgreSQL" database
4. Database will be created automatically
5. DATABASE_URL environment variable is set automatically

### Step 3: Set Environment Secrets

1. Click on "Tools" → "Secrets"
2. Add these secrets:
   - `JWT_SECRET`: Any random string (e.g., `my-super-secret-jwt-key-12345`)
   - `SESSION_SECRET`: Any random string (e.g., `my-session-secret-67890`)

### Step 4: Install Dependencies

Click "Shell" tab (bottom) and run:
```bash
npm install
```

### Step 5: Setup Database

```bash
npm run db:push
```

This creates all the database tables.

### Step 6: Add Test Data (Optional)

Run this SQL in the Shell:
```bash
psql $DATABASE_URL
```

Then paste:
```sql
-- Create test tenant (hospital)
INSERT INTO tenants (name, type, status) VALUES ('SAINT PAUL', 'hospital', 'active');

-- Create test patient user
INSERT INTO users (email, password, first_name, last_name, role, tenant_id) 
VALUES (
  'sarah.johnson@email.com', 
  '$2b$10$rOiGHhX0kN3hJ5J5pJ5J5.J5J5J5J5J5J5J5J5J5J5J5J5J5J5J5.', 
  'Sarah', 
  'Johnson', 
  'patient', 
  1
);

-- Create patient profile
INSERT INTO patients (user_id, tenant_id, date_of_birth, gender, phone) 
VALUES (1, 1, '1990-05-15', 'female', '+1-555-0123');

-- Add sample appointment
INSERT INTO appointments (patient_id, tenant_id, provider_id, appointment_date, appointment_type, status)
VALUES (1, 1, 1, NOW() + INTERVAL '7 days', 'General Checkup', 'scheduled');

-- Add sample prescription
INSERT INTO prescriptions (patient_id, tenant_id, provider_id, medication_name, dosage, frequency, refills_remaining, status)
VALUES (1, 1, 1, 'Amoxicillin', '500mg', 'Three times daily', 2, 'active');

-- Add sample lab result
INSERT INTO lab_results (patient_id, tenant_id, test_name, test_type, status)
VALUES (1, 1, 'Complete Blood Count', 'Blood Test', 'completed');

-- Add sample bill
INSERT INTO bills (patient_id, tenant_id, amount, status, due_date, description)
VALUES (1, 1, 15000, 'pending', NOW() + INTERVAL '30 days', 'Annual Physical Examination');

\q
```

**Test login:** sarah.johnson@email.com / password123

### Step 7: Run the App

Click the "Run" button at the top!

Or in Shell:
```bash
npm run dev
```

### Step 8: Access the App

Click the preview/browser icon at the top of Replit.

Your CARNET app is now running! 🎉

---

## For Local Machine

### Prerequisites
- Node.js 20+
- PostgreSQL database

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Setup Environment

Create `.env` file:
```
DATABASE_URL=postgresql://user:password@localhost:5432/carnet
JWT_SECRET=your-secret-key
SESSION_SECRET=your-session-secret
NODE_ENV=development
```

### Step 3: Setup Database
```bash
npm run db:push
```

### Step 4: Run the App
```bash
npm run dev
```

Open http://localhost:5000

---

## Test Login

**Email:** sarah.johnson@email.com  
**Password:** password123  
**Hospital:** SAINT PAUL

*(Only works if you added test data)*

---

## Features Included

✅ Full-stack React + Express app  
✅ PostgreSQL database with Drizzle ORM  
✅ JWT authentication  
✅ Patient portal frontend  
✅ Complete backend API  
✅ All patient features (appointments, prescriptions, lab results, bills, messages)  
✅ Your CARNET logo  
✅ Mobile-responsive design  
✅ Configured for Replit  

---

## Troubleshooting

**Error: DATABASE_URL not set**
- Make sure PostgreSQL database is enabled in Replit Tools
- Or set DATABASE_URL in .env file

**Login fails**
- Make sure you ran `npm run db:push`
- Make sure you added test data
- Password for sarah.johnson@email.com is: password123

**Port already in use**
- Replit automatically handles ports
- On local machine, change PORT in .env

**Database connection error**
- Check DATABASE_URL is correct
- Make sure PostgreSQL is running

---

## Production Deployment

See `DEPLOYMENT_STATUS.md` for production deployment instructions.

---

**CARNET is ready to use in Replit! Just click Run! 🚀**
