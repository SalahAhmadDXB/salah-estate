'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './InvestmentCase.module.css';

const pillars = [
  {
    value: '0%',
    title: 'Income & Capital Gains Tax',
    body: 'Keep 100% of your rental yield and resale profit.',
  },
  {
    value: '6–9%',
    title: 'Typical Net Rental Yields',
    body: 'Among the highest of any global prime market.',
  },
  {
    value: '100%',
    title: 'Foreign Freehold Ownership',
    body: 'Full ownership in designated freehold zones.',
  },
  {
    value: '10yr',
    title: 'Golden Visa from AED 2M',
    body: 'Long-term residency for you and your family.',
  },
];

const metrics = [
  { label: 'Population growth 2024', value: '+5.2%', pct: 62 },
  { label: 'Annual tourist arrivals', value: '18.7M', pct: 84 },
  { label: 'Transaction volume YoY', value: '+23%', pct: 74 },
];

const bars = [
  { year: '2020', index: 100, height: '46%', shade: 'dim' },
  { year: '2022', index: 131, height: '60%', shade: 'mid' },
  { year: '2024', index: 168, height: '80%', shade: 'bright' },
  { year: '2025', index: '190+', height: '100%', shade: 'peak' },
];

export default function InvestmentCase() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="invest" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={`section-label rv`}>
              <span>The Investment Case</span>
            </div>
            <h2 className={`${styles.heading} rv`}>
              Why the world&apos;s capital is moving to Dubai.
            </h2>
          </div>
          <p className={`${styles.headerBody} rv`}>
            A rare combination of zero tax, political stability, and structural growth has
            made Dubai the most compelling property market on earth.
          </p>
        </div>

        {/* 4-pillar grid */}
        <div className={`${styles.pillars} rv`}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.pillar}>
              <div className={styles.pillarValue}>{p.value}</div>
              <div className={styles.pillarTitle}>{p.title}</div>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className={`${styles.charts} rv`}>
          {/* Bar chart */}
          <div className={styles.chartBar}>
            <div className={styles.chartLabel}>
              Prime Residential Price Index — indexed to 100
            </div>
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

          {/* Metric bars */}
          <div className={styles.metrics}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>{m.label}</span>
                  <span className={styles.metricValue}>{m.value}</span>
                </div>
                <div className={styles.metricTrack}>
                  <div className={styles.metricFill} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
            <p className={styles.disclaimer}>
              Figures are indicative market context for illustration. Salah will share
              verified, current data for your specific opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
