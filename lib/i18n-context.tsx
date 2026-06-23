'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from './i18n';

type I18nCtx = { locale: Locale; setLocale: (l: Locale) => void };

const I18nContext = createContext<I18nCtx>({ locale: 'en', setLocale: () => {} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useLocale = () => useContext(I18nContext);
