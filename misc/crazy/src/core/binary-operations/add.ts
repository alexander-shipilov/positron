import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Add extends BinaryOperation {
  /**
   *
   */
  get type(): EntityType.Add {
    return EntityType.Add;
  }
}
