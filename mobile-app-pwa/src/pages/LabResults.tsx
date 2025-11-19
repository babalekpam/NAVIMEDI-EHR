import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, FileText, Calendar, AlertCircle } from 'lucide-react';
import { api } from '../lib/api';
import { format } from 'date-fns';

export default function LabResults() {
  const [labResults, setLabResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadLabResults();
  }, []);

  const loadLabResults = async () => {
    try {
      const data = await api.getLabResults();
      setLabResults(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load lab results');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'routine':
        return 'bg-blue-100 text-blue-800';
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
          <h1 className="text-2xl font-bold">Lab Results</h1>
        </div>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading lab results...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : labResults.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <FileText className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-600">No lab results found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {labResults.map((result, index) => (
              <div key={result.id || index} className="bg-white rounded-xl shadow-md p-6" data-testid={`card-lab-result-${index}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800" data-testid={`text-test-name-${index}`}>
                      {result.testName || 'Unknown Test'}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(result.status)}`} data-testid={`status-lab-result-${index}`}>
                        {result.status || 'Unknown'}
                      </span>
                      {result.priority && (
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(result.priority)}`} data-testid={`priority-lab-result-${index}`}>
                          {result.priority}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {result.orderedDate && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm" data-testid={`text-ordered-date-${index}`}>
                        Ordered: {format(new Date(result.orderedDate), 'MMM dd, yyyy')}
                      </span>
                    </div>
                  )}

                  {result.completedDate && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm" data-testid={`text-completed-date-${index}`}>
                        Completed: {format(new Date(result.completedDate), 'MMM dd, yyyy')}
                      </span>
                    </div>
                  )}

                  {result.notes && (
                    <div className="flex items-start gap-2 text-gray-600 pt-2 border-t mt-3">
                      <AlertCircle size={16} className="mt-0.5" />
                      <span className="text-sm" data-testid={`text-notes-${index}`}>{result.notes}</span>
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
