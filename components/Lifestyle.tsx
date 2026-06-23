'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Lifestyle.module.css';

const slots = [
  {
    id: 1,
    label: 'Beachfront',
    image: '/images/life-beach.jpg',
    span: 'row',
  },
  {
    id: 2,
    label: 'Fine Dining',
    image: '/images/life-dining.jpg',
  },
  {
    id: 3,
    label: 'Marina & Yachts',
    image: '/images/life-marina.jpg',
  },
  {
    id: 4,
    label: 'Luxury Interiors',
    image: '/images/life-interiors.jpg',
  },
  {
    id: 5,
    label: 'Golf & Wellness',
    image: '/images/life-golf.jpg',
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
            aria-label={s.label}
          >
            <Image
              src={s.image}
              alt={s.label}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.slotGlow} />
            <span className={styles.slotLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
