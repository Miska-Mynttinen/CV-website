import styles from './TagList.module.css';

interface TagListProps {
  items: string[];
  small?: boolean;
}

export default function TagList({ items, small = false }: TagListProps) {
  return (
    <span className={`${styles.list} ${small ? styles.listSmall : ''}`}>
      {items.map((item) => (
        <span key={item} className={`${styles.tag} ${small ? styles.small : ''}`}>
          {item}
        </span>
      ))}
    </span>
  );
}
