import{j as e,bR as n,h as t,cn as l,s as d,U as c,C as s,d as a,e as i,f as m,g as r,b_ as o,cr as h,S as x}from"./index-B4rk5nfq.js";function j(){return e.jsx("div",{className:"min-h-screen bg-gray-50",children:e.jsx("section",{className:"py-12",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx(n,{href:"/support/documentation",children:e.jsxs(t,{variant:"ghost",className:"mb-4",children:[e.jsx(l,{className:"w-4 h-4 mr-2"}),"Back to Documentation"]})}),e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"API Documentation"}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(d,{className:"w-4 h-4"}),e.jsx("span",{children:"30 min read"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(c,{className:"w-4 h-4"}),e.jsx("span",{children:"Advanced"})]})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs(s,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"NAVIMED REST API"}),e.jsx(m,{children:"Complete API reference for healthcare platform integration"})]}),e.jsxs(r,{children:[e.jsx("p",{children:"The NAVIMED API provides secure, RESTful endpoints for integrating with your healthcare management platform. Built with HIPAA compliance and enterprise security in mind."}),e.jsxs("div",{className:"mt-4 p-4 bg-blue-50 rounded-lg",children:[e.jsxs("p",{className:"text-blue-800",children:[e.jsx("strong",{children:"Base URL:"})," https://api.navimed.com/v1"]}),e.jsxs("p",{className:"text-blue-800",children:[e.jsx("strong",{children:"Authentication:"})," Bearer Token (JWT)"]}),e.jsxs("p",{className:"text-blue-800",children:[e.jsx("strong",{children:"Rate Limit:"})," 1000 requests/hour"]})]})]})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsxs(i,{className:"flex items-center gap-2",children:[e.jsx(o,{className:"w-5 h-5"}),"Authentication"]})}),e.jsxs(r,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"API Key Setup"}),e.jsx("p",{className:"text-gray-600 mb-3",children:"Generate your API key from the Settings > API Keys section in your NAVIMED dashboard."}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm",children:e.jsx("pre",{children:`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.navimed.com/v1/patients`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Authentication Response"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm",children:e.jsx("pre",{children:`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "user": {
    "id": "user_123",
    "role": "physician",
    "organization": "metro_general"
  }
}`})})]})]})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsxs(i,{className:"flex items-center gap-2",children:[e.jsx(h,{className:"w-5 h-5"}),"Patient API Endpoints"]})}),e.jsxs(r,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"GET /patients"}),e.jsx("p",{className:"text-gray-600 mb-3",children:"Retrieve a list of patients for your organization."}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mb-3",children:e.jsx("pre",{children:`GET /v1/patients?page=1&limit=50&search=john

Response:
{
  "data": [
    {
      "id": "pat_123",
      "mrn": "MRN-001234",
      "firstName": "John",
      "lastName": "Doe",
      "dateOfBirth": "1980-05-15",
      "phone": "555-0123",
      "email": "john.doe@email.com",
      "createdAt": "2025-01-15T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 156,
    "totalPages": 4
  }
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"POST /patients"}),e.jsx("p",{className:"text-gray-600 mb-3",children:"Create a new patient record."}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm",children:e.jsx("pre",{children:`POST /v1/patients
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "dateOfBirth": "1985-03-20",
  "phone": "555-0124",
  "email": "jane.smith@email.com",
  "address": {
    "street": "123 Main St",
    "city": "Springfield",
    "state": "IL",
    "zipCode": "62701"
  },
  "insuranceProvider": "Blue Cross",
  "medicalHistory": ["diabetes", "hypertension"]
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"GET /patients/:id"}),e.jsx("p",{className:"text-gray-600 mb-3",children:"Get detailed information for a specific patient."}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm",children:e.jsx("pre",{children:`GET /v1/patients/pat_123

Response:
{
  "id": "pat_123",
  "mrn": "MRN-001234",
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1980-05-15",
  "medicalHistory": ["diabetes", "hypertension"],
  "allergies": ["penicillin"],
  "appointments": [...],
  "prescriptions": [...],
  "labResults": [...]
}`})})]})]})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsxs(i,{className:"flex items-center gap-2",children:[e.jsx(x,{className:"w-5 h-5"}),"Security & Compliance"]})}),e.jsxs(r,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"HIPAA Compliance"}),e.jsxs("ul",{className:"space-y-1 text-gray-600 ml-4",children:[e.jsx("li",{children:"• All API communications use TLS 1.3 encryption"}),e.jsx("li",{children:"• Patient data is encrypted at rest using AES-256"}),e.jsx("li",{children:"• Access logs maintained for all API requests"}),e.jsx("li",{children:"• Role-based access control enforced"}),e.jsx("li",{children:"• Business Associate Agreement (BAA) required"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Error Handling"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm",children:e.jsx("pre",{children:`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid patient data provided",
    "details": [
      {
        "field": "dateOfBirth",
        "message": "Must be a valid date in YYYY-MM-DD format"
      }
    ]
  }
}`})})]})]})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(i,{children:"SDK & Libraries"})}),e.jsx(r,{className:"space-y-4",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Node.js SDK"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded text-sm",children:e.jsx("pre",{children:"npm install @navimed/node-sdk"})})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Python SDK"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded text-sm",children:e.jsx("pre",{children:"pip install navimed-python"})})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"PHP SDK"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded text-sm",children:e.jsx("pre",{children:"composer require navimed/php-sdk"})})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"C# SDK"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded text-sm",children:e.jsx("pre",{children:"Install-Package NaviMed.SDK"})})]})]})})]})]})]})})})}export{j as ApiDocs};
