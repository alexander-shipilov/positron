import type { Entity } from "../entity";
import { Sub } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function sub(arg1: Entity | number, arg2: Entity | number): Sub {
  return new Sub(entity(arg1), entity(arg2));
}
