import type { CrazyEntity } from "../crazy";
import type { Digit } from "../digit";
import { Exponentiation, Negation } from "../entities";

import { BinaryOperationsGenerator } from "./binary-operations-generator";

export class BinaryAndNegationOperationsGenerator extends BinaryOperationsGenerator {
  *generate(digits: [Digit, ...Digit[]]): Generator<CrazyEntity> {
    for (const operation of super.generate(digits)) {
      yield operation;
      yield new Negation(operation);
    }
  }

  protected *generateExponentiation(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    const negArg1 = new Negation(arg1);
    const negArg2 = new Negation(arg2);

    yield new Exponentiation(arg1, arg2);
    yield new Exponentiation(negArg1, arg2);
    yield new Exponentiation(arg1, negArg2);
    yield new Exponentiation(negArg1, negArg2);
  }
}
