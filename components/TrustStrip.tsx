import styles from './TrustStrip.module.css';

const developers = ['EMAAR', 'OMNIYAT', 'ELLINGTON', 'MERAAS', 'NAKHEEL', 'ALDAR'];

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <span className={styles.label}>Trusted access to Dubai&apos;s leading developers</span>
        <div className={styles.logos}>
          {developers.map((d) => (
            <span key={d} className={styles.logo}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
