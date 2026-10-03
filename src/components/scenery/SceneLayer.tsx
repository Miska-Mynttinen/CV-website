import type { CSSProperties } from 'react';
import type { AmbientItem } from './sceneryItems';
import styles from './SceneLayer.module.css';

interface SceneLayerProps {
  items: AmbientItem[];
  className?: string;
  /** Use viewport units for travel; for layers that are exactly one viewport tall. */
  viewportSized?: boolean;
}

export default function SceneLayer({ items, className = '', viewportSized = false }: SceneLayerProps) {
  const layerClass = [styles.layer, viewportSized && styles.viewportLayer, className].filter(Boolean).join(' ');

  return (
    <div className={layerClass} aria-hidden="true">
      {items.map((item) => {
        const isLeaf = item.kind === 'leaf';

        return (
          <span
            key={item.key}
            className={`${styles.track} ${isLeaf ? styles.leafTrack : styles.bubbleTrack}`}
            style={{
              left: `${item.leftPercent}%`,
              width: item.width,
              height: item.height,
              opacity: item.opacity,
              animationDuration: `${item.durationSeconds}s`,
              animationDelay: `${item.delaySeconds}s`,
              '--rest-top': `${item.restTopPercent}%`,
            } as CSSProperties}
          >
            <span
              className={`${styles.shape} ${isLeaf ? styles.leaf : styles.bubble}`}
              style={{
                animationDuration: `${item.innerDurationSeconds}s`,
                ...(isLeaf && { background: item.color, borderRadius: item.borderRadius }),
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
