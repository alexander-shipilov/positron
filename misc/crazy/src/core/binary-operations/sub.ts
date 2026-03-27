import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Sub extends BinaryOperation {
  /**
   *
   */
  get type(): EntityType.Sub {
    return EntityType.Sub;
  }
}
