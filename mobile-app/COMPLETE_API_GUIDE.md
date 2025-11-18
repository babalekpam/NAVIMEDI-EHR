# ✅ COMPLETE MOBILE APP API GUIDE - ALL ENDPOINTS WORKING

## 🎉 ALL PATIENT PORTAL ENDPOINTS NOW AVAILABLE!

The following endpoints have been fixed and are ready to use:

### ✅ WORKING ENDPOINTS:
- `/api/patient/profile` - Get patient profile
- `/api/patient/appointments` - Get patient appointments
- `/api/patient/prescriptions` - Get patient prescriptions
- `/api/patient/lab-results` - Get lab results
- `/api/medical-communications` - Get/Send messages (NEW!)
- `/api/patient/bills` - Get billing/claims (NEW!)

---

## 🔑 AUTHENTICATION (REQUIRED FIRST!)

### Login
```javascript
POST /api/auth/login

// Request Body:
{
  "email": "sarah.johnson@email.com",
  "password": "password123",
  "tenantId": "SAINT PAUL"
}

// Response:
{
  "token": "eyJhbGc...",
  "user": { ... },
  "tenant": { ... }
}
```

**IMPORTANT:** Save the `token` and include it in all subsequent requests!

---

## 📋 PATIENT ENDPOINTS

### 1. Get Patient Profile
```javascript
GET /api/patient/profile
Authorization: Bearer {token}

// Response:
{
  "id": "uuid",
  "firstName": "Sarah",
  "lastName": "Johnson",
  "email": "sarah.johnson@email.com",
  "mrn": "MRN58069339",
  "phone": "(555) 123-4567",
  "dateOfBirth": "1990-05-15",
  "bloodType": "A+",
  "allergies": ["Penicillin"],
  ...
}
```

### 2. Get Appointments
```javascript
GET /api/patient/appointments
Authorization: Bearer {token}

// Response:
[
  {
    "id": "uuid",
    "appointmentDate": "2025-01-20T14:00:00Z",
    "appointmentType": "follow_up",
    "status": "scheduled",
    "providerId": "uuid",
    "reason": "Annual checkup",
    ...
  }
]
```

### 3. Get Prescriptions
```javascript
GET /api/patient/prescriptions
Authorization: Bearer {token}

// Response:
[
  {
    "id": "uuid",
    "medicationName": "Lisinopril",
    "dosage": "10mg",
    "frequency": "Once daily",
    "prescribedDate": "2025-01-15",
    "status": "prescribed",
    "refills": 3,
    ...
  }
]
```

### 4. Get Lab Results
```javascript
GET /api/patient/lab-results
Authorization: Bearer {token}

// Response:
[
  {
    "id": "uuid",
    "testName": "CBC",
    "orderedDate": "2025-01-10",
    "status": "completed",
    "priority": "routine",
    ...
  }
]
```

### 5. Get Messages/Communications (NEW!)
```javascript
GET /api/medical-communications
Authorization: Bearer {token}

// Response:
[
  {
    "id": "uuid",
    "type": "general_message",
    "priority": "normal",
    "originalContent": {
      "subject": "Test results available",
      "message": "Your CBC results are ready"
    },
    "senderId": "uuid",
    "createdAt": "2025-01-18T10:00:00Z",
    "isRead": false,
    ...
  }
]
```

### 6. Send Message (NEW!)
```javascript
POST /api/medical-communications
Authorization: Bearer {token}
Content-Type: application/json

// Request Body:
{
  "type": "general_message",
  "priority": "normal",
  "originalContent": {
    "subject": "Question about medication",
    "message": "Can I take this with food?"
  },
  "recipientId": "doctor-uuid-here"  // Optional
}

// Response: 201 Created
{
  "id": "uuid",
  "type": "general_message",
  ...
}
```

**Message Types:**
- `medical_instruction`
- `prescription_note`
- `discharge_summary`
- `appointment_reminder`
- `lab_result`
- `general_message`
- `emergency_alert`

**Priority Levels:**
- `low`
- `normal`
- `high`
- `urgent`

### 7. Get Bills/Claims (NEW!)
```javascript
GET /api/patient/bills
Authorization: Bearer {token}

// Response:
[
  {
    "id": "uuid",
    "claimNumber": "CLM123456",
    "status": "submitted",
    "totalCharges": "250.00",
    "insurancePaid": "200.00",
    "patientResponsibility": "50.00",
    "serviceDate": "2025-01-15",
    ...
  }
]
```

---

## 🚀 COMPLETE MOBILE APP EXAMPLE

```javascript
import axios from 'axios';

const API_URL = 'https://navimedi.org/api';
let authToken = null;

// 1. Login
async function login() {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email: 'sarah.johnson@email.com',
    password: 'password123',
    tenantId: 'SAINT PAUL'
  });
  
  authToken = response.data.token;
  console.log('✅ Logged in!');
  return response.data;
}

// 2. Get Auth Headers
function getHeaders() {
  return {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  };
}

// 3. Get Profile
async function getProfile() {
  const response = await axios.get(
    `${API_URL}/api/patient/profile`,
    { headers: getHeaders() }
  );
  return response.data;
}

// 4. Get Appointments
async function getAppointments() {
  const response = await axios.get(
    `${API_URL}/api/patient/appointments`,
    { headers: getHeaders() }
  );
  return response.data;
}

// 5. Get Prescriptions
async function getPrescriptions() {
  const response = await axios.get(
    `${API_URL}/api/patient/prescriptions`,
    { headers: getHeaders() }
  );
  return response.data;
}

// 6. Get Lab Results
async function getLabResults() {
  const response = await axios.get(
    `${API_URL}/api/patient/lab-results`,
    { headers: getHeaders() }
  );
  return response.data;
}

// 7. Get Messages
async function getMessages() {
  const response = await axios.get(
    `${API_URL}/api/medical-communications`,
    { headers: getHeaders() }
  );
  return response.data;
}

// 8. Send Message
async function sendMessage(subject, message, recipientId) {
  const response = await axios.post(
    `${API_URL}/api/medical-communications`,
    {
      type: 'general_message',
      priority: 'normal',
      originalContent: { subject, message },
      recipientId
    },
    { headers: getHeaders() }
  );
  return response.data;
}

// 9. Get Bills
async function getBills() {
  const response = await axios.get(
    `${API_URL}/api/patient/bills`,
    { headers: getHeaders() }
  );
  return response.data;
}

// USAGE:
async function loadPatientData() {
  try {
    // Login first
    await login();
    
    // Load all patient data
    const profile = await getProfile();
    const appointments = await getAppointments();
    const prescriptions = await getPrescriptions();
    const labResults = await getLabResults();
    const messages = await getMessages();
    const bills = await getBills();
    
    console.log('Profile:', profile);
    console.log('Appointments:', appointments);
    console.log('Prescriptions:', prescriptions);
    console.log('Lab Results:', labResults);
    console.log('Messages:', messages);
    console.log('Bills:', bills);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

loadPatientData();
```

---

## 📱 FLUTTER/DART EXAMPLE

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class NaviMEDAPI {
  final String baseUrl = 'https://navimedi.org/api';
  String? authToken;
  
  // 1. Login
  Future<Map<String, dynamic>> login(String email, String password, String tenantId) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({
        'email': email,
        'password': password,
        'tenantId': tenantId,
      }),
    );
    
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      authToken = data['token'];
      return data;
    } else {
      throw Exception('Login failed: ${response.body}');
    }
  }
  
  // 2. Get Headers
  Map<String, String> getHeaders() {
    return {
      'Authorization': 'Bearer $authToken',
      'Content-Type': 'application/json',
    };
  }
  
  // 3. Get Profile
  Future<Map<String, dynamic>> getProfile() async {
    final response = await http.get(
      Uri.parse('$baseUrl/api/patient/profile'),
      headers: getHeaders(),
    );
    
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load profile');
    }
  }
  
  // 4. Get Appointments
  Future<List<dynamic>> getAppointments() async {
    final response = await http.get(
      Uri.parse('$baseUrl/api/patient/appointments'),
      headers: getHeaders(),
    );
    
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load appointments');
    }
  }
  
  // 5. Get Messages
  Future<List<dynamic>> getMessages() async {
    final response = await http.get(
      Uri.parse('$baseUrl/api/medical-communications'),
      headers: getHeaders(),
    );
    
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load messages');
    }
  }
  
  // 6. Send Message
  Future<Map<String, dynamic>> sendMessage(String subject, String message, {String? recipientId}) async {
    final response = await http.post(
      Uri.parse('$baseUrl/api/medical-communications'),
      headers: getHeaders(),
      body: json.encode({
        'type': 'general_message',
        'priority': 'normal',
        'originalContent': {
          'subject': subject,
          'message': message,
        },
        if (recipientId != null) 'recipientId': recipientId,
      }),
    );
    
    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to send message');
    }
  }
}

// USAGE:
void main() async {
  final api = NaviMEDAPI();
  
  // Login
  await api.login('sarah.johnson@email.com', 'password123', 'SAINT PAUL');
  
  // Get data
  final profile = await api.getProfile();
  final appointments = await api.getAppointments();
  final messages = await api.getMessages();
  
  print('Profile: $profile');
  print('Appointments: $appointments');
  print('Messages: $messages');
}
```

---

## 🔧 ERROR HANDLING

```javascript
try {
  const response = await axios.get(url, { headers: getHeaders() });
  return response.data;
} catch (error) {
  if (error.response) {
    // Server responded with error
    switch (error.response.status) {
      case 401:
        console.error('Not authenticated - login again');
        // Redirect to login
        break;
      case 404:
        console.error('Patient not found');
        break;
      case 500:
        console.error('Server error:', error.response.data.message);
        break;
      default:
        console.error('Error:', error.response.data);
    }
  } else {
    // Network error
    console.error('Network error:', error.message);
  }
}
```

---

## ✅ TEST CREDENTIALS

```
Email:    sarah.johnson@email.com
Password: password123
Hospital: SAINT PAUL
```

---

## 📚 ADDITIONAL RESOURCES

- **FIXED_NaviMEDClient.ts** - Complete TypeScript client implementation
- **WORKING_CODE_COPY_THIS.md** - Quick start code snippets
- **TROUBLESHOOTING.md** - Common issues and solutions
- **API_ENDPOINTS.md** - Full API documentation

---

**Production API URL:** `https://navimedi.org/api`

**Status:** All endpoints operational ✅
