import type {
  Entity,
  EntityGenerator,
  EntityValue,
  EntityCreator,
  Operand,
  OperandArg,
} from "../core";
import { splittings } from "../array";
import { isMul, isDiv, isAdd, isSub, EntityType } from "../core";

export class BinaryOperationsGenerator<
  TValue extends EntityValue,
> implements EntityGenerator<TValue> {
  constructor(protected readonly creator: EntityCreator<TValue>) {}

  *generate(arg: OperandArg): Generator<Entity<TValue>> {
    for (const entity of this.generateArg(arg)) {
      yield entity;
      yield this.creator.createUnaryOperation(EntityType.Neg, entity);
    }
  }

  protected *generateAdd(
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): Generator<Entity<TValue>> {
    // a + (b + c) is covered by (a + b) + c
    // a + (b - c) is covered by (a + b) - c
    if (!isAdd(arg2) && !isSub(arg2)) {
      yield this.creator.createBinaryOperation(EntityType.Add, arg1, arg2);
    }
  }

  protected *generateArg(arg: OperandArg): Generator<Entity<TValue>> {
    yield this.generateOperand(arg);
    yield* this.generateOperations(arg);
  }

  protected *generateDiv(
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): Generator<Entity<TValue>> {
    // a / (b / c) is covered by (a / b) * c
    // a / (b * c) is covered by (a / b) / c
    if (!isMul(arg2) && !isDiv(arg2)) {
      yield this.creator.createBinaryOperation(EntityType.Div, arg1, arg2);
    }
  }

  protected *generateMul(
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): Generator<Entity<TValue>> {
    // a * (b * c) is covered by (a * b) * c
    // a * (b / c) is covered by (a * b) / c
    if (!isMul(arg2) && !isDiv(arg2)) {
      yield this.creator.createBinaryOperation(EntityType.Mul, arg1, arg2);
    }
  }

  protected generateOperand(arg: OperandArg): Operand<TValue> {
    return this.creator.createOperand(arg);
  }

  protected *generateOperation(
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): Generator<Entity<TValue>> {
    yield* this.generateAdd(arg1, arg2);
    yield* this.generateDiv(arg1, arg2);
    yield* this.generatePow(arg1, arg2);
    yield* this.generateMul(arg1, arg2);
    yield* this.generateSub(arg1, arg2);
  }

  protected *generateOperations(arg: OperandArg): Generator<Entity<TValue>> {
    for (const [digits1, digits2] of splittings(arg)) {
      for (const arg1 of this.generateArg(digits1)) {
        for (const arg2 of this.generateArg(digits2)) {
          yield* this.generateOperation(arg1, arg2);
        }
      }
    }
  }

  protected *generatePow(
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): Generator<Entity<TValue>> {
    const { creator } = this;

    const negArg1 = creator.createUnaryOperation(EntityType.Neg, arg1);
    const negArg2 = creator.createUnaryOperation(EntityType.Neg, arg2);

    yield creator.createBinaryOperation(EntityType.Pow, arg1, arg2);
    yield creator.createBinaryOperation(EntityType.Pow, negArg1, arg2);
    yield creator.createBinaryOperation(EntityType.Pow, arg1, negArg2);
    yield creator.createBinaryOperation(EntityType.Pow, negArg1, negArg2);
  }

  protected *generateSub(
    arg1: Entity<TValue>,
    arg2: Entity<TValue>,
  ): Generator<Entity<TValue>> {
    // a - (b + c) is covered by (a - b) - c
    // a - (b - c) is covered by (a - b) + c
    if (!isAdd(arg2) && !isSub(arg2)) {
      yield this.creator.createBinaryOperation(EntityType.Sub, arg1, arg2);
    }
  }
}
