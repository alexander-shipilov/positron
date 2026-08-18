import type { Creator } from "../../creator";
import type { Entity, OperandArg } from "../../entity";
import type { Generator } from "../generator";
import { EntityType } from "../../entity";
import { splittings } from "../../utils";

/**
 * @public
 */
export class GenuineGenerator implements Generator {
  /**
   * @param creator
   */
  constructor(protected readonly creator: Creator) {}

  /**
   * @param digits -
   */
  *generate(digits: OperandArg): Iterable<Entity> {
    yield* this.generateArg(digits);
  }

  /**
   * @param arg -
   */
  protected *generateArg(arg: OperandArg): Iterable<Entity> {
    yield* this.generateOperand(arg);
    yield* this.generateOperations(arg);
  }

  /**
   * @param arg -
   * @protected
   */
  protected *generateOperand(arg: OperandArg): Iterable<Entity> {
    const operand = this.creator.createOperand(arg);

    yield operand;
    yield this.creator.createOperation1(EntityType.Neg, operand);
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
    yield this.creator.createOperation2(EntityType.Pow, arg1, arg2);
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
}
