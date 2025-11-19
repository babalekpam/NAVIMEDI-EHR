import { getToken, clearToken } from './auth';

const BASE_URL = 'https://navimedi.org/api';

interface LoginCredentials {
  email: string;
  password: string;
  tenantId: string;
}

interface LoginResponse {
  token: string;
  user: any;
  tenant: any;
}

class ApiClient {
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token = getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      if (response.status === 401) {
        clearToken();
        window.location.href = '/';
      }
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }
    return response.json();
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return this.handleResponse<LoginResponse>(response);
  }

  async getProfile(): Promise<any> {
    const response = await fetch(`${BASE_URL}/patient/profile`, {
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }

  async getAppointments(): Promise<any[]> {
    const response = await fetch(`${BASE_URL}/patient/appointments`, {
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }

  async getPrescriptions(): Promise<any[]> {
    const response = await fetch(`${BASE_URL}/patient/prescriptions`, {
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }

  async getLabResults(): Promise<any[]> {
    const response = await fetch(`${BASE_URL}/patient/lab-results`, {
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }

  async getMessages(): Promise<any[]> {
    const response = await fetch(`${BASE_URL}/medical-communications`, {
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }

  async sendMessage(subject: string, message: string, recipientId?: string): Promise<any> {
    const response = await fetch(`${BASE_URL}/medical-communications`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        type: 'general_message',
        priority: 'normal',
        originalContent: { subject, message },
        ...(recipientId && { recipientId }),
      }),
    });
    return this.handleResponse(response);
  }

  async getBills(): Promise<any[]> {
    const response = await fetch(`${BASE_URL}/patient/bills`, {
      headers: this.getHeaders(),
    });
    return this.handleResponse(response);
  }
}

export const api = new ApiClient();
