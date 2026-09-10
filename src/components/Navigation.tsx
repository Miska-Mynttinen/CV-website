import { useState } from 'react';
import styles from './Navigation.module.css';

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const selectSection = (section: string) => {
    setMenuOpen(false);
    scrollToSection(section);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <li>
            <button onClick={() => selectSection('introduction')} className={styles.link}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => selectSection('skills')} className={styles.link}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => selectSection('experience')} className={styles.link}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => selectSection('projects')} className={styles.link}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => selectSection('contact')} className={styles.link}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
