import type { EntityValue } from "../entity";
import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Div<
  TValue extends EntityValue = EntityValue,
> extends BinaryOperation<TValue> {
  /**
   *
   */
  get type(): EntityType.Div {
    return EntityType.Div;
  }
}
