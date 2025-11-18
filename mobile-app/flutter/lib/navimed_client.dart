import 'dart:convert';
import 'package:http/http.dart' as http;

class NaviMEDClient {
  static const String baseUrl = 'https://navimedi.org/api';
  String? _token;

  void setToken(String token) {
    _token = token;
  }

  String? getToken() {
    return _token;
  }

  void clearToken() {
    _token = null;
  }

  Map<String, String> _getHeaders() {
    final headers = {
      'Content-Type': 'application/json',
    };
    if (_token != null) {
      headers['Authorization'] = 'Bearer $_token';
    }
    return headers;
  }

  Future<Map<String, dynamic>> login(String username, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({
        'username': username,
        'password': password,
      }),
    );

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setToken(data['token']);
      return data;
    } else {
      throw Exception('Login failed: ${response.body}');
    }
  }

  Future<Map<String, dynamic>> forgotPassword(String email) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/forgot-password'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'email': email}),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Password reset failed');
    }
  }

  Future<Map<String, dynamic>> getProfile() async {
    final response = await http.get(
      Uri.parse('$baseUrl/patient/profile'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load profile');
    }
  }

  Future<List<dynamic>> getAppointments() async {
    final response = await http.get(
      Uri.parse('$baseUrl/patient/appointments'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load appointments');
    }
  }

  Future<Map<String, dynamic>> bookAppointment(Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse('$baseUrl/appointments'),
      headers: _getHeaders(),
      body: json.encode(data),
    );

    if (response.statusCode == 201 || response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to book appointment');
    }
  }

  Future<Map<String, dynamic>> cancelAppointment(
      String appointmentId, String cancellationReason) async {
    final response = await http.patch(
      Uri.parse('$baseUrl/appointments/$appointmentId'),
      headers: _getHeaders(),
      body: json.encode({
        'status': 'cancelled',
        'cancellationReason': cancellationReason,
      }),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to cancel appointment');
    }
  }

  Future<List<dynamic>> getPrescriptions() async {
    final response = await http.get(
      Uri.parse('$baseUrl/patient/prescriptions'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load prescriptions');
    }
  }

  Future<Map<String, dynamic>> requestRefill(
      String prescriptionId, String? notes) async {
    final response = await http.patch(
      Uri.parse('$baseUrl/prescriptions/$prescriptionId'),
      headers: _getHeaders(),
      body: json.encode({
        'status': 'refill_requested',
        'notes': notes ?? 'Patient requested refill',
      }),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to request refill');
    }
  }

  Future<List<dynamic>> getLabResults() async {
    final response = await http.get(
      Uri.parse('$baseUrl/patient/lab-results'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load lab results');
    }
  }

  Future<List<dynamic>> getMessages() async {
    final response = await http.get(
      Uri.parse('$baseUrl/medical-communications'),
      headers: _getHeaders(),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load messages');
    }
  }

  Future<Map<String, dynamic>> sendMessage(Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse('$baseUrl/medical-communications'),
      headers: _getHeaders(),
      body: json.encode({
        ...data,
        'type': data['type'] ?? 'general_message',
        'priority': data['priority'] ?? 'normal',
      }),
    );

    if (response.statusCode == 201 || response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to send message');
    }
  }

  Future<Map<String, dynamic>> markMessageAsRead(String messageId) async {
    final response = await http.patch(
      Uri.parse('$baseUrl/medical-communications/$messageId'),
      headers: _getHeaders(),
      body: json.encode({'isRead': true}),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to mark message as read');
    }
  }
}
