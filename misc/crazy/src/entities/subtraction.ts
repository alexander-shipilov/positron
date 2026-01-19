import { CrazyEntityType } from "../crazy";

import { BinaryOperation } from "./binary-operation";

export class Subtraction extends BinaryOperation<CrazyEntityType.Subtraction> {
  get type(): CrazyEntityType.Subtraction {
    return CrazyEntityType.Subtraction;
  }
}
