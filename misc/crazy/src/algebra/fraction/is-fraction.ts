import type { TypeGuard } from "@positron/core";
import { isArrayOf } from "@positron/core";

import { isVector2 } from "../../utils";

import type { Fraction } from "./fraction";

export function isFraction<TItem>(
  maybeFraction: unknown,
  isType: TypeGuard<unknown, TItem>,
): maybeFraction is Fraction<TItem> {
  return isVector2(maybeFraction) && isArrayOf(maybeFraction, isType);
}
