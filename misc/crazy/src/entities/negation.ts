import { CrazyEntityType } from "../crazy";

import { UnaryOperation } from "./unary-operation";

export class Negation extends UnaryOperation<CrazyEntityType.Negation> {
  get type(): CrazyEntityType.Negation {
    return CrazyEntityType.Negation;
  }
}
