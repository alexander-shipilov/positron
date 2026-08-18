import { EntityType } from "../entity-type";
import { Operation2 } from "../operation2";

/**
 * @public
 */
export class Mul extends Operation2 {
  /**
   *
   */
  get type(): EntityType.Mul {
    return EntityType.Mul;
  }
}
