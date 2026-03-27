import type { Entity } from "../core";
import { Neg } from "../core";

import { entity } from "./entity";

/**
 * @public
 */
export function neg(arg: Entity | number): Neg {
  return new Neg(entity(arg));
}
