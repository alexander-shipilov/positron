import type { Entity } from "../entity";
import { Sub } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function sub(arg1: number | Entity, arg2: number | Entity): Sub {
  return new Sub(entity(arg1), entity(arg2));
}
