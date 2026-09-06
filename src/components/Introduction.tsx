import styles from './Introduction.module.css';
import type { ProfileData } from '../data/profileData';

interface IntroductionProps {
  data: ProfileData;
}

export default function Introduction({ data }: IntroductionProps) {
  return (
    <section id="introduction" className={styles.headerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.name}>{data.name}</h1>
            <h2 className={styles.title}>{data.introduction.headline}</h2>
            <p className={styles.subtitle}>{data.introduction.subheadline}</p>
            <p className={styles.description}>{data.introduction.description}</p>
            
            <div className={styles.social}>
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
              )}
              {data.email && (
                <span className={`${styles.socialLink} ${styles.emailText}`}>
                  {data.email}
                </span>
              )}
              <a
                href="/CV_Miska_Mynttinen.pdf"
                download="CV_Miska_Mynttinen.pdf"
                className={styles.secondaryBtn}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className={styles.decoration}>
            <div className={styles.circle}></div>
            <div className={styles.square}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
