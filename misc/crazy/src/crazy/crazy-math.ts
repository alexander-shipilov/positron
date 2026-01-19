import type { NumberLike } from "@positron/core";

/**
 * The {@link CrazyMath} interface represents an object to perform possible
 * operations.
 */
export interface CrazyMath<TOperand> {
  /**
   * The {@link add} method of the {@link CrazyMath} object performs the
   * addition of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  add(operand1: TOperand, operand2: TOperand): TOperand;

  /**
   * The {@link div} method of the {@link CrazyMath} object performs the
   * division of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  div(operand1: TOperand, operand2: TOperand): TOperand;

  /**
   * The {@link mul} method of the {@link CrazyMath} object performs the product
   * of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  mul(operand1: TOperand, operand2: TOperand): TOperand;

  /**
   * The {@link neg} method of the {@link CrazyMath} object performs the
   * negation of the given operand.
   *
   * @param operand - The first operand
   */
  neg(operand: TOperand): TOperand;

  /**
   * The {@link operand} method of the {@link CrazyMath} converts the passed
   * number-like `value` to the math operand.
   *
   * @param value - The value to convert
   */
  operand(value: NumberLike): TOperand;

  /**
   * The {@link pow} method of the {@link CrazyMath} object performs the
   * exponentiation of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  pow(operand1: TOperand, operand2: TOperand): TOperand;

  /**
   * The {@link sub} method of the {@link CrazyMath} object performs the
   * subtraction of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  sub(operand1: TOperand, operand2: TOperand): TOperand;
}
