import type { CssNumericBaseType } from "@positron/css-numeric";

/**
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
