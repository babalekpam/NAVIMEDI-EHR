import axios from 'axios';

const API_BASE_URL = 'https://navimedi.org/api';

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    tenantId: string;
  };
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  appointmentDate: string;
  duration: number;
  status: string;
  reason: string;
  notes?: string;
  location?: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  quantity: number;
  refills: number;
  prescribedDate: string;
  status: string;
  prescribingDoctorName: string;
  pharmacyName?: string;
  instructions?: string;
}

export interface LabResult {
  id: string;
  patientId: string;
  testName: string;
  testCode: string;
  orderedDate: string;
  completedAt?: string;
  status: string;
  results?: any[];
  laboratoryName?: string;
  orderingDoctorName?: string;
  notes?: string;
}

export interface Message {
  id: string;
  subject: string;
  message: string;
  type: string;
  priority: string;
  senderName: string;
  senderRole: string;
  recipientId: string;
  sentAt: string;
  isRead: boolean;
}

export interface PatientProfile {
  id: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName?: string;
  emergencyContactRelationship?: string;
  emergencyContactPhone?: string;
  allergies?: string[];
  bloodType?: string;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
}

class NaviMEDClient {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
  }

  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
    };
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });
    this.setToken(response.data.token);
    return response.data;
  }

  async forgotPassword(email: string): Promise<any> {
    const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, {
      email,
    });
    return response.data;
  }

  async resetPassword(token: string, newPassword: string): Promise<any> {
    const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, {
      token,
      newPassword,
    });
    return response.data;
  }

  async getProfile(): Promise<PatientProfile> {
    const response = await axios.get(`${API_BASE_URL}/patient/profile`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async updateProfile(updates: Partial<PatientProfile>): Promise<PatientProfile> {
    const response = await axios.patch(
      `${API_BASE_URL}/patients/${updates.id}`,
      updates,
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getAppointments(): Promise<Appointment[]> {
    const response = await axios.get(`${API_BASE_URL}/patient/appointments`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async bookAppointment(data: {
    doctorId: string;
    appointmentDate: string;
    reason: string;
    notes?: string;
  }): Promise<Appointment> {
    const response = await axios.post(`${API_BASE_URL}/appointments`, data, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async cancelAppointment(
    appointmentId: string,
    cancellationReason: string
  ): Promise<Appointment> {
    const response = await axios.patch(
      `${API_BASE_URL}/appointments/${appointmentId}`,
      { status: 'cancelled', cancellationReason },
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getPrescriptions(): Promise<Prescription[]> {
    const response = await axios.get(`${API_BASE_URL}/patient/prescriptions`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async requestRefill(prescriptionId: string, notes?: string): Promise<Prescription> {
    const response = await axios.patch(
      `${API_BASE_URL}/prescriptions/${prescriptionId}`,
      { status: 'refill_requested', notes },
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getLabResults(): Promise<LabResult[]> {
    const response = await axios.get(`${API_BASE_URL}/patient/lab-results`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async downloadLabResultPDF(labResultId: string): Promise<Blob> {
    const response = await axios.get(
      `${API_BASE_URL}/patient/lab-results/${labResultId}/pdf`,
      {
        headers: this.getHeaders(),
        responseType: 'blob',
      }
    );
    return response.data;
  }

  async getMessages(): Promise<Message[]> {
    const response = await axios.get(`${API_BASE_URL}/medical-communications`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async sendMessage(data: {
    subject: string;
    message: string;
    recipientId: string;
    type?: string;
    priority?: string;
  }): Promise<Message> {
    const response = await axios.post(
      `${API_BASE_URL}/medical-communications`,
      {
        ...data,
        type: data.type || 'general_message',
        priority: data.priority || 'normal',
      },
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async markMessageAsRead(messageId: string): Promise<Message> {
    const response = await axios.patch(
      `${API_BASE_URL}/medical-communications/${messageId}`,
      { isRead: true },
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async createPaymentIntent(amount: number, billId?: string): Promise<any> {
    const response = await axios.post(
      `${API_BASE_URL}/create-payment-intent`,
      { amount, billId },
      { headers: this.getHeaders() }
    );
    return response.data;
  }
}

export const navimedClient = new NaviMEDClient();
