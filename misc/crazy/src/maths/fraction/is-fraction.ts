import type { TypeGuard } from "@positron/core";
import { isArrayOf } from "@positron/core";

import type { Fraction } from "../types";
import { isVector2 } from "../../utils";

export function isFraction<TItem>(
  maybeFraction: unknown,
  isType: TypeGuard<unknown, TItem>,
): maybeFraction is Fraction<TItem> {
  return isVector2(maybeFraction) && isArrayOf(maybeFraction, isType);
}
