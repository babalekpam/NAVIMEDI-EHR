import { useState } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { api } from '../lib/api';
import { saveToken } from '../lib/auth';
import LanguageCurrencySelector from '../components/LanguageCurrencySelector';

export default function Login() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('sarah.johnson@email.com');
  const [password, setPassword] = useState('password123');
  const [tenantId, setTenantId] = useState('SAINT PAUL');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.login({ email, password, tenantId });
      saveToken(response.token);
      setLocation('/dashboard');
    } catch (err: any) {
      setError(err.message || t('login.loginFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <LanguageCurrencySelector />
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <img 
              src="/carnet-logo.png" 
              alt="CARNET Logo" 
              className="mx-auto mb-4 max-w-[200px] h-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.removeAttribute('style'); }}
            />
            <h1 className="text-3xl font-bold text-blue-600 mb-2" style={{ display: 'none' }}>CARNET</h1>
            <p className="text-gray-600">{t('login.title')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('login.email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-testid="input-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('login.password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-testid="input-password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('login.hospital')}
              </label>
              <input
                type="text"
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                data-testid="input-tenant"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" data-testid="error-message">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
              data-testid="button-login"
            >
              {loading ? t('common.signingIn') : t('login.signIn')}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>{t('login.testAccount')}:</p>
            <p className="text-xs mt-1">sarah.johnson@email.com / password123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
