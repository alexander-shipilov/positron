import type { EntityValue } from "../entity";
import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Pow<
  TValue extends EntityValue = EntityValue,
> extends BinaryOperation<TValue> {
  /**
   *
   */
  get type(): EntityType.Pow {
    return EntityType.Pow;
  }
}
