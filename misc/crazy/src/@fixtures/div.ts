import type { Entity } from "../entity";
import { Div } from "../entity";

import { entity } from "./entity";

/**
 * @public
 */
export function div(arg1: number | Entity, arg2: number | Entity): Div {
  return new Div(entity(arg1), entity(arg2));
}
