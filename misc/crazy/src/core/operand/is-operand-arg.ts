import { isArray } from "@positron/core";

import { isNatural } from "../../number";

import type { OperandArg } from "./operand-arg";

/**
 * @param maybeOperandArg
 *
 * @public
 */
export function isOperandArg(
  maybeOperandArg: unknown,
): maybeOperandArg is OperandArg {
  return (
    isArray(maybeOperandArg) &&
    maybeOperandArg.length > 0 &&
    maybeOperandArg.every(isNatural)
  );
}
