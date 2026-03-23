import type { Entity } from "../core";
import { Add } from "../core";

import { entity } from "./entity";
import { resolver } from "./resolver";

/**
 * @public
 */
export function add(arg1: Entity | number, arg2: Entity | number): Add {
  return new Add(entity(arg1), entity(arg2), resolver);
}
