// Quick Test Script - Run this to verify API works
// Usage: node TEST_LOGIN.js

const axios = require('axios');

const API_BASE_URL = 'https://navimedi.org/api';

async function testLogin() {
  console.log('\n=== NaviMED API Quick Test ===\n');
  
  // TEST CREDENTIALS - CHANGE THESE TO YOUR ACTUAL CREDENTIALS
  const USERNAME = 'patient@example.com';  // ← CHANGE THIS
  const PASSWORD = 'yourpassword';         // ← CHANGE THIS
  
  console.log(`Testing with username: ${USERNAME}`);
  console.log(`API URL: ${API_BASE_URL}`);
  
  try {
    // Step 1: Login
    console.log('\n1. Attempting login...');
    const loginResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
      username: USERNAME,
      password: PASSWORD,
    });
    
    console.log('✅ LOGIN SUCCESSFUL!');
    console.log('User:', loginResponse.data.user);
    console.log('Token (first 30 chars):', loginResponse.data.token.substring(0, 30) + '...');
    
    const token = loginResponse.data.token;
    
    // Step 2: Get Appointments
    console.log('\n2. Testing GET /api/patient/appointments...');
    const appointmentsResponse = await axios.get(
      `${API_BASE_URL}/patient/appointments`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ APPOINTMENTS SUCCESS!');
    console.log(`Found ${appointmentsResponse.data.length} appointments`);
    
    // Step 3: Get Prescriptions
    console.log('\n3. Testing GET /api/patient/prescriptions...');
    const prescriptionsResponse = await axios.get(
      `${API_BASE_URL}/patient/prescriptions`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ PRESCRIPTIONS SUCCESS!');
    console.log(`Found ${prescriptionsResponse.data.length} prescriptions`);
    
    // Step 4: Get Lab Results
    console.log('\n4. Testing GET /api/patient/lab-results...');
    const labResultsResponse = await axios.get(
      `${API_BASE_URL}/patient/lab-results`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ LAB RESULTS SUCCESS!');
    console.log(`Found ${labResultsResponse.data.length} lab results`);
    
    // Step 5: Get Profile
    console.log('\n5. Testing GET /api/patient/profile...');
    const profileResponse = await axios.get(
      `${API_BASE_URL}/patient/profile`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    console.log('✅ PROFILE SUCCESS!');
    console.log('Patient Name:', `${profileResponse.data.firstName} ${profileResponse.data.lastName}`);
    console.log('MRN:', profileResponse.data.mrn);
    
    console.log('\n=== ✅ ALL TESTS PASSED! ===');
    console.log('\nYour API credentials work correctly!');
    console.log('Your token:', token.substring(0, 50) + '...');
    console.log('\nUse this token in your mobile app Authorization header.');
    
  } catch (error) {
    console.error('\n❌ ERROR OCCURRED:');
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Error:', error.response.data);
      
      if (error.response.status === 401) {
        console.error('\n⚠️  AUTHENTICATION ERROR');
        console.error('Your username or password is incorrect.');
        console.error('Or you need to contact admin for patient credentials.');
      }
    } else if (error.request) {
      console.error('Network error - could not reach API');
      console.error('Check your internet connection');
    } else {
      console.error(error.message);
    }
  }
}

// Run the test
testLogin();

console.log('\n📝 NOTE: Update USERNAME and PASSWORD at the top of this file with your actual credentials.\n');
