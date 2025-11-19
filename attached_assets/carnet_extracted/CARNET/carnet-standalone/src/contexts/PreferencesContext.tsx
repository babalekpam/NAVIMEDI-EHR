import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency, getCurrentCurrency, setCurrentCurrency } from '../lib/currency';

interface PreferencesContextType {
  language: string;
  setLanguage: (lang: string) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language);
  const [currency, setCurrencyState] = useState<Currency>(getCurrentCurrency());

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  const setCurrency = (curr: Currency) => {
    setCurrentCurrency(curr);
    setCurrencyState(curr);
  };

  useEffect(() => {
    setLanguageState(i18n.language);
  }, [i18n.language]);

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, currency, setCurrency }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }
  return context;
}
