import { toSafeIntegerNumber } from "@positron/lang";

import type { Power } from "./power";

/**
 * @public
 */
export function toPower(maybePower: number): Power {
  return toSafeIntegerNumber(maybePower) as Power;
}
