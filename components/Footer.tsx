import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoName}>SALAH</span>
          <span className={styles.logoDivider} />
          <span className={styles.logoSub}>Private Estates · Dubai</span>
        </div>
        <nav className={styles.links}>
          <a href="#invest" className={styles.link}>Why Dubai</a>
          <a href="#portfolio" className={styles.link}>Portfolio</a>
          <a href="#calculator" className={styles.link}>ROI Calculator</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </nav>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Salah Private Estates. RERA-registered advisory. All figures indicative.
        </p>
      </div>
    </footer>
  );
}
