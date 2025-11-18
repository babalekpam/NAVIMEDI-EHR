# Test Patient Created: Sarah Johnson

## ✅ Account Details

**Username (for login):** `Sarah.patient` (DO NOT USE THIS - use email instead)  
**Email (for login):** `sarah.johnson@email.com`  
**Password:** `password123`  
**Hospital:** SAINT PAUL  
**MRN:** MRN58069339  
**Phone:** (555) 123-4567  
**Date of Birth:** 1990-05-15  
**Blood Type:** A+  
**Allergies:** Penicillin  

---

## 🔑 HOW TO LOGIN (IMPORTANT!)

The login endpoint uses **EMAIL**, not username!

### ❌ WRONG:
```json
{
  "username": "Sarah.patient",
  "password": "password123"
}
```

### ✅ CORRECT:
```json
{
  "email": "sarah.johnson@email.com",
  "password": "password123",
  "tenantId": "SAINT PAUL"
}
```

---

## 🧪 Test Login Command

```bash
curl -X POST https://navimedi.org/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sarah.johnson@email.com",
    "password": "password123",
    "tenantId": "SAINT PAUL"
  }'
```

---

## 📱 Mobile App Code Example

### Using the NaviMED Client (RECOMMENDED):
```javascript
import { navimedClient } from './NaviMEDClient';

// Login with email, password, and organization
const loginResponse = await navimedClient.login(
  'sarah.johnson@email.com',
  'password123',
  'SAINT PAUL'
);

console.log('Logged in!', loginResponse.user);

// Get appointments (token automatically included)
const appointments = await navimedClient.getAppointments();
console.log('Appointments:', appointments);

// Get prescriptions
const prescriptions = await navimedClient.getPrescriptions();

// Get lab results
const labResults = await navimedClient.getLabResults();

// Get messages
const messages = await navimedClient.getMessages();
```

### Raw Axios (Manual approach):
```javascript
import axios from 'axios';

const API_BASE = 'https://navimedi.org/api';

// Login - MUST include email, password, AND tenantId
const response = await axios.post(`${API_BASE}/auth/login`, {
  email: 'sarah.johnson@email.com',
  password: 'password123',
  tenantId: 'SAINT PAUL'
});

const token = response.data.token;
console.log('Logged in!', response.data.user);

// Get appointments
const appointments = await axios.get(`${API_BASE}/patient/appointments`, {
  headers: { Authorization: `Bearer ${token}` }
});

console.log('Appointments:', appointments.data);
```

### Flutter/Dart:
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

final baseUrl = 'https://navimedi.org/api';

// Login
final loginResponse = await http.post(
  Uri.parse('$baseUrl/auth/login'),
  headers: {'Content-Type': 'application/json'},
  body: json.encode({
    'email': 'sarah.johnson@email.com',
    'password': 'password123',
    'tenantId': 'SAINT PAUL'
  }),
);

final data = json.decode(loginResponse.body);
final token = data['token'];
print('Logged in! ${data['user']}');

// Get appointments
final appointmentsResponse = await http.get(
  Uri.parse('$baseUrl/patient/appointments'),
  headers: {
    'Authorization': 'Bearer $token',
    'Content-Type': 'application/json',
  },
);

final appointments = json.decode(appointmentsResponse.body);
print('Appointments: $appointments');
```

---

## 📋 Available Endpoints for Sarah

Once logged in with the token, Sarah can access:

```
GET /api/patient/profile              - Get her profile
GET /api/patient/appointments          - Get all appointments
GET /api/patient/prescriptions         - Get all prescriptions
GET /api/patient/lab-results           - Get all lab results
GET /api/medical-communications        - Get messages
POST /api/medical-communications       - Send message to doctor
```

---

## ✅ Status

- **User Account:** Created ✅
- **Patient Record:** Created ✅
- **Database Link:** Connected ✅
- **API Endpoints:** Ready ✅
- **Production URL:** https://navimedi.org/api ✅

---

**Ready to test in your mobile app!**

Copy the login code above and use it in your mobile app to test the patient portal functionality.
