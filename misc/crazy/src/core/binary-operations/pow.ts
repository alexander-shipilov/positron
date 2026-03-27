import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Pow extends BinaryOperation {
  /**
   *
   */
  get type(): EntityType.Pow {
    return EntityType.Pow;
  }
}
