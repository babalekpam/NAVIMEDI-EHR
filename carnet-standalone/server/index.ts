import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { createServer } from 'http';
import ViteExpress from './vite';
import authRoutes from './routes/auth.js';
import patientRoutes from './routes/patient.js';
import medicalCommRoutes from './routes/medical-communications.js';

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'carnet-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/medical-communications', medicalCommRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CARNET API is running' });
});

const PORT = Number(process.env.PORT) || 5000;

if (process.env.NODE_ENV === 'development') {
  ViteExpress.listen(app, PORT, () => {
    console.log(`🚀 CARNET server running on port ${PORT}`);
    console.log(`📱 Patient portal: http://localhost:${PORT}`);
    console.log(`🔌 API: http://localhost:${PORT}/api`);
  });
} else {
  server.listen(PORT, () => {
    console.log(`🚀 CARNET server running on port ${PORT}`);
  });
}
