'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('.rv, .rvfade'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? [el]).filter(
            (n) => n.classList.contains('rv') || n.classList.contains('rvfade'),
          );
          const idx = Math.max(0, siblings.indexOf(el));
          setTimeout(() => el.classList.add('visible'), Math.min(idx, 6) * 90);
          io.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );

    targets.forEach((t) => io.observe(t));

    // Immediately reveal anything already in the viewport
    requestAnimationFrame(() => {
      targets.forEach((t) => {
        if (t.getBoundingClientRect().top < window.innerHeight * 0.95) {
          t.classList.add('visible');
        }
      });
    });

    return () => io.disconnect();
  }, []);

  return ref;
}
