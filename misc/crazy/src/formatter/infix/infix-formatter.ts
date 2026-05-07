import type { Entity } from "../../entity";
import type { Formatter } from "../formatter";
import { Add, Div, Mul, Neg, Operand, Pow, Sub } from "../../entity";

/**
 *
 */
enum Order {
  AddSub = 1,
  MulDiv = 2,
  Pow = 3,
  Neg = 4,
  Operand = 100,
}

/**
 * @param entity -
 */
function format(entity: Entity): string {
  switch (true) {
    case entity instanceof Operand:
      return formatOperand(entity);
    case entity instanceof Neg:
      return formatNeg(entity);
    case entity instanceof Add:
      return formatAddMul(entity, "+");
    case entity instanceof Sub:
      return formatSubDiv(entity, "-");
    case entity instanceof Mul:
      return formatAddMul(entity, "*");
    case entity instanceof Div:
      return formatSubDiv(entity, "/");
    case entity instanceof Pow:
      return formatPow(entity);
    default:
      throw new TypeError("Invalid entity");
  }
}

/**
 * @param entity -
 * @param operator -
 */
function formatAddMul(entity: Add | Mul, operator: string): string {
  const { arg1, arg2 } = entity;
  const order = getOrder(entity);

  return [
    formatArg(arg1, getOrder(arg1) < order),
    formatArg(arg2, getOrder(arg2) < order),
  ].join(` ${operator} `);
}

/**
 * @param entity -
 * @param parens -
 */
function formatArg(entity: Entity, parens: boolean): string {
  return parens ? `(${format(entity)})` : format(entity);
}

/**
 * @param entity -
 */
function formatNeg(entity: Neg): string {
  const { arg } = entity;
  const order = getOrder(entity);

  return `-${formatArg(arg, getOrder(arg) <= order)}`;
}

/**
 * @param entity -
 */
function formatOperand(entity: Operand): string {
  return entity.arg.join("");
}

/**
 * @param entity -
 */
function formatPow(entity: Pow): string {
  const { arg1, arg2 } = entity;
  const order = getOrder(entity);

  return [
    formatArg(arg1, getOrder(arg1) < Order.Operand),
    formatArg(arg2, getOrder(arg2) <= order),
  ].join(" ** ");
}

/**
 * @param entity -
 * @param operator -
 */
function formatSubDiv(entity: Div | Sub, operator: string): string {
  const { arg1, arg2 } = entity;
  const order = getOrder(entity);

  return [
    formatArg(arg1, getOrder(arg1) < order),
    formatArg(arg2, getOrder(arg2) <= order),
  ].join(` ${operator} `);
}

/**
 * @param entity
 */
function getOrder(entity: Entity): Order {
  switch (true) {
    case entity instanceof Neg:
      return Order.Neg;
    case entity instanceof Add:
    case entity instanceof Sub:
      return Order.AddSub;
    case entity instanceof Mul:
    case entity instanceof Div:
      return Order.MulDiv;
    case entity instanceof Pow:
      return Order.Pow;
    default:
      return Order.Operand;
  }
}

/**
 * @public
 */
export const InfixFormatter: Formatter = {
  format,
};
