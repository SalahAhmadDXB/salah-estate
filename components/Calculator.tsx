'use client';

import { useState, useCallback } from 'react';
import styles from './Calculator.module.css';

function fmtAED(n: number): string {
  const v = Math.round(n);
  if (Math.abs(v) >= 1_000_000)
    return 'AED ' + (v / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  return 'AED ' + v.toLocaleString('en-US');
}

export default function Calculator() {
  const [price, setPrice] = useState(5_000_000);
  const [yieldPct, setYieldPct] = useState(7);
  const [apprPct, setApprPct] = useState(8);
  const [years, setYears] = useState(5);

  const annualRent = price * yieldPct / 100;
  const totalRent = annualRent * years;
  const projValue = price * Math.pow(1 + apprPct / 100, years);
  const capGain = projValue - price;
  const totalReturn = totalRent + capGain;
  const roiPct = Math.round((totalReturn / price) * 100);
  const yearsLabel = years + (years === 1 ? ' Year' : ' Years');

  const sliders = [
    {
      label: 'Property Price',
      display: fmtAED(price),
      min: 1_000_000, max: 50_000_000, step: 250_000,
      value: price,
      onChange: (v: number) => setPrice(v),
      rangeMin: 'AED 1M', rangeMax: 'AED 50M',
    },
    {
      label: 'Annual Rental Yield',
      display: yieldPct.toFixed(1) + '%',
      min: 3, max: 12, step: 0.1,
      value: yieldPct,
      onChange: (v: number) => setYieldPct(v),
      rangeMin: '3%', rangeMax: '12%',
    },
    {
      label: 'Annual Appreciation',
      display: apprPct.toFixed(1) + '%',
      min: 0, max: 15, step: 0.1,
      value: apprPct,
      onChange: (v: number) => setApprPct(v),
      rangeMin: '0%', rangeMax: '15%',
    },
    {
      label: 'Holding Period',
      display: yearsLabel,
      min: 1, max: 20, step: 1,
      value: years,
      onChange: (v: number) => setYears(v),
      rangeMin: '1 yr', rangeMax: '20 yrs',
    },
  ];

  const breakdown = [
    { label: 'Annual rental income', value: fmtAED(annualRent) },
    { label: `Rental income · ${yearsLabel}`, value: fmtAED(totalRent) },
    { label: 'Capital appreciation', value: fmtAED(capGain) },
    { label: 'Projected property value', value: fmtAED(projValue), highlight: true },
  ];

  const buildMsg = useCallback(() =>
    `Hello Salah! I used your ROI calculator.\n\nProperty price: ${fmtAED(price)}\nRental yield: ${yieldPct.toFixed(1)}%\nAppreciation: ${apprPct.toFixed(1)}%\nHolding period: ${yearsLabel}\nProjected total return: ${fmtAED(totalReturn)}\nROI: ${roiPct}%\n\nI'd like to discuss this scenario.`,
    [price, yieldPct, apprPct, years, yearsLabel, totalReturn, roiPct]
  );

  return (
    <section id="calculator" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <div className={`section-label`}>
            <span>Investment Calculator</span>
          </div>
        </div>
        <h2 className={styles.heading}>Model your returns in real time.</h2>

        <div className={styles.layout}>
          {/* Sliders */}
          <div className={styles.inputs}>
            {sliders.map((s) => (
              <div key={s.label} className={styles.sliderRow}>
                <div className={styles.sliderHeader}>
                  <label className={styles.sliderLabel}>{s.label}</label>
                  <span className={styles.sliderValue}>{s.display}</span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.onChange(+e.target.value)}
                  aria-label={s.label}
                />
                <div className={styles.sliderRange}>
                  <span>{s.rangeMin}</span>
                  <span>{s.rangeMax}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className={styles.results}>
            <div className={styles.resultLabel}>
              Projected total return over {yearsLabel}
            </div>
            <div className={styles.resultTotal}>{fmtAED(totalReturn)}</div>
            <div className={styles.roiBadge}>
              <span className={styles.roiBadgeLabel}>Total ROI</span>
              <span className={styles.roiBadgeValue}>{roiPct}%</span>
            </div>

            <div className={styles.breakdown}>
              {breakdown.map((b) => (
                <div
                  key={b.label}
                  className={`${styles.breakdownRow} ${b.highlight ? styles.breakdownRowHighlight : ''}`}
                >
                  <span className={b.highlight ? styles.breakdownLabelGold : styles.breakdownLabelMuted}>
                    {b.label}
                  </span>
                  <span className={b.highlight ? styles.breakdownValGold : styles.breakdownValCream}>
                    {b.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/971523243294?text=${encodeURIComponent(buildMsg())}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Discuss this scenario with Salah
            </a>
            <p className={styles.disclaimer}>
              Estimates only. Rental income shown gross of fees; appreciation compounds annually.
              Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
