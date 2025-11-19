import { Router } from 'express';
import { db } from '../db';
import { patients, users, appointments, prescriptions, labResults, bills } from '../../shared/schema';
import { eq, and } from 'drizzle-orm';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

router.use(authenticateToken);

router.get('/profile', async (req: AuthRequest, res) => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, req.userId!),
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const patient = await db.query.patients.findFirst({
      where: eq(patients.userId, req.userId!),
    });

    res.json({
      ...user,
      patient,
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/appointments', async (req: AuthRequest, res) => {
  try {
    const patient = await db.query.patients.findFirst({
      where: eq(patients.userId, req.userId!),
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const patientAppointments = await db.query.appointments.findMany({
      where: and(
        eq(appointments.patientId, patient.id),
        eq(appointments.tenantId, req.tenantId!)
      ),
    });

    res.json(patientAppointments);
  } catch (error) {
    console.error('Appointments error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/prescriptions', async (req: AuthRequest, res) => {
  try {
    const patient = await db.query.patients.findFirst({
      where: eq(patients.userId, req.userId!),
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const patientPrescriptions = await db.query.prescriptions.findMany({
      where: and(
        eq(prescriptions.patientId, patient.id),
        eq(prescriptions.tenantId, req.tenantId!)
      ),
    });

    res.json(patientPrescriptions);
  } catch (error) {
    console.error('Prescriptions error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/lab-results', async (req: AuthRequest, res) => {
  try {
    const patient = await db.query.patients.findFirst({
      where: eq(patients.userId, req.userId!),
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const patientLabResults = await db.query.labResults.findMany({
      where: and(
        eq(labResults.patientId, patient.id),
        eq(labResults.tenantId, req.tenantId!)
      ),
    });

    res.json(patientLabResults);
  } catch (error) {
    console.error('Lab results error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/bills', async (req: AuthRequest, res) => {
  try {
    const patient = await db.query.patients.findFirst({
      where: eq(patients.userId, req.userId!),
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const patientBills = await db.query.bills.findMany({
      where: and(
        eq(bills.patientId, patient.id),
        eq(bills.tenantId, req.tenantId!)
      ),
    });

    res.json(patientBills);
  } catch (error) {
    console.error('Bills error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
