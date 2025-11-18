import { db } from './db';
import { users, patients } from '@shared/schema';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import { eq, and } from 'drizzle-orm';

async function createTestPatientSarah() {
  console.log('Creating test patient Sarah Johnson...\n');

  const SAINT_PAUL_TENANT_ID = '27ec4d0a-776b-42a9-82d2-bd5b8349cea1';
  const USERNAME = 'Sarah.patient';
  const PASSWORD = 'password123';
  const EMAIL = 'sarah.johnson@email.com';

  try {
    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(
        and(
          eq(users.username, USERNAME),
          eq(users.tenantId, SAINT_PAUL_TENANT_ID)
        )
      );

    if (existingUser.length > 0) {
      console.log('✅ User already exists:', USERNAME);
      console.log('User ID:', existingUser[0].id);
      
      // Check if patient record exists
      const existingPatient = await db
        .select()
        .from(patients)
        .where(eq(patients.email, EMAIL));
      
      if (existingPatient.length > 0) {
        console.log('✅ Patient record already exists');
        console.log('\n=== CREDENTIALS ===');
        console.log('Username:', USERNAME);
        console.log('Password:', PASSWORD);
        console.log('Email:', EMAIL);
        console.log('\nTest login at: https://navimedi.org/api/auth/login');
        return;
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(PASSWORD, 10);
    console.log('✅ Password hashed');

    // Create user account
    const userId = nanoid();
    const [newUser] = await db.insert(users).values({
      id: userId,
      tenantId: SAINT_PAUL_TENANT_ID,
      username: USERNAME,
      email: EMAIL,
      password: hashedPassword,
      firstName: 'Sarah',
      lastName: 'Johnson',
      role: 'patient',
      isActive: true,
      isTemporaryPassword: false,
      mustChangePassword: false,
      languagePreference: 'en',
    }).returning();

    console.log('✅ User account created');
    console.log('   User ID:', newUser.id);
    console.log('   Username:', newUser.username);
    console.log('   Email:', newUser.email);

    // Generate MRN (Medical Record Number)
    const mrn = `MRN${Date.now().toString().slice(-8)}`;
    const tenantPatientId = `STPAUL-${Date.now().toString().slice(-6)}`;

    // Create patient record
    const [newPatient] = await db.insert(patients).values({
      tenantId: SAINT_PAUL_TENANT_ID,
      mrn: mrn,
      tenantPatientId: tenantPatientId,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: EMAIL,
      phone: '(555) 123-4567',
      dateOfBirth: new Date('1990-05-15'), // Sample DOB
      gender: 'Female',
      address: {
        street: '123 Main Street',
        city: 'Saint Paul',
        state: 'MN',
        zipCode: '55101',
        country: 'USA'
      },
      emergencyContact: {
        name: 'John Johnson',
        relationship: 'Spouse',
        phone: '(555) 987-6543'
      },
      allergies: ['Penicillin'],
      bloodType: 'A+',
      isActive: true,
    }).returning();

    console.log('✅ Patient record created');
    console.log('   Patient ID:', newPatient.id);
    console.log('   MRN:', newPatient.mrn);
    console.log('   Name:', newPatient.firstName, newPatient.lastName);

    console.log('\n=== SUCCESS ===');
    console.log('Test patient created successfully!\n');
    console.log('=== LOGIN CREDENTIALS ===');
    console.log('Username:', USERNAME);
    console.log('Password:', PASSWORD);
    console.log('Email:', EMAIL);
    console.log('\n=== TEST LOGIN ===');
    console.log('curl -X POST https://navimedi.org/api/auth/login \\');
    console.log('  -H "Content-Type: application/json" \\');
    console.log(`  -d '{"username":"${USERNAME}","password":"${PASSWORD}"}'`);
    console.log('\n=== PATIENT INFO ===');
    console.log('Hospital: Saint Paul');
    console.log('MRN:', mrn);
    console.log('Phone:', '(555) 123-4567');
    console.log('DOB: 1990-05-15');
    console.log('Blood Type: A+');
    console.log('Allergies: Penicillin');

  } catch (error) {
    console.error('❌ Error creating test patient:', error);
    throw error;
  }
}

// Run the script
createTestPatientSarah()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });
