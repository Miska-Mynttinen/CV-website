import SceneLayer from './SceneLayer';
import { BushBlobs, CanopyLeaves } from './SceneryShapes';
import { SIDE_PRESETS, ambientItems, bushBlobs, type Side } from './sceneryItems';
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
      <CanopyLeaves side={side} />
      <BushBlobs blobs={bushes} />
      <SceneLayer items={ambient} />
    </div>
  );
}
