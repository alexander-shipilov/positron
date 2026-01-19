import type { CrazyEntity, CrazyGenerator } from "../crazy";
import type { Digit } from "../digit";
import type { BinaryOperationClass } from "../entities";
import { splittings } from "../array";
import {
  Addition,
  Division,
  Exponentiation,
  Negation,
  Operand,
  Product,
  Subtraction,
} from "../entities";

export class GeneratorTotal implements CrazyGenerator {
  *generate(digits: [Digit, ...Digit[]]): IterableIterator<CrazyEntity> {
    const operand = this.createOperand(digits);

    yield operand;
    yield new Negation(operand);

    yield* this.generateOperations(digits);
  }

  protected createOperand(digits: [Digit, ...Digit[]]): Operand {
    return new Operand(Number(digits.join("")));
  }

  protected *generateArgument(
    digits: [Digit, ...Digit[]],
  ): IterableIterator<CrazyEntity> {
    yield this.createOperand(digits);
    yield* this.generateOperations(digits);
  }

  protected *generateBinaryOperation(
    left: CrazyEntity,
    right: CrazyEntity,
    Operation: BinaryOperationClass,
  ): IterableIterator<CrazyEntity> {
    const operations = [
      new Operation(left, right),
      new Operation(new Negation(left), right),
      new Operation(left, new Negation(right)),
      new Operation(new Negation(left), new Negation(right)),
    ];

    for (const operation of operations) {
      yield operation;
      yield new Negation(operation);
    }
  }

  protected *generateOperations(
    digits: [Digit, ...Digit[]],
  ): IterableIterator<CrazyEntity> {
    for (const [leftDigits, rightDigits] of splittings(digits)) {
      for (const left of this.generateArgument(leftDigits)) {
        for (const right of this.generateArgument(rightDigits)) {
          yield* this.generateBinaryOperation(left, right, Addition);
          yield* this.generateBinaryOperation(left, right, Subtraction);
          yield* this.generateBinaryOperation(left, right, Product);
          yield* this.generateBinaryOperation(left, right, Division);
          yield* this.generateBinaryOperation(left, right, Exponentiation);
        }
      }
    }
  }
}
