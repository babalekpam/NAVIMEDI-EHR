# Mobile App Setup Instructions

## React Native Setup

### 1. Create New Project
```bash
npx react-native init NaviMEDMobile
cd NaviMEDMobile
```

### 2. Install Dependencies
```bash
npm install axios
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler
npm install @react-native-async-storage/async-storage
```

### 3. Copy Files
Copy all files from `mobile-app/react-native/` to your project:
- NaviMEDClient.ts → src/NaviMEDClient.ts
- App.tsx → App.tsx
- screens/* → src/screens/

### 4. Run App
```bash
# iOS
npm run ios

# Android
npm run android
```

---

## Flutter Setup

### 1. Create New Project
```bash
flutter create navimed_mobile
cd navimed_mobile
```

### 2. Update pubspec.yaml
Copy the dependencies from `mobile-app/flutter/pubspec.yaml`

### 3. Install Dependencies
```bash
flutter pub get
```

### 4. Copy Files
Copy all files from `mobile-app/flutter/lib/` to your project:
- navimed_client.dart → lib/navimed_client.dart
- screens/* → lib/screens/

### 5. Update main.dart
```dart
import 'package:flutter/material.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NaviMED',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LoginScreen(),
    );
  }
}
```

### 6. Run App
```bash
# iOS
flutter run -d ios

# Android
flutter run -d android
```

---

## API Configuration

### Production API
```
Base URL: https://navimedi.org/api
```

All API endpoints are ready and working:
- ✅ Authentication
- ✅ Patient Profile
- ✅ Appointments
- ✅ Prescriptions
- ✅ Lab Results
- ✅ Messages
- ✅ Payments

---

## Test Credentials

Ask your administrator for test patient credentials to login and test the app.

---

## Features Implemented

### React Native
- ✅ Login Screen
- ✅ Dashboard Screen
- ✅ Appointments Screen
- ✅ Prescriptions Screen
- ✅ Navigation
- ✅ Secure Token Storage

### Flutter
- ✅ Login Screen
- ✅ Dashboard Screen
- ✅ API Client
- ✅ Secure Token Storage

---

## Next Steps

1. **Add more screens:**
   - Lab Results Screen
   - Messages Screen
   - Profile Screen
   - Payment Screen

2. **Add features:**
   - Push notifications
   - Biometric authentication
   - Offline support
   - Dark mode

3. **Polish UI:**
   - Add animations
   - Improve loading states
   - Add error boundaries
   - Custom themes

4. **Deploy:**
   - iOS App Store
   - Google Play Store

---

## Support

API Documentation: See `PATIENT_PORTAL_API_DOCUMENTATION.md`
Production API: https://navimedi.org/api

© 2025 NaviMED by ARGILETTE Lab
