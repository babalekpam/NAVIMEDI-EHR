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

    // Create appointments
    await db.insert(appointments).values([
      {
        patientId: patient.id,
        tenantId: tenant.id,
        providerId: user.id,
        appointmentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        appointmentType: 'General Checkup',
        status: 'scheduled',
        notes: 'Annual physical examination',
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        providerId: user.id,
        appointmentDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        appointmentType: 'Follow-up Visit',
        status: 'scheduled',
        notes: 'Follow-up for blood test results',
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        providerId: user.id,
        appointmentDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        appointmentType: 'Consultation',
        status: 'completed',
        notes: 'Initial consultation',
      }
    ]);
    console.log('✅ Created sample appointments');

    // Create prescriptions
    await db.insert(prescriptions).values([
      {
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
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        providerId: user.id,
        medicationName: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        duration: '90 days',
        refillsRemaining: 3,
        status: 'active',
        instructions: 'Take in the morning',
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        providerId: user.id,
        medicationName: 'Vitamin D3',
        dosage: '1000 IU',
        frequency: 'Once daily',
        duration: '90 days',
        refillsRemaining: 1,
        status: 'active',
        instructions: 'Take with food for better absorption',
      }
    ]);
    console.log('✅ Created sample prescriptions');

    // Create lab results
    await db.insert(labResults).values([
      {
        patientId: patient.id,
        tenantId: tenant.id,
        testName: 'Complete Blood Count',
        testType: 'Blood Test',
        status: 'completed',
        orderedBy: user.id,
        results: { wbc: '7.5', rbc: '4.8', hemoglobin: '14.2', platelets: '250' },
        notes: 'All values within normal range',
        completedAt: new Date(),
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        testName: 'Lipid Panel',
        testType: 'Blood Test',
        status: 'completed',
        orderedBy: user.id,
        results: { totalCholesterol: '190', ldl: '110', hdl: '55', triglycerides: '125' },
        notes: 'Good cholesterol levels',
        completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        testName: 'Thyroid Function',
        testType: 'Blood Test',
        status: 'pending',
        orderedBy: user.id,
        notes: 'Awaiting results',
      }
    ]);
    console.log('✅ Created sample lab results');

    // Create bills
    await db.insert(bills).values([
      {
        patientId: patient.id,
        tenantId: tenant.id,
        amount: 15000,
        status: 'pending',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        serviceDate: new Date(),
        description: 'Annual Physical Examination',
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        amount: 25000,
        status: 'paid',
        dueDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        serviceDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        description: 'Laboratory Tests',
      },
      {
        patientId: patient.id,
        tenantId: tenant.id,
        amount: 8000,
        status: 'pending',
        dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        serviceDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        description: 'Consultation Fee',
      }
    ]);
    console.log('✅ Created sample bills');

    // Create messages
    await db.insert(medicalCommunications).values([
      {
        tenantId: tenant.id,
        senderId: user.id,
        recipientId: user.id,
        type: 'general_message',
        priority: 'normal',
        originalContent: { 
          subject: 'Welcome to CARNET', 
          message: 'Thank you for using CARNET Patient Portal! We are here to help you manage your health records easily.' 
        },
        status: 'sent',
      },
      {
        tenantId: tenant.id,
        senderId: user.id,
        recipientId: user.id,
        type: 'appointment_reminder',
        priority: 'high',
        originalContent: { 
          subject: 'Upcoming Appointment Reminder', 
          message: 'This is a reminder about your upcoming General Checkup appointment scheduled for next week.' 
        },
        status: 'sent',
      },
      {
        tenantId: tenant.id,
        senderId: user.id,
        recipientId: user.id,
        type: 'lab_results',
        priority: 'normal',
        originalContent: { 
          subject: 'Lab Results Available', 
          message: 'Your recent lab results are now available. All values are within normal range. Please review them in the Lab Results section.' 
        },
        status: 'sent',
      }
    ]);
    console.log('✅ Created sample messages');

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
