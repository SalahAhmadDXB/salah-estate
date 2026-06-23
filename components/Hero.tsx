'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Hero.module.css';

// Local hero video (Dubai drone footage, 4.8MB)
const VIDEO_URL = '/videos/hero.mp4';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current && y < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${y * 0.18}px) scale(1.06)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      {/* Parallax video background */}
      <div ref={bgRef} className={styles.bg}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          poster="/images/hero-bg.jpg"
          preload="auto"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlays */}
      <div className={styles.overlayH} />
      <div className={styles.overlayV} />

      {/* Content */}
      <div ref={contentRef} className={styles.content}>
        <div className={`${styles.eyebrow} rv`}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>{t.hero.eyebrow}</span>
        </div>

        <h1 className={`${styles.headline} rv`}>
          {t.hero.headline1}{' '}
          <em className={styles.headlineGold}>{t.hero.headlineEm}</em>{' '}
          {t.hero.headline2}
        </h1>

        <p className={`${styles.sub} rv`}>{t.hero.sub}</p>

        <div className={`${styles.actions} rv`}>
          <a href="#portfolio" className={styles.btnPrimary}>
            {t.hero.ctaPrimary}
          </a>
          <a href="#calculator" className={styles.btnSecondary}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollTrack}>
          <span className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
