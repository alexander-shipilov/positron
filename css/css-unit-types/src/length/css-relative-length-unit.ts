import type { CssContainerPercentageUnit } from "../container/css-container-percentage-unit";
import type { CssFontRelativeUnit } from "../font/css-font-relative-unit";
import type { CssViewportPercentageUnit } from "../viewport/css-viewport-percentage-unit";

/**
 * The {@link CssRelativeLengthUnit} type represents the relative `<length>`
 * units, which specify a length relative to another length.
 *
 * @public
 */
export type CssRelativeLengthUnit =
  | CssContainerPercentageUnit //
  | CssFontRelativeUnit
  | CssViewportPercentageUnit;
