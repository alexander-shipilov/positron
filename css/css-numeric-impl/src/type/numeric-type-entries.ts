import type { CssNumericBaseType } from "@positron/css-numeric";

/**
 * The {@link NumericTypeEntries} interface represents an optional mapping of
 * `CssNumericBaseType` keys to their integer exponents.
 *
 * @public
 */
export interface NumericTypeEntries {
  [CssNumericBaseType.angle]?: number;

  [CssNumericBaseType.flex]?: number;

  [CssNumericBaseType.frequency]?: number;

  [CssNumericBaseType.length]?: number;

  [CssNumericBaseType.percent]?: number;

  [CssNumericBaseType.resolution]?: number;

  [CssNumericBaseType.time]?: number;
}
