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
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   percent(value: number): CssUnitValue;
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(23).add(CSS.percent(4)).add(CSS.cm(3)).toString());
   * // >> "calc(23px + 4% + 3cm)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathSum}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` If an invalid type was passed to the method.
   */
  add(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.div} method divides this numeric value by the
   * supplied value.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   percent(value: number): CssUnitValue;
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(24).div(CSS.percent(4)).toString());
   * // >> "calc(24px / 4%)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathProduct}, or {@link CssUnitValue}
   *   if `this` and every argument are plain numbers, or all but one of them
   *   are.
   *
   * @throws `TypeError` If an invalid type was passed to the method.
   *
   * @throws `RangeError` If any of `values` is, or resolves to, `0` or `-0`.
   */
  div(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.equals} method returns `true` if every
   * value passed to it is the same as this numeric value, and `false`
   * otherwise.
   *
   * @remarks
   *   The method compares how the values are written, not what they compute to.
   *
   *   Single values, such as those represented by {@link CssUnitValue}, are
   *   the same when they have the same {@link CssUnitValue.value} and
   *   {@link CssUnitValue.unit}. Units are not converted, so `1in` is not the
   *   same as `2.54cm`, even though both are one inch long.
   *
   *   Calculations, such as sums represented by {@link CssMathSum}, are the
   *   same when they are the same kind of calculation and contain the same
   *   values in the same order. So `calc(1px + 2px)` is not the same as
   *   `calc(2px + 1px)`, or as `3px`.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(10).equals(CSS.px(10)));
   * // >> true
   *
   * const sum = CSS.px(1).add(CSS.px(2));
   *
   * console.log(sum.equals(sum));
   * // >> true
   *
   * console.log(sum.equals(CSS.px(1).add(CSS.px(2))));
   * // >> true
   *
   * console.log(sum.equals(CSS.px(2).add(CSS.px(1))));
   * // >> false
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values. A
   *   number is compared as a value without a unit.
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
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   in(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.cm(1).max(CSS.cm(2)).toString());
   * // >> "2cm"
   *
   * console.log(CSS.cm(1).max(CSS.in(0.4)).toString());
   * // >> "max(1cm, 0.4in)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathMax}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` If an invalid type was passed to the method.
   */
  max(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.min} method returns the lowest value from among
   * those values passed. The passed values must be of the same type.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   in(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.cm(1).min(CSS.cm(2)).toString());
   * // >> "1cm"
   *
   * console.log(CSS.cm(1).min(CSS.in(0.4)).toString());
   * // >> "min(1cm, 0.4in)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathMin}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` If an invalid type was passed to the method.
   */
  min(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.mul} method multiplies this numeric value by
   * the supplied values.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   percent(value: number): CssUnitValue;
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(23).mul(CSS.percent(4)).mul(CSS.cm(3)).toString());
   * // >> "calc(23px * 4% * 3cm)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathProduct}, or {@link CssUnitValue}
   *   if `this` and every argument are plain numbers, or all but one of them
   *   are.
   *
   * @throws `TypeError` If an invalid type was passed to the method.
   */
  mul(...values: CssNumberish[]): CssNumericValue;

  /**
   * The {@link CssNumericValue.sub} method subtracts a supplied number from
   * this numeric value.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   percent(value: number): CssUnitValue;
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(23).sub(CSS.percent(4)).sub(CSS.cm(3)).toString());
   * // >> "calc(23px - 4% - 3cm)"
   * ```
   *
   * @param values - Either numbers or {@link CssNumericValue} values.
   *
   * @returns A new instance of {@link CssMathSum}, or {@link CssUnitValue}
   *   if `this` and every argument share the same unit.
   *
   * @throws `TypeError` If an invalid type was passed to the method.
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
   * @throws `SyntaxError` If an invalid unit was passed to the method.
   *
   * @throws `TypeError` If this numeric value cannot be resolved to a single
   *   value and type, or cannot be converted to the new unit.
   */
  to(unit: string): CssUnitValue;

  /**
   * The {@link CssNumericValue.toString} method returns a string
   * representation of this value.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   percent(value: number): CssUnitValue;
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(23).mul(CSS.percent(4)).mul(CSS.cm(3)).toString());
   * // >> "calc(23px * 4% * 3cm)"
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
   * @throws `SyntaxError` If any of `units` is not a valid unit identifier.
   *
   * @throws `TypeError` If the value cannot be expressed as a sum of
   *   {@link CssUnitValue} values with compatible units.
   */
  toSum(...units: string[]): CssMathSum;

  /**
   * The {@link CssNumericValue."type"} method returns the type of this
   * numeric value. See {@link CssNumericType} for more details.
   *
   * @example
   * ```ts
   * import type { CssUnitValue } from "@positron/css-numeric";
   *
   * declare const CSS: {
   *   cm(value: number): CssUnitValue;
   *   em(value: number): CssUnitValue;
   *   percent(value: number): CssUnitValue;
   *   px(value: number): CssUnitValue;
   * };
   *
   * console.log(CSS.px(23).mul(CSS.cm(3)).mul(CSS.em(9)).type());
   * // >> { length: 3 }
   *
   * console.log(CSS.px(23).add(CSS.percent(50)).type());
   * // >> { length: 1, percentHint: "length" }
   * ```
   *
   * @returns A new value of {@link CssNumericType}.
   */
  type(): CssNumericType;
}
