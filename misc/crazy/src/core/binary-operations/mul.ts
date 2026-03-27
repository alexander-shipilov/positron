import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Mul extends BinaryOperation {
  /**
   *
   */
  get type(): EntityType.Mul {
    return EntityType.Mul;
  }
}
