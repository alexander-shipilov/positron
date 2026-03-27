import type { EntityValue } from "../entity";

/**
 * @public
 */
export type UnaryOperationResolver<TValue extends EntityValue> = (
  arg: TValue,
) => TValue;
