import { isNumber } from "@positron/core";

import type { Entity } from "../entity";

import { operand } from "./operand";

/**
 * @public
 */
export function entity(arg: Entity | number): Entity {
  return isNumber(arg) ? operand(arg) : arg;
}
