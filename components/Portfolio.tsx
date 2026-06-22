'use client';

import Image from 'next/image';
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
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'Branded',
    area: 'Business Bay',
    name: 'Jacob & Co Residences',
    specs: '3 Beds · 3,263 sqft',
    price: 'AED 15M',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'Villa',
    area: 'Dubai',
    name: 'Lunaya',
    specs: '4 Bed Villa · 3,831 sqft · Luxury community',
    price: 'AED 6.8M',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 4,
    tag: 'Villa',
    area: 'Grand Polo Club & Resort',
    name: 'Grand Polo Club & Resort',
    specs: '5 Bed Villa · 8,635 sqft',
    price: 'AED 18.8M',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85&auto=format&fit=crop',
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
            <div className={styles.cardImg}>
              <Image
                src={v.image}
                alt={v.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.cardImgOverlay} />
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
