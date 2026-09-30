import { useState } from 'react';
import SectionHeading from './SectionHeading';
import TagList from './TagList';
import styles from './WorkExperience.module.css';
import type { ProfileData } from '../data/profileData';

type Experience = ProfileData['workExperience'][number];

interface WorkExperienceProps {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  // The most recent position starts open
  const [openIds, setOpenIds] = useState<ReadonlySet<number>>(() => new Set(experiences.slice(0, 1).map((exp) => exp.id)));

  const toggleExperience = (id: number) =>
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  return (
    <section id="experience" className="contentSection">
      <SectionHeading>Work Experience</SectionHeading>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            experience={exp}
            isOpen={openIds.has(exp.id)}
            onToggle={() => toggleExperience(exp.id)}
          />
        ))}
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

function ExperienceItem({ experience: exp, isOpen, onToggle }: ExperienceItemProps) {
  const detailsId = `experience-${exp.id}-details`;

  return (
    <div className={styles.timelineItem}>
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.line} />
      </div>

      <div className={styles.card} data-open={isOpen}>
        <h3 className={styles.cardHeading}>
          <button
            type="button"
            className={styles.cardHeader}
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={detailsId}
          >
            <span className={styles.headerContent}>
              <span className={styles.position}>{exp.position}</span>
              <span className={styles.company}>{exp.company}</span>
              <span className={styles.duration}>{exp.duration}</span>
            </span>
            <span className={styles.toggleIcon} aria-hidden="true" />
          </button>
        </h3>

        <div id={detailsId} className={styles.accordionAnimationWrapper}>
          <div className={styles.accordionAnimation}>
            <div className={styles.accordionTransformWrapper}>
              <div className={styles.cardContent}>
                <p className={styles.description}>{exp.description}</p>

                <h4 className={`${styles.subheading} ${styles.achievementsHeading}`}>Key Achievements</h4>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <h4 className={`${styles.subheading} ${styles.technologiesHeading}`}>Technologies</h4>
                <TagList items={exp.technologies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
