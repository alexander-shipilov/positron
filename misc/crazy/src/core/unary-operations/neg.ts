import { EntityType } from "../entity";
import { UnaryOperation } from "../unary-operation";

/**
 * @public
 */
export class Neg extends UnaryOperation {
  /**
   *
   */
  get type(): EntityType.Neg {
    return EntityType.Neg;
  }
}
