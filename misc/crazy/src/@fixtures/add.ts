import type { Entity } from "../entity";
import { Add } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function add(arg1: number | Entity, arg2: number | Entity): Add {
  return new Add(entity(arg1), entity(arg2));
}
