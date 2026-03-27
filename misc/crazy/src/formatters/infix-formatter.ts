import type { Entity, EntityFormatter } from "../core";
import { Operand, Neg, Add, Sub, Mul, Div, Pow } from "../core";

enum EntityOrder {
  AddSub = 1,
  Pow = 3,
  MulDiv = 2,
  Neg = 4,
  Operand = 100,
}

function getOrder(entity: Entity): EntityOrder {
  switch (true) {
    case entity instanceof Neg:
      return EntityOrder.Neg;
    case entity instanceof Add:
    case entity instanceof Sub:
      return EntityOrder.AddSub;
    case entity instanceof Mul:
    case entity instanceof Div:
      return EntityOrder.MulDiv;
    case entity instanceof Pow:
      return EntityOrder.Pow;
    default:
      return EntityOrder.Operand;
  }
}

export class InfixFormatter implements EntityFormatter {
  format(entity: Entity): string {
    switch (true) {
      case entity instanceof Operand:
        return this.formatOperand(entity);
      case entity instanceof Neg:
        return this.formatNeg(entity);
      case entity instanceof Add:
        return this.formatAdd(entity);
      case entity instanceof Sub:
        return this.formatSub(entity);
      case entity instanceof Mul:
        return this.formatMul(entity);
      case entity instanceof Div:
        return this.formatDiv(entity);
      case entity instanceof Pow:
        return this.formatPow(entity);
      default:
        throw new TypeError(`Invalid operand`);
    }
  }

  protected formatAdd(operation: Add): string {
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

  protected formatDiv(operation: Div): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) <= order),
    ].join(" / ");
  }

  protected formatMul(operation: Mul): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) < order),
    ].join(" * ");
  }

  protected formatNeg(operation: Neg): string {
    const { arg } = operation;
    const order = getOrder(operation);

    return `-${this.formatArg(arg, getOrder(arg) <= order)}`;
  }

  protected formatOperand(operation: Operand): string {
    return operation.arg.join("");
  }

  protected formatPow(operation: Pow): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < EntityOrder.Operand),
      this.formatArg(arg2, getOrder(arg2) <= order),
    ].join(" ** ");
  }

  protected formatSub(operation: Sub): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArg(arg1, getOrder(arg1) < order),
      this.formatArg(arg2, getOrder(arg2) <= order),
    ].join(" - ");
  }
}
