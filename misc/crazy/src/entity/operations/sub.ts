import { EntityType } from "../entity-type";
import { Operation2 } from "../operation2";

/**
 * @public
 */
export class Sub extends Operation2 {
  /**
   *
   */
  get type(): EntityType.Sub {
    return EntityType.Sub;
  }
}
