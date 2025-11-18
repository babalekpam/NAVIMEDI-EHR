import https from 'https';

const BASE_URL = 'https://navimedi.org';
const TEST_EMAIL = 'sarah.johnson@email.com';
const TEST_PASSWORD = 'password123';

let authToken = '';

// Helper function to make HTTP requests
function makeRequest(method, path, data = null, token = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const response = {
            status: res.statusCode,
            headers: res.headers,
            body: body ? JSON.parse(body) : null
          };
          resolve(response);
        } catch (e) {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: body
          });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function testEndpoints() {
  console.log('🧪 Testing Patient Portal API Endpoints\n');
  console.log('================================================\n');

  try {
    // Step 1: Login
    console.log('1. 🔐 Testing Login...');
    const loginResponse = await makeRequest('POST', '/api/auth/login', {
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
      tenantId: 'SAINT PAUL'
    });

    if (loginResponse.status === 200 && loginResponse.body.token) {
      authToken = loginResponse.body.token;
      console.log('✅ Login successful');
      console.log(`   Token: ${authToken.substring(0, 20)}...`);
      console.log(`   User: ${loginResponse.body.user?.email}`);
    } else {
      console.log('❌ Login failed:', loginResponse.status, loginResponse.body);
      return;
    }

    console.log('\n2. 📋 Testing Patient Endpoints...\n');

    // Test each endpoint
    const endpoints = [
      { method: 'GET', path: '/api/patient/appointments', name: 'Appointments' },
      { method: 'GET', path: '/api/patient/prescriptions', name: 'Prescriptions' },
      { method: 'GET', path: '/api/patient/lab-results', name: 'Lab Results' },
      { method: 'GET', path: '/api/patient/bills', name: 'Bills (NEW)' },
      { method: 'GET', path: '/api/medical-communications', name: 'Medical Communications (NEW)' },
    ];

    for (const endpoint of endpoints) {
      console.log(`   Testing ${endpoint.name}...`);
      const response = await makeRequest(endpoint.method, endpoint.path, null, authToken);
      
      if (response.status === 200) {
        const count = Array.isArray(response.body) ? response.body.length : 'N/A';
        console.log(`   ✅ ${endpoint.name}: SUCCESS (${count} records)`);
      } else if (response.status === 404) {
        console.log(`   ⚠️  ${endpoint.name}: 404 - ${response.body?.message || 'Not found'}`);
      } else if (response.status === 500) {
        console.log(`   ❌ ${endpoint.name}: 500 - ${response.body?.message || 'Server error'}`);
      } else {
        console.log(`   ❌ ${endpoint.name}: ${response.status} - ${JSON.stringify(response.body)}`);
      }
    }

    // Test POST endpoint for medical communications
    console.log('\n3. 💬 Testing POST Medical Communication...');
    const postResponse = await makeRequest('POST', '/api/medical-communications', {
      type: 'general_message',
      priority: 'normal',
      originalContent: {
        subject: 'Test Message',
        message: 'This is a test message from the patient portal'
      },
      targetLanguages: ['en']
    }, authToken);

    if (postResponse.status === 201) {
      console.log('   ✅ POST Medical Communication: SUCCESS');
      console.log(`      Created ID: ${postResponse.body?.id}`);
    } else {
      console.log(`   ❌ POST Medical Communication: ${postResponse.status} - ${JSON.stringify(postResponse.body)}`);
    }

    console.log('\n================================================');
    console.log('✅ Testing Complete!\n');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testEndpoints();
