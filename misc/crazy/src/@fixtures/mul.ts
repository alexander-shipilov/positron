import type { Entity } from "../entity";
import { Mul } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function mul(arg1: number | Entity, arg2: number | Entity): Mul {
  return new Mul(entity(arg1), entity(arg2));
}
