import { isTuple2 } from "../tuple2";

import type { Vector2 } from "./vector2";

/**
 * @param maybeVector2
 *
 * @public
 */
export function isVector2(
  maybeVector2: unknown,
): maybeVector2 is Vector2<unknown> {
  return isTuple2(maybeVector2);
}
