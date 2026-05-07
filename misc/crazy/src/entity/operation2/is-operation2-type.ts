import { EntityType } from "../entity-type";

import type { Operation2Type } from "./operation2-type";

/**
 * @param maybeOperation2Type -
 *
 * @public
 */
export function isOperation2Type(
  maybeOperation2Type: unknown,
): maybeOperation2Type is Operation2Type {
  return (
    maybeOperation2Type === EntityType.Add ||
    maybeOperation2Type === EntityType.Sub ||
    maybeOperation2Type === EntityType.Mul ||
    maybeOperation2Type === EntityType.Div ||
    maybeOperation2Type === EntityType.Pow
  );
}
