import type { AnimationDirection } from 'lottie-web';
import type { PlayMode } from './utils.js';

type BoolInt = 0 | 1;

interface Shape {
  a: ShapeData;
  o: ShapeData;
  p: ShapeData;
  r: ShapeData;
  s: ShapeData;
}

interface ShapeData {
  /** Whether shape is animated or not */
  a: BoolInt;

  /** Array of Keyframes */
  k: number | number[];

  /** Index */
  ix: number;
}

interface Layer {
  /** Auto Orient */
  ao: BoolInt;

  /** Blend mode */
  bm: number;

  completed: boolean;

  /** Whether the animation has 3D layers" */
  ddd: BoolInt;

  /** "In Point", which frame the animation starts at (usually 0) */
  ip: number;

  /** Layer transform */
  ks: object;

  /** Layer name */
  nm: string;

  /** Total number of frames */
  op: number;

  shapes: Shape[];

  /** Time stretch */
  sr: number;

  /** Start time */
  st: number;

  /** Matte target */
  td: number;

  /** Type */
  ty: number;
}

export interface LottieAsset {
  /** Whether the data is embedded/encoded */
  e?: BoolInt;

  layers?: Layer[];

  /** Height of image in pixels */
  h?: number;

  /** id/slug of asset – e.g. image_0 / audio_0 */
  id?: string;

  /** Name of asset – e.g. "Black Mouse Ears" */
  nm?: string;

  /** Filename – e.g image_0.png / audio_0.mp3 | DataURL, Base64 encoded */
  p?: string;

  /** Path to asset. Empty string if asset is embedded */
  u?: string;

  /** Extra composition */
  xt?: number;

  /** Width of image in pixels */
  w?: number;
}

export interface LottieJSON {
  assets?: LottieAsset[];

  /** Whether the animation has 3D layers" */
  ddd: BoolInt;

  /** Frames per second, natively */
  fr: number;

  /** Height of animation in pixels */
  h: number;

  /** "In Point", which frame the animation starts at (usually 0) */
  ip: number;
  layers: Layer[];
  markers: unknown[];
  meta: {
    a: string;
    d: string;

    /** Generator */
    g: string;
    k: string;
    tc: string;
  };
  /** Name of animation – e.g. "Steamboat Willie" */
  nm: string;

  /** Total number of frames */
  op: number;

  /** Version */
  v: string;

  /** Width of animation in pixels */
  w: number;
}

export interface AnimationSettings {
  autoplay?: Autoplay;
  loop?: Loop;
  direction?: AnimationDirection;
  mode?: PlayMode;
  speed?: number;
}

export interface Animation extends AnimationSettings {
  id: string;
}

export interface AnimationConfig extends Animation {
  url: string;
}

export interface LottieManifest {
  animations: Animation[];
  author?: string;
  description?: string;
  generator?: string;
  keywords?: string;
  version?: string;
}

export type Autoplay = boolean | '' | 'autoplay' | null;
export type Controls = boolean | '' | 'controls' | null;
export type Loop = boolean | '' | 'loop' | null;
export type Subframe = boolean | '' | null;

export type ObjectFit = 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
