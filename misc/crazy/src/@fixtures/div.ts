import type { Entity } from "../entity";
import { Div } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function div(arg1: Entity | number, arg2: Entity | number): Div {
  return new Div(entity(arg1), entity(arg2));
}
