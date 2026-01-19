import { CrazyEntityType } from "../crazy";

import { BinaryOperation } from "./binary-operation";

export class Addition extends BinaryOperation<CrazyEntityType.Addition> {
  get type(): CrazyEntityType.Addition {
    return CrazyEntityType.Addition;
  }
}
