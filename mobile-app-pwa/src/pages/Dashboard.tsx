import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { User, Calendar, Pill, FileText, MessageSquare, CreditCard, LogOut } from 'lucide-react';
import { api } from '../lib/api';
import { clearToken } from '../lib/auth';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await api.getProfile();
      setProfile(data);
    } catch (err) {
      console.error('Failed to load profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearToken();
    setLocation('/');
  };

  const menuItems = [
    { icon: User, label: 'My Profile', path: '/profile', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Appointments', path: '/appointments', color: 'bg-green-500' },
    { icon: Pill, label: 'Prescriptions', path: '/prescriptions', color: 'bg-purple-500' },
    { icon: FileText, label: 'Lab Results', path: '/lab-results', color: 'bg-orange-500' },
    { icon: MessageSquare, label: 'Messages', path: '/messages', color: 'bg-pink-500' },
    { icon: CreditCard, label: 'Bills', path: '/bills', color: 'bg-indigo-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">NaviMED</h1>
            {loading ? (
              <p className="text-blue-100 text-sm">Loading...</p>
            ) : profile ? (
              <p className="text-blue-100 text-sm" data-testid="text-patient-name">
                Welcome, {profile.firstName} {profile.lastName}
              </p>
            ) : (
              <p className="text-blue-100 text-sm">Patient Portal</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            data-testid="button-logout"
          >
            <LogOut size={24} />
          </button>
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Access</h2>
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow" data-testid={`card-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">{item.label}</h3>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
