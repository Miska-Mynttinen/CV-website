import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className={styles.heading}>
      <span className={`${styles.leaf} ${styles.leafLeft}`} aria-hidden="true" />
      {children}
      <span className={`${styles.leaf} ${styles.leafRight}`} aria-hidden="true" />
    </h2>
  );
}
