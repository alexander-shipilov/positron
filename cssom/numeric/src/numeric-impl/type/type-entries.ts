import type { CssNumericBaseType } from "@positron/css-numeric";

/**
 * @internal
 */
export interface TypeEntries {
  [CssNumericBaseType.angle]?: number;

  [CssNumericBaseType.flex]?: number;

  [CssNumericBaseType.frequency]?: number;

  [CssNumericBaseType.length]?: number;

  [CssNumericBaseType.percent]?: number;

  [CssNumericBaseType.resolution]?: number;

  [CssNumericBaseType.time]?: number;
}
