# NaviMED API Endpoints - Quick Reference

## Base URL
```
https://navimedi.org/api
```

---

## Authentication

### Login
```
POST /api/auth/login
```
**Body:**
```json
{
  "username": "patient@example.com",
  "password": "your-password"
}
```
**Returns:** Token + User data

### Forgot Password
```
POST /api/auth/forgot-password
```
**Body:**
```json
{
  "email": "patient@example.com"
}
```

### Reset Password
```
POST /api/auth/reset-password
```
**Body:**
```json
{
  "token": "reset-token",
  "newPassword": "NewPassword123!"
}
```

---

## Patient Profile

### Get Profile
```
GET /api/patient/profile
Headers: Authorization: Bearer {token}
```

### Update Profile
```
PATCH /api/patients/{patientId}
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "phone": "+1234567890",
  "email": "new@email.com",
  "address": "123 New St"
}
```

---

## Appointments

### Get All Appointments
```
GET /api/patient/appointments
Headers: Authorization: Bearer {token}
```

### Book Appointment
```
POST /api/appointments
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "doctorId": "doctor-id",
  "appointmentDate": "2025-12-15T14:00:00Z",
  "reason": "Checkup",
  "notes": "Optional notes"
}
```

### Cancel Appointment
```
PATCH /api/appointments/{appointmentId}
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "status": "cancelled",
  "cancellationReason": "Personal emergency"
}
```

---

## Prescriptions

### Get All Prescriptions
```
GET /api/patient/prescriptions
Headers: Authorization: Bearer {token}
```

### Request Refill
```
PATCH /api/prescriptions/{prescriptionId}
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "status": "refill_requested",
  "notes": "Need refill urgently"
}
```

---

## Lab Results

### Get All Lab Results
```
GET /api/patient/lab-results
Headers: Authorization: Bearer {token}
```

### Download Lab Result PDF
```
GET /api/patient/lab-results/{labResultId}/pdf
Headers: Authorization: Bearer {token}
Returns: PDF file
```

---

## Messages

### Get All Messages
```
GET /api/medical-communications
Headers: Authorization: Bearer {token}
```

### Send Message
```
POST /api/medical-communications
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "subject": "Question about medication",
  "message": "I have a question...",
  "recipientId": "doctor-id",
  "type": "general_message",
  "priority": "normal"
}
```

### Mark Message as Read
```
PATCH /api/medical-communications/{messageId}
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "isRead": true
}
```

---

## Payments

### Create Payment Intent
```
POST /api/create-payment-intent
Headers: Authorization: Bearer {token}
```
**Body:**
```json
{
  "amount": 120.00,
  "billId": "bill-id"
}
```

---

## Complete Example Usage

### JavaScript (Axios)
```javascript
import axios from 'axios';

const API_BASE = 'https://navimedi.org/api';

// 1. Login
const loginResponse = await axios.post(`${API_BASE}/auth/login`, {
  username: 'patient@example.com',
  password: 'password'
});

const token = loginResponse.data.token;

// 2. Get Appointments
const appointments = await axios.get(`${API_BASE}/patient/appointments`, {
  headers: { Authorization: `Bearer ${token}` }
});

// 3. Get Prescriptions
const prescriptions = await axios.get(`${API_BASE}/patient/prescriptions`, {
  headers: { Authorization: `Bearer ${token}` }
});

// 4. Get Lab Results
const labResults = await axios.get(`${API_BASE}/patient/lab-results`, {
  headers: { Authorization: `Bearer ${token}` }
});

// 5. Send Message
const message = await axios.post(`${API_BASE}/medical-communications`, {
  subject: 'Question',
  message: 'I have a question about my medication',
  recipientId: 'doctor-id-123'
}, {
  headers: { Authorization: `Bearer ${token}` }
});
```

### Dart (Flutter)
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

final baseUrl = 'https://navimedi.org/api';

// 1. Login
final loginResponse = await http.post(
  Uri.parse('$baseUrl/auth/login'),
  headers: {'Content-Type': 'application/json'},
  body: json.encode({
    'username': 'patient@example.com',
    'password': 'password'
  }),
);

final token = json.decode(loginResponse.body)['token'];

// 2. Get Appointments
final appointmentsResponse = await http.get(
  Uri.parse('$baseUrl/patient/appointments'),
  headers: {
    'Authorization': 'Bearer $token',
    'Content-Type': 'application/json',
  },
);

final appointments = json.decode(appointmentsResponse.body);
```

### Swift (iOS)
```swift
import Foundation

let baseURL = "https://navimedi.org/api"

// 1. Login
let loginURL = URL(string: "\(baseURL)/auth/login")!
var request = URLRequest(url: loginURL)
request.httpMethod = "POST"
request.setValue("application/json", forHTTPHeaderField: "Content-Type")

let loginBody = ["username": "patient@example.com", "password": "password"]
request.httpBody = try? JSONSerialization.data(withJSONObject: loginBody)

let (data, _) = try await URLSession.shared.data(for: request)
let response = try JSONDecoder().decode(LoginResponse.self, from: data)
let token = response.token

// 2. Get Appointments
let appointmentsURL = URL(string: "\(baseURL)/patient/appointments")!
var appointmentsRequest = URLRequest(url: appointmentsURL)
appointmentsRequest.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")

let (appointmentsData, _) = try await URLSession.shared.data(for: appointmentsRequest)
```

### Kotlin (Android)
```kotlin
import okhttp3.*
import org.json.JSONObject

val baseUrl = "https://navimedi.org/api"
val client = OkHttpClient()

// 1. Login
val loginBody = JSONObject().apply {
    put("username", "patient@example.com")
    put("password", "password")
}

val loginRequest = Request.Builder()
    .url("$baseUrl/auth/login")
    .post(RequestBody.create(
        MediaType.parse("application/json"),
        loginBody.toString()
    ))
    .build()

val loginResponse = client.newCall(loginRequest).execute()
val token = JSONObject(loginResponse.body().string()).getString("token")

// 2. Get Appointments
val appointmentsRequest = Request.Builder()
    .url("$baseUrl/patient/appointments")
    .addHeader("Authorization", "Bearer $token")
    .build()

val appointmentsResponse = client.newCall(appointmentsRequest).execute()
```

---

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (invalid token)
- `404` - Not Found
- `500` - Server Error

---

## All Endpoints List

```
POST   /api/auth/login
POST   /api/auth/forgot-password
POST   /api/auth/reset-password

GET    /api/patient/profile
PATCH  /api/patients/{id}

GET    /api/patient/appointments
POST   /api/appointments
PATCH  /api/appointments/{id}

GET    /api/patient/prescriptions
PATCH  /api/prescriptions/{id}

GET    /api/patient/lab-results
GET    /api/patient/lab-results/{id}/pdf

GET    /api/medical-communications
POST   /api/medical-communications
PATCH  /api/medical-communications/{id}

POST   /api/create-payment-intent
```

---

**Production API:** https://navimedi.org/api  
**Status:** ✅ Live and Working

© 2025 NaviMED by ARGILETTE Lab
