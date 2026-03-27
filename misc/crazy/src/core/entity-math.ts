import type { BinaryOperationResolver } from "./binary-operation";
import type { EntityValue } from "./entity";
import type { OperandResolver } from "./operand";
import type { UnaryOperationResolver } from "./unary-operation";

/**
 * The {@link EntityMath} interface represents an object to perform possible
 * unary-operations.
 */
export interface EntityMath<TValue extends EntityValue = EntityValue> {
  /**
   * The {@link EntityMath#add} method of the {@link EntityMath} object
   * performs the addition of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  add: BinaryOperationResolver<TValue>;

  /**
   * The {@link EntityMath#div} method of the {@link EntityMath} object
   * performs the division of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  div: BinaryOperationResolver<TValue>;

  /**
   * The {@link EntityMath#mul} method of the {@link EntityMath} object
   * performs the product of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  mul: BinaryOperationResolver<TValue>;

  /**
   * The {@link EntityMath#neg} method of the {@link EntityMath} object
   * performs the negation of the given operand.
   *
   * @param operand - The first operand
   */
  neg: UnaryOperationResolver<TValue>;

  /**
   * The {@link EntityMath#operand} method of the {@link EntityMath} converts
   * the passed number-like `value` to the math operand.
   *
   * @param value - The value to convert
   */
  operand: OperandResolver<TValue>;

  /**
   * The {@link EntityMath#pow} method of the {@link EntityMath} object
   * performs the exponentiation of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  pow: BinaryOperationResolver<TValue>;

  /**
   * The {@link EntityMath#sub} method of the {@link EntityMath} object
   * performs the subtraction of the given operands.
   *
   * @param operand1 - The first operand
   * @param operand2 - The second operand
   */
  sub: BinaryOperationResolver<TValue>;
}
