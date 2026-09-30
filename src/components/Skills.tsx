import type { ProfileData } from '../data/profileData';
import SectionHeading from './SectionHeading';
import TagList from './TagList';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: ProfileData['skills'];
}

export default function Skills({ skills }: SkillsProps) {
  const groups = [
    { title: 'Languages', items: skills.languages },
    { title: 'Technologies', items: skills.technologies },
  ];

  return (
    <section id="skills" className="contentSection">
      <SectionHeading>Skills</SectionHeading>

      <div className={styles.groups}>
        {groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <TagList items={group.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
