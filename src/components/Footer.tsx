import styles from './Footer.module.css';
import type { ProfileData } from '../data/profileData';

interface FooterProps {
  data: ProfileData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Contact</h2>

          <div className={styles.contactInfo}>
            {data.email && (
              <div className={styles.infoItem}>
                <span className={styles.label}>Email:</span>
                <span className={styles.contactValue}>{data.email}</span>
              </div>
            )}
            {data.phone && (
              <div className={styles.infoItem}>
                <span className={styles.label}>Phone:</span>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </div>
            )}
            {data.location && (
              <div className={styles.infoItem}>
                <span className={styles.label}>Location:</span>
                <span>{data.location}</span>
              </div>
            )}
          </div>

          <div className={styles.socialLinks}>
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                GitHub
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
