'use client';

import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const navLinks = [
  { href: '#invest', label: 'Why Dubai' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#calculator', label: 'ROI Calculator' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

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
          <a href="#contact" className={styles.cta} onClick={close}>
            Book a Consultation
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
