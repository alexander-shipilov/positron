import { assertType, template } from "@positron/lang";

import { isSize } from "./is-size";

/**
 *
 */
export function assertHeight(height: number): number {
  return assertType(height, isSize, () =>
    template`Invalid height: ${0}, non-negative safe integer expected`(height),
  );
}
