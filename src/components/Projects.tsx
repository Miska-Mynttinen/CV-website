import { useState, useMemo } from 'react';
import SectionHeading from './SectionHeading';
import TagList from './TagList';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image?: string;
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Get unique categories
  const categories = useMemo<string[]>(() => {
    // const cats = new Set(projects.map((p) => p.category));
    // return ['All', ...Array.from(cats).sort()]; UNCOMMENT LATER WHEN MORE PROJECTS ARE ADDED
    return [];
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <section id="projects" className="contentSection">
      <SectionHeading>Featured Projects</SectionHeading>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className={styles.grid}>
        {filteredProjects.map((project) =>
          expandedId === project.id ? (
            <article key={project.id} className={`${styles.card} ${styles.expanded}`}>
              <button
                type="button"
                className={styles.collapseToggle}
                onClick={() => setExpandedId(null)}
                aria-expanded={true}
                aria-label={`Hide ${project.title} details`}
              >
                <span className={styles.expandedHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.collapseIcon} aria-hidden="true">
                    −
                  </span>
                </span>
                <span className={styles.projectTitle}>{project.title}</span>
              </button>
              <p className={styles.projectDescription}>{project.longDescription || project.description}</p>

              <h4 className={`${styles.subheading} ${styles.featuresHeading}`}>Key Features</h4>
              <ul className={styles.features}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
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
            </article>
          ) : (
            <button
              key={project.id}
              type="button"
              className={styles.card}
              onClick={() => setExpandedId(project.id)}
              aria-expanded={false}
            >
              <span className={styles.category}>{project.category}</span>
              <span className={styles.projectTitle}>{project.title}</span>
              <span className={styles.projectDescription}>{project.description}</span>
              <TagList items={project.technologies} small />
              <span className={styles.detailsHint}>+ Details</span>
            </button>
          ),
        )}
      </div>
    </section>
  );
}
