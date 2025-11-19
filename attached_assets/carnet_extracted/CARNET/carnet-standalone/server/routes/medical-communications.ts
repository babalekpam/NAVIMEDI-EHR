import { Router } from 'express';
import { db } from '../db';
import { medicalCommunications, patients } from '../../shared/schema';
import { eq, and, or } from 'drizzle-orm';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

router.use(authenticateToken);

router.get('/', async (req: AuthRequest, res) => {
  try {
    const patient = await db.query.patients.findFirst({
      where: eq(patients.userId, req.userId!),
    });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const messages = await db.query.medicalCommunications.findMany({
      where: and(
        or(
          eq(medicalCommunications.senderId, req.userId!),
          eq(medicalCommunications.recipientId, req.userId!)
        ),
        eq(medicalCommunications.tenantId, req.tenantId!)
      ),
    });

    res.json(messages);
  } catch (error) {
    console.error('Medical communications error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req: AuthRequest, res) => {
  try {
    const { type, priority, originalContent, recipientId } = req.body;

    const newMessage = await db.insert(medicalCommunications).values({
      tenantId: req.tenantId!,
      senderId: req.userId!,
      recipientId: recipientId || null,
      type: type || 'general_message',
      priority: priority || 'normal',
      originalContent,
      status: 'sent',
    }).returning();

    res.status(201).json(newMessage[0]);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
