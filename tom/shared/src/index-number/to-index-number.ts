import { assertType, debug, template } from "@positron/lang";

import type { IndexNumber } from "./index-number";
import { isIndexNumber } from "./is-index-number";

/**
 *
 * @param value - The value to convert.
 *
 * @public
 */
export function toIndexNumber(value: number): IndexNumber {
  return assertType(
    value,
    isIndexNumber,
    () =>
      template`${0} cannot be converted to index, because it is not a non-negative integer`(
        debug(value),
      ),
    TypeError,
  );
}
