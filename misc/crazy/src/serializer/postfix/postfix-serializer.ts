import { assert, isNonOptional } from "@positron/core";

import type { Entity } from "../../entity";
import type { Serializer } from "../serializer";
import { DefaultCreator } from "../../creator";
import {
  isOperandArg,
  isOperation1Type,
  isOperation2Type,
  Operand,
  Operation1,
  Operation2,
} from "../../entity";

/**
 * @param entity -
 * @param result -
 */
function serialize(entity: Entity, result: unknown[]): void {
  if (entity instanceof Operand) {
    result.push(entity.arg);
  } else if (entity instanceof Operation1) {
    serialize(entity.arg, result);
    result.push(entity.type);
  } else if (entity instanceof Operation2) {
    serialize(entity.arg1, result);
    serialize(entity.arg2, result);
    result.push(entity.type);
  } else {
    throw new TypeError("Unknown entity");
  }
}

/**
 * @public
 */
export const PostfixSerializer: Serializer<readonly unknown[]> = {
  /**
   * @param data -
   */
  deserialize(data: unknown[]): Entity {
    const stack: Entity[] = [];

    for (const token of data) {
      if (isOperation1Type(token)) {
        const arg = stack.pop();

        stack.push(
          DefaultCreator.createOperation1(
            token,
            assert(arg, isNonOptional, new SyntaxError("Missed arg")),
          ),
        );
      } else if (isOperation2Type(token)) {
        const [arg1, arg2] = stack.splice(-2);

        stack.push(
          DefaultCreator.createOperation2(
            token,
            assert(arg1, isNonOptional, new SyntaxError("Missed arg")),
            assert(arg2, isNonOptional, new SyntaxError("Missed arg")),
          ),
        );
      } else if (isOperandArg(token)) {
        stack.push(DefaultCreator.createOperand(token));
      } else {
        throw new SyntaxError("Invalid token");
      }
    }

    if (stack.length !== 1) {
      throw new SyntaxError("Invalid input");
    }

    return stack[0];
  },

  /**
   *
   * @param entity -
   */
  serialize(entity: Entity): unknown[] {
    const result: unknown[] = [];

    serialize(entity, result);

    return result;
  },
};
