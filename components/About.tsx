'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './About.module.css';

export default function About() {
  const ref = useScrollReveal<HTMLElement>();
  const { t } = useTranslation();
  const { about } = t;

  return (
    <section ref={ref} className={styles.section}>
      <div className={`${styles.portraitWrap} rv`}>
        <div className={styles.portraitBorder} />
        <div className={styles.portraitImg}>
          <Image
            src="/images/salah-portrait.jpg"
            alt="Salah Ahmad — Senior Real Estate Advisor"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            style={{ objectFit: 'cover', objectPosition: '50% 28%' }}
            priority
          />
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeValue}>AED 63M+</div>
          <div className={styles.badgeLabel}>{about.badge}</div>
        </div>
      </div>

      <div className={styles.copy}>
        <div className="section-label rv"><span>{about.label}</span></div>
        <h2 className={`${styles.heading} rv`}>{about.heading}</h2>
        <p className={`${styles.body} rv`}>{about.body}</p>

        <div className={`${styles.statsGrid} rv`}>
          {about.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <a href="#contact" className={`${styles.cta} rv`}>{about.cta}</a>
      </div>
    </section>
  );
}
