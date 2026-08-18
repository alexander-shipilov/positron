import type { Creator } from "../../creator";
import type { Entity, OperandArg } from "../../entity";
import type { Generator } from "../generator";
import { EntityType } from "../../entity";
import { splittings } from "../../utils";

/**
 * @public
 */
export class PseudoGenerator implements Generator {
  constructor(protected readonly creator: Creator) {}

  /**
   * @param digits -
   */
  *generate(digits: OperandArg): Iterable<Entity> {
    for (const entity of this.generateArg(digits)) {
      yield entity;
      yield this.creator.createOperation1(EntityType.Neg, entity);
    }
  }

  /**
   * @param arg -
   */
  protected *generateArg(arg: OperandArg): Iterable<Entity> {
    yield this.creator.createOperand(arg);
    yield* this.generateOperations(arg);
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  protected *generateOperation(arg1: Entity, arg2: Entity): Iterable<Entity> {
    yield this.creator.createOperation2(EntityType.Add, arg1, arg2);
    yield this.creator.createOperation2(EntityType.Sub, arg1, arg2);
    yield this.creator.createOperation2(EntityType.Mul, arg1, arg2);
    yield this.creator.createOperation2(EntityType.Div, arg1, arg2);

    yield* this.generatePow(arg1, arg2);
  }

  /**
   * @param digits -
   */
  protected *generateOperations(digits: OperandArg): Iterable<Entity> {
    for (const [digits1, digits2] of splittings(digits)) {
      for (const arg1 of this.generateArg(digits1)) {
        for (const arg2 of this.generateArg(digits2)) {
          yield* this.generateOperation(arg1, arg2);
        }
      }
    }
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  protected *generatePow(arg1: Entity, arg2: Entity): Iterable<Entity> {
    const negArg1 = this.creator.createOperation1(EntityType.Neg, arg1);
    const negArg2 = this.creator.createOperation1(EntityType.Neg, arg2);

    yield this.creator.createOperation2(EntityType.Pow, arg1, arg2);
    yield this.creator.createOperation2(EntityType.Pow, negArg1, arg2);
    yield this.creator.createOperation2(EntityType.Pow, arg1, negArg2);
    yield this.creator.createOperation2(EntityType.Pow, negArg1, negArg2);
  }
}
