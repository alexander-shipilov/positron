import type { EntityValue } from "../entity";
import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Add<
  TValue extends EntityValue = EntityValue,
> extends BinaryOperation<TValue> {
  /**
   *
   */
  get type(): EntityType.Add {
    return EntityType.Add;
  }
}
