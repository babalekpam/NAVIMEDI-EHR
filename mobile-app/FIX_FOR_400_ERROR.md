# ✅ FIXED: "Organization is required" Error 400

## What Was Wrong

Your mobile app login code was **missing the tenantId parameter**.

### ❌ OLD CODE (BROKEN):
```javascript
const response = await axios.post('https://navimedi.org/api/auth/login', {
  username: 'sarah.johnson@email.com',  // Wrong field name!
  password: 'password123'                // Missing tenantId!
});
```

### ✅ NEW CODE (FIXED):
```javascript
const response = await axios.post('https://navimedi.org/api/auth/login', {
  email: 'sarah.johnson@email.com',     // Use "email" not "username"
  password: 'password123',
  tenantId: 'SAINT PAUL'                // REQUIRED!
});
```

---

## 🔧 How to Fix Your Mobile App

### Option 1: Use the Fixed NaviMED Client

Copy **`mobile-app/FIXED_NaviMEDClient.ts`** to your mobile app and use it:

```javascript
import { navimedClient } from './NaviMEDClient';

// Login (now with all 3 required parameters)
const loginResponse = await navimedClient.login(
  'sarah.johnson@email.com',  // email
  'password123',              // password
  'SAINT PAUL'                // tenantId (organization name)
);

console.log('✅ Logged in!', loginResponse.user);

// Get data (token automatically included)
const appointments = await navimedClient.getAppointments();
const prescriptions = await navimedClient.getPrescriptions();
const labResults = await navimedClient.getLabResults();
const messages = await navimedClient.getMessages();
```

### Option 2: Fix Your Existing Code

If you have your own login function, update it to include `tenantId`:

```javascript
// React Native / JavaScript
async function login(email, password, organization) {
  const response = await axios.post(
    'https://navimedi.org/api/auth/login',
    {
      email: email,           // NOT username!
      password: password,
      tenantId: organization  // MUST include this!
    }
  );
  
  return response.data;
}

// Usage:
const result = await login(
  'sarah.johnson@email.com',
  'password123',
  'SAINT PAUL'
);
```

```dart
// Flutter / Dart
Future<Map<String, dynamic>> login(String email, String password, String organization) async {
  final response = await http.post(
    Uri.parse('https://navimedi.org/api/auth/login'),
    headers: {'Content-Type': 'application/json'},
    body: json.encode({
      'email': email,           // NOT username!
      'password': password,
      'tenantId': organization  // MUST include this!
    }),
  );
  
  return json.decode(response.body);
}

// Usage:
final result = await login(
  'sarah.johnson@email.com',
  'password123',
  'SAINT PAUL'
);
```

---

## 🎯 Login Requirements (IMPORTANT!)

The login endpoint **REQUIRES 3 fields**:

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| **email** | string | `sarah.johnson@email.com` | Must use "email" not "username" |
| **password** | string | `password123` | User's password |
| **tenantId** | string | `SAINT PAUL` | Hospital/Organization name |

### ❌ Common Mistakes:
- Using `username` instead of `email` → 400 error
- Missing `tenantId` → **"Organization is required"** error
- Wrong tenantId spelling → 401 error

### ✅ Correct Format:
```json
{
  "email": "sarah.johnson@email.com",
  "password": "password123",
  "tenantId": "SAINT PAUL"
}
```

---

## 🧪 Test Your Fix

### Quick Test with curl:
```bash
curl -X POST https://navimedi.org/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sarah.johnson@email.com",
    "password": "password123",
    "tenantId": "SAINT PAUL"
  }'
```

### Expected Response:
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": "XwWbrnbI2ET5M3lc9I6O7",
    "email": "sarah.johnson@email.com",
    "firstName": "Sarah",
    "lastName": "Johnson",
    "role": "patient",
    "tenantId": "27ec4d0a-776b-42a9-82d2-bd5b8349cea1"
  },
  "tenant": {
    "id": "27ec4d0a-776b-42a9-82d2-bd5b8349cea1",
    "name": "SAINT PAUL",
    "type": "hospital"
  }
}
```

---

## 📋 Test Patient Account

```
Email:    sarah.johnson@email.com
Password: password123
Hospital: SAINT PAUL
MRN:      MRN58069339
```

---

**All errors should now be fixed!** 🎉

If you still get errors, check:
1. Are you sending all 3 fields? (email, password, tenantId)
2. Is the field name "email" not "username"?
3. Is tenantId exactly "SAINT PAUL" (case-sensitive)?
