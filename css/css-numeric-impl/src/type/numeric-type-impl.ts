import type {
  CssNumericBaseType,
  CssNumericTypePercentHint,
} from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

/**
 * The {@link NumericTypeImpl} interface represents an internal ordered map of
 * CSS numeric base types to integer exponents with an optional percent hint.
 *
 * @public
 */
export interface NumericTypeImpl extends Iterable<
  [CssNumericBaseType, number]
> {
  /**
   * The {@link NumericTypeImpl.percentHint} read-only property returns the
   * associated base type hint for percentages, or `null` if none is set.
   */
  readonly percentHint: Nullish<CssNumericTypePercentHint>;

  readonly [CssNumericBaseType.angle]: number;

  readonly [CssNumericBaseType.flex]: number;

  readonly [CssNumericBaseType.frequency]: number;

  readonly [CssNumericBaseType.length]: number;

  readonly [CssNumericBaseType.percent]: number;

  readonly [CssNumericBaseType.resolution]: number;

  readonly [CssNumericBaseType.time]: number;

  /**
   * The {@link NumericTypeImpl.copy} method creates a fresh copy of this
   * numeric type.
   *
   * @returns A new {@link NumericTypeImpl} instance with identical exponents
   *   and percent hint.
   */
  copy(): NumericTypeImpl;

  /**
   * The {@link NumericTypeImpl.equals} method determines whether `type` has
   * identical base type exponents and percent hint as this numeric type.
   *
   * @param type - The {@link NumericTypeImpl} to compare against.
   *
   * @returns `true` if both numeric types are equal; otherwise, `false`.
   */
  equals(type: NumericTypeImpl): boolean;

  /**
   * The {@link NumericTypeImpl.hasNonPercent} method determines whether this
   * numeric type contains at least one non-zero entry other than
   * `CssNumericBaseType.percent`.
   *
   * @returns `true` if any non-percent base type has a non-zero power;
   *   otherwise, `false`.
   */
  hasNonPercent(): boolean;

  /**
   * The {@link NumericTypeImpl.hasPercent} method determines whether this
   * numeric type contains a non-zero `CssNumericBaseType.percent` entry.
   *
   * @returns `true` if the percent power is non-zero; otherwise, `false`.
   */
  hasPercent(): boolean;

  /**
   * The {@link NumericTypeImpl.set} method sets the exponent of `baseType` to
   * `power`.
   *
   * @param baseType - The base type key to update.
   *
   * @param power - The integer exponent to assign.
   *
   * @returns This {@link NumericTypeImpl} instance.
   *
   * @throws `RangeError` If `power` is not a safe integer.
   */
  set(baseType: CssNumericBaseType, power: number): this;

  /**
   * The {@link NumericTypeImpl.setPercentHint} method applies `hint` to this
   * numeric type, folding any `"percent"` power into `hint`.
   *
   * @param hint - The target base type hint.
   *
   * @returns This {@link NumericTypeImpl} instance.
   */
  setPercentHint(hint: CssNumericTypePercentHint): this;
}
