import { assertType, template } from "@positron/lang";

import { isSize } from "./is-size";

/**
 *
 */
export function assertSize(size: number): number {
  return assertType(size, isSize, () =>
    template`Invalid size: ${0}, non-negative safe integer expected`(size),
  );
}
