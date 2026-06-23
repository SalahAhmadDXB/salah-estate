'use client';

import { useState, useCallback } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import type { Locale } from '@/lib/i18n';
import styles from './Calculator.module.css';

function fmtAED(n: number): string {
  const v = Math.round(n);
  if (Math.abs(v) >= 1_000_000)
    return 'AED ' + (v / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  return 'AED ' + v.toLocaleString('en-US');
}

function yearsLabel(years: number, locale: Locale, yearSing: string, yearPlur: string): string {
  if (locale === 'ru') {
    if (years === 1) return `1 Год`;
    if (years >= 2 && years <= 4) return `${years} Года`;
    return `${years} Лет`;
  }
  return years + ' ' + (years === 1 ? yearSing : yearPlur);
}

export default function Calculator() {
  const { t, locale } = useTranslation();
  const calc = t.calculator;

  const [price, setPrice] = useState(5_000_000);
  const [yieldPct, setYieldPct] = useState(7);
  const [apprPct, setApprPct] = useState(8);
  const [years, setYears] = useState(5);

  const yrsLabel = yearsLabel(years, locale, calc.year, calc.years);

  const annualRent = price * yieldPct / 100;
  const totalRent = annualRent * years;
  const projValue = price * Math.pow(1 + apprPct / 100, years);
  const capGain = projValue - price;
  const totalReturn = totalRent + capGain;
  const roiPct = Math.round((totalReturn / price) * 100);

  const sliders = [
    {
      label: calc.price,
      display: fmtAED(price),
      min: 1_000_000, max: 50_000_000, step: 250_000,
      value: price, onChange: (v: number) => setPrice(v),
      rangeMin: calc.priceMin, rangeMax: calc.priceMax,
    },
    {
      label: calc.yieldLabel,
      display: yieldPct.toFixed(1) + '%',
      min: 3, max: 12, step: 0.1,
      value: yieldPct, onChange: (v: number) => setYieldPct(v),
      rangeMin: '3%', rangeMax: '12%',
    },
    {
      label: calc.appreciation,
      display: apprPct.toFixed(1) + '%',
      min: 0, max: 15, step: 0.1,
      value: apprPct, onChange: (v: number) => setApprPct(v),
      rangeMin: '0%', rangeMax: '15%',
    },
    {
      label: calc.holding,
      display: yrsLabel,
      min: 1, max: 20, step: 1,
      value: years, onChange: (v: number) => setYears(v),
      rangeMin: calc.holdMin, rangeMax: calc.holdMax,
    },
  ];

  const breakdown = [
    { label: calc.annualRent, value: fmtAED(annualRent) },
    { label: `${calc.totalRent} ${yrsLabel}`, value: fmtAED(totalRent) },
    { label: calc.capitalGain, value: fmtAED(capGain) },
    { label: calc.projValue, value: fmtAED(projValue), highlight: true },
  ];

  const buildMsg = useCallback(() =>
    `Hello Salah! I used your ROI calculator.\n\nProperty price: ${fmtAED(price)}\nRental yield: ${yieldPct.toFixed(1)}%\nAppreciation: ${apprPct.toFixed(1)}%\nHolding period: ${yrsLabel}\nProjected total return: ${fmtAED(totalReturn)}\nROI: ${roiPct}%\n\nI'd like to discuss this scenario.`,
    [price, yieldPct, apprPct, yrsLabel, totalReturn, roiPct]
  );

  return (
    <section id="calculator" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <div className="section-label"><span>{calc.label}</span></div>
        </div>
        <h2 className={styles.heading}>{calc.heading}</h2>

        <div className={styles.layout}>
          <div className={styles.inputs}>
            {sliders.map((s) => (
              <div key={s.label} className={styles.sliderRow}>
                <div className={styles.sliderHeader}>
                  <label className={styles.sliderLabel}>{s.label}</label>
                  <span className={styles.sliderValue}>{s.display}</span>
                </div>
                <input
                  type="range"
                  min={s.min} max={s.max} step={s.step}
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

          <div className={styles.results}>
            <div className={styles.resultLabel}>
              {calc.resultLabel} {yrsLabel}
            </div>
            <div className={styles.resultTotal}>{fmtAED(totalReturn)}</div>
            <div className={styles.roiBadge}>
              <span className={styles.roiBadgeLabel}>{calc.totalRoi}</span>
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
              {calc.cta}
            </a>
            <p className={styles.disclaimer}>{calc.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
