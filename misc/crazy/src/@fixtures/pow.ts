import type { Entity } from "../entity";
import { Pow } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function pow(arg1: number | Entity, arg2: number | Entity): Pow {
  return new Pow(entity(arg1), entity(arg2));
}
