import { useState, useMemo } from 'react';
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
  const categories = useMemo(() => {
    // const cats = new Set(projects.map((p) => p.category));
    // return ['All', ...Array.from(cats).sort()]; UNCOMMENT LATER WHEN MORE PROJECTS ARE ADDED
    return [];
  }, [projects]);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
        </div>

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${expandedId === project.id ? styles.expanded : ''}`}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              {/* Card Preview */}
              <div className={styles.cardPreview}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>{project.category}</div>
                </div>

                <div className={styles.previewContent}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>

                  <div className={styles.tech}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === project.id && (
                <div className={styles.cardDetails}>
                  <p className={styles.longDescription}>{project.longDescription}</p>

                  <div className={styles.features}>
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.allTech}>
                    <h4>Technologies Used:</h4>
                    <div className={styles.techList}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.fullTechBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.links}>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                        View Live →
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn + ' ' + styles.secondary}>
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
