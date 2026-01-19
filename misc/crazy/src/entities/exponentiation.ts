import { CrazyEntityType } from "../crazy";

import { BinaryOperation } from "./binary-operation";

export class Exponentiation extends BinaryOperation<CrazyEntityType.Exponentiation> {
  get type(): CrazyEntityType.Exponentiation {
    return CrazyEntityType.Exponentiation;
  }
}
