import type { ProfileData } from '../data/profileData';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: ProfileData['skills'];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills</h2>
        </div>

        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Languages</h3>
            <div className={styles.tags}>
              {skills.languages.map((skill) => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Technologies</h3>
            <div className={styles.tags}>
              {skills.technologies.map((skill) => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}