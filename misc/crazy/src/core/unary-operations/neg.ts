import type { EntityValue } from "../entity";
import { EntityType } from "../entity";
import { UnaryOperation } from "../unary-operation";

/**
 * @public
 */
export class Neg<
  TValue extends EntityValue = EntityValue,
> extends UnaryOperation<TValue> {
  /**
   *
   */
  get type(): EntityType.Neg {
    return EntityType.Neg;
  }
}
