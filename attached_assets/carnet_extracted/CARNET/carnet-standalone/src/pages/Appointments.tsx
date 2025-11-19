import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { api } from '../lib/api';
import { format } from 'date-fns';
import LanguageCurrencySelector from '../components/LanguageCurrencySelector';
import { translateStatus } from '../lib/statusTranslations';

export default function Appointments() {
  const { t } = useTranslation();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const data = await api.getAppointments();
      setAppointments(data);
    } catch (err: any) {
      setError(err.message || t('common.failedToLoad', { data: t('appointments.title').toLowerCase() }));
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
            <h1 className="text-2xl font-bold">{t('appointments.title')}</h1>
          </div>
          <LanguageCurrencySelector />
        </div>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('appointments.loadingAppointments')}</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <Calendar className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-600">{t('appointments.noAppointments')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div key={appointment.id || index} className="bg-white rounded-xl shadow-md p-6" data-testid={`card-appointment-${index}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800 capitalize" data-testid={`text-appointment-type-${index}`}>
                      {appointment.appointmentType?.replace(/_/g, ' ') || t('appointments.appointment')}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${getStatusColor(appointment.status)}`} data-testid={`status-appointment-${index}`}>
                      {translateStatus(appointment.status, t)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="text-sm" data-testid={`text-appointment-date-${index}`}>
                      {appointment.appointmentDate
                        ? format(new Date(appointment.appointmentDate), 'MMM dd, yyyy')
                        : t('appointments.appointmentDate')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm" data-testid={`text-appointment-time-${index}`}>
                      {appointment.appointmentDate
                        ? format(new Date(appointment.appointmentDate), 'h:mm a')
                        : t('appointments.appointmentTime')}
                    </span>
                  </div>

                  {appointment.reason && (
                    <div className="flex items-start gap-2 text-gray-600 mt-3">
                      <MapPin size={16} className="mt-0.5" />
                      <span className="text-sm" data-testid={`text-appointment-reason-${index}`}>{appointment.reason}</span>
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
