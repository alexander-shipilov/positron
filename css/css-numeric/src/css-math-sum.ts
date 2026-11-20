import type { CssMathValue } from "./css-math-value";
import type { CssNumericArray } from "./css-numeric-array";

/**
 * The {@link CssMathSum} interface represents the sum of two or more
 * {@link CssNumericValue} values - in cases where the result can't be
 * represented as a single value.
 *
 * @remarks
 *   A {@link CssMathSum} is produced whenever an addition or subtraction can't
 *   be resolved to a single value - for example, when the operands use
 *   different units, such as a `<length>` and a `<percentage>`.
 *
 *   Calling {@link CssNumericValue.add} or {@link CssNumericValue.sub} on
 *   operands that can't be combined returns a {@link CssMathSum}; if every
 *   operand shares the same unit, they resolve immediately to a single
 *   {@link CssUnitValue} instead. {@link CssNumericValue.toSum}, by contrast,
 *   always returns a {@link CssMathSum}, even when its terms could be combined
 *   into a single value.
 *
 *   The {@link CssMathSum} object represents the sum expression itself, not a
 *   resolved value.
 *
 * @public
 */
export interface CssMathSum extends CssMathValue {
  /**
   * The {@link CssMathSum.values} read-only property returns a
   * {@link CssNumericArray} containing the {@link CssNumericValue} objects
   * being summed together.
   */
  readonly values: CssNumericArray;
}
