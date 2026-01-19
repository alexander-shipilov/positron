import type { CrazyEntity, CrazyFormatter } from "../crazy";
import type { BinaryOperation } from "../entities";
import {
  Addition,
  Division,
  Exponentiation,
  Negation,
  Operand,
  Product,
  Subtraction,
} from "../entities";

export class CrazyCommonFormatter implements CrazyFormatter {
  format(operation: CrazyEntity): string {
    switch (true) {
      case operation instanceof Operand:
        return this.formatOperand(operation);
      case operation instanceof Negation:
        return this.formatUnaryOperation("neg", operation);
      case operation instanceof Addition:
        return this.formatBinaryOperation("add", operation);
      case operation instanceof Subtraction:
        return this.formatBinaryOperation("sub", operation);
      case operation instanceof Product:
        return this.formatBinaryOperation("mul", operation);
      case operation instanceof Division:
        return this.formatBinaryOperation("div", operation);
      case operation instanceof Exponentiation:
        return this.formatBinaryOperation("exp", operation);
      default:
        throw new TypeError(`Invalid operand`);
    }
  }

  protected formatBinaryOperation(
    name: string,
    operation: BinaryOperation,
  ): string {
    return `${name}(${this.format(operation.arg1)}, ${this.format(operation.arg2)})`;
  }

  protected formatOperand(operation: Operand): string {
    return String(operation.value);
  }

  protected formatUnaryOperation(name: string, operation: Negation): string {
    return `${name}(${this.format(operation.arg)})`;
  }
}
