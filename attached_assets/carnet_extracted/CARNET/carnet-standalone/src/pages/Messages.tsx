import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, MessageSquare, Send, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { api } from '../lib/api';
import { format } from 'date-fns';
import LanguageCurrencySelector from '../components/LanguageCurrencySelector';

export default function Messages() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const data = await api.getMessages();
      setMessages(data);
    } catch (err: any) {
      setError(err.message || t('common.failedToLoad', { data: t('messages.title').toLowerCase() }));
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await api.sendMessage(subject, message);
      setSubject('');
      setMessage('');
      setShowForm(false);
      loadMessages();
    } catch (err: any) {
      alert(t('messages.failedToSend') + ': ' + err.message);
    } finally {
      setSending(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'normal':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
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
            <h1 className="text-2xl font-bold">{t('messages.title')}</h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageCurrencySelector />
            <button
              onClick={() => setShowForm(!showForm)}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
              data-testid="button-new-message"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        {showForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('messages.newMessage')}</h2>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('messages.subject')}
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  data-testid="input-message-subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  required
                  data-testid="input-message-body"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300"
                  data-testid="button-send"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  data-testid="button-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('messages.loadingMessages')}</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <MessageSquare className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-600">{t('messages.noMessages')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`bg-white rounded-xl shadow-md p-6 ${!msg.isRead ? 'border-l-4 border-blue-600' : ''}`}
                data-testid={`card-message-${index}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800" data-testid={`text-message-subject-${index}`}>
                      {msg.originalContent?.subject || 'No Subject'}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(msg.priority)}`} data-testid={`priority-message-${index}`}>
                        {msg.priority || 'Normal'}
                      </span>
                      {!msg.isRead && (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {msg.originalContent?.message && (
                    <p className="text-gray-700 text-sm" data-testid={`text-message-preview-${index}`}>
                      {msg.originalContent.message.substring(0, 150)}
                      {msg.originalContent.message.length > 150 ? '...' : ''}
                    </p>
                  )}

                  {msg.createdAt && (
                    <div className="flex items-center gap-2 text-gray-600 pt-2 border-t mt-3">
                      <Calendar size={16} />
                      <span className="text-sm" data-testid={`text-message-date-${index}`}>
                        {format(new Date(msg.createdAt), 'MMM dd, yyyy h:mm a')}
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
