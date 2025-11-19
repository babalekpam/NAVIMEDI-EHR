import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { api } from '../lib/api';
import { clearToken } from '../lib/auth';
import LanguageCurrencySelector from '../components/LanguageCurrencySelector';

export default function Dashboard() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      await api.getProfile();
    } catch (err) {
      console.error('Failed to load profile:', err);
    }
  };

  const handleLogout = () => {
    clearToken();
    setLocation('/');
  };

  const menuItems = [
    { icon: '/icon-doctors.png', label: t('dashboard.doctors'), path: '/profile' },
    { icon: '/icon-appointments.png', label: t('dashboard.appointments'), path: '/appointments' },
    { icon: '/icon-messages.png', label: t('dashboard.messages'), path: '/messages' },
    { icon: '/icon-prescription.png', label: t('dashboard.prescription'), path: '/prescriptions' },
    { icon: '/icon-health-articles.png', label: t('dashboard.healthArticles'), path: '/lab-results' },
    { icon: '/icon-billing.png', label: t('dashboard.billing'), path: '/bills' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="bg-blue-400 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex-shrink-0">
                <LanguageCurrencySelector />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide flex-1 text-center">
                {t('dashboard.title')}
              </h1>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-blue-500 rounded-lg transition-colors text-white flex-shrink-0"
                data-testid="button-logout"
                title={t('common.logout')}
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>

          <Link href="/profile">
            <a className="block w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-xl text-xl tracking-wide transition-colors shadow-lg text-center cursor-pointer">
              {t('dashboard.getStarted')}
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div 
                className="block bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer" 
                data-testid={`card-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-center text-sm uppercase tracking-wide">
                  {item.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
