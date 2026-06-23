'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './Lifestyle.module.css';

const images = [
  '/images/life-beach.jpg',
  '/images/life-dining.jpg',
  '/images/life-marina.jpg',
  '/images/life-interiors.jpg',
  '/images/life-golf.jpg',
];

export default function Lifestyle() {
  const ref = useScrollReveal<HTMLElement>();
  const { t } = useTranslation();
  const { lifestyle } = t;

  return (
    <section ref={ref} className={styles.section}>
      <div className={`${styles.header} rv`}>
        <span className={styles.label}>{lifestyle.label}</span>
        <h2 className={styles.heading}>{lifestyle.heading}</h2>
        <p className={styles.body}>{lifestyle.body}</p>
      </div>

      <div className={`${styles.mosaic} rv`}>
        {lifestyle.slots.map((label, i) => (
          <div
            key={label}
            className={`${styles.slot} ${i === 0 ? styles.slotTall : ''}`}
            aria-label={label}
          >
            <Image
              src={images[i]}
              alt={label}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.slotGlow} />
            <span className={styles.slotLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
