import type { CssNumericClasses } from "./css-numeric-classes";
import type { CssNumericHelpers } from "./css-numeric-helpers";

/**
 *
 * @public
 */
export interface CssNumeric extends CssNumericClasses {
  readonly CSS: CssNumericHelpers;
}
