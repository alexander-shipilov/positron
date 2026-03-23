import type { EntityMath } from "../core";

import { resolver } from "./resolver";

export function math(): EntityMath {
  return {
    add: resolver,
    div: resolver,
    mul: resolver,
    neg: resolver,
    operand: resolver,
    pow: resolver,
    sub: resolver,
  };
}
