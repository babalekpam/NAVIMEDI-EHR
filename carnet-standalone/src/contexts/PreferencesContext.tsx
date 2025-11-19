import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface PreferencesContextType {
  language: string;
  setLanguage: (lang: string) => void;
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<string>(
    localStorage.getItem('carnet_language') || 'en'
  );
  const [fontSize, setFontSizeState] = useState<'small' | 'medium' | 'large'>(
    (localStorage.getItem('carnet_fontSize') as any) || 'medium'
  );

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('carnet_language', lang);
    i18n.changeLanguage(lang);
  };

  const setFontSize = (size: 'small' | 'medium' | 'large') => {
    setFontSizeState(size);
    localStorage.setItem('carnet_fontSize', size);
    
    const root = document.documentElement;
    root.classList.remove('text-sm', 'text-base', 'text-lg');
    
    if (size === 'small') root.classList.add('text-sm');
    else if (size === 'large') root.classList.add('text-lg');
    else root.classList.add('text-base');
  };

  useEffect(() => {
    setFontSize(fontSize);
  }, []);

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, fontSize, setFontSize }}>
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
