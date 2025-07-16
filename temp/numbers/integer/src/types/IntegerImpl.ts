import type { IntegerLike } from "types/IntegerLike";

export interface IntegerImpl<Value extends IntegerLike> {
  readonly ONE: Value;

  readonly TWO: Value;

  readonly ZERO: Value;

  /**
   * Operator `a + b`
   * Returns the result of the given operands' addition.
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  add(operand1: Value, operand2: Value): Value;

  /**
   * Operator `a / b`
   * Returns the quotient left over when one operand is divided by a second
   * operand. It always takes the sign of the dividend.
   *
   * @param operand1 - Dividend
   * @param operand2 - Divisor
   */
  div(operand1: Value, operand2: Value): Value;

  /**
   * Operator `a === b`.
   * Returns `true` if first operand is equal to the second one
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  eq(operand1: Value, operand2: Value): boolean;

  /**
   * Operator `a > b`
   * Returns `true` if first operand is greater than the second one
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  gt(operand1: Value, operand2: Value): boolean;

  /**
   * Operator `a >= b`
   * Returns `true` if first operand is greater than or equal to the second one
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  gte(operand1: Value, operand2: Value): boolean;

  /**
   * Checks if the passed value is `Value`
   *
   * @param value - Value io check
   */
  isInteger(value: unknown): value is Value;

  /**
   * Operator `a < b`
   * Returns `true` if first operand is less than the second one
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  lt(operand1: Value, operand2: Value): boolean;

  /**
   * Operator `a <= b`
   * Returns `true` if first operand is less than or equal to the second one
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  lte(operand1: Value, operand2: Value): boolean;

  /**
   * Operator `a * b`
   * Returns the product of the given operands' multiplication.
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  mul(operand1: Value, operand2: Value): Value;

  /**
   * Operator `-a`
   * Returns the value of its operand after adding one
   *
   * @param operand - Operand
   */
  neg(operand: Value): Value;

  /**
   * Operator `a ** b`
   * Returns the result of the given operands' exponentiation.
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  pow(operand1: Value, operand2: Value): Value;

  /**
   * Operator `a % b`
   * Returns the remainder left over when one operand is divided by a second
   * operand. It always takes the sign of the dividend.
   *
   * @param operand1 - Dividend
   * @param operand2 - Divisor
   */
  rem(operand1: Value, operand2: Value): Value;

  /**
   * Operator `a << b`
   * Shifts `a` in binary representation `b` bits to the left, shifting in zeros
   * from the right.
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  shl(operand1: Value, operand2: Value): Value;

  /**
   * Operator `a >> b`
   * Shifts `a` in binary representation `b` bits to the right, discarding bits
   * shifted off.
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  shr(operand1: Value, operand2: Value): Value;

  /**
   * Operator `a - b`
   * Returns the result of the given operands' subtraction.
   *
   * @param operand1 - First operand
   * @param operand2 - Second operand
   */
  sub(operand1: Value, operand2: Value): Value;

  /**
   * Converts the passed value to `Value`
   *
   * @param value - Value to check
   */
  toInteger(value: IntegerLike): Value;
}
