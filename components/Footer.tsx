'use client';

import { useTranslation } from '@/hooks/useTranslation';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoName}>SALAH</span>
          <span className={styles.logoDivider} />
          <span className={styles.logoSub}>{f.sub}</span>
        </div>
        <nav className={styles.links}>
          <a href="#invest" className={styles.link}>{f.whyDubai}</a>
          <a href="#portfolio" className={styles.link}>{f.portfolio}</a>
          <a href="#calculator" className={styles.link}>{f.calculator}</a>
          <a href="#contact" className={styles.link}>{f.contact}</a>
        </nav>
        <p className={styles.copy}>
          © {year} Salah Private Estates. {f.copy}
        </p>
      </div>
    </footer>
  );
}
