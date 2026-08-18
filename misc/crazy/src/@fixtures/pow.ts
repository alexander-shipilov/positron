import type { Entity } from "../entity";
import { Pow } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function pow(arg1: Entity | number, arg2: Entity | number): Pow {
  return new Pow(entity(arg1), entity(arg2));
}
