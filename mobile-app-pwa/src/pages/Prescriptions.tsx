import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Pill, Calendar, RefreshCw } from 'lucide-react';
import { api } from '../lib/api';
import { format } from 'date-fns';

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadPrescriptions();
  }, []);

  const loadPrescriptions = async () => {
    try {
      const data = await api.getPrescriptions();
      setPrescriptions(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load prescriptions');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'prescribed':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'dispensed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <a className="p-2 hover:bg-blue-700 rounded-lg transition-colors" data-testid="button-back">
              <ArrowLeft size={24} />
            </a>
          </Link>
          <h1 className="text-2xl font-bold">Prescriptions</h1>
        </div>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading prescriptions...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : prescriptions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <Pill className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-600">No prescriptions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {prescriptions.map((prescription, index) => (
              <div key={prescription.id || index} className="bg-white rounded-xl shadow-md p-6" data-testid={`card-prescription-${index}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800" data-testid={`text-medication-${index}`}>
                      {prescription.medicationName || 'Unknown Medication'}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${getStatusColor(prescription.status)}`} data-testid={`status-prescription-${index}`}>
                      {prescription.status || 'Unknown'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Dosage</p>
                      <p className="font-semibold text-sm" data-testid={`text-dosage-${index}`}>
                        {prescription.dosage || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Frequency</p>
                      <p className="font-semibold text-sm" data-testid={`text-frequency-${index}`}>
                        {prescription.frequency || 'N/A'}
                      </p>
                    </div>
                  </div>

                  {prescription.prescribedDate && (
                    <div className="flex items-center gap-2 text-gray-600 pt-2">
                      <Calendar size={16} />
                      <span className="text-sm" data-testid={`text-prescribed-date-${index}`}>
                        Prescribed: {format(new Date(prescription.prescribedDate), 'MMM dd, yyyy')}
                      </span>
                    </div>
                  )}

                  {prescription.refills !== undefined && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <RefreshCw size={16} />
                      <span className="text-sm" data-testid={`text-refills-${index}`}>
                        Refills remaining: {prescription.refills}
                      </span>
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
