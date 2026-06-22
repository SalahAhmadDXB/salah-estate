'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './About.module.css';

const stats = [
  { value: '6+', label: 'Years in Dubai' },
  { value: '30+', label: 'Families Served' },
  { value: '13', label: 'Nationalities' },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={styles.section}>
      {/* Portrait */}
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
          <div className={styles.badgeLabel}>Advised &amp; Transacted</div>
        </div>
      </div>

      {/* Copy */}
      <div className={styles.copy}>
        <div className={`section-label rv`}>
          <span>The Advisor</span>
        </div>

        <h2 className={`${styles.heading} rv`}>
          A discreet partner for serious capital.
        </h2>

        <p className={`${styles.body} rv`}>
          With over six years guiding high-net-worth families, funds, and first-time
          international buyers into Dubai&apos;s prime real estate, Salah brings a rare
          combination of market depth and personal accountability. No call centres, no mass
          listings — only carefully sourced opportunities, honest numbers, and a relationship
          that lasts well beyond the handover.
        </p>

        <div className={`${styles.statsGrid} rv`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <a href="#contact" className={`${styles.cta} rv`}>
          Arrange a private call →
        </a>
      </div>
    </section>
  );
}
