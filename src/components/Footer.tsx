import SectionHeading from './SectionHeading';
import styles from './Footer.module.css';
import type { ProfileData } from '../data/profileData';

interface FooterProps {
  data: ProfileData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className={`contentSection ${styles.footer}`}>
      <SectionHeading>Contact</SectionHeading>

      <div className={styles.contactInfo}>
        {data.email && (
          <div className={styles.infoItem}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{data.email}</span>
          </div>
        )}
        {data.phone && (
          <div className={styles.infoItem}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>{data.phone}</span>
          </div>
        )}
        {data.location && (
          <div className={styles.infoItem}>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{data.location}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
