'use client';

import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTranslation } from '@/hooks/useTranslation';
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
  const { t } = useTranslation();
  const c = t.contact;

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

  const emailBtnText =
    status === 'sending' ? c.btnEmailSending
    : status === 'sent' ? c.btnEmailSent
    : status === 'error' ? c.btnEmailError
    : c.btnEmailIdle;

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className="section-label rv"><span>{c.label}</span></div>
          <h2 className={`${styles.heading} rv`}>
            {c.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className={`${styles.body} rv`}>{c.body}</p>
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

        <div className={`${styles.form} rv`}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>{c.nameLabel}</label>
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={c.namePlaceholder}
              autoComplete="name"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>{c.budgetLabel}</label>
            <input
              className={styles.input}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder={c.budgetPlaceholder}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>{c.messageLabel}</label>
            <textarea
              className={styles.textarea}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder={c.messagePlaceholder}
              rows={4}
            />
          </div>

          <button className={styles.btnWA} onClick={sendWhatsApp} type="button">
            <span>{c.btnWA}</span>
          </button>

          <button
            className={styles.btnEmail}
            onClick={sendEmail}
            type="button"
            disabled={status === 'sending'}
          >
            {emailBtnText}
          </button>
        </div>
      </div>
    </section>
  );
}
