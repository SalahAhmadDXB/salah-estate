'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './InvestmentCase.module.css';

const bars = [
  { year: '2020', index: 100, height: '46%', shade: 'dim' },
  { year: '2022', index: 131, height: '60%', shade: 'mid' },
  { year: '2024', index: 168, height: '80%', shade: 'bright' },
  { year: '2025', index: '190+', height: '100%', shade: 'peak' },
];

const metricPcts = [62, 84, 74];

export default function InvestmentCase() {
  const ref = useScrollReveal<HTMLElement>();
  const { t } = useTranslation();
  const { invest } = t;

  return (
    <section id="invest" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className="section-label rv"><span>{invest.label}</span></div>
            <h2 className={`${styles.heading} rv`}>{invest.heading}</h2>
          </div>
          <p className={`${styles.headerBody} rv`}>{invest.body}</p>
        </div>

        <div className={`${styles.pillars} rv`}>
          {invest.pillars.map((p) => (
            <div key={p.title} className={styles.pillar}>
              <div className={styles.pillarValue}>{p.value}</div>
              <div className={styles.pillarTitle}>{p.title}</div>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.charts} rv`}>
          <div className={styles.chartBar}>
            <div className={styles.chartLabel}>{invest.chartLabel}</div>
            <div className={styles.bars}>
              {bars.map((b) => (
                <div key={b.year} className={styles.barCol}>
                  <span className={`${styles.barIndex} ${b.shade === 'peak' ? styles.barIndexPeak : ''}`}>
                    {b.index}
                  </span>
                  <div
                    className={`${styles.bar} ${styles[`bar_${b.shade}`]}`}
                    style={{ height: b.height }}
                  />
                  <span className={`${styles.barYear} ${b.shade === 'peak' ? styles.barYearPeak : ''}`}>
                    {b.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.metrics}>
            {invest.metrics.map((m, i) => (
              <div key={m.label} className={styles.metric}>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>{m.label}</span>
                  <span className={styles.metricValue}>{m.value}</span>
                </div>
                <div className={styles.metricTrack}>
                  <div className={styles.metricFill} style={{ width: `${metricPcts[i]}%` }} />
                </div>
              </div>
            ))}
            <p className={styles.disclaimer}>{invest.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
