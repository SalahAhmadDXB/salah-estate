'use client';

import { useLocale } from '@/lib/i18n-context';
import type { Locale } from '@/lib/i18n';
import styles from './LanguageSwitcher.module.css';

const LANGS: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'ru', label: 'RU' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className={styles.switcher}>
      {LANGS.map((l, i) => (
        <span key={l.code} className={styles.item}>
          <button
            onClick={() => setLocale(l.code)}
            className={`${styles.btn} ${locale === l.code ? styles.active : ''}`}
            aria-label={`Switch to ${l.label}`}
          >
            {l.label}
          </button>
          {i < LANGS.length - 1 && <span className={styles.sep} />}
        </span>
      ))}
    </div>
  );
}
