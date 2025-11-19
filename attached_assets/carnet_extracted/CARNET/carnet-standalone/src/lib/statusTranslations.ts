import { TFunction} from 'i18next';

export function translateStatus(status: string | undefined, t: TFunction): string {
  if (!status) return t('common.unknown');
  
  const statusKey = status.toLowerCase().replace(/_/g, '').replace(/\s+/g, '');
  
  const statusMap: Record<string, string> = {
    'scheduled': 'status.scheduled',
    'completed': 'status.completed',
    'cancelled': 'status.cancelled',
    'pending': 'status.pending',
    'paid': 'status.paid',
    'overdue': 'status.overdue',
    'denied': 'status.denied',
    'approved': 'status.approved',
    'submitted': 'status.submitted',
    'active': 'status.active',
    'prescribed': 'status.prescribed',
    'dispensed': 'status.dispensed',
    'inprogress': 'status.inProgress',
    'normal': 'status.normal',
    'abnormal': 'status.abnormal',
    'urgent': 'status.urgent',
    'high': 'status.high',
    'routine': 'status.routine',
    'low': 'status.low'
  };
  
  return t(statusMap[statusKey] || 'common.unknown');
}
