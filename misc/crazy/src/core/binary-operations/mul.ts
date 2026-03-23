import type { EntityValue } from "../entity";
import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Mul<
  TValue extends EntityValue = EntityValue,
> extends BinaryOperation<TValue> {
  /**
   *
   */
  get type(): EntityType.Mul {
    return EntityType.Mul;
  }
}
