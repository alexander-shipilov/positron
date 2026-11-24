import type { CssNumericClasses } from "./css-numeric-classes";
import type { CssNumericHelpers } from "./css-numeric-helpers";

/**
 * The {@link CssNumeric} interface represents the complete CSS Typed OM
 * numeric factory environment exposing unit helpers and constructors.
 *
 * @public
 */
export interface CssNumeric extends CssNumericClasses {
  /**
   * The {@link CssNumeric.CSS} read-only property returns the factory
   * helpers for creating {@link CssUnitValue} instances by unit name.
   */
  readonly CSS: CssNumericHelpers;
}
