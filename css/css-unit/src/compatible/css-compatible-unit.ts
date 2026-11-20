import type { CssAngleUnit } from "../angle";
import type { CssFrequencyUnit } from "../frequency";
import type { CssAbsoluteLengthUnit } from "../length";
import type { CssResolutionUnit } from "../resolution";
import type { CssTimeUnit } from "../time";

/**
 * The {@link CssCompatibleUnit} type represents the compatible units - those
 * that can be converted to a single canonical unit.
 *
 * @remarks
 *   Each group of compatible units defines which one is the canonical unit
 *   used for serialization. See {@link CssCanonicalUnit}.
 *
 *   The compatible units a related to one another by a constant factor.
 *   For example, the ratio between `px` and `in` is `96:1`.
 *
 * @public
 */
export type CssCompatibleUnit =
  | CssAbsoluteLengthUnit
  | CssAngleUnit
  | CssFrequencyUnit
  | CssResolutionUnit
  | CssTimeUnit;
