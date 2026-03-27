import { assert, isNonOptional } from "@positron/core";

import type { Entity, EntityCreator, EntitySerializer } from "../core";
import {
  BinaryOperation,
  isBinaryOperationType,
  isOperandArg,
  isUnaryOperationType,
  Operand,
  UnaryOperation,
} from "../core";

/**
 * @public
 */
export class PostfixSerializer implements EntitySerializer<unknown[]> {
  /**
   * @param creator
   */
  constructor(protected readonly creator: EntityCreator) {}

  /**
   *
   * @param data
   */
  deserialize(data: unknown[]): Entity {
    const { creator } = this;
    const stack: Entity[] = [];

    for (const token of data) {
      if (isUnaryOperationType(token)) {
        const arg = stack.pop();

        stack.push(
          creator.createUnaryOperation(
            token,
            assert(arg, isNonOptional, new SyntaxError("Missed arg")),
          ),
        );
      } else if (isBinaryOperationType(token)) {
        const [arg1, arg2] = stack.splice(-2);

        stack.push(
          creator.createBinaryOperation(
            token,
            assert(arg1, isNonOptional, new SyntaxError("Missed arg")),
            assert(arg2, isNonOptional, new SyntaxError("Missed arg")),
          ),
        );
      } else if (isOperandArg(token)) {
        stack.push(creator.createOperand(token));
      } else {
        throw new SyntaxError("Invalid token");
      }
    }

    if (stack.length !== 1) {
      throw new SyntaxError("Invalid input");
    }

    return stack[0];
  }

  /**
   *
   * @param entity
   */
  serialize(entity: Entity): unknown[] {
    const result: unknown[] = [];

    this.serializeEntity(entity, result);

    return result;
  }

  /**
   * @param entity
   * @param result
   */
  protected serializeEntity(entity: Entity, result: unknown[]): void {
    if (entity instanceof Operand) {
      result.push(entity.arg);
    } else if (entity instanceof UnaryOperation) {
      this.serializeEntity(entity.arg, result);
      result.push(entity.type);
    } else if (entity instanceof BinaryOperation) {
      this.serializeEntity(entity.arg1, result);
      this.serializeEntity(entity.arg2, result);
      result.push(entity.type);
    } else {
      throw new TypeError("Unknown entity");
    }
  }
}
