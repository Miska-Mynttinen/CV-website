import styles from './Introduction.module.css';
import type { ProfileData } from '../data/profileData';

interface IntroductionProps {
  data: ProfileData;
}

export default function Introduction({ data }: IntroductionProps) {
  return (
    <section id="introduction" className={styles.headerSection}>
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.title}>{data.introduction.headline}</p>
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
        <a href="/CV_Miska_Mynttinen.pdf" download="CV_Miska_Mynttinen.pdf" className={styles.cvLink}>
          Download CV
        </a>
      </div>
    </section>
  );
}
