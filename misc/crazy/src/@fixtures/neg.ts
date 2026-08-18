import type { Entity } from "../entity";
import { Neg } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function neg(arg: Entity | number): Neg {
  return new Neg(entity(arg));
}
