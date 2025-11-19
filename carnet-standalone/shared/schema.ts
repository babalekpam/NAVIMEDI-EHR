import { pgTable, serial, varchar, text, timestamp, integer, boolean, jsonb } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const tenants = pgTable('tenants', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  status: varchar('status', { length: 50 }).default('active'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  firstName: varchar('first_name', { length: 100 }),
  lastName: varchar('last_name', { length: 100 }),
  role: varchar('role', { length: 50 }).notNull(),
  tenantId: integer('tenant_id').references(() => tenants.id),
  createdAt: timestamp('created_at').defaultNow(),
});

export const patients = pgTable('patients', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  tenantId: integer('tenant_id').references(() => tenants.id),
  dateOfBirth: timestamp('date_of_birth'),
  gender: varchar('gender', { length: 20 }),
  phone: varchar('phone', { length: 50 }),
  address: text('address'),
  emergencyContact: jsonb('emergency_contact'),
  medicalHistory: jsonb('medical_history'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').references(() => patients.id),
  tenantId: integer('tenant_id').references(() => tenants.id),
  providerId: integer('provider_id').references(() => users.id),
  appointmentDate: timestamp('appointment_date').notNull(),
  appointmentType: varchar('appointment_type', { length: 100 }),
  status: varchar('status', { length: 50 }).default('scheduled'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const prescriptions = pgTable('prescriptions', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').references(() => patients.id),
  tenantId: integer('tenant_id').references(() => tenants.id),
  providerId: integer('provider_id').references(() => users.id),
  medicationName: varchar('medication_name', { length: 255 }).notNull(),
  dosage: varchar('dosage', { length: 100 }),
  frequency: varchar('frequency', { length: 100 }),
  duration: varchar('duration', { length: 100 }),
  refillsRemaining: integer('refills_remaining').default(0),
  status: varchar('status', { length: 50 }).default('active'),
  instructions: text('instructions'),
  prescribedAt: timestamp('prescribed_at').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const labResults = pgTable('lab_results', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').references(() => patients.id),
  tenantId: integer('tenant_id').references(() => tenants.id),
  testName: varchar('test_name', { length: 255 }).notNull(),
  testType: varchar('test_type', { length: 100 }),
  status: varchar('status', { length: 50 }).default('pending'),
  results: jsonb('results'),
  notes: text('notes'),
  orderedBy: integer('ordered_by').references(() => users.id),
  orderedAt: timestamp('ordered_at').defaultNow(),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const medicalCommunications = pgTable('medical_communications', {
  id: serial('id').primaryKey(),
  tenantId: integer('tenant_id').references(() => tenants.id),
  senderId: integer('sender_id').references(() => users.id),
  recipientId: integer('recipient_id').references(() => users.id),
  type: varchar('type', { length: 50 }).notNull(),
  priority: varchar('priority', { length: 20 }).default('normal'),
  subject: varchar('subject', { length: 255 }),
  message: text('message'),
  originalContent: jsonb('original_content'),
  status: varchar('status', { length: 50 }).default('sent'),
  readAt: timestamp('read_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const bills = pgTable('bills', {
  id: serial('id').primaryKey(),
  patientId: integer('patient_id').references(() => patients.id),
  tenantId: integer('tenant_id').references(() => tenants.id),
  amount: integer('amount').notNull(),
  status: varchar('status', { length: 50 }).default('pending'),
  dueDate: timestamp('due_date'),
  serviceDate: timestamp('service_date'),
  description: text('description'),
  insuranceClaimId: varchar('insurance_claim_id', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type Patient = typeof patients.$inferSelect;
export type Appointment = typeof appointments.$inferSelect;
export type Prescription = typeof prescriptions.$inferSelect;
export type LabResult = typeof labResults.$inferSelect;
export type MedicalCommunication = typeof medicalCommunications.$inferSelect;
export type Bill = typeof bills.$inferSelect;
