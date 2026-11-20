import type { TypeGuard } from "@positron/lang";
import { isArrayOf } from "@positron/lang";

import type { Vector2 } from "./vector2";

export function isVector2Of<TItem, TExpectedItem extends TItem>(
  maybeVector2Of: Vector2<TItem>,
  isType: TypeGuard<TItem, TExpectedItem>,
): maybeVector2Of is Vector2<TExpectedItem> {
  return isArrayOf(maybeVector2Of, isType);
}
