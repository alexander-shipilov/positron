import { EntityType } from "../entity-type";
import { Operation2 } from "../operation2";

/**
 * @public
 */
export class Div extends Operation2 {
  /**
   *
   */
  get type(): EntityType.Div {
    return EntityType.Div;
  }
}
