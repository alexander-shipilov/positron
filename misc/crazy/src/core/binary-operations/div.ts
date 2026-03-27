import { BinaryOperation } from "../binary-operation";
import { EntityType } from "../entity";

/**
 * @public
 */
export class Div extends BinaryOperation {
  /**
   *
   */
  get type(): EntityType.Div {
    return EntityType.Div;
  }
}
