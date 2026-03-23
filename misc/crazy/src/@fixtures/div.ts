import type { Entity } from "../core";
import { Div } from "../core";

import { entity } from "./entity";
import { resolver } from "./resolver";

/**
 * @public
 */
export function div(arg1: Entity | number, arg2: Entity | number): Div {
  return new Div(entity(arg1), entity(arg2), resolver);
}
