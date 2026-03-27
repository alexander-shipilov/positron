import type {
  BinaryOperation,
  Entity,
  EntityFormatter,
  UnaryOperation,
} from "../core";
import { Neg, Add, Mul, Div, Pow, Sub, Operand } from "../core";

export class CommonFormatter implements EntityFormatter {
  format(entity: Entity): string {
    switch (true) {
      case entity instanceof Operand:
        return this.formatOperand(entity);
      case entity instanceof Neg:
        return this.formatUnaryOperation("neg", entity);
      case entity instanceof Add:
        return this.formatBinaryOperation("add", entity);
      case entity instanceof Sub:
        return this.formatBinaryOperation("sub", entity);
      case entity instanceof Mul:
        return this.formatBinaryOperation("mul", entity);
      case entity instanceof Div:
        return this.formatBinaryOperation("div", entity);
      case entity instanceof Pow:
        return this.formatBinaryOperation("pow", entity);
      default:
        throw new TypeError("Unknown entity");
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
