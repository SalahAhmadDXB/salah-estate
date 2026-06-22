'use client';

import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Contact.module.css';

const WA_NUMBER = '971523243294';
const EMAIL = 'salah@uniqueproperties.ae';

function buildMessage(name: string, budget: string, msg: string) {
  return (
    `Hello Salah, I'm ${name || '[name]'}. I'm interested in investing in Dubai property.\n` +
    `Budget: ${budget || '[budget]'}.\n` +
    `Looking for: ${msg || '[details]'}.`
  );
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const sendWhatsApp = useCallback(() => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage(name, budget, msg))}`,
      '_blank',
    );
  }, [name, budget, msg]);

  const sendEmail = useCallback(async () => {
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, budget, message: msg }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      setName('');
      setBudget('');
      setMsg('');
    } catch {
      setStatus('error');
    }
  }, [name, budget, msg, status]);

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        {/* Left col */}
        <div className={styles.left}>
          <div className={`section-label rv`}>
            <span>Private Consultation</span>
          </div>
          <h2 className={`${styles.heading} rv`}>
            Let&apos;s find your<br />position in the market.
          </h2>
          <p className={`${styles.body} rv`}>
            Share a few details and Salah will personally prepare a shortlist and a
            tailored return projection — no obligation, complete discretion.
          </p>
          <div className={`${styles.contactLinks} rv`}>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.icon}>✆</span>
              +971 52 324 3294
            </a>
            <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
              <span className={styles.icon}>✉</span>
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Right col — form */}
        <div className={`${styles.form} rv`}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Full Name</label>
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Investment Budget</label>
            <input
              className={styles.input}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. AED 5,000,000"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>What are you looking for?</label>
            <textarea
              className={styles.textarea}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Villa, branded residence, off-plan, rental income, capital growth…"
              rows={4}
            />
          </div>

          <button className={styles.btnWA} onClick={sendWhatsApp} type="button">
            <span>Send via WhatsApp</span>
          </button>

          <button
            className={styles.btnEmail}
            onClick={sendEmail}
            type="button"
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
              ? 'Message sent ✓'
              : status === 'error'
              ? 'Something went wrong — try again'
              : 'Or send by Email'}
          </button>
        </div>
      </div>
    </section>
  );
}
