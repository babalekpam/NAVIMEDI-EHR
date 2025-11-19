import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, CreditCard, Calendar, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { api } from '../lib/api';
import { format } from 'date-fns';
import { usePreferences } from '../contexts/PreferencesContext';
import { formatCurrency as formatCurrencyUtil } from '../lib/currency';
import { translateStatus } from '../lib/statusTranslations';
import LanguageCurrencySelector from '../components/LanguageCurrencySelector';

export default function Bills() {
  const { t } = useTranslation();
  const { currency } = usePreferences();
  const [bills, setBills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadBills();
  }, []);

  const loadBills = async () => {
    try {
      const data = await api.getBills();
      setBills(data);
    } catch (err: any) {
      setError(err.message || t('common.error'));
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'submitted':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'denied':
        return 'bg-red-100 text-red-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: string | number) => {
    if (!amount) return formatCurrencyUtil(0, currency);
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    return formatCurrencyUtil(num, currency);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <a className="p-2 hover:bg-blue-700 rounded-lg transition-colors" data-testid="button-back">
                <ArrowLeft size={24} />
              </a>
            </Link>
            <h1 className="text-2xl font-bold">{t('bills.title')}</h1>
          </div>
          <LanguageCurrencySelector />
        </div>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('common.loading')}</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : bills.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <CreditCard className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-600">{t('bills.noBills')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">{t('bills.recent')}</h2>
            {bills.map((bill, index) => (
              <div key={bill.id || index} className="bg-white rounded-xl shadow-md p-6" data-testid={`card-bill-${index}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800" data-testid={`text-claim-number-${index}`}>
                      {t('bills.insurance')} #{bill.claimNumber || t('common.unknown')}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${getStatusColor(bill.status)}`} data-testid={`status-bill-${index}`}>
                      {translateStatus(bill.status, t)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">{t('bills.totalCharges')}</p>
                      <p className="font-semibold text-gray-800" data-testid={`text-total-charges-${index}`}>
                        {formatCurrency(bill.totalCharges)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">{t('bills.insurancePaid')}</p>
                      <p className="font-semibold text-green-600" data-testid={`text-insurance-paid-${index}`}>
                        {formatCurrency(bill.insurancePaid)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-blue-600" />
                        <p className="text-xs text-blue-700 font-semibold">{t('bills.yourResponsibility')}</p>
                      </div>
                      <p className="font-bold text-lg text-blue-700" data-testid={`text-patient-responsibility-${index}`}>
                        {formatCurrency(bill.patientResponsibility)}
                      </p>
                    </div>
                  </div>

                  {bill.serviceDate && (
                    <div className="flex items-center gap-2 text-gray-600 pt-2">
                      <Calendar size={16} />
                      <span className="text-sm" data-testid={`text-service-date-${index}`}>
                        {t('bills.serviceDate')}: {format(new Date(bill.serviceDate), 'MMM dd, yyyy')}
                      </span>
                    </div>
                  )}

                  {bill.service && (
                    <div className="pt-2">
                      <p className="text-xs text-gray-600 mb-1">{t('bills.serviceInfo')}</p>
                      <p className="text-sm text-gray-800">{bill.service}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
