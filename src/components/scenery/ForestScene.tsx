import SceneLayer from './SceneLayer';
import { CANOPY_LEAVES, SIDE_PRESETS, ambientItems, bushBlobs, canopyLeafRadius, type Side } from './sceneryItems';
import styles from './ForestScene.module.css';

interface ForestSceneProps {
  side: Side;
}

const SCENES = {
  left: {
    bushes: bushBlobs(SIDE_PRESETS.left.bushSeed),
    ambient: ambientItems(SIDE_PRESETS.left.ambientSeed, SIDE_PRESETS.left.ambient),
  },
  right: {
    bushes: bushBlobs(SIDE_PRESETS.right.bushSeed),
    ambient: ambientItems(SIDE_PRESETS.right.ambientSeed, SIDE_PRESETS.right.ambient),
  },
};

export default function ForestScene({ side }: ForestSceneProps) {
  const { bushes, ambient } = SCENES[side];

  return (
    <div className={styles.column} aria-hidden="true">
      {CANOPY_LEAVES[side].map((leaf, index) => (
        <span
          key={`canopy-${index}`}
          className={styles.canopyLeaf}
          style={{
            top: leaf.top,
            [side]: leaf.offset,
            width: leaf.width,
            height: leaf.height,
            background: leaf.color,
            borderRadius: canopyLeafRadius(side),
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        />
      ))}

      {bushes.map((blob) => (
        <span
          key={blob.key}
          className={styles.bushBlob}
          style={{
            top: `calc(${blob.topPercent}% - ${blob.size / 2}px)`,
            left: `${blob.leftPercent}%`,
            width: blob.size,
            height: blob.size,
            background: blob.color,
          }}
        />
      ))}

      <SceneLayer items={ambient} />
    </div>
  );
}
