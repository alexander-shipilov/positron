import type {
  BinaryOperation,
  Entity,
  EntityFormatter,
  Operand,
} from "../core";
import type { UnaryOperation } from "../core";
import { isSub, isDiv, isPow, isMul, isAdd, isNeg, isOperand } from "../core";

export class CommonFormatter implements EntityFormatter {
  format(entity: Entity): string {
    switch (true) {
      case isOperand(entity):
        return this.formatOperand(entity);
      case isNeg(entity):
        return this.formatUnaryOperation("neg", entity);
      case isAdd(entity):
        return this.formatBinaryOperation("add", entity);
      case isMul(entity):
        return this.formatBinaryOperation("mul", entity);
      case isDiv(entity):
        return this.formatBinaryOperation("div", entity);
      case isPow(entity):
        return this.formatBinaryOperation("exp", entity);
      case isSub(entity):
        return this.formatBinaryOperation("sub", entity);
      default:
        throw new TypeError(`Invalid entity`);
    }
  }

  protected formatBinaryOperation(
    name: string,
    operation: BinaryOperation,
  ): string {
    return `${name}(${this.format(operation.arg1)}, ${this.format(operation.arg2)})`;
  }

  protected formatOperand(operation: Operand): string {
    return operation.arg.join("");
  }

  protected formatUnaryOperation(
    name: string,
    operation: UnaryOperation,
  ): string {
    return `${name}(${this.format(operation.arg)})`;
  }
}
