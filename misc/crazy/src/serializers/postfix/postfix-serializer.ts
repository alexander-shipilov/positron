import { assert, isNonOptional } from "@positron/core";

import type {
  Entity,
  EntitySerializer,
  EntityValue,
  EntityCreator,
} from "../../core";
import {
  isOperandArg,
  isBinaryOperation,
  isUnaryOperation,
  isOperand,
  isBinaryOperationType,
  isUnaryOperationType,
} from "../../core";

/**
 * @public
 */
export class PostfixSerializer<
  TValue extends EntityValue,
> implements EntitySerializer<TValue, unknown[]> {
  constructor(protected readonly creator: EntityCreator<TValue>) {}

  deserialize(data: unknown[]): Entity<TValue> {
    const { creator } = this;
    const stack: Entity<TValue>[] = [];

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

  serialize(entity: Entity<TValue>): unknown[] {
    const result: unknown[] = [];

    this.serializeEntity(entity, result);

    return result;
  }

  protected serializeEntity(entity: Entity, result: unknown[]): void {
    if (isOperand(entity)) {
      result.push(entity.arg);
    } else if (isUnaryOperation(entity)) {
      this.serializeEntity(entity.arg, result);
      result.push(entity.type);
    } else if (isBinaryOperation(entity)) {
      this.serializeEntity(entity.arg1, result);
      this.serializeEntity(entity.arg2, result);
      result.push(entity.type);
    } else {
      throw new Error("Invalid entity");
    }
  }
}
