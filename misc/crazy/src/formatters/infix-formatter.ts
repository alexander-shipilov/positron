import type {
  UnaryOperation,
  BinaryOperation,
  Operand,
  Entity,
  EntityFormatter,
} from "../core";
import { isNeg, isSub, isMul, isDiv, isPow, isOperand, isAdd } from "../core";

enum EntityOrder {
  AddSub = 1,
  Pow = 3,
  MulDiv = 2,
  Neg = 4,
  Operand = 100,
}

function getOrder(entity: Entity): EntityOrder {
  switch (true) {
    case isNeg(entity):
      return EntityOrder.Neg;
    case isAdd(entity):
    case isSub(entity):
      return EntityOrder.AddSub;
    case isMul(entity):
    case isDiv(entity):
      return EntityOrder.MulDiv;
    case isPow(entity):
      return EntityOrder.Pow;
    default:
      return EntityOrder.Operand;
  }
}

export class InfixFormatter implements EntityFormatter {
  format(entity: Entity): string {
    switch (true) {
      case isOperand(entity):
        return this.formatOperand(entity);
      case isNeg(entity):
        return this.formatNeg(entity);
      case isAdd(entity):
        return this.formatAdd(entity);
      case isSub(entity):
        return this.formatSub(entity);
      case isMul(entity):
        return this.formatMul(entity);
      case isDiv(entity):
        return this.formatDiv(entity);
      case isPow(entity):
        return this.formatPow(entity);
      default:
        throw new TypeError(`Invalid operand`);
    }
  }

  protected formatAdd(operation: BinaryOperation): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) < order),
    ].join(" + ");
  }

  protected formatArg(argument: Entity, parens: boolean): string {
    return parens ? `(${this.format(argument)})` : this.format(argument);
  }

  protected formatDiv(operation: BinaryOperation): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) <= order),
    ].join(" / ");
  }

  protected formatMul(operation: BinaryOperation): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) < order),
    ].join(" * ");
  }

  protected formatNeg(operation: UnaryOperation): string {
    const { arg } = operation;
    const order = getOrder(operation);

    return `-${this.formatArg(arg, getOrder(arg) <= order)}`;
  }

  protected formatOperand(operation: Operand): string {
    return operation.arg.join("");
  }

  protected formatPow(operation: BinaryOperation): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < EntityOrder.Operand),
      this.formatArg(arg2, getOrder(arg2) <= order),
    ].join(" ** ");
  }

  protected formatSub(operation: BinaryOperation): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) <= order),
    ].join(" - ");
  }
}
