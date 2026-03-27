import type { Entity } from "../core";
import { Mul } from "../core";

import { entity } from "./entity";

/**
 * @public
 */
export function mul(arg1: Entity | number, arg2: Entity | number): Mul {
  return new Mul(entity(arg1), entity(arg2));
}
