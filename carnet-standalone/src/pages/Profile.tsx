import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, User, Phone, Mail, Calendar, Droplet, AlertCircle } from 'lucide-react';
import { api } from '../lib/api';
import { format } from 'date-fns';

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await api.getProfile();
      setProfile(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <a className="p-2 hover:bg-blue-700 rounded-lg transition-colors" data-testid="button-back">
              <ArrowLeft size={24} />
            </a>
          </Link>
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-blue-600" size={40} />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-patient-full-name">
              {profile?.firstName} {profile?.lastName}
            </h2>
            <p className="text-blue-100 mt-1" data-testid="text-mrn">MRN: {profile?.mrn}</p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Calendar className="text-gray-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="font-semibold" data-testid="text-dob">
                  {profile?.dateOfBirth ? format(new Date(profile.dateOfBirth), 'MMM dd, yyyy') : 'N/A'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Droplet className="text-gray-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Blood Type</p>
                <p className="font-semibold" data-testid="text-blood-type">{profile?.bloodType || 'N/A'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="text-gray-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold" data-testid="text-phone">{profile?.phone || 'N/A'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="text-gray-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold" data-testid="text-email">{profile?.email || 'N/A'}</p>
              </div>
            </div>

            {profile?.allergies && profile.allergies.length > 0 && (
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="text-red-500 mt-0.5" size={20} />
                <div>
                  <p className="text-sm text-red-600 font-semibold">Allergies</p>
                  <p className="text-red-700 mt-1" data-testid="text-allergies">
                    {profile.allergies.join(', ')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
