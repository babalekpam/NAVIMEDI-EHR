# NaviMED Patient Portal - Mobile PWA

## 📱 Complete Patient Portal Mobile Application

A modern, mobile-first Progressive Web App (PWA) for the NaviMED patient portal with full API integration.

## ✅ Features Implemented

### 🔐 Authentication
- Login page with email, password, and tenant ID
- Token-based authentication stored in localStorage
- Protected routes with automatic redirect to login
- Pre-filled test credentials for easy testing

### 📊 Dashboard
- Quick access cards for all features
- Patient name display from profile
- Mobile-optimized grid layout
- Logout functionality

### 👤 Patient Profile
- Display patient information (name, MRN, DOB, blood type)
- Contact details (phone, email)
- Allergy information with visual alerts
- Mobile-friendly card layout

### 📅 Appointments
- List all patient appointments
- Display date/time, type, status, and reason
- Color-coded status badges
- Mobile card layout with icons

### 💊 Prescriptions
- List all prescriptions
- Show medication, dosage, frequency
- Display status and refills remaining
- Mobile-optimized cards

### 🧪 Lab Results
- Display all lab test results
- Show test name, dates, status
- Priority indicators (urgent, high, routine)
- Color-coded status badges

### 💬 Messages
- View all medical communications
- Send new messages to providers
- Display subject, preview, date
- Read/unread status indicators
- Priority badges

### 💰 Bills & Claims
- List all bills and insurance claims
- Display claim numbers and status
- Show total charges, insurance paid, patient responsibility
- Service date information
- Mobile-friendly financial breakdown

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Formatting**: date-fns
- **Build Tool**: Vite
- **PWA**: vite-plugin-pwa

## 📁 Project Structure

```
mobile-app-pwa/
├── src/
│   ├── lib/
│   │   ├── api.ts          # API client with all endpoints
│   │   └── auth.ts         # Authentication utilities
│   ├── pages/
│   │   ├── Login.tsx       # Login page
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── Profile.tsx     # Patient profile
│   │   ├── Appointments.tsx
│   │   ├── Prescriptions.tsx
│   │   ├── LabResults.tsx
│   │   ├── Messages.tsx
│   │   └── Bills.tsx
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Navigate to the mobile-app-pwa directory:
```bash
cd mobile-app-pwa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔑 Test Credentials

**Test Account (Sarah Johnson)**
- Email: `sarah.johnson@email.com`
- Password: `password123`
- Hospital/Tenant: `SAINT PAUL`

## 🌐 API Integration

The app connects to the NaviMED API at: `https://navimedi.org/api`

### Available Endpoints

- `POST /auth/login` - User authentication
- `GET /patient/profile` - Get patient profile
- `GET /patient/appointments` - Get appointments list
- `GET /patient/prescriptions` - Get prescriptions
- `GET /patient/lab-results` - Get lab results
- `GET /medical-communications` - Get messages
- `POST /medical-communications` - Send message
- `GET /patient/bills` - Get bills and claims

All authenticated requests include the JWT token in the `Authorization` header.

## 📱 Mobile-First Design

### Design Features
- **Responsive Layout**: Optimized for mobile screens (320px+)
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Color Scheme**: Primary blue (#2563eb) with semantic colors
- **Typography**: System fonts for optimal performance
- **Card-Based UI**: Clean, modern healthcare interface
- **Loading States**: Spinners and skeleton screens
- **Error Handling**: User-friendly error messages

### PWA Features
- **Offline Support**: Service worker for offline functionality
- **Install Prompt**: Add to home screen capability
- **App Manifest**: Configured for standalone mode
- **Icons**: Adaptive icons for iOS and Android

## 🎨 UI Components

### Status Badges
- **Appointments**: Scheduled (blue), Completed (green), Cancelled (red)
- **Prescriptions**: Active (green), Dispensed (blue), Cancelled (red)
- **Lab Results**: Completed (green), Pending (yellow), In Progress (blue)
- **Messages**: Urgent (red), High (orange), Normal (blue), Low (gray)
- **Bills**: Paid (green), Pending (yellow), Denied (red), Approved (blue)

### Layout Patterns
- **Header**: Fixed top bar with back button and title
- **Content**: Scrollable main area with cards
- **Cards**: Shadow, rounded corners, padding for touch
- **Forms**: Large input fields, clear labels

## 🔒 Security

- JWT tokens stored in localStorage
- Automatic token validation on each request
- Redirect to login on 401 responses
- Protected routes with authentication checks
- Secure API communication over HTTPS

## 📦 Dependencies

### Production
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `wouter` ^3.0.0
- `lucide-react` ^0.263.1
- `date-fns` ^2.30.0
- `tailwindcss` (latest)
- `autoprefixer` (latest)

### Development
- `@types/react` ^18.2.15
- `@types/react-dom` ^18.2.7
- `@vitejs/plugin-react` ^4.0.3
- `typescript` ^5.0.2
- `vite` ^4.4.5
- `vite-plugin-pwa` ^0.16.4

## 🧪 Testing

### Manual Testing Checklist

1. **Login Flow**
   - [ ] Login with test credentials
   - [ ] Verify token storage
   - [ ] Redirect to dashboard

2. **Dashboard**
   - [ ] Display patient name
   - [ ] All navigation cards visible
   - [ ] Logout button works

3. **Profile**
   - [ ] Display all patient information
   - [ ] Show allergies correctly
   - [ ] Responsive layout

4. **Appointments**
   - [ ] List all appointments
   - [ ] Display dates and times
   - [ ] Status badges correct

5. **Prescriptions**
   - [ ] List all medications
   - [ ] Show dosage and frequency
   - [ ] Refills displayed

6. **Lab Results**
   - [ ] List all tests
   - [ ] Priority badges
   - [ ] Status indicators

7. **Messages**
   - [ ] View messages list
   - [ ] Send new message
   - [ ] Read/unread status

8. **Bills**
   - [ ] Display all bills
   - [ ] Financial breakdown
   - [ ] Patient responsibility

## 🐛 Troubleshooting

### Common Issues

**Issue**: White screen on load
- **Solution**: Check browser console for errors, verify API is accessible

**Issue**: Login fails
- **Solution**: Verify credentials and API endpoint is correct

**Issue**: Token expired
- **Solution**: Log out and log in again

**Issue**: API errors
- **Solution**: Check network tab in DevTools, verify API is running

## 📄 License

This is part of the NaviMED Healthcare Platform.

## 🤝 Support

For issues or questions, please refer to the main NaviMED documentation or contact support.

---

**Built with ❤️ for NaviMED Healthcare Platform**
