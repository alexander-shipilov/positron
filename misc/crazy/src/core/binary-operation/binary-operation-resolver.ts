import type { EntityValue } from "../entity";

/**
 * @public
 */
export type BinaryOperationResolver<TValue extends EntityValue> = (
  arg1: TValue,
  arg2: TValue,
) => TValue;
