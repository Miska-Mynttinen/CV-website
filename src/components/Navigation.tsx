import styles from './Navigation.module.css';

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>
            <button onClick={() => scrollToSection('introduction')} className={styles.link}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('experience')} className={styles.link}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className={styles.link}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={styles.link}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
