import { EntityType } from "../entity-type";
import { Operation1 } from "../operation1";

/**
 * @public
 */
export class Neg extends Operation1 {
  /**
   *
   */
  get type(): EntityType.Neg {
    return EntityType.Neg;
  }
}
