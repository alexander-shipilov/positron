import type { TypeGuard } from "@positron/lang";
import { isArrayOf } from "@positron/lang";

import { isVector2 } from "../../utils";

import type { Fraction } from "./fraction";

export function isFraction<TItem>(
  maybeFraction: unknown,
  isType: TypeGuard<unknown, TItem>,
): maybeFraction is Fraction<TItem> {
  return isVector2(maybeFraction) && isArrayOf(maybeFraction, isType);
}
