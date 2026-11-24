import type {
  CssNumberish,
  CssNumericType,
  CssNumericValue,
} from "@positron/css-numeric";

/**
 * The {@link CssNumericValueImpl} interface defines internal arithmetic,
 * aggregation, and type-inspection algorithms for `CssNumericValue`.
 *
 * @public
 */
export interface CssNumericValueImpl {
  /**
   * The {@link CssNumericValueImpl.divideNumericValue} method divides `$this`
   * by the supplied `values`.
   *
   * @param $this - The dividend `CssNumericValue`.
   *
   * @param values - Divisors as numbers or `CssNumericValue` objects.
   *
   * @returns The quotient `CssNumericValue`.
   *
   * @throws `RangeError` If any divisor resolves to `0` or `-0`.
   *
   * @throws `TypeError` If any argument has an incompatible type.
   */
  divideNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.getNumericValueType} method returns the
   * `CssNumericType` dictionary describing `$this`.
   *
   * @param $this - The target `CssNumericValue`.
   *
   * @returns A `CssNumericType` object.
   */
  getNumericValueType($this: CssNumericValue): CssNumericType;

  /**
   * The {@link CssNumericValueImpl.invertNumericValue} method computes the
   * multiplicative inverse of `$this`.
   *
   * @param $this - The `CssNumericValue` to invert.
   *
   * @returns The inverted `CssNumericValue`.
   *
   * @throws `RangeError` If `$this` is a unitless `0` or `-0`.
   */
  invertNumericValue($this: CssNumericValue): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.maximizeNumericValue} method computes the
   * maximum of `$this` and `values`.
   *
   * @param $this - The initial `CssNumericValue`.
   *
   * @param values - Additional operands to compare.
   *
   * @returns A `CssUnitValue` or `CssMathMax` representing the maximum.
   *
   * @throws `TypeError` If operand types are incompatible.
   */
  maximizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.minimizeNumericValue} method computes the
   * minimum of `$this` and `values`.
   *
   * @param $this - The initial `CssNumericValue`.
   *
   * @param values - Additional operands to compare.
   *
   * @returns A `CssUnitValue` or `CssMathMin` representing the minimum.
   *
   * @throws `TypeError` If operand types are incompatible.
   */
  minimizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.multiplyNumericValue} method multiplies
   * `$this` by the supplied `values`.
   *
   * @param $this - The initial `CssNumericValue`.
   *
   * @param values - Multiplicands as numbers or `CssNumericValue` objects.
   *
   * @returns A `CssUnitValue` or `CssMathProduct` representing the product.
   *
   * @throws `TypeError` If operand types cannot be multiplied.
   */
  multiplyNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.negateNumericValue} method computes the
   * arithmetic negation of `$this`.
   *
   * @param $this - The `CssNumericValue` to negate.
   *
   * @returns The negated `CssNumericValue`.
   */
  negateNumericValue($this: CssNumericValue): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.subtractNumericValue} method subtracts the
   * supplied `values` from `$this`.
   *
   * @param $this - The minuend `CssNumericValue`.
   *
   * @param values - Subtrahends as numbers or `CssNumericValue` objects.
   *
   * @returns A `CssUnitValue` or `CssMathSum` representing the difference.
   *
   * @throws `TypeError` If operand types are incompatible.
   */
  subtractNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;

  /**
   * The {@link CssNumericValueImpl.summarizeNumericValue} method adds the
   * supplied `values` to `$this`.
   *
   * @param $this - The initial `CssNumericValue`.
   *
   * @param values - Addends as numbers or `CssNumericValue` objects.
   *
   * @returns A `CssUnitValue` or `CssMathSum` representing the sum.
   *
   * @throws `TypeError` If operand types are incompatible.
   */
  summarizeNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue;
}
