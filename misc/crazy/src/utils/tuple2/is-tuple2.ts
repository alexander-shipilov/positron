import { isArray } from "@positron/core";

import type { Tuple2 } from "./tuple2";

/**
 *
 * @param maybeTuple2
 *
 * @public
 */
export function isTuple2(
  maybeTuple2: unknown,
): maybeTuple2 is Tuple2<unknown, unknown> {
  return isArray(maybeTuple2) && maybeTuple2.length === 2;
}
