import type { CrazyEntity, CrazyGenerator } from "../crazy";
import type { Digit } from "../digit";
import type { BinaryOperationType } from "../entities";
import { splittings } from "../array";
import { CrazyEntityType } from "../crazy";
import {
  Addition,
  Division,
  Exponentiation,
  Operand,
  Product,
  Subtraction,
} from "../entities";

const OPERATIONS = new Set<BinaryOperationType>([
  CrazyEntityType.Addition,
  CrazyEntityType.Division,
  CrazyEntityType.Exponentiation,
  CrazyEntityType.Product,
  CrazyEntityType.Subtraction,
]);

export class BinaryOperationsGenerator implements CrazyGenerator {
  constructor(
    protected readonly operations: ReadonlySet<BinaryOperationType> = OPERATIONS,
  ) {}

  *generate(digits: [Digit, ...Digit[]]): Generator<CrazyEntity> {
    yield this.createOperand(digits);
    yield* this.generateOperations(digits);
  }

  protected createOperand(digits: [Digit, ...Digit[]]): Operand {
    return new Operand(Number(digits.join("")));
  }

  protected *generateAddition(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    // x + (a + b) is covered by (x + a) + b
    // x + (a - b) is covered by (x + a) - b
    if (
      !(arg2 instanceof Addition) && //
      !(arg2 instanceof Subtraction)
    ) {
      yield new Addition(arg1, arg2);
    }
  }

  protected *generateArgument(
    digits: [Digit, ...Digit[]],
  ): Generator<CrazyEntity> {
    yield this.createOperand(digits);
    yield* this.generateOperations(digits);
  }

  protected *generateDivision(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    // x / (a / b) is covered by (x / a) * b
    // x / (a * b) is covered by (x / a) / b
    if (
      !(arg2 instanceof Product) && //
      !(arg2 instanceof Division)
    ) {
      yield new Division(arg1, arg2);
    }
  }

  protected *generateExponentiation(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    yield new Exponentiation(arg1, arg2);
  }

  protected *generateOperation(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    for (const type of this.operations) {
      switch (type) {
        case CrazyEntityType.Addition:
          yield* this.generateAddition(arg1, arg2);
          break;
        case CrazyEntityType.Division:
          yield* this.generateDivision(arg1, arg2);
          break;
        case CrazyEntityType.Exponentiation:
          yield* this.generateExponentiation(arg1, arg2);
          break;
        case CrazyEntityType.Product:
          yield* this.generateProduct(arg1, arg2);
          break;
        case CrazyEntityType.Subtraction:
          yield* this.generateSubtraction(arg1, arg2);
          break;
        default:
          throw new Error(`Unknown operation type`);
      }
    }
  }

  protected *generateOperations(
    digits: [Digit, ...Digit[]],
  ): Generator<CrazyEntity> {
    for (const [arg1Digits, arg2Digits] of splittings(digits)) {
      for (const arg1 of this.generateArgument(arg1Digits)) {
        for (const arg2 of this.generateArgument(arg2Digits)) {
          yield* this.generateOperation(arg1, arg2);
        }
      }
    }
  }

  protected *generateProduct(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    // x * (a * b) is covered by (x * a) * b
    // x * (a / b) is covered by (x * a) / b
    if (
      !(arg2 instanceof Product) && //
      !(arg2 instanceof Division)
    ) {
      yield new Product(arg1, arg2);
    }
  }

  protected *generateSubtraction(
    arg1: CrazyEntity,
    arg2: CrazyEntity,
  ): Generator<CrazyEntity> {
    // x - (a + b) is covered by (x - a) - b
    // x - (a - b) is covered by (x - a) + b
    if (
      !(arg2 instanceof Addition) && //
      !(arg2 instanceof Subtraction)
    ) {
      yield new Subtraction(arg1, arg2);
    }
  }
}
