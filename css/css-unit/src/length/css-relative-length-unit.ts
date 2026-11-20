import type { CssContainerPercentageUnit } from "../container";
import type { CssFontRelativeUnit } from "../font";
import type { CssViewportPercentageUnit } from "../viewport";

/**
 * The {@link CssRelativeLengthUnit} type represents the relative `<length>`
 * units, that specify a length relative to another length.
 *
 * @public
 */
export type CssRelativeLengthUnit =
  | CssContainerPercentageUnit //
  | CssFontRelativeUnit
  | CssViewportPercentageUnit;
