import type { Entity } from "../core";
import { Neg } from "../core";

import { entity } from "./entity";
import { resolver } from "./resolver";

/**
 * @public
 */
export function neg(arg: Entity | number): Neg {
  return new Neg(entity(arg), resolver);
}
