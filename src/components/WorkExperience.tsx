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
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>My professional journey and roles</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.marker}>
                <div className={styles.dot}></div>
                {index !== experiences.length - 1 && <div className={styles.line}></div>}
              </div>

              <div className={styles.card}>
                <input
                  id={`experience-${exp.id}`}
                  className={styles.accordionTriggerInput}
                  type="checkbox"
                  defaultChecked={index === 0}
                />
                <label className={styles.cardHeader} htmlFor={`experience-${exp.id}`}>
                  <div className={styles.headerContent}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <span className={styles.duration}>{exp.duration}</span>
                  </div>
                  <div className={styles.toggleIcon} aria-hidden="true" />
                </label>

                <section className={styles.accordionAnimationWrapper} aria-label={`${exp.position} details`}>
                  <div className={styles.accordionAnimation}>
                    <div className={styles.accordionTransformWrapper}>
                      <div className={styles.cardContent}>
                    <p className={styles.description}>{exp.description}</p>

                    <div className={styles.highlights}>
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.technologies}>
                      <h4>Technologies:</h4>
                      <div className={styles.techTags}>
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className={styles.tag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
