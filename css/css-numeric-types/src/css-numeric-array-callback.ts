import type { CssNumericArray } from "./css-numeric-array";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssNumericArrayCallback} type represents a function to execute
 * for each element.
 *
 * @public
 */
export type CssNumericArrayCallback = (
  value: CssNumericValue,
  index: number,
  array: CssNumericArray,
) => void;
