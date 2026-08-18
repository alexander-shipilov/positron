import type { TypeGuard } from "@positron/core";
import { isArrayOf } from "@positron/core";

import type { Vector2 } from "./vector2";

export function isVector2Of<TItem, TExpectedItem extends TItem>(
  maybeVector2Of: Vector2<TItem>,
  isType: TypeGuard<TItem, TExpectedItem>,
): maybeVector2Of is Vector2<TExpectedItem> {
  return isArrayOf(maybeVector2Of, isType);
}
