'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Portfolio.module.css';

const villas = [
  {
    id: 1,
    tag: 'Signature',
    area: 'Palm Jumeirah',
    name: 'The Alba by Omniyat',
    specs: '3 Beds · 5,404 sqft · Private beach',
    price: 'AED 51M',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 2,
    tag: 'Branded',
    area: 'Business Bay',
    name: 'Jacob & Co Residences',
    specs: '3 Beds · 3,263 sqft',
    price: 'AED 15M',
    gradient: 'linear-gradient(135deg, #1a1006 0%, #2a1d0a 50%, #1a1208 100%)',
  },
  {
    id: 3,
    tag: 'Villa',
    area: 'Dubai',
    name: 'Lunaya',
    specs: '4 Bed Villa · 3,831 sqft · Luxury community',
    price: 'AED 6.8M',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a1a2e 100%)',
  },
  {
    id: 4,
    tag: 'Villa',
    area: 'Grand Polo Club & Resort',
    name: 'Grand Polo Club & Resort',
    specs: '5 Bed Villa · 8,635 sqft',
    price: 'AED 18.8M',
    gradient: 'linear-gradient(135deg, #0f1a0d 0%, #162312 50%, #0d1a0b 100%)',
  },
];

export default function Portfolio() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" ref={ref} className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={`section-label rv`}>
            <span>Selected Portfolio</span>
          </div>
          <h2 className={`${styles.heading} rv`}>Villas &amp; branded residences.</h2>
        </div>
        <p className={`${styles.headerBody} rv`}>
          A rotating selection of off-market and signature listings, curated for serious
          buyers.
        </p>
      </div>

      <div className={styles.grid}>
        {villas.map((v) => (
          <a key={v.id} href="#contact" className={`${styles.card} rv`}>
            <div className={styles.cardImg} style={{ background: v.gradient }}>
              <div className={styles.cardImgOverlay} />
              {/* Decorative elements */}
              <div className={styles.cardPattern} />
            </div>
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span className={styles.cardTag}>{v.tag}</span>
                <span className={styles.cardArea}>{v.area}</span>
              </div>
              <h3 className={styles.cardName}>{v.name}</h3>
              <div className={styles.cardDetails}>
                <span className={styles.cardSpecs}>{v.specs}</span>
                <span className={styles.cardDot} />
                <span className={styles.cardPrice}>{v.price}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
