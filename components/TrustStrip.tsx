'use client';

import { useTranslation } from '@/hooks/useTranslation';
import styles from './TrustStrip.module.css';

const developers = ['EMAAR', 'OMNIYAT', 'ELLINGTON', 'MERAAS', 'NAKHEEL', 'ALDAR'];

export default function TrustStrip() {
  const { t } = useTranslation();
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <span className={styles.label}>{t.trustStrip.label}</span>
        <div className={styles.logos}>
          {developers.map((d) => (
            <span key={d} className={styles.logo}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
