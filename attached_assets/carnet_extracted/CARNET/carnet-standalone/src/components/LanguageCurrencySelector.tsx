import { Globe, DollarSign } from 'lucide-react';
import { usePreferences } from '../contexts/PreferencesContext';
import { Currency } from '../lib/currency';

export default function LanguageCurrencySelector() {
  const { language, setLanguage, currency, setCurrency } = usePreferences();

  return (
    <div className="flex gap-3 items-center">
      <div className="flex items-center gap-2">
        <Globe size={18} className="text-white opacity-80" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white bg-opacity-20 text-white border border-white border-opacity-30 rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-opacity-30 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          <option value="en" className="text-gray-900">English</option>
          <option value="es" className="text-gray-900">Español</option>
          <option value="fr" className="text-gray-900">Français</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <DollarSign size={18} className="text-white opacity-80" />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="bg-white bg-opacity-20 text-white border border-white border-opacity-30 rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-opacity-30 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          <optgroup label="Major World Currencies" className="text-gray-900">
            <option value="USD" className="text-gray-900">USD - US Dollar ($)</option>
            <option value="EUR" className="text-gray-900">EUR - Euro (€)</option>
            <option value="GBP" className="text-gray-900">GBP - British Pound (£)</option>
            <option value="JPY" className="text-gray-900">JPY - Japanese Yen (¥)</option>
            <option value="CNY" className="text-gray-900">CNY - Chinese Yuan (¥)</option>
            <option value="CHF" className="text-gray-900">CHF - Swiss Franc (Fr)</option>
            <option value="CAD" className="text-gray-900">CAD - Canadian Dollar (C$)</option>
            <option value="AUD" className="text-gray-900">AUD - Australian Dollar (A$)</option>
            <option value="NZD" className="text-gray-900">NZD - New Zealand Dollar (NZ$)</option>
            <option value="INR" className="text-gray-900">INR - Indian Rupee (₹)</option>
          </optgroup>
          
          <optgroup label="African Currencies" className="text-gray-900">
            <option value="ZAR" className="text-gray-900">ZAR - South African Rand (R)</option>
            <option value="NGN" className="text-gray-900">NGN - Nigerian Naira (₦)</option>
            <option value="EGP" className="text-gray-900">EGP - Egyptian Pound (E£)</option>
            <option value="KES" className="text-gray-900">KES - Kenyan Shilling (KSh)</option>
            <option value="XOF" className="text-gray-900">XOF - West African CFA Franc (CFA)</option>
            <option value="XAF" className="text-gray-900">XAF - Central African CFA Franc (FCFA)</option>
            <option value="MAD" className="text-gray-900">MAD - Moroccan Dirham (DH)</option>
            <option value="GHS" className="text-gray-900">GHS - Ghanaian Cedi (₵)</option>
            <option value="ETB" className="text-gray-900">ETB - Ethiopian Birr (Br)</option>
            <option value="TZS" className="text-gray-900">TZS - Tanzanian Shilling (TSh)</option>
            <option value="UGX" className="text-gray-900">UGX - Ugandan Shilling (USh)</option>
            <option value="AOA" className="text-gray-900">AOA - Angolan Kwanza (Kz)</option>
            <option value="BWP" className="text-gray-900">BWP - Botswana Pula (P)</option>
            <option value="ZMW" className="text-gray-900">ZMW - Zambian Kwacha (ZK)</option>
            <option value="RWF" className="text-gray-900">RWF - Rwandan Franc (FRw)</option>
            <option value="MUR" className="text-gray-900">MUR - Mauritian Rupee (₨)</option>
            <option value="TND" className="text-gray-900">TND - Tunisian Dinar (DT)</option>
            <option value="DZD" className="text-gray-900">DZD - Algerian Dinar (DA)</option>
            <option value="LYD" className="text-gray-900">LYD - Libyan Dinar (LD)</option>
          </optgroup>
          
          <optgroup label="Middle East Currencies" className="text-gray-900">
            <option value="SAR" className="text-gray-900">SAR - Saudi Riyal (SR)</option>
            <option value="AED" className="text-gray-900">AED - UAE Dirham (AED)</option>
            <option value="QAR" className="text-gray-900">QAR - Qatari Riyal (QR)</option>
            <option value="KWD" className="text-gray-900">KWD - Kuwaiti Dinar (KD)</option>
            <option value="BHD" className="text-gray-900">BHD - Bahraini Dinar (BD)</option>
            <option value="OMR" className="text-gray-900">OMR - Omani Rial (OMR)</option>
            <option value="JOD" className="text-gray-900">JOD - Jordanian Dinar (JD)</option>
            <option value="ILS" className="text-gray-900">ILS - Israeli Shekel (₪)</option>
          </optgroup>
          
          <optgroup label="Latin America Currencies" className="text-gray-900">
            <option value="MXN" className="text-gray-900">MXN - Mexican Peso (Mex$)</option>
            <option value="BRL" className="text-gray-900">BRL - Brazilian Real (R$)</option>
            <option value="ARS" className="text-gray-900">ARS - Argentine Peso (AR$)</option>
            <option value="CLP" className="text-gray-900">CLP - Chilean Peso (CLP$)</option>
            <option value="COP" className="text-gray-900">COP - Colombian Peso (COL$)</option>
            <option value="PEN" className="text-gray-900">PEN - Peruvian Sol (S/)</option>
          </optgroup>
          
          <optgroup label="Asia-Pacific Currencies" className="text-gray-900">
            <option value="SGD" className="text-gray-900">SGD - Singapore Dollar (S$)</option>
            <option value="HKD" className="text-gray-900">HKD - Hong Kong Dollar (HK$)</option>
            <option value="KRW" className="text-gray-900">KRW - South Korean Won (₩)</option>
            <option value="THB" className="text-gray-900">THB - Thai Baht (฿)</option>
            <option value="MYR" className="text-gray-900">MYR - Malaysian Ringgit (RM)</option>
            <option value="IDR" className="text-gray-900">IDR - Indonesian Rupiah (Rp)</option>
            <option value="PHP" className="text-gray-900">PHP - Philippine Peso (₱)</option>
            <option value="VND" className="text-gray-900">VND - Vietnamese Dong (₫)</option>
            <option value="PKR" className="text-gray-900">PKR - Pakistani Rupee (₨)</option>
            <option value="BDT" className="text-gray-900">BDT - Bangladeshi Taka (৳)</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
