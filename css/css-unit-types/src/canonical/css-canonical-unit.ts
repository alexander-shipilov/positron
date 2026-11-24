import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssCanonicalUnit} type represents the canonical units for each
 * group of compatible units.
 *
 * @remarks
 *   - The canonical unit for angle units is the degree.
 *
 *   - The canonical unit for absolute length units is the pixel.
 *
 *   - The canonical unit for resolution units is the number of dots per pixel.
 *
 *   - The canonical unit for frequency units is the hertz.
 *
 *   - The canonical unit for duration units is the second.
 *
 * @public
 */
export type CssCanonicalUnit =
  | CssUnit.deg //
  | CssUnit.dppx
  | CssUnit.hz
  | CssUnit.px
  | CssUnit.s;
