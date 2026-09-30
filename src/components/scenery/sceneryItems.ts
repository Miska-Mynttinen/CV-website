// Deterministic scenery generators ported from the "Portfolio v3" design (turn 8a).
// Values come from simple modulo arithmetic so the scene looks random but renders
// identically on every load.

export type Side = 'left' | 'right';

export interface CanopyLeaf {
  top: number;
  offset: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
}

export interface BushBlob {
  key: string;
  topPercent: number;
  leftPercent: number;
  size: number;
  color: string;
}

export interface AmbientItem {
  key: string;
  kind: 'leaf' | 'bubble';
  leftPercent: number;
  width: number;
  height: number;
  durationSeconds: number;
  delaySeconds: number;
  innerDurationSeconds: number;
  opacity: number;
  color: string;
  borderRadius: string;
}

interface AmbientOptions {
  leaves: number;
  bubbles: number;
  leafSize?: number;
  leafOpacity?: number;
}

interface ScenePreset {
  bushSeed: number;
  ambientSeed: number;
  ambient: AmbientOptions;
}

const LEAF_COLORS = [
  'oklch(52% 0.12 145)',
  'oklch(45% 0.11 150)',
  'oklch(60% 0.12 135)',
  'oklch(40% 0.09 155)',
  'oklch(56% 0.1 125)',
];

const LEAF_RADIUS_LEFT = '0 100% 0 100%';
const LEAF_RADIUS_RIGHT = '100% 0 100% 0';

const BUSH_EDGES: ReadonlyArray<readonly [number, string]> = [
  [16, 'oklch(25% 0.06 145)'],
  [32, 'oklch(22.5% 0.055 148)'],
];
const BLOBS_PER_EDGE = 7;

export const CANOPY_LEAVES: Record<Side, CanopyLeaf[]> = {
  left: [
    { top: -20, offset: -30, width: 110, height: 60, color: 'oklch(40% 0.1 145)', rotation: 20 },
    { top: 30, offset: 60, width: 90, height: 48, color: 'oklch(34% 0.09 150)', rotation: -15 },
    { top: -10, offset: 150, width: 100, height: 54, color: 'oklch(46% 0.11 140)', rotation: 35 },
  ],
  right: [
    { top: -16, offset: -26, width: 110, height: 60, color: 'oklch(40% 0.1 145)', rotation: -20 },
    { top: 36, offset: 70, width: 86, height: 46, color: 'oklch(34% 0.09 150)', rotation: 15 },
    { top: -8, offset: 150, width: 96, height: 52, color: 'oklch(46% 0.11 140)', rotation: -35 },
  ],
};

export const canopyLeafRadius = (side: Side) => (side === 'left' ? LEAF_RADIUS_LEFT : LEAF_RADIUS_RIGHT);

export function bushBlobs(seed: number): BushBlob[] {
  return BUSH_EDGES.flatMap(([topPercent, color], edge) =>
    Array.from({ length: BLOBS_PER_EDGE }, (_, i) => {
      const r = (i * 37 + seed * 13 + edge * 7) % 50;
      return {
        key: `bush-${edge}-${i}`,
        topPercent,
        leftPercent: i * 16 - 8 + (r % 6),
        size: 26 + r,
        color,
      };
    }),
  );
}

function leafItem(seed: number, index: number, count: number, options: AmbientOptions): AmbientItem {
  const r = (index * 53 + seed * 17) % 97;
  const width = (12 + (r % 4) * 5) * (options.leafSize ?? 1);
  const duration = 70 + (r % 6) * 12;
  return {
    key: `leaf-${index}`,
    kind: 'leaf',
    leftPercent: (r * 7) % 85,
    width,
    height: width * 0.55,
    durationSeconds: duration,
    delaySeconds: -((index * duration) / count),
    innerDurationSeconds: 9 + (r % 5) * 3,
    opacity: options.leafOpacity ?? 1,
    color: LEAF_COLORS[(index + seed) % LEAF_COLORS.length],
    borderRadius: index % 2 ? LEAF_RADIUS_LEFT : LEAF_RADIUS_RIGHT,
  };
}

function bubbleItem(seed: number, index: number, count: number): AmbientItem {
  const r = (index * 41 + seed * 29) % 89;
  const size = 10 + (r % 5) * 7;
  const duration = 120 + (r % 4) * 25;
  return {
    key: `bubble-${index}`,
    kind: 'bubble',
    leftPercent: (r * 11) % 85,
    width: size,
    height: size,
    durationSeconds: duration,
    delaySeconds: -((index * duration) / count),
    innerDurationSeconds: 6 + (r % 4) * 2,
    opacity: 1,
    color: 'transparent',
    borderRadius: '50%',
  };
}

export function ambientItems(seed: number, options: AmbientOptions): AmbientItem[] {
  const leaves = Array.from({ length: options.leaves }, (_, i) => leafItem(seed, i, options.leaves, options));
  const bubbles = Array.from({ length: options.bubbles }, (_, i) => bubbleItem(seed, i, options.bubbles));
  return [...leaves, ...bubbles];
}

export const SIDE_PRESETS: Record<Side, ScenePreset> = {
  left: { bushSeed: 1, ambientSeed: 33, ambient: { leaves: 18, bubbles: 6 } },
  right: { bushSeed: 2, ambientSeed: 34, ambient: { leaves: 18, bubbles: 6 } },
};

export const BEHIND_PANEL_ITEMS = ambientItems(41, { leaves: 8, bubbles: 3, leafOpacity: 0.6, leafSize: 0.8 });

// Extra items shown behind the panel only on narrow screens, where the side columns are hidden.
export const MOBILE_EXTRA_ITEMS = ambientItems(45, { leaves: 6, bubbles: 4, leafOpacity: 0.7, leafSize: 0.9 }).map(
  (item) => ({ ...item, key: `mobile-${item.key}` }),
);
