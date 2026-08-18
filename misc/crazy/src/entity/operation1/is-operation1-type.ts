import { EntityType } from "../entity-type";

import type { Operation1Type } from "./operation1-type";

/**
 * @param maybeOperation1Type -
 *
 * @public
 */
export function isOperation1Type(
  maybeOperation1Type: unknown,
): maybeOperation1Type is Operation1Type {
  return maybeOperation1Type === EntityType.Neg;
}
