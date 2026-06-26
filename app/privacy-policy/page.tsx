import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from './privacy.module.css';

export const metadata = {
  title: 'Privacy Policy — Salah Private Estates',
  description: 'How Salah Private Estates collects, uses, and protects your personal information.',
};

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: [
      'When you submit an enquiry, book a consultation, or use the ROI calculator on this website, we may collect your name, email address, phone number, nationality, and investment preferences.',
      'We also collect standard technical data such as IP address, browser type, and pages visited to help us improve the website experience. This data is never sold to third parties.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'Your personal information is used solely to respond to your enquiries, provide tailored real estate advisory services, and send you relevant property opportunities you have opted into.',
      'We do not use your data for unsolicited marketing. All communications from us are directly related to your expressed interest in Dubai real estate.',
    ],
  },
  {
    title: 'Data Sharing',
    body: [
      'We may share your information with trusted developers and legal partners (Emaar, Omniyat, Meraas, Ellington, Nakheel, Aldar, Modon, Arada) only when required to facilitate a transaction you have initiated.',
      'We will never sell, rent, or trade your personal data to third-party marketers.',
    ],
  },
  {
    title: 'Data Security',
    body: [
      'All data is transmitted over encrypted HTTPS connections. Contact form submissions are processed via secure API infrastructure. We retain your data only as long as necessary to fulfill the purpose for which it was collected.',
      'You may request deletion of your personal data at any time by contacting us directly.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'This website uses minimal cookies for core functionality (language preference, session state). We do not use advertising or tracking cookies.',
      'You can disable cookies in your browser settings; however, some features of the site may not function correctly without them.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You have the right to access, correct, or request deletion of any personal information we hold about you. You may also withdraw consent for communications at any time.',
      'To exercise any of these rights, please contact us at salah@uniqueproperties.ae or via WhatsApp at +971 52 324 3294.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The date of the most recent revision will always appear at the top of this page. Continued use of the website after changes constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Legal</span>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: June 2025</p>
          </div>

          <p className={styles.intro}>
            Salah Ahmad (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates salahestates.ae and is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.
          </p>

          <div className={styles.sections}>
            {SECTIONS.map((s, i) => (
              <section key={i} className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className={styles.sectionBody}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className={styles.contact}>
            <div className={styles.contactLine} />
            <p>
              Questions about this policy?{' '}
              <a href="mailto:salah@uniqueproperties.ae" className={styles.link}>
                salah@uniqueproperties.ae
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
