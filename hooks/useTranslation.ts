'use client';

import { useLocale } from '@/lib/i18n-context';
import { translations } from '@/lib/i18n';

export function useTranslation() {
  const { locale, setLocale } = useLocale();
  return { t: translations[locale], locale, setLocale };
}
