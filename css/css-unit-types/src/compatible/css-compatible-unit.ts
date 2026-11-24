import type { CssAngleUnit } from "../angle/css-angle-unit";
import type { CssFrequencyUnit } from "../frequency/css-frequency-unit";
import type { CssAbsoluteLengthUnit } from "../length/css-absolute-length-unit";
import type { CssResolutionUnit } from "../resolution/css-resolution-unit";
import type { CssTimeUnit } from "../time/css-time-unit";

/**
 * The {@link CssCompatibleUnit} type represents the compatible units — those
 * that can be converted to a single canonical unit.
 *
 * @remarks
 *   Each group of compatible units defines which one is the canonical unit
 *   used for serialization. See {@link CssCanonicalUnit}.
 *
 *   Compatible units are related to one another by a constant factor. For
 *   example, the ratio between `px` and `in` is `96:1`.
 *
 * @public
 */
export type CssCompatibleUnit =
  | CssAbsoluteLengthUnit
  | CssAngleUnit
  | CssFrequencyUnit
  | CssResolutionUnit
  | CssTimeUnit;
