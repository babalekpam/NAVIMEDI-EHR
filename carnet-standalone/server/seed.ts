import bcrypt from 'bcrypt';
import { db } from './db';
import { tenants, users, patients, appointments, prescriptions, labResults, bills, medicalCommunications } from '../shared/schema';

async function seed() {
  console.log('🌱 Seeding database...');

  try {
    const existingTenant = await db.query.tenants.findFirst();
    if (existingTenant) {
      console.log('✅ Database already has data. Skipping seed.');
      return;
    }

    const [tenant] = await db.insert(tenants).values({
      name: 'SAINT PAUL',
      type: 'hospital',
      status: 'active',
    }).returning();
    console.log('✅ Created tenant:', tenant.name);

    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const [user] = await db.insert(users).values({
      email: 'sarah.johnson@email.com',
      password: hashedPassword,
      firstName: 'Sarah',
      lastName: 'Johnson',
      role: 'patient',
      tenantId: tenant.id,
    }).returning();
    console.log('✅ Created user:', user.email);

    const [patient] = await db.insert(patients).values({
      userId: user.id,
      tenantId: tenant.id,
      dateOfBirth: new Date('1990-05-15'),
      gender: 'female',
      phone: '+1-555-0123',
      address: '123 Main Street, Anytown, USA',
    }).returning();
    console.log('✅ Created patient profile');

    await db.insert(appointments).values({
      patientId: patient.id,
      tenantId: tenant.id,
      providerId: user.id,
      appointmentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      appointmentType: 'General Checkup',
      status: 'scheduled',
      notes: 'Annual physical examination',
    });
    console.log('✅ Created sample appointment');

    await db.insert(prescriptions).values({
      patientId: patient.id,
      tenantId: tenant.id,
      providerId: user.id,
      medicationName: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Three times daily',
      duration: '10 days',
      refillsRemaining: 2,
      status: 'active',
      instructions: 'Take with food',
    });
    console.log('✅ Created sample prescription');

    await db.insert(labResults).values({
      patientId: patient.id,
      tenantId: tenant.id,
      testName: 'Complete Blood Count',
      testType: 'Blood Test',
      status: 'completed',
      orderedBy: user.id,
      results: { wbc: '7.5', rbc: '4.8', hemoglobin: '14.2' },
      notes: 'All values within normal range',
      completedAt: new Date(),
    });
    console.log('✅ Created sample lab result');

    await db.insert(bills).values({
      patientId: patient.id,
      tenantId: tenant.id,
      amount: 15000,
      status: 'pending',
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      serviceDate: new Date(),
      description: 'Annual Physical Examination',
    });
    console.log('✅ Created sample bill');

    await db.insert(medicalCommunications).values({
      tenantId: tenant.id,
      senderId: user.id,
      recipientId: user.id,
      type: 'general_message',
      priority: 'normal',
      subject: 'Welcome to CARNET',
      message: 'Thank you for using CARNET Patient Portal!',
      originalContent: { subject: 'Welcome', message: 'Welcome!' },
      status: 'sent',
    });
    console.log('✅ Created sample message');

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📱 Test Login:');
    console.log('   Email: sarah.johnson@email.com');
    console.log('   Password: password123');
    console.log('   Hospital: SAINT PAUL\n');

  } catch (error) {
    console.error('❌ Seed failed:', error);
    throw error;
  }
}

seed().then(() => process.exit(0)).catch(() => process.exit(1));
