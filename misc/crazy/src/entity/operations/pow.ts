import { EntityType } from "../entity-type";
import { Operation2 } from "../operation2";

/**
 * @public
 */
export class Pow extends Operation2 {
  /**
   *
   */
  get type(): EntityType.Pow {
    return EntityType.Pow;
  }
}
