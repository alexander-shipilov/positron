import type { CssMathProduct } from "./css-math-product";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathProductClass} interface represents a class for creating
 * instances of {@link CssMathProduct}.
 *
 * @public
 */
export interface CssMathProductClass<
  TInstance extends CssMathProduct = CssMathProduct,
> {
  /**
   * Creates a new {@link CssMathProduct} object representing the product of
   * the arguments passed into it.
   *
   * @remarks
   *   Numeric arguments are wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit. All arguments are stored as separate items in
   *   the {@link CssMathProduct.values} property.
   *
   * @param args - Arguments.
   *   One or more numbers or {@link CssNumericValue} objects.
   *
   * @throws `SyntaxError` if no arguments are passed.
   *
   * @throws `TypeError` if one or more arguments are non-finite numbers.
   *
   * @throws `TypeError` if the types of arguments can't be combined into a
   *   product. This is rare: multiplying values of different units
   *   (a `<length>` by a `<time>`, for example) is allowed and produces
   *   a compound type.
   */
  new (...args: readonly CssNumberish[]): TInstance;
}
