import { useState } from 'react';
import SectionHeading from './SectionHeading';
import TagList from './TagList';
import styles from './Projects.module.css';
import type { ProfileData } from '../data/profileData';

type Project = ProfileData['projects'][number];

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProject = (id: number) => setExpandedId((current) => (current === id ? null : id));

  return (
    <section id="projects" className="contentSection">
      <SectionHeading>Featured Projects</SectionHeading>

      <div className={styles.grid}>
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <article key={project.id} className={`${styles.card} ${isExpanded ? styles.expanded : styles.collapsed}`}>
              <header className={styles.header}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>
                  <button
                    type="button"
                    className={styles.toggle}
                    onClick={() => toggleProject(project.id)}
                    aria-expanded={isExpanded}
                  >
                    {project.title}
                    {isExpanded && (
                      <span className={styles.collapseIcon} aria-hidden="true">
                        −
                      </span>
                    )}
                  </button>
                </h3>
              </header>

              {isExpanded ? <ProjectDetails project={project} /> : <ProjectSummary project={project} />}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectSummary({ project }: { project: Project }) {
  return (
    <>
      <p className={styles.projectDescription}>{project.description}</p>
      <TagList items={project.technologies} small />
      <span className={styles.detailsHint} aria-hidden="true">
        + Details
      </span>
    </>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <p className={styles.projectDescription}>{project.longDescription || project.description}</p>

      <h4 className={`${styles.subheading} ${styles.featuresHeading}`}>Key Features</h4>
      <ul className={styles.features}>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <h4 className={`${styles.subheading} ${styles.technologiesHeading}`}>Technologies Used</h4>
      <TagList items={project.technologies} />

      <div className={styles.links}>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.secondary}`}
          >
            GitHub Repository
          </a>
        )}
      </div>
    </>
  );
}
