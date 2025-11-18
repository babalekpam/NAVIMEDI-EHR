# ✅ WORKING CODE - COPY EXACTLY

## 🎯 Login is WORKING on production!

```bash
# This command works perfectly:
curl -X POST https://navimedi.org/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sarah.johnson@email.com",
    "password": "password123",
    "tenantId": "SAINT PAUL"
  }'

# Returns: ✅ Token and user data
```

---

## ❌ YOUR CODE IS SENDING WRONG DATA

The 401 error means your mobile app is sending:
- Wrong email
- Wrong password  
- Wrong tenantId
- OR using "username" instead of "email"

---

## ✅ COPY THIS EXACT CODE

### JavaScript / React Native:

```javascript
import axios from 'axios';

const API_URL = 'https://navimedi.org/api';

async function login() {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: 'sarah.johnson@email.com',
      password: 'password123',
      tenantId: 'SAINT PAUL'
    });
    
    console.log('✅ Login successful!');
    console.log('Token:', response.data.token);
    console.log('User:', response.data.user);
    
    return response.data;
  } catch (error) {
    console.error('❌ Login failed:', error.response?.data || error.message);
    throw error;
  }
}

// Use it:
login();
```

### Flutter / Dart:

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<Map<String, dynamic>> login() async {
  final url = Uri.parse('https://navimedi.org/api/auth/login');
  
  final response = await http.post(
    url,
    headers: {'Content-Type': 'application/json'},
    body: json.encode({
      'email': 'sarah.johnson@email.com',
      'password': 'password123',
      'tenantId': 'SAINT PAUL',
    }),
  );
  
  if (response.statusCode == 200) {
    print('✅ Login successful!');
    final data = json.decode(response.body);
    print('Token: ${data['token']}');
    print('User: ${data['user']}');
    return data;
  } else {
    print('❌ Login failed: ${response.statusCode}');
    print('Error: ${response.body}');
    throw Exception('Login failed');
  }
}

// Use it:
login();
```

### Python:

```python
import requests

def login():
    url = 'https://navimedi.org/api/auth/login'
    
    payload = {
        'email': 'sarah.johnson@email.com',
        'password': 'password123',
        'tenantId': 'SAINT PAUL'
    }
    
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        print('✅ Login successful!')
        data = response.json()
        print(f"Token: {data['token']}")
        print(f"User: {data['user']}")
        return data
    else:
        print(f'❌ Login failed: {response.status_code}')
        print(f'Error: {response.text}')
        raise Exception('Login failed')

# Use it:
login()
```

---

## 🔍 CHECK YOUR CODE FOR THESE MISTAKES:

### ❌ MISTAKE #1: Using "username" instead of "email"
```javascript
// WRONG:
{
  username: 'sarah.johnson@email.com',  // ❌ Field name is wrong!
  password: 'password123',
  tenantId: 'SAINT PAUL'
}

// CORRECT:
{
  email: 'sarah.johnson@email.com',     // ✅ Use "email"
  password: 'password123',
  tenantId: 'SAINT PAUL'
}
```

### ❌ MISTAKE #2: Missing tenantId
```javascript
// WRONG:
{
  email: 'sarah.johnson@email.com',
  password: 'password123'
  // ❌ Missing tenantId!
}

// CORRECT:
{
  email: 'sarah.johnson@email.com',
  password: 'password123',
  tenantId: 'SAINT PAUL'              // ✅ Required!
}
```

### ❌ MISTAKE #3: Wrong tenantId
```javascript
// WRONG:
{
  email: 'sarah.johnson@email.com',
  password: 'password123',
  tenantId: 'Saint Paul'              // ❌ Wrong case!
}

// CORRECT:
{
  email: 'sarah.johnson@email.com',
  password: 'password123',
  tenantId: 'SAINT PAUL'              // ✅ All caps!
}
```

---

## 🧪 TEST IN YOUR BROWSER CONSOLE

Open browser console and run:

```javascript
fetch('https://navimedi.org/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'sarah.johnson@email.com',
    password: 'password123',
    tenantId: 'SAINT PAUL'
  })
})
.then(r => r.json())
.then(data => console.log('✅ SUCCESS:', data))
.catch(err => console.error('❌ ERROR:', err));
```

---

## ✅ CREDENTIALS (COPY EXACTLY):

```
email:    sarah.johnson@email.com
password: password123
tenantId: SAINT PAUL
```

**DO NOT CHANGE ANYTHING. COPY EXACTLY AS SHOWN ABOVE.**
