import type { EntityValue } from "../entity";

import type { OperandArg } from "./operand-arg";

/**
 * @public
 */
export type OperandResolver<TValue extends EntityValue> = (
  arg: OperandArg,
) => TValue;
