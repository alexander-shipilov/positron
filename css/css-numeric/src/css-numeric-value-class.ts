import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssNumericValueClass} interface represents a class for creating
 * instances of {@link CssNumericValue}.
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
   *  const sum = CSSNumericValue.parse("calc(50% + 10px)");
   *
   *  console.log(sum.constructor.name);
   *  // >> "CSSMathSum"
   *
   *  console.log(sum.toString());
   *  // >> "calc(50% + 10px)"
   * ```
   *
   * @param cssText - A string containing a single CSS number, percentage,
   *   dimension (a number with a unit, such as `"42px"`), or math function,
   *   such as `calc()`, `min()`, `max()`, or `clamp()`.
   *
   * @returns A new instance of {@link CssNumericValue}.
   *   This is a {@link CssUnitValue} for a number, percentage, or dimension,
   *   or one of the {@link CssMathValue} subtypes for a math function.
   *
   * @throws `SyntaxError` if `cssText` isn't a single number, percentage,
   *   dimension, or math function (for example, `"auto"`, `"10px 20px"`,
   *   or `"var(--size)"`), if it uses an unknown unit (such as `"10foo"`), or
   *   if it contains an invalid calculation (such as `"calc(1px + 1s)"`).
   */
  parse(cssText: string): TInstance;
};
