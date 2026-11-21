import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssNumericValueClass} type represents an abstract constructor and
 * static parser for {@link CssNumericValue}.
 *
 * @typeParam TInstance - The instance type constructed by subclasses.
 *
 * @public
 */
export type CssNumericValueClass<
  TInstance extends CssNumericValue = CssNumericValue,
> = (abstract new () => TInstance) & {
  /**
   * The {@link CssNumericValueClass.parse} method creates a new instance of
   * {@link CssNumericValue} from a string of CSS.
   *
   * @example
   * ```ts
   * import type { CssNumericValueClass } from "@positron/css-numeric";
   *
   * declare const CSSNumericValue: CssNumericValueClass;
   *
   * const sum = CSSNumericValue.parse("calc(50% + 10px)");
   *
   * console.log(sum.constructor.name);
   * // >> "CSSMathSum"
   *
   * console.log(sum.toString());
   * // >> "calc(50% + 10px)"
   * ```
   *
   * @param cssText - A string containing a single CSS number, percentage,
   *   dimension (a number with a unit, such as `"42px"`), or math function,
   *   such as `calc()`, `min()`, `max()`, or `clamp()`.
   *
   * @returns A new instance of {@link CssNumericValue}. This is a
   *   {@link CssUnitValue} for a number, percentage, or dimension, or one of
   *   the {@link CssMathValue} subtypes for a math function.
   *
   * @throws `SyntaxError` If `cssText` is not a single number, percentage,
   *   dimension, or math function, uses an unknown unit, or contains an
   *   invalid calculation.
   */
  parse(cssText: string): TInstance;
};
