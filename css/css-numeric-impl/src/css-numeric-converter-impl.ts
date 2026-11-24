import type {
  CssMathSum,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { NumericSum } from "./sum/numeric-sum";

/**
 * The {@link CssNumericConverterImpl} interface defines internal algorithms
 * for converting `CssNumericValue` instances into sum representations and
 * compatible units.
 *
 * @public
 */
export interface CssNumericConverterImpl {
  /**
   * The {@link CssNumericConverterImpl.createSumValue} method normalizes
   * `$this` into a {@link NumericSum} list of canonical unit items.
   *
   * @param $this - The `CssNumericValue` to convert.
   *
   * @returns A normalized {@link NumericSum} representation.
   *
   * @throws `TypeError` If `$this` cannot be represented as a sum value.
   */
  createSumValue($this: CssNumericValue): NumericSum;

  /**
   * The {@link CssNumericConverterImpl.toMathSum} method converts `$this` into
   * a `CssMathSum` of `CssUnitValue` items restricted to `units`.
   *
   * @param $this - The `CssNumericValue` to convert.
   *
   * @param units - Target unit identifiers.
   *
   * @returns A `CssMathSum` containing the converted `CssUnitValue` terms.
   *
   * @throws `SyntaxError` If any identifier in `units` is invalid.
   *
   * @throws `TypeError` If `$this` cannot be expressed in the given `units`.
   */
  toMathSum($this: CssNumericValue, ...units: string[]): CssMathSum;

  /**
   * The {@link CssNumericConverterImpl.toUnitValue} method converts `$this`
   * into a single `CssUnitValue` with the specified `unit`.
   *
   * @param $this - The `CssNumericValue` to convert.
   *
   * @param unit - Target unit identifier.
   *
   * @returns A `CssUnitValue` expressed in `unit`.
   *
   * @throws `SyntaxError` If `unit` is not a valid unit identifier.
   *
   * @throws `TypeError` If `$this` cannot be converted into `unit`.
   */
  toUnitValue($this: CssNumericValue, unit: string): CssUnitValue;
}
