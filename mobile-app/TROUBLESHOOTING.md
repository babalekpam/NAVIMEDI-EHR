# Troubleshooting 401 Error: "Access token required"

## The Problem
You're getting this error:
```
Error 401: {"message":"Access token required"}
```

## Why This Happens

The server requires a valid JWT token in the `Authorization` header for all patient portal endpoints. If the token is missing or invalid, you get a 401 error.

---

## Solution - Step by Step

### Step 1: Make Sure You Login First

**You MUST login before calling any patient endpoints!**

```javascript
import { navimedClient } from './NaviMEDClient';

// ❌ WRONG - This will fail with 401
const appointments = await navimedClient.getAppointments();

// ✅ CORRECT - Login first, then get data
const loginResponse = await navimedClient.login('patient@example.com', 'password');
const appointments = await navimedClient.getAppointments();
```

---

### Step 2: Verify Token is Saved

After login, the token should be stored:

```javascript
// Login
const response = await navimedClient.login(username, password);

// Check token is set
console.log('Token:', navimedClient.getToken());

// Store in AsyncStorage (React Native)
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.setItem('userToken', response.token);
```

---

### Step 3: Restore Token on App Restart

When your app restarts, restore the token:

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// In your App initialization
useEffect(() => {
  async function loadToken() {
    const savedToken = await AsyncStorage.getItem('userToken');
    if (savedToken) {
      navimedClient.setToken(savedToken);
      console.log('Token restored from storage');
    }
  }
  loadToken();
}, []);
```

---

## Complete Working Example

### React Native

```javascript
import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navimedClient } from './NaviMEDClient';

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  // Restore token on app start
  useEffect(() => {
    async function restoreToken() {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        navimedClient.setToken(token);
      }
    }
    restoreToken();
  }, []);

  const handleLogin = async () => {
    try {
      // 1. Login
      const response = await navimedClient.login(
        'patient@example.com',
        'yourpassword'
      );
      
      // 2. Save token
      await AsyncStorage.setItem('userToken', response.token);
      
      // 3. Now you can get data
      const appts = await navimedClient.getAppointments();
      setAppointments(appts);
      
      console.log('Success! Got', appts.length, 'appointments');
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    }
  };

  return (
    <View>
      <Button title="Login & Get Appointments" onPress={handleLogin} />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Text>Appointments: {appointments.length}</Text>
    </View>
  );
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'navimed_client.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final client = NaviMEDClient();
  String error = '';

  @override
  void initState() {
    super.initState();
    restoreToken();
  }

  Future<void> restoreToken() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('userToken');
    if (token != null) {
      client.setToken(token);
    }
  }

  Future<void> handleLogin() async {
    try {
      // 1. Login
      final response = await client.login(
        'patient@example.com',
        'yourpassword',
      );
      
      // 2. Save token
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('userToken', response['token']);
      
      // 3. Get appointments
      final appointments = await client.getAppointments();
      
      print('Success! Got ${appointments.length} appointments');
    } catch (e) {
      setState(() {
        error = e.toString();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            children: [
              ElevatedButton(
                onPressed: handleLogin,
                child: Text('Login & Get Appointments'),
              ),
              if (error.isNotEmpty)
                Text(error, style: TextStyle(color: Colors.red)),
            ],
          ),
        ),
      ),
    );
  }
}
```

---

## Quick Test Script

Use this to test if everything works:

```javascript
// test.js
import { navimedClient } from './NaviMEDClient';

async function test() {
  console.log('Testing NaviMED API...\n');
  
  try {
    // 1. Login
    console.log('1. Logging in...');
    const loginResponse = await navimedClient.login(
      'patient@example.com',  // ← Your username
      'yourpassword'          // ← Your password
    );
    console.log('✅ Login successful!');
    console.log('Token:', loginResponse.token.substring(0, 20) + '...');
    
    // 2. Get appointments
    console.log('\n2. Getting appointments...');
    const appointments = await navimedClient.getAppointments();
    console.log('✅ Success! Got', appointments.length, 'appointments');
    
    // 3. Get prescriptions
    console.log('\n3. Getting prescriptions...');
    const prescriptions = await navimedClient.getPrescriptions();
    console.log('✅ Success! Got', prescriptions.length, 'prescriptions');
    
    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();
```

Run with:
```bash
node test.js
```

---

## Common Mistakes

### ❌ Mistake 1: Calling API before login
```javascript
// This will fail!
const appointments = await navimedClient.getAppointments();
```

### ✅ Fix: Login first
```javascript
await navimedClient.login(username, password);
const appointments = await navimedClient.getAppointments();
```

---

### ❌ Mistake 2: Not saving token
```javascript
// Token is lost when app restarts
await navimedClient.login(username, password);
```

### ✅ Fix: Save to storage
```javascript
const response = await navimedClient.login(username, password);
await AsyncStorage.setItem('userToken', response.token);
```

---

### ❌ Mistake 3: Not restoring token
```javascript
// User has to login every time
```

### ✅ Fix: Restore on app start
```javascript
const token = await AsyncStorage.getItem('userToken');
if (token) {
  navimedClient.setToken(token);
}
```

---

## Still Not Working?

### Check These:

1. **Are you using the correct API URL?**
   ```javascript
   const API_BASE_URL = 'https://navimedi.org/api';
   ```

2. **Are you using correct credentials?**
   - Ask your admin for test patient credentials

3. **Is the token being sent in headers?**
   ```javascript
   headers: {
     'Authorization': 'Bearer YOUR_TOKEN_HERE'  // ← Must be this format
   }
   ```

4. **Is the token expired?**
   - Tokens expire after 24 hours
   - Login again to get a new token

5. **Check console logs**
   - Use the FIXED_NaviMEDClient.ts which has detailed logging
   - Look for: `[NaviMED] Token status: Present` or `MISSING`

---

## Get Help

If still having issues, provide these details:
1. Which endpoint are you calling?
2. Are you logged in? (yes/no)
3. Is token saved? (check AsyncStorage)
4. Error message (full text)
5. Console logs

---

**API Status:** ✅ Live at https://navimedi.org/api  
**All endpoints are working and tested!**
