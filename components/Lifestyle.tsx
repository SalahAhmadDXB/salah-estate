'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Lifestyle.module.css';

const slots = [
  {
    id: 1,
    label: 'Beachfront',
    gradient: 'linear-gradient(135deg, #0f2236 0%, #1a3a5c 50%, #0c1e33 100%)',
    span: 'row',
  },
  {
    id: 2,
    label: 'Fine Dining',
    gradient: 'linear-gradient(135deg, #1a1006 0%, #2d1e08 50%, #1a1208 100%)',
  },
  {
    id: 3,
    label: 'Marina & Yachts',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0f2a42 50%, #0c1e33 100%)',
  },
  {
    id: 4,
    label: 'Luxury Interiors',
    gradient: 'linear-gradient(135deg, #1a1208 0%, #1e150a 50%, #141008 100%)',
  },
  {
    id: 5,
    label: 'Golf & Wellness',
    gradient: 'linear-gradient(135deg, #0f1a0d 0%, #162314 50%, #0d1a0b 100%)',
  },
];

export default function Lifestyle() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={styles.section}>
      <div className={`${styles.header} rv`}>
        <span className={styles.label}>The Life</span>
        <h2 className={styles.heading}>More than an asset. A way of living.</h2>
        <p className={styles.body}>
          Marina sunsets, Michelin tables, world-class schools and year-round sun — Dubai
          delivers a lifestyle that justifies the investment on its own.
        </p>
      </div>

      <div className={`${styles.mosaic} rv`}>
        {slots.map((s) => (
          <div
            key={s.id}
            className={`${styles.slot} ${s.span === 'row' ? styles.slotTall : ''}`}
            style={{ background: s.gradient }}
            aria-label={s.label}
          >
            <div className={styles.slotGlow} />
            <span className={styles.slotLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
