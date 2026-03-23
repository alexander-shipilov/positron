import type { Entity } from "../core";
import { Pow } from "../core";

import { entity } from "./entity";
import { resolver } from "./resolver";

/**
 * @public
 */
export function pow(arg1: Entity | number, arg2: Entity | number): Pow {
  return new Pow(entity(arg1), entity(arg2), resolver);
}
