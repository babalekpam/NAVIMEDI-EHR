# CARNET Patient Portal Invitation Templates

## 📧 EMAIL TEMPLATE

**Subject:** Welcome to CARNET - Your Digital Health Portal is Ready!

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { background: #f9fafb; padding: 30px; margin: 20px 0; border-radius: 8px; }
        .button { display: inline-block; background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .steps { background: white; padding: 20px; margin: 15px 0; border-left: 4px solid #2563eb; }
        .footer { text-align: center; color: #666; font-size: 12px; padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📱 Welcome to CARNET</h1>
            <p>Your Personal Health Portal</p>
        </div>
        
        <div class="content">
            <h2>Hello {{PATIENT_NAME}},</h2>
            
            <p>Thank you for booking your appointment with {{HOSPITAL_NAME}}. We're excited to give you 24/7 access to your health information through CARNET - your personal health portal.</p>
            
            <p><strong>Your Appointment Details:</strong></p>
            <ul>
                <li>📅 Date: {{APPOINTMENT_DATE}}</li>
                <li>🕐 Time: {{APPOINTMENT_TIME}}</li>
                <li>👨‍⚕️ Provider: {{PROVIDER_NAME}}</li>
            </ul>
            
            <div style="text-align: center;">
                <a href="https://navimedi.org/carnet/" class="button">
                    🚀 Access CARNET Portal Now
                </a>
            </div>
            
            <div class="steps">
                <h3>📲 Install on Your Mobile Device:</h3>
                <p><strong>For iPhone/iPad:</strong></p>
                <ol>
                    <li>Open the link above in Safari</li>
                    <li>Tap the Share button (square with arrow)</li>
                    <li>Select "Add to Home Screen"</li>
                    <li>Tap "Add" - Done! 🎉</li>
                </ol>
                
                <p><strong>For Android:</strong></p>
                <ol>
                    <li>Open the link above in Chrome</li>
                    <li>Tap the menu (⋮) in the top right</li>
                    <li>Select "Install app" or "Add to Home Screen"</li>
                    <li>Tap "Install" - Done! 🎉</li>
                </ol>
            </div>
            
            <h3>✨ What You Can Do with CARNET:</h3>
            <ul>
                <li>📅 View and manage your appointments</li>
                <li>💊 Access your prescriptions and refill requests</li>
                <li>🔬 Check your lab results instantly</li>
                <li>💬 Message your healthcare team securely</li>
                <li>💳 View and pay your medical bills</li>
                <li>📋 Access your complete medical history</li>
            </ul>
            
            <p><strong>Your Login Credentials:</strong></p>
            <ul>
                <li>Email: {{PATIENT_EMAIL}}</li>
                <li>Temporary Password: {{TEMP_PASSWORD}}</li>
                <li>Hospital/Clinic: {{TENANT_NAME}}</li>
            </ul>
            
            <p style="color: #dc2626;"><em>⚠️ Please change your password after your first login for security.</em></p>
        </div>
        
        <div class="footer">
            <p>This portal works on any device - smartphone, tablet, or computer!</p>
            <p>Questions? Contact us at {{SUPPORT_EMAIL}} or {{SUPPORT_PHONE}}</p>
            <p>&copy; 2025 {{HOSPITAL_NAME}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## 📱 SMS TEMPLATE (Short Version)

```
Welcome to CARNET! 🏥

Your appointment: {{DATE}} at {{TIME}}

Access your health records anytime:
🔗 https://navimedi.org/carnet/

Login:
📧 {{EMAIL}}
🔑 {{TEMP_PASSWORD}}

Install on mobile: Open link → Add to Home Screen

- {{HOSPITAL_NAME}}
```

---

## 📱 SMS TEMPLATE (Alternative - Ultra Short)

```
{{HOSPITAL_NAME}}: Appointment confirmed for {{DATE}} {{TIME}}

Access CARNET Patient Portal: https://navimedi.org/carnet/

Login: {{EMAIL}} / {{TEMP_PASSWORD}}

Questions? Call {{PHONE}}
```

---

## 🔧 INTEGRATION CODE

### Node.js/Express Email Function

```javascript
const nodemailer = require('nodemailer');

// Configure your email transport (already in NaviMED)
const transporter = nodemailer.createTransport({
  host: 'navimedi.org',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendCarnetInvitation(patientData, appointmentData) {
  const emailHTML = `
    <!-- Use the HTML template above with variable substitutions -->
  `;
  
  const mailOptions = {
    from: '"CARNET Patient Portal" <noreply@navimedi.org>',
    to: patientData.email,
    subject: 'Welcome to CARNET - Your Digital Health Portal is Ready!',
    html: emailHTML.replace(/{{PATIENT_NAME}}/g, patientData.name)
                    .replace(/{{HOSPITAL_NAME}}/g, appointmentData.hospitalName)
                    .replace(/{{APPOINTMENT_DATE}}/g, appointmentData.date)
                    .replace(/{{APPOINTMENT_TIME}}/g, appointmentData.time)
                    .replace(/{{PROVIDER_NAME}}/g, appointmentData.providerName)
                    .replace(/{{PATIENT_EMAIL}}/g, patientData.email)
                    .replace(/{{TEMP_PASSWORD}}/g, patientData.tempPassword)
                    .replace(/{{TENANT_NAME}}/g, appointmentData.tenantName)
                    .replace(/{{SUPPORT_EMAIL}}/g, 'support@navimedi.org')
                    .replace(/{{SUPPORT_PHONE}}/g, '+1-555-SUPPORT')
  };
  
  await transporter.sendMail(mailOptions);
  console.log('✅ CARNET invitation sent to:', patientData.email);
}

// Call this after appointment is created
app.post('/api/appointments', async (req, res) => {
  // ... create appointment logic ...
  
  // Send CARNET invitation
  await sendCarnetInvitation({
    name: patient.firstName + ' ' + patient.lastName,
    email: patient.email,
    tempPassword: generatedPassword
  }, {
    hospitalName: 'SAINT PAUL Hospital',
    tenantName: 'SAINT PAUL',
    date: '2025-11-26',
    time: '10:30 AM',
    providerName: 'Dr. Smith'
  });
  
  res.json({ success: true });
});
```

---

## 📲 SMS Integration (Using Twilio)

```javascript
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendCarnetSMS(patientPhone, appointmentData) {
  const message = `Welcome to CARNET! 🏥

Your appointment: ${appointmentData.date} at ${appointmentData.time}

Access your health records anytime:
🔗 https://navimedi.org/carnet/

Login:
📧 ${appointmentData.email}
🔑 ${appointmentData.tempPassword}

- ${appointmentData.hospitalName}`;

  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: patientPhone
  });
  
  console.log('✅ CARNET SMS sent to:', patientPhone);
}
```

---

## 🎯 IMPLEMENTATION CHECKLIST

1. ✅ CARNET portal deployed and accessible
2. ⬜ Add email/SMS templates to your appointment booking system
3. ⬜ Configure SMTP settings (already done for NaviMED)
4. ⬜ Optional: Set up Twilio for SMS (if not already configured)
5. ⬜ Modify appointment creation endpoint to trigger invitation
6. ⬜ Create temporary passwords for new patients
7. ⬜ Test the complete flow from appointment booking to portal access

---

## 📝 CUSTOMIZATION VARIABLES

Replace these placeholders in your templates:

- `{{PATIENT_NAME}}` - Patient's full name
- `{{PATIENT_EMAIL}}` - Patient's email address
- `{{TEMP_PASSWORD}}` - Auto-generated temporary password
- `{{HOSPITAL_NAME}}` - Your hospital/clinic name
- `{{TENANT_NAME}}` - Tenant ID for login (e.g., "SAINT PAUL")
- `{{APPOINTMENT_DATE}}` - Appointment date
- `{{APPOINTMENT_TIME}}` - Appointment time
- `{{PROVIDER_NAME}}` - Doctor/provider name
- `{{SUPPORT_EMAIL}}` - Your support email
- `{{SUPPORT_PHONE}}` - Your support phone number

---

## 🔒 SECURITY NOTES

1. **Temporary Passwords**: Generate secure random passwords for new patients
2. **Password Reset**: Force patients to change password on first login
3. **Secure Transmission**: Use HTTPS for all links (already configured)
4. **Data Privacy**: Ensure email/SMS comply with HIPAA regulations
5. **Patient Consent**: Get consent before sending SMS (required by law)
