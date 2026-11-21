import type { CssMathClamp } from "./css-math-clamp";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathClampClass} interface represents a class for creating
 * instances of {@link CssMathClamp}.
 *
 * @public
 */
export interface CssMathClampClass {
  /**
   * Creates a new {@link CssMathClamp} object representing a CSS `clamp()`
   * function.
   *
   * @remarks
   *   Numeric arguments are wrapped into {@link CssUnitValue} objects with
   *   the `"number"` unit.
   *
   * @param lower - A number or {@link CssNumericValue} that represents the
   *   minimum value.
   *
   * @param value - A number or {@link CssNumericValue} that represents the
   *   preferred value.
   *
   * @param upper - A number or {@link CssNumericValue} that represents the
   *   maximum value.
   *
   * @throws `TypeError` If one or more arguments are non-finite numbers or
   *   have incompatible types (for example, mixing a `<length>` with an
   *   `<angle>`).
   */
  new (
    lower: CssNumberish,
    value: CssNumberish,
    upper: CssNumberish,
  ): CssMathClamp;
}
