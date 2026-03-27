import type { NumberLike } from "@positron/core/src";

import type { Order } from "./order";

/**
 * @public
 */
export interface NumericalMath<TValue> {
  /**
   *
   */
  ONE: TValue;

  /**
   *
   */
  ZERO: TValue;

  /**
   * @param arg
   */
  abs(arg: TValue): TValue;

  /**
   * The {@link EntityMath#add} method of the {@link EntityMath} object
   * performs the addition of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  add(arg1: TValue, arg2: TValue): TValue;

  /**
   * @param arg1
   * @param arg2
   */
  compare(arg1: TValue, arg2: TValue): Order;

  /**
   * The {@link EntityMath#div} method of the {@link EntityMath} object
   * performs the division of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  div(arg1: TValue, arg2: TValue): TValue;

  /**
   * @param arg1
   * @param arg2
   */
  equals(arg1: TValue, arg2: TValue): boolean;

  /**
   * @param arg
   */
  inv(arg: TValue): TValue;

  /**
   * The {@link EntityMath#mul} method of the {@link EntityMath} object
   * performs the product of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  mul(arg1: TValue, arg2: TValue): TValue;

  /**
   * The {@link EntityMath#neg} method of the {@link EntityMath} object
   * performs the negation of the given operand.
   *
   * @param arg - The first operand
   */
  neg(arg: TValue): TValue;

  /**
   * The {@link EntityMath#operand} method of the {@link EntityMath} converts
   * the passed number-like `arg` to the math operand.
   *
   * @param arg - The arg to convert
   */
  operand(arg: NumberLike): TValue;

  /**
   * The {@link EntityMath#pow} method of the {@link EntityMath} object
   * performs the exponentiation of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  pow(arg1: TValue, arg2: TValue): TValue;

  /**
   * @param arg
   */
  sign(arg: TValue): TValue;

  /**
   * The {@link EntityMath#sub} method of the {@link EntityMath} object
   * performs the subtraction of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  sub(arg1: TValue, arg2: TValue): TValue;
}
