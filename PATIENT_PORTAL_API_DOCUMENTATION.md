# NaviMED Patient Portal API Documentation
## Complete Mobile App Integration Guide

---

## Table of Contents
1. [Authentication](#authentication)
2. [Patient Profile](#patient-profile)
3. [Appointments](#appointments)
4. [Prescriptions](#prescriptions)
5. [Lab Results](#lab-results)
6. [Medical Communications](#medical-communications)
7. [Health Tracking](#health-tracking)
8. [Bills & Payments](#bills--payments)
9. [Data Models](#data-models)
10. [Mobile App Examples](#mobile-app-examples)

---

## Base URL
```
Production: https://navimedi.org/api
Development: http://localhost:5000/api
```

---

## Authentication

### 1. Login
**Endpoint:** `POST /api/auth/login`

**Request:**
```json
{
  "username": "patient@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "patient-id-123",
    "username": "patient@example.com",
    "email": "patient@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "patient",
    "tenantId": "hospital-id-123"
  }
}
```

### 2. Password Reset Request
**Endpoint:** `POST /api/auth/forgot-password`

**Request:**
```json
{
  "email": "patient@example.com"
}
```

**Response:**
```json
{
  "message": "If an account with that email exists, a password reset link has been sent."
}
```

### 3. Reset Password
**Endpoint:** `POST /api/auth/reset-password`

**Request:**
```json
{
  "token": "reset-token-from-email",
  "newPassword": "NewSecurePassword123!"
}
```

**Response:**
```json
{
  "message": "Password has been successfully reset. Please log in with your new password."
}
```

---

## Patient Profile

### 1. Get Patient Profile
**Endpoint:** `GET /api/patient/profile`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "id": "patient-id-123",
  "mrn": "MRN12345",
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-01-15",
  "gender": "male",
  "email": "patient@example.com",
  "phone": "+1234567890",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "emergencyContact": {
    "name": "Jane Doe",
    "relationship": "Spouse",
    "phone": "+1234567891"
  },
  "allergies": ["Penicillin", "Peanuts"],
  "bloodType": "O+",
  "insuranceProvider": "Blue Cross",
  "insurancePolicyNumber": "BC123456"
}
```

### 2. Update Patient Profile
**Endpoint:** `PATCH /api/patients/{patientId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "phone": "+1234567890",
  "address": "456 New Address",
  "email": "newemail@example.com"
}
```

**Response:**
```json
{
  "id": "patient-id-123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "address": "456 New Address",
  ...
}
```

---

## Appointments

### 1. Get Patient Appointments
**Endpoint:** `GET /api/patient/appointments`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
[
  {
    "id": "appt-123",
    "patientId": "patient-id-123",
    "doctorId": "doctor-id-456",
    "doctorName": "Dr. Sarah Johnson",
    "specialty": "cardiology",
    "appointmentDate": "2025-12-01T10:00:00Z",
    "duration": 30,
    "status": "scheduled",
    "reason": "Annual checkup",
    "notes": "Bring previous test results",
    "location": "Building A, Room 205"
  }
]
```

### 2. Book Appointment
**Endpoint:** `POST /api/appointments`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "doctorId": "doctor-id-456",
  "appointmentDate": "2025-12-15T14:00:00Z",
  "reason": "Follow-up consultation",
  "notes": "Experiencing chest pain"
}
```

**Response:**
```json
{
  "id": "appt-456",
  "status": "scheduled",
  "appointmentDate": "2025-12-15T14:00:00Z",
  "confirmationNumber": "CONF-789456"
}
```

### 3. Cancel Appointment
**Endpoint:** `PATCH /api/appointments/{appointmentId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "status": "cancelled",
  "cancellationReason": "Personal emergency"
}
```

---

## Prescriptions

### 1. Get Patient Prescriptions
**Endpoint:** `GET /api/patient/prescriptions`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
[
  {
    "id": "rx-123",
    "patientId": "patient-id-123",
    "medicationName": "Lisinopril",
    "dosage": "10mg",
    "frequency": "Once daily",
    "quantity": 30,
    "refills": 3,
    "prescribedDate": "2025-11-01",
    "status": "ready",
    "prescribingDoctorName": "Dr. Sarah Johnson",
    "pharmacyName": "Metro Pharmacy",
    "instructions": "Take with food in the morning",
    "expiryDate": "2026-11-01"
  }
]
```

### 2. Request Prescription Refill
**Endpoint:** `PATCH /api/prescriptions/{prescriptionId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "status": "refill_requested",
  "notes": "Need refill urgently"
}
```

---

## Lab Results

### 1. Get Lab Results
**Endpoint:** `GET /api/patient/lab-results`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
[
  {
    "id": "lab-123",
    "patientId": "patient-id-123",
    "testName": "Complete Blood Count (CBC)",
    "testCode": "CBC-001",
    "orderedDate": "2025-11-15",
    "completedAt": "2025-11-16",
    "status": "completed",
    "results": [
      {
        "testName": "White Blood Cell Count",
        "result": "7.5",
        "unit": "10^3/uL",
        "normalRange": "4.5-11.0",
        "abnormalFlag": null
      },
      {
        "testName": "Red Blood Cell Count",
        "result": "5.2",
        "unit": "10^6/uL",
        "normalRange": "4.5-5.9",
        "abnormalFlag": null
      }
    ],
    "laboratoryName": "Metro General Hospital Laboratory",
    "orderingDoctorName": "Dr. Sarah Johnson",
    "notes": "All values within normal range"
  }
]
```

### 2. Download Lab Result PDF
**Endpoint:** `GET /api/patient/lab-results/{labResultId}/pdf`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** PDF file download

---

## Medical Communications

### 1. Get Messages
**Endpoint:** `GET /api/medical-communications`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
[
  {
    "id": "msg-123",
    "subject": "Test Results Available",
    "message": "Your recent blood work results are now available in your portal.",
    "type": "lab_result",
    "priority": "normal",
    "senderName": "Dr. Sarah Johnson",
    "senderRole": "physician",
    "recipientId": "patient-id-123",
    "sentAt": "2025-11-16T09:00:00Z",
    "isRead": false
  }
]
```

### 2. Send Message to Doctor
**Endpoint:** `POST /api/medical-communications`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "subject": "Question about medication",
  "message": "I'm experiencing dizziness after taking my new medication. Should I continue?",
  "type": "general_message",
  "priority": "high",
  "recipientId": "doctor-id-456"
}
```

**Response:**
```json
{
  "id": "msg-456",
  "subject": "Question about medication",
  "sentAt": "2025-11-18T10:30:00Z",
  "status": "sent"
}
```

### 3. Mark Message as Read
**Endpoint:** `PATCH /api/medical-communications/{messageId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "isRead": true
}
```

---

## Health Tracking

### 1. Get Health Data
**Endpoint:** `GET /api/patient/health-tracking`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "vitals": [
    {
      "id": "vital-123",
      "date": "2025-11-18",
      "bloodPressure": {
        "systolic": 120,
        "diastolic": 80
      },
      "heartRate": 72,
      "temperature": 98.6,
      "weight": 165,
      "height": 70
    }
  ],
  "goals": {
    "steps": 10000,
    "water": 8,
    "sleep": 8,
    "exercise": 30,
    "weight": 165
  }
}
```

### 2. Log Vital Signs
**Endpoint:** `POST /api/patient/vital-signs`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "bloodPressureSystolic": 118,
  "bloodPressureDiastolic": 78,
  "heartRate": 70,
  "temperature": 98.4,
  "weight": 164,
  "notes": "Feeling good today"
}
```

---

## Bills & Payments

### 1. Get Patient Bills
**Endpoint:** `GET /api/patient/bills`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
[
  {
    "id": "bill-123",
    "patientId": "patient-id-123",
    "serviceType": "consultation",
    "serviceName": "Annual Physical Exam",
    "amount": 150.00,
    "paidAmount": 30.00,
    "remainingBalance": 120.00,
    "status": "partial_payment",
    "dueDate": "2025-12-15",
    "serviceDate": "2025-11-01",
    "insuranceCovered": 30.00,
    "createdAt": "2025-11-01"
  }
]
```

### 2. Make Payment
**Endpoint:** `POST /api/create-payment-intent`

**Headers:**
```
Authorization: Bearer {token}
```

**Request:**
```json
{
  "amount": 120.00,
  "billId": "bill-123"
}
```

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx",
  "paymentIntentId": "pi_xxx"
}
```

---

## Data Models

### Patient Model
```typescript
{
  id: string;
  tenantId: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
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
  allergies: string[];
  bloodType?: string;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Appointment Model
```typescript
{
  id: string;
  tenantId: string;
  patientId: string;
  doctorId: string;
  appointmentDate: Date;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  reason: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Prescription Model
```typescript
{
  id: string;
  tenantId: string;
  patientId: string;
  prescribingDoctorId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  quantity: number;
  refills: number;
  prescribedDate: Date;
  status: 'prescribed' | 'ready' | 'dispensed' | 'cancelled';
  instructions?: string;
  pharmacyId?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Mobile App Examples

### React Native Example

```typescript
// API Client
import axios from 'axios';

const API_BASE_URL = 'https://navimedi.org/api';

class NaviMEDClient {
  private token: string | null = null;

  // Store token after login
  setToken(token: string) {
    this.token = token;
  }

  // Get headers with auth token
  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { 'Authorization': `Bearer ${this.token}` })
    };
  }

  // Authentication
  async login(username: string, password: string) {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password
    });
    this.setToken(response.data.token);
    return response.data;
  }

  // Get patient profile
  async getProfile() {
    const response = await axios.get(`${API_BASE_URL}/patient/profile`, {
      headers: this.getHeaders()
    });
    return response.data;
  }

  // Get appointments
  async getAppointments() {
    const response = await axios.get(`${API_BASE_URL}/patient/appointments`, {
      headers: this.getHeaders()
    });
    return response.data;
  }

  // Get prescriptions
  async getPrescriptions() {
    const response = await axios.get(`${API_BASE_URL}/patient/prescriptions`, {
      headers: this.getHeaders()
    });
    return response.data;
  }

  // Get lab results
  async getLabResults() {
    const response = await axios.get(`${API_BASE_URL}/patient/lab-results`, {
      headers: this.getHeaders()
    });
    return response.data;
  }

  // Send message to doctor
  async sendMessage(subject: string, message: string, recipientId: string) {
    const response = await axios.post(`${API_BASE_URL}/medical-communications`, {
      subject,
      message,
      type: 'general_message',
      priority: 'normal',
      recipientId
    }, {
      headers: this.getHeaders()
    });
    return response.data;
  }

  // Get messages
  async getMessages() {
    const response = await axios.get(`${API_BASE_URL}/medical-communications`, {
      headers: this.getHeaders()
    });
    return response.data;
  }
}

export const navimedClient = new NaviMEDClient();
```

### Usage in React Native Component

```typescript
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { navimedClient } from './NaviMEDClient';

export const AppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const data = await navimedClient.getAppointments();
      setAppointments(data);
    } catch (error) {
      console.error('Error loading appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Appointments</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 15, borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.doctorName}</Text>
              <Text>{new Date(item.appointmentDate).toLocaleString()}</Text>
              <Text>{item.reason}</Text>
              <Text>Status: {item.status}</Text>
            </View>
          )}
        />
      )}
      <Button title="Refresh" onPress={loadAppointments} />
    </View>
  );
};
```

### Flutter/Dart Example

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class NaviMEDClient {
  static const String baseUrl = 'https://navimedi.org/api';
  String? _token;

  void setToken(String token) {
    _token = token;
  }

  Map<String, String> _getHeaders() {
    final headers = {
      'Content-Type': 'application/json',
    };
    if (_token != null) {
      headers['Authorization'] = 'Bearer $_token';
    }
    return headers;
  }

  Future<Map<String, dynamic>> login(String username, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({
        'username': username,
        'password': password,
      }),
    );

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setToken(data['token']);
      return data;
    } else {
      throw Exception('Login failed');
    }
  }

  Future<List<dynamic>> getAppointments() async {
    final response = await http.get(
      Uri.parse('$baseUrl/patient/appointments'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load appointments');
    }
  }

  Future<List<dynamic>> getPrescriptions() async {
    final response = await http.get(
      Uri.parse('$baseUrl/patient/prescriptions'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load prescriptions');
    }
  }
}
```

---

## Error Handling

All API endpoints return standard HTTP status codes:

- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request data
- `401 Unauthorized` - Missing or invalid authentication token
- `403 Forbidden` - User doesn't have permission
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

Error Response Format:
```json
{
  "error": "Error message",
  "message": "Detailed error description"
}
```

---

## Security Best Practices

1. **Store JWT tokens securely**
   - iOS: Use Keychain
   - Android: Use Encrypted SharedPreferences
   - React Native: Use react-native-keychain

2. **Always use HTTPS** in production

3. **Implement token refresh** before expiration

4. **Validate all user input** before sending to API

5. **Handle errors gracefully** and show user-friendly messages

6. **Logout on token expiration** and redirect to login

---

## Rate Limiting

The API implements rate limiting:
- **Auth endpoints**: 5 requests per 15 minutes per IP
- **General API endpoints**: 100 requests per 15 minutes per IP

When rate limited, you'll receive a `429 Too Many Requests` response.

---

## Support

For technical support or API questions:
- Email: support@navimedi.org
- Documentation: https://navimedi.org/docs
- API Status: https://navimedi.org/status

---

**Last Updated:** November 18, 2025  
**API Version:** 1.0.0  
**© 2025 NaviMED by ARGILETTE Lab. All rights reserved.**
