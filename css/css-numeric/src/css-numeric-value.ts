import type { CssMathSum } from "./css-math-sum";
import type { CssNumberish } from "./css-numberish";
import type { CssNumericType } from "./css-numeric-type";
import type { CssUnitValue } from "./css-unit-value";

/**
 * The {@link CssNumericValue} interface is the base interface for objects that
 * represent CSS numeric values, such as `10px`, `50%`, or `calc(1px + 2em)`.
 * It provides the common methods for basic arithmetic, comparing values, and
 * converting between units.
 *
 * @public
 */
export interface CssNumericValue {
  /**
   * The {@link CssNumericValue.add} method adds a supplied number to this
   * numeric value.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(23).add(CSS.percent(4)).add(CSS.cm(3)).toString());
   *  // >> "calc(23px + 4% + 3cm)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathSum}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` if an invalid type was passed to the method.
   */
  add(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.div} method divides this numeric value by the
   * supplied value.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(24).div(CSS.percent(4)));
   *  // >> "calc(24px / 4%)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathProduct}, or {@link CssUnitValue}
   *   if `this` and every argument are plain numbers, or all but one of them
   *   are.
   *
   * @throws `TypeError` if an invalid type was passed to the method.
   *
   * @throws `RangeError` if any of `values` is, or resolves to, `0` or `-0`.
   */
  div(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.equals} method returns `true` if every
   * value passed to it is the same as this numeric value, and `false`
   * otherwise.
   *
   * @remarks
   *   The method compares how the values are written,
   *   not what they compute to.
   *
   *   Single values, such as those represented by {@link CssUnitValue},
   *   are the same when they have the same {@link CssUnitValue.value} and
   *   {@link CssUnitValue.unit}. Units aren't converted, so `1in` isn't the
   *   same as `2.54cm`, even though both are one inch long.
   *
   *   Calculations, such as sums represented by {@link CssMathSum}, are the
   *   same when they are the same kind of calculation and contain the same
   *   values in the same order. So `calc(1px + 2px)` isn't the same
   *   as `calc(2px + 1px)`, or as `3px`.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(10).equals(CSS.px(10)));
   *  // >> true
   *
   *  const sum = CSS.px(1).add(CSS.px(2));
   *
   *  console.log(sum.equals(sum));
   *  // >> true
   *
   *  console.log(sum.equals(CSS.px(1).add(CSS.px(2))));
   *  // >> true
   *
   *  console.log(sum.equals(CSS.px(2).add(CSS.px(1))));
   *  // >> false
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *   A number is compared as a value without a unit.
   *
   * @returns `true` if every value passed is the same as this numeric value,
   *   and `false` otherwise. If no values are passed, the method returns
   *   `true`.
   */
  equals(...values: CssNumberish[]): boolean;

  /**
   * The {@link CssNumericValue.max} method returns the highest value from
   * among the `values` passed. The passed values must be of the same type.
   *
   * @example As stated earlier, all passed values must be of the same type and
   *   value. Some of the following examples illustrate what happens when they
   *   are not.
   *
   * ```ts
   *  console.log(CSS.cm(1).max(CSS.cm(2)).toString());
   *  // >> "2cm"
   *
   *  console.log(CSS.cm(1).max(CSS.in(0.4)).toString());
   *  // >> "max(1cm, 0.4in)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathMax}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` if an invalid type was passed to the method.
   */
  max(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.min} method returns the lowest value from among
   * those values passed. The passed values must be of the same type.
   *
   * @example As stated earlier, all passed values must be of the same type and
   *   value. Some of the following examples illustrate what happens when they
   *   are not.
   *
   * ```ts
   *  console.log(CSS.cm(1).min(CSS.cm(2)).toString());
   *  // >> "1cm"
   *
   *  console.log(CSS.cm(1).min(CSS.in(0.4)).toString());
   *  // >> "min(1cm, 0.4in)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathMin}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` if an invalid type was passed to the method.
   */
  min(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.mul} method multiplies this numeric value by
   * the supplied values.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(23).mul(CSS.percent(4)).mul(CSS.cm(3)).toString());
   *  // >> "calc(23px * 4% * 3cm)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathProduct}, or {@link CssUnitValue}
   *   if `this` and every argument are plain numbers, or all but one of them
   *   are.
   *
   * @throws `TypeError` if an invalid type was passed to the method.
   */
  mul(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.sub} method subtracts a supplied number from
   * this numeric value.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(23).sub(CSS.percent(4)).sub(CSS.cm(3)).toString());
   *  // >> "calc(23px - 4% - 3cm)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathSum}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` if an invalid type was passed to the method.
   */
  sub(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.to} method converts a numeric value from one
   * unit to another.
   *
   * @param unit - The unit to which you want to convert.
   *
   * @returns A new instance of {@link CssUnitValue}.
   *
   * @throws `SyntaxError` if an invalid unit was passed to the method.
   *
   * @throws `TypeError` if:
   *   - This numeric value can't be resolved to a single value and type. This
   *   might occur if the value is calculated from a variable when the value of
   *   that variable can't be known in the context.
   *
   *   - The value can't be converted to the new unit because it's not of
   *   the same category. For example, you can't convert meters to seconds.
   */
  to(unit: string): CssUnitValue;

  /**
   * The {@link CssNumericValue.toString} method returns a string
   * representation of this value.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(23).mul(CSS.percent(4)).mul(CSS.cm(3)).toString());
   *  // >> "calc(23px * 4% * 3cm)"
   * ```
   */
  toString(): string;

  /**
   * The {@link CssNumericValue.toSum} method converts the object's value to a
   * {@link CssMathSum} of {@link CssUnitValue} values using only the specified
   * `units`, if possible. If called with no `units`, it simplifies the value
   * into a minimal sum of {@link CssUnitValue} values instead.
   *
   * @param units - The units to convert to.
   *
   * @returns A new instance of {@link CssMathSum}.
   *
   * @throws `SyntaxError` if any of `units` is not a valid unit identifier.
   *
   * @throws `TypeError` if:
   *   - The value can't be expressed as a sum of {@link CssUnitValue} values -
   *   for example, because one of its terms has a compound unit (such
   *   as `px * s`) that can't be represented by a single {@link CssUnitValue}.
   *
   *   - One or more units were passed to the method, and the value includes a
   *   term whose unit isn't compatible with any of them.
   */
  toSum(...units: string[]): CssMathSum;

  /**
   * The {@link CssNumericValue."type"} method returns the type of this
   * numeric value. See {@link CssNumericType} for more details.
   *
   * @example
   * ```ts
   *  console.log(CSS.px(23).mul(CSS.cm(3)).mul(CSS.em(9)).type());
   *  // { length: 3 }
   *
   *  console.log(CSS.px(23).add(CSS.percent(50)).type());
   *  // { length: 1, percentHint: "length" }
   * ```
   *
   * @returns A new value of {@link CssNumericType}.
   */
  type(): CssNumericType;
}
