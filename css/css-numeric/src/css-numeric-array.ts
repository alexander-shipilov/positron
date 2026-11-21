import type { Any } from "@positron/lang";

import type { CssNumericArrayCallback } from "./css-numeric-array-callback";
import type { CssNumericValue } from "./css-numeric-value";

/**
 * The {@link CssNumericArray} interface represents an iterable of
 * {@link CssNumericValue}-based objects.
 *
 * @remarks
 *   An object of this type is used to represent the operands of a mathematical
 *   operation in the values property of {@link CssMathSum},
 *   {@link CssMathProduct}, {@link CssMathMin}, and {@link CssMathMax}.
 *
 *   The items can be accessed by index (`array[0]`), and as an iterable it can
 *   be used with a `for...of` loop or the spread syntax.
 *
 * @public
 */
export interface CssNumericArray {
  readonly [n: number]: CssNumericValue;

  readonly length: number;

  [Symbol.iterator](): ArrayIterator<CssNumericValue>;

  entries(): ArrayIterator<[number, CssNumericValue]>;

  /**
   * The {@link CssNumericArray.forEach} method executes a provided function
   * once for each item in the object.
   *
   * @param callback - The function to execute for each element.
   *
   * @param thisArg - Value to use as this when executing `callback`.
   */
  forEach(callback: CssNumericArrayCallback, thisArg?: Any): void;

  keys(): ArrayIterator<number>;

  values(): ArrayIterator<CssNumericValue>;
}
