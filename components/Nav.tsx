'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Nav.module.css';

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  const navLinks = [
    { href: '#invest', label: t.nav.whyDubai },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#calculator', label: t.nav.calculator },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#top" className={styles.logo} onClick={close}>
          <span className={styles.logoName}>SALAH</span>
          <span className={styles.logoDivider} />
          <span className={styles.logoSub}>Private Estates</span>
        </a>

        <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.link} onClick={close}>
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a href="#contact" className={styles.cta} onClick={close}>
            {t.nav.book}
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && <div className={styles.overlay} onClick={close} aria-hidden />}
    </>
  );
}
