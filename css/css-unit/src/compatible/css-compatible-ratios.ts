import type { CssCanonicalUnit } from "../canonical";
import { CssUnit } from "../unit";

import type { CssCompatibleUnit } from "./css-compatible-unit";

/**
 * The {@link CssCompatibleRatios} represents an object of ratios between
 * compatible units.
 *
 * @public
 */
export const CssCompatibleRatios: Readonly<
  Record<CssCompatibleUnit, readonly [number, CssCanonicalUnit]>
> = {
  // 1 cm = 1 in / 2.54 = 96 px / 2.54
  [CssUnit.cm]: [96 / 2.54, CssUnit.px],
  // 1 deg = 1 deg
  [CssUnit.deg]: [1, CssUnit.deg],
  // 1 dpcm = 2.54 dpi = 2.54 dppx / 96
  [CssUnit.dpcm]: [2.54 / 96, CssUnit.dppx],
  // 1 dpi = 1 dppx / 96
  [CssUnit.dpi]: [1 / 96, CssUnit.dppx],
  // 1 dppx = 1 dppx
  [CssUnit.dppx]: [1, CssUnit.dppx],
  // 1 grad = 1 turn / 400 = 360 deg / 400
  [CssUnit.grad]: [360 / 400, CssUnit.deg],
  // 1 Hz = 1 Hz
  [CssUnit.hz]: [1, CssUnit.hz],
  // 1 in = 96 px
  [CssUnit.in]: [96, CssUnit.px],
  // 1 kHz = 1000 Hz
  [CssUnit.khz]: [1000, CssUnit.hz],
  // 1 mm = 1 cm / 10 = 96 px / 2.54 / 10
  [CssUnit.mm]: [96 / 2.54 / 10, CssUnit.px],
  // 1 ms = 1 s / 1000
  [CssUnit.ms]: [1 / 1000, CssUnit.s],
  // 1 pc = 12 pt = 1 in / 6 = 96 px / 6
  [CssUnit.pc]: [96 / 6, CssUnit.px],
  // 1 pt = 1 in / 72 = 96 px / 72
  [CssUnit.pt]: [96 / 72, CssUnit.px],
  // 1 px = 1 px
  [CssUnit.px]: [1, CssUnit.px],
  // 1 Q = 1 cm / 40 = 96 px / 2.54 / 40
  [CssUnit.q]: [96 / 2.54 / 40, CssUnit.px],
  // 1 rad = 1 turn / 2π = 360 deg / 2π
  [CssUnit.rad]: [180 / Math.PI, CssUnit.deg],
  // 1 s = 1 s
  [CssUnit.s]: [1, CssUnit.s],
  // 1 turn = 360 deg
  [CssUnit.turn]: [360, CssUnit.deg],
  // 1 x = 1 dppx
  [CssUnit.x]: [1, CssUnit.dppx],
} as const;
