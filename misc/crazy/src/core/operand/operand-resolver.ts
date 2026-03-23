import type { Nullish } from "@positron/core";

import type { EntityValue } from "../entity";

import type { OperandArg } from "./operand-arg";

/**
 * @public
 */
export type OperandResolver<TValue extends EntityValue> = (
  arg: OperandArg,
) => Nullish<TValue>;
