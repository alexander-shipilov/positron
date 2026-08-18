import { EntityType } from "../entity-type";
import { Operation2 } from "../operation2";

/**
 * @public
 */
export class Add extends Operation2 {
  /**
   *
   */
  get type(): EntityType.Add {
    return EntityType.Add;
  }
}
