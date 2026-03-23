import type { Entity } from "../core";
import { Sub } from "../core";

import { entity } from "./entity";
import { resolver } from "./resolver";

/**
 * @public
 */
export function sub(arg1: Entity | number, arg2: Entity | number): Sub {
  return new Sub(entity(arg1), entity(arg2), resolver);
}
