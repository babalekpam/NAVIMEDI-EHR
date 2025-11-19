export type Currency = 
  // Major World Currencies
  | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY' | 'CHF' | 'CAD' | 'AUD' | 'NZD' | 'INR'
  // African Currencies
  | 'ZAR' | 'NGN' | 'EGP' | 'KES' | 'XOF' | 'XAF' | 'MAD' | 'GHS' | 'ETB' | 'TZS' 
  | 'UGX' | 'AOA' | 'BWP' | 'ZMW' | 'RWF' | 'MUR' | 'TND' | 'DZD' | 'LYD'
  // Middle East
  | 'SAR' | 'AED' | 'QAR' | 'KWD' | 'BHD' | 'OMR' | 'JOD' | 'ILS'
  // Latin America
  | 'MXN' | 'BRL' | 'ARS' | 'CLP' | 'COP' | 'PEN'
  // Asia
  | 'SGD' | 'HKD' | 'KRW' | 'THB' | 'MYR' | 'IDR' | 'PHP' | 'VND' | 'PKR' | 'BDT';

const currencySymbols: Record<Currency, string> = {
  // Major World
  USD: '$', EUR: '€', GBP: '£', JPY: '¥', CNY: '¥', CHF: 'Fr', CAD: 'C$', AUD: 'A$', NZD: 'NZ$', INR: '₹',
  // African
  ZAR: 'R', NGN: '₦', EGP: 'E£', KES: 'KSh', XOF: 'CFA', XAF: 'FCFA', MAD: 'DH', GHS: '₵', ETB: 'Br', TZS: 'TSh',
  UGX: 'USh', AOA: 'Kz', BWP: 'P', ZMW: 'ZK', RWF: 'FRw', MUR: '₨', TND: 'DT', DZD: 'DA', LYD: 'LD',
  // Middle East
  SAR: 'SR', AED: 'AED', QAR: 'QR', KWD: 'KD', BHD: 'BD', OMR: 'OMR', JOD: 'JD', ILS: '₪',
  // Latin America
  MXN: 'Mex$', BRL: 'R$', ARS: 'AR$', CLP: 'CLP$', COP: 'COL$', PEN: 'S/',
  // Asia
  SGD: 'S$', HKD: 'HK$', KRW: '₩', THB: '฿', MYR: 'RM', IDR: 'Rp', PHP: '₱', VND: '₫', PKR: '₨', BDT: '৳',
};

const currencyLocales: Record<Currency, string> = {
  // Major World
  USD: 'en-US', EUR: 'de-DE', GBP: 'en-GB', JPY: 'ja-JP', CNY: 'zh-CN', CHF: 'de-CH', CAD: 'en-CA', AUD: 'en-AU', NZD: 'en-NZ', INR: 'en-IN',
  // African
  ZAR: 'en-ZA', NGN: 'en-NG', EGP: 'ar-EG', KES: 'en-KE', XOF: 'fr-SN', XAF: 'fr-CM', MAD: 'ar-MA', GHS: 'en-GH', ETB: 'am-ET', TZS: 'sw-TZ',
  UGX: 'en-UG', AOA: 'pt-AO', BWP: 'en-BW', ZMW: 'en-ZM', RWF: 'rw-RW', MUR: 'en-MU', TND: 'ar-TN', DZD: 'ar-DZ', LYD: 'ar-LY',
  // Middle East
  SAR: 'ar-SA', AED: 'ar-AE', QAR: 'ar-QA', KWD: 'ar-KW', BHD: 'ar-BH', OMR: 'ar-OM', JOD: 'ar-JO', ILS: 'he-IL',
  // Latin America
  MXN: 'es-MX', BRL: 'pt-BR', ARS: 'es-AR', CLP: 'es-CL', COP: 'es-CO', PEN: 'es-PE',
  // Asia
  SGD: 'en-SG', HKD: 'zh-HK', KRW: 'ko-KR', THB: 'th-TH', MYR: 'ms-MY', IDR: 'id-ID', PHP: 'en-PH', VND: 'vi-VN', PKR: 'en-PK', BDT: 'bn-BD',
};

export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  return new Intl.NumberFormat(currencyLocales[currency], {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function getCurrencySymbol(currency: Currency = 'USD'): string {
  return currencySymbols[currency];
}

export function getCurrentCurrency(): Currency {
  return (localStorage.getItem('currency') as Currency) || 'USD';
}

export function setCurrentCurrency(currency: Currency): void {
  localStorage.setItem('currency', currency);
}
