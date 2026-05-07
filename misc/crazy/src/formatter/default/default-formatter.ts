import type { Entity, Operation1, Operation2 } from "../../entity";
import type { Formatter } from "../formatter";
import { Add, Div, Mul, Neg, Operand, Pow, Sub } from "../../entity";

/**
 * @param entity -
 */
function format(entity: Entity): string {
  switch (true) {
    case entity instanceof Operand:
      return formatOperand(entity);
    case entity instanceof Neg:
      return formatOperation1(entity, "neg");
    case entity instanceof Add:
      return formatOperation2(entity, "add");
    case entity instanceof Sub:
      return formatOperation2(entity, "sub");
    case entity instanceof Mul:
      return formatOperation2(entity, "mul");
    case entity instanceof Div:
      return formatOperation2(entity, "div");
    case entity instanceof Pow:
      return formatOperation2(entity, "pow");
    default:
      throw new TypeError("Unknown entity");
  }
}

/**
 * @param entity -
 */
function formatOperand(entity: Operand): string {
  return entity.arg.join("");
}

/**
 * @param entity -
 * @param name -
 */
function formatOperation1(entity: Operation1, name: string): string {
  return `${name}(${format(entity.arg)})`;
}

/**
 * @param entity -
 * @param name -
 */
function formatOperation2(entity: Operation2, name: string): string {
  return `${name}(${format(entity.arg1)}, ${format(entity.arg2)})`;
}

/**
 * @public
 */
export const DefaultFormatter: Formatter = {
  format,
};
