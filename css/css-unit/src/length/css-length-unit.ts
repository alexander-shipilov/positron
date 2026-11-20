import type { CssAbsoluteLengthUnit } from "./css-absolute-length-unit";
import type { CssRelativeLengthUnit } from "./css-relative-length-unit";

/**
 * The {@link CssLengthUnit} type represents the `<length>` units.
 *
 * @remarks
 *   The `<length>` unit represents an absolute or relative distance.
 *
 *   Absolute `<length>` units are compatible, and {@link CssUnit.px} is their
 *   canonical unit.
 *
 * @public
 */
export type CssLengthUnit =
  | CssAbsoluteLengthUnit //
  | CssRelativeLengthUnit;
