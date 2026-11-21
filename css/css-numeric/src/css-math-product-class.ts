import type { CssMathProduct } from "./css-math-product";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathProductClass} interface represents a class for creating
 * instances of {@link CssMathProduct}.
 *
 * @typeParam TInstance - The instance type constructed by this class.
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
   *   the `"number"` unit. All arguments are stored as separate items in the
   *   {@link CssMathProduct.values} property.
   *
   * @param args - One or more numbers or {@link CssNumericValue} objects.
   *
   * @throws `SyntaxError` If no arguments are passed.
   *
   * @throws `TypeError` If one or more arguments are non-finite numbers or if
   *   the types of arguments cannot be combined into a product.
   */
  new (...args: readonly CssNumberish[]): TInstance;
}
