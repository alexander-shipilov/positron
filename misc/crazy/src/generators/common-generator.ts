import type {
  Entity,
  EntityCreator,
  EntityGenerator,
  OperandArg,
} from "../core";
import { splittings } from "../array";
import { Add, Div, EntityType, Mul, Sub } from "../core";

/**
 * @public
 */
export class CommonGenerator implements EntityGenerator {
  /**
   * @param creator
   */
  constructor(protected readonly creator: EntityCreator) {}

  /**
   * @param digits
   */
  *generate(digits: OperandArg): Generator<Entity> {
    for (const entity of this.generateArg(digits)) {
      yield entity;
      yield this.creator.createUnaryOperation(EntityType.Neg, entity);
    }
  }

  /**
   * @param arg1
   * @param arg2
   */
  protected *generateAdd(arg1: Entity, arg2: Entity): Generator<Entity> {
    // a + (b + c) is covered by (a + b) + c
    // a + (b - c) is covered by (a + b) - c
    if (!(arg2 instanceof Add) && !(arg2 instanceof Sub)) {
      yield this.creator.createBinaryOperation(EntityType.Add, arg1, arg2);
    }
  }

  /**
   * @param arg
   */
  protected *generateArg(arg: OperandArg): Generator<Entity> {
    yield this.creator.createOperand(arg);
    yield* this.generateOperations(arg);
  }

  /**
   * @param arg1
   * @param arg2
   */
  protected *generateDiv(arg1: Entity, arg2: Entity): Generator<Entity> {
    // a / (b / c) is covered by (a / b) * c
    // a / (b * c) is covered by (a / b) / c
    if (!(arg2 instanceof Mul) && !(arg2 instanceof Div)) {
      yield this.creator.createBinaryOperation(EntityType.Div, arg1, arg2);
    }
  }

  /**
   * @param arg1
   * @param arg2
   */
  protected *generateMul(arg1: Entity, arg2: Entity): Generator<Entity> {
    // a * (b * c) is covered by (a * b) * c
    // a * (b / c) is covered by (a * b) / c
    if (!(arg2 instanceof Mul) && !(arg2 instanceof Div)) {
      yield this.creator.createBinaryOperation(EntityType.Mul, arg1, arg2);
    }
  }

  /**
   * @param arg1
   * @param arg2
   */
  protected *generateOperation(arg1: Entity, arg2: Entity): Generator<Entity> {
    yield* this.generateAdd(arg1, arg2);
    yield* this.generateSub(arg1, arg2);
    yield* this.generateMul(arg1, arg2);
    yield* this.generateDiv(arg1, arg2);
    yield* this.generatePow(arg1, arg2);
  }

  /**
   * @param digits
   */
  protected *generateOperations(digits: OperandArg): Generator<Entity> {
    for (const [digits1, digits2] of splittings(digits)) {
      for (const arg1 of this.generateArg(digits1)) {
        for (const arg2 of this.generateArg(digits2)) {
          yield* this.generateOperation(arg1, arg2);
        }
      }
    }
  }

  /**
   * @param arg1
   * @param arg2
   */
  protected *generatePow(arg1: Entity, arg2: Entity): Generator<Entity> {
    const { creator } = this;

    const negArg1 = creator.createUnaryOperation(EntityType.Neg, arg1);
    const negArg2 = creator.createUnaryOperation(EntityType.Neg, arg2);

    yield creator.createBinaryOperation(EntityType.Pow, arg1, arg2);
    yield creator.createBinaryOperation(EntityType.Pow, negArg1, arg2);
    yield creator.createBinaryOperation(EntityType.Pow, arg1, negArg2);
    yield creator.createBinaryOperation(EntityType.Pow, negArg1, negArg2);
  }

  /**
   * @param arg1
   * @param arg2
   */
  protected *generateSub(arg1: Entity, arg2: Entity): Generator<Entity> {
    // a - (b + c) is covered by (a - b) - c
    // a - (b - c) is covered by (a - b) + c
    if (!(arg2 instanceof Add) && !(arg2 instanceof Sub)) {
      yield this.creator.createBinaryOperation(EntityType.Sub, arg1, arg2);
    }
  }
}
