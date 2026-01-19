import type { CrazyEntity, CrazyFormatter } from "../crazy";
import {
  Addition,
  Division,
  Exponentiation,
  Negation,
  Operand,
  Product,
  Subtraction,
} from "../entities";

enum EntityOrder {
  AdditionSubtraction = 1,
  Exponentiation = 3,
  Negation = 4,
  Operand = Infinity,
  ProductDivision = 2,
}

function getOrder(operation: CrazyEntity): EntityOrder {
  switch (true) {
    case operation instanceof Negation:
      return EntityOrder.Negation;
    case operation instanceof Addition:
    case operation instanceof Subtraction:
      return EntityOrder.AdditionSubtraction;
    case operation instanceof Product:
    case operation instanceof Division:
      return EntityOrder.ProductDivision;
    case operation instanceof Exponentiation:
      return EntityOrder.Exponentiation;
    default:
      return EntityOrder.Operand;
  }
}

export class CrazyInfixFormatter implements CrazyFormatter {
  format(operation: CrazyEntity): string {
    switch (true) {
      case operation instanceof Operand:
        return this.formatOperand(operation);
      case operation instanceof Negation:
        return this.formatNegation(operation);
      case operation instanceof Addition:
        return this.formatAddition(operation);
      case operation instanceof Subtraction:
        return this.formatSubtraction(operation);
      case operation instanceof Product:
        return this.formatProduct(operation);
      case operation instanceof Division:
        return this.formatDivision(operation);
      case operation instanceof Exponentiation:
        return this.formatExponentiation(operation);
      default:
        throw new TypeError(`Invalid operand`);
    }
  }

  protected formatAddition(operation: Addition): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArgument(arg1, getOrder(arg1) < order),
      this.formatArgument(arg2, getOrder(arg2) < order),
    ].join(" + ");
  }

  protected formatArgument(argument: CrazyEntity, parens: boolean): string {
    return parens ? `(${this.format(argument)})` : this.format(argument);
  }

  protected formatDivision(operation: Division): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArgument(arg1, getOrder(arg1) < order),
      this.formatArgument(arg2, getOrder(arg2) <= order),
    ].join(" / ");
  }

  protected formatExponentiation(operation: Exponentiation): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArgument(arg1, getOrder(arg1) < EntityOrder.Operand),
      this.formatArgument(arg2, getOrder(arg2) <= order),
    ].join(" ** ");
  }

  protected formatNegation(operation: Negation): string {
    const { arg } = operation;
    const order = getOrder(operation);

    return `-${this.formatArgument(arg, getOrder(arg) <= order)}`;
  }

  protected formatOperand(operation: Operand): string {
    return String(operation.value);
  }

  protected formatProduct(operation: Product): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArgument(arg1, getOrder(arg1) < order),
      this.formatArgument(arg2, getOrder(arg2) < order),
    ].join(" * ");
  }

  protected formatSubtraction(operation: Subtraction): string {
    const { arg1, arg2 } = operation;
    const order = getOrder(operation);

    return [
      this.formatArgument(arg1, getOrder(arg1) < order),
      this.formatArgument(arg2, getOrder(arg2) <= order),
    ].join(" - ");
  }
}
