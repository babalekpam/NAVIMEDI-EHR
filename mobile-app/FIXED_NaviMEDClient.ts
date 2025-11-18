import axios, { AxiosError } from 'axios';

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

class NaviMEDClient {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    console.log('[NaviMED] Token set successfully:', token.substring(0, 20) + '...');
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
    console.log('[NaviMED] Token cleared');
  }

  private getHeaders() {
    const headers: any = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
      console.log('[NaviMED] Authorization header added');
    } else {
      console.warn('[NaviMED] WARNING: No token available for this request!');
    }
    
    return headers;
  }

  private handleError(error: any, context: string) {
    console.error(`[NaviMED API] ${context}:`, error.response?.data || error.message);
    
    if (error.response) {
      // Server responded with error
      const status = error.response.status;
      const message = error.response.data?.message || 'Unknown error';
      
      if (status === 401) {
        console.error('[NaviMED] 401 Unauthorized - Token issue detected');
        console.error('[NaviMED] Current token:', this.token ? 'Present' : 'MISSING');
        console.error('[NaviMED] Error:', message);
        
        throw new Error(`Authentication failed: ${message}. Please login again.`);
      }
      
      throw new Error(`${context} failed: ${message}`);
    } else {
      throw new Error(`${context} failed: ${error.message}`);
    }
  }

  // TEST CONNECTION (Use this to verify API is working)
  async testConnection(): Promise<boolean> {
    try {
      console.log('[NaviMED] Testing connection to:', API_BASE_URL);
      const response = await axios.get(`${API_BASE_URL}/health`);
      console.log('[NaviMED] ✅ Connection test successful:', response.data);
      return true;
    } catch (error) {
      console.error('[NaviMED] ❌ Connection test failed:', error);
      return false;
    }
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    try {
      console.log('[NaviMED] Attempting login for:', username);
      
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      
      console.log('[NaviMED] ✅ Login successful');
      this.setToken(response.data.token);
      
      return response.data;
    } catch (error) {
      this.handleError(error, 'Login');
      throw error;
    }
  }

  async getProfile(): Promise<any> {
    try {
      console.log('[NaviMED] Fetching profile...');
      console.log('[NaviMED] Token status:', this.token ? 'Present' : 'MISSING');
      
      const response = await axios.get(`${API_BASE_URL}/patient/profile`, {
        headers: this.getHeaders(),
      });
      
      console.log('[NaviMED] ✅ Profile fetched successfully');
      return response.data;
    } catch (error) {
      this.handleError(error, 'Get Profile');
      throw error;
    }
  }

  async getAppointments(): Promise<any[]> {
    try {
      console.log('[NaviMED] Fetching appointments...');
      
      if (!this.token) {
        throw new Error('No authentication token. Please login first.');
      }
      
      const response = await axios.get(`${API_BASE_URL}/patient/appointments`, {
        headers: this.getHeaders(),
      });
      
      console.log('[NaviMED] ✅ Appointments fetched:', response.data.length);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Get Appointments');
      throw error;
    }
  }

  async getPrescriptions(): Promise<any[]> {
    try {
      console.log('[NaviMED] Fetching prescriptions...');
      
      if (!this.token) {
        throw new Error('No authentication token. Please login first.');
      }
      
      const response = await axios.get(`${API_BASE_URL}/patient/prescriptions`, {
        headers: this.getHeaders(),
      });
      
      console.log('[NaviMED] ✅ Prescriptions fetched:', response.data.length);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Get Prescriptions');
      throw error;
    }
  }

  async getLabResults(): Promise<any[]> {
    try {
      console.log('[NaviMED] Fetching lab results...');
      
      if (!this.token) {
        throw new Error('No authentication token. Please login first.');
      }
      
      const response = await axios.get(`${API_BASE_URL}/patient/lab-results`, {
        headers: this.getHeaders(),
      });
      
      console.log('[NaviMED] ✅ Lab results fetched:', response.data.length);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Get Lab Results');
      throw error;
    }
  }

  async getMessages(): Promise<any[]> {
    try {
      console.log('[NaviMED] Fetching messages...');
      
      if (!this.token) {
        throw new Error('No authentication token. Please login first.');
      }
      
      const response = await axios.get(`${API_BASE_URL}/medical-communications`, {
        headers: this.getHeaders(),
      });
      
      console.log('[NaviMED] ✅ Messages fetched:', response.data.length);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Get Messages');
      throw error;
    }
  }

  async sendMessage(data: {
    subject: string;
    message: string;
    recipientId: string;
    type?: string;
    priority?: string;
  }): Promise<any> {
    try {
      console.log('[NaviMED] Sending message...');
      
      if (!this.token) {
        throw new Error('No authentication token. Please login first.');
      }
      
      const response = await axios.post(
        `${API_BASE_URL}/medical-communications`,
        {
          ...data,
          type: data.type || 'general_message',
          priority: data.priority || 'normal',
        },
        { headers: this.getHeaders() }
      );
      
      console.log('[NaviMED] ✅ Message sent successfully');
      return response.data;
    } catch (error) {
      this.handleError(error, 'Send Message');
      throw error;
    }
  }

  // Add other methods with same pattern...
}

export const navimedClient = new NaviMEDClient();

// TEST SCRIPT - Run this first to verify everything works
export async function testNaviMEDAPI() {
  console.log('\n=== NaviMED API Test ===\n');
  
  // 1. Test connection
  console.log('1. Testing connection...');
  const connected = await navimedClient.testConnection();
  if (!connected) {
    console.error('❌ Connection failed. Check your internet or API URL.');
    return;
  }
  
  // 2. Test login (CHANGE THESE TO YOUR TEST CREDENTIALS)
  console.log('\n2. Testing login...');
  try {
    const loginResponse = await navimedClient.login(
      'patient@example.com',  // ← CHANGE THIS
      'yourpassword'          // ← CHANGE THIS
    );
    console.log('✅ Login successful!');
    console.log('User:', loginResponse.user);
  } catch (error) {
    console.error('❌ Login failed:', error);
    return;
  }
  
  // 3. Test getting appointments
  console.log('\n3. Testing get appointments...');
  try {
    const appointments = await navimedClient.getAppointments();
    console.log('✅ Appointments:', appointments.length);
  } catch (error) {
    console.error('❌ Get appointments failed:', error);
  }
  
  // 4. Test getting prescriptions
  console.log('\n4. Testing get prescriptions...');
  try {
    const prescriptions = await navimedClient.getPrescriptions();
    console.log('✅ Prescriptions:', prescriptions.length);
  } catch (error) {
    console.error('❌ Get prescriptions failed:', error);
  }
  
  console.log('\n=== Test Complete ===\n');
}
