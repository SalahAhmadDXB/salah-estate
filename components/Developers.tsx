'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Developers.module.css';

const developers = [
  { name: 'EMAAR', note: 'Downtown · Hills' },
  { name: 'OMNIYAT', note: 'Ultra-prime' },
  { name: 'ELLINGTON', note: 'Design-led' },
  { name: 'MERAAS', note: 'Waterfront' },
  { name: 'NAKHEEL', note: 'The Palm' },
  { name: 'ALDAR', note: 'Abu Dhabi' },
  { name: 'MODON', note: 'Urban living' },
  { name: 'ARADA', note: 'Sharjah · Dubai' },
  { name: 'FOUR SEASONS', note: 'Branded residences' },
  { name: 'SOBHA', note: 'Hartland' },
];

export default function Developers() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.label} rv`}>Direct Developer Access</span>
          <h2 className={`${styles.heading} rv`}>
            Priority allocations with Dubai&apos;s most coveted names.
          </h2>
        </div>
        <div className={`${styles.grid} rv`}>
          {developers.map((d) => (
            <div key={d.name} className={styles.cell}>
              <span className={styles.devName}>{d.name}</span>
              <span className={styles.devNote}>{d.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
