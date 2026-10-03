import SceneLayer from './SceneLayer';
import { BushBlobs, CanopyLeaves } from './SceneryShapes';
import { MOBILE_SCENE_ITEMS, SIDE_PRESETS, bushBlobs } from './sceneryItems';
import styles from './MobileScene.module.css';

const MOBILE_BUSHES = bushBlobs(SIDE_PRESETS.left.bushSeed);

export default function MobileScene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.canopy}>
        <CanopyLeaves side="left" />
        <CanopyLeaves side="right" />
      </div>
      <BushBlobs blobs={MOBILE_BUSHES} />
      <div className={styles.tint} />
      <SceneLayer items={MOBILE_SCENE_ITEMS} viewportSized />
    </div>
  );
}
