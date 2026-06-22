'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

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
      {/* Parallax background */}
      <div ref={bgRef} className={styles.bg} />

      {/* Gradient overlays */}
      <div className={styles.overlayH} />
      <div className={styles.overlayV} />

      {/* Content */}
      <div className={styles.content}>
        <div className={`${styles.eyebrow} rv`}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Dubai · Private Real Estate Advisory</span>
        </div>

        <h1 className={`${styles.headline} rv`}>
          Own a piece of the world&apos;s{' '}
          <em className={styles.headlineGold}>fastest-rising</em> skyline.
        </h1>

        <p className={`${styles.sub} rv`}>
          Tax-free income. Freehold ownership. Double-digit appreciation. I help global
          investors acquire Dubai&apos;s most coveted villas and branded residences — quietly,
          and on the right terms.
        </p>

        <div className={`${styles.actions} rv`}>
          <a href="#portfolio" className={styles.btnPrimary}>
            View the Portfolio
          </a>
          <a href="#calculator" className={styles.btnSecondary}>
            Calculate Your Returns
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
