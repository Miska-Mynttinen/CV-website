import SectionHeading from './SectionHeading';
import TagList from './TagList';
import styles from './WorkExperience.module.css';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section id="experience" className="contentSection">
      <SectionHeading>Work Experience</SectionHeading>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.dot} />
              <span className={styles.line} />
            </div>

            <div className={styles.card}>
              <input
                id={`experience-${exp.id}`}
                className={styles.accordionTriggerInput}
                type="checkbox"
                defaultChecked={index === 0}
              />
              <label className={styles.cardHeader} htmlFor={`experience-${exp.id}`}>
                <span className={styles.headerContent}>
                  <h3 className={styles.position}>{exp.position}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.duration}>{exp.duration}</span>
                </span>
                <span className={styles.toggleIcon} aria-hidden="true" />
              </label>

              <section className={styles.accordionAnimationWrapper} aria-label={`${exp.position} details`}>
                <div className={styles.accordionAnimation}>
                  <div className={styles.accordionTransformWrapper}>
                    <div className={styles.cardContent}>
                      <p className={styles.description}>{exp.description}</p>

                      <h4 className={`${styles.subheading} ${styles.achievementsHeading}`}>Key Achievements</h4>
                      <ul className={styles.highlights}>
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>

                      <h4 className={`${styles.subheading} ${styles.technologiesHeading}`}>Technologies</h4>
                      <TagList items={exp.technologies} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
