import { CANOPY_LEAVES, canopyLeafRadius, type BushBlob, type Side } from './sceneryItems';
import styles from './SceneryShapes.module.css';

export function CanopyLeaves({ side }: { side: Side }) {
  return CANOPY_LEAVES[side].map((leaf, index) => (
    <span
      key={`canopy-${side}-${index}`}
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
  ));
}

export function BushBlobs({ blobs }: { blobs: BushBlob[] }) {
  return blobs.map((blob) => (
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
  ));
}
