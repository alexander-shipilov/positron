import { CrazyEntityType } from "../crazy";

import { BinaryOperation } from "./binary-operation";

export class Division extends BinaryOperation<CrazyEntityType.Division> {
  get type(): CrazyEntityType.Division {
    return CrazyEntityType.Division;
  }
}
