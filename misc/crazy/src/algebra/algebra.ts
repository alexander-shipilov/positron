import type { NumericLike } from "@positron/lang";

/**
 * The {@link Algebra} interface represents an object to perform possible
 * operations.
 *
 * @public
 */
export interface Algebra<TElement> {
  /**
   *
   */
  readonly ONE: TElement;

  /**
   *
   */
  readonly ZERO: TElement;

  /**
   * The {@link Algebra#add} method performs the addition of the given operands.
   *
   * @param arg1 - The first operand.
   *
   * @param arg2 - The second operand.
   */
  add(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#div} method performs the division of the given operands.
   *
   * @param arg1 - The first operand.
   *
   * @param arg2 - The second operand.
   */
  div(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#element} method converts the passed number-like `value`
   * to the element.
   *
   * @param value - The value to convert
   */
  element(value: NumericLike): TElement;

  /**
   * @param element1 -
   *
   * @param element2 -
   */
  equals(element1: TElement, element2: TElement): boolean;

  /**
   * The {@link Algebra#inv} method performs the inversion of the given operand.
   *
   * @param arg - The first operand.
   */
  inv(arg: TElement): TElement;

  /**
   * The {@link Algebra#isElement} method checks if the passed `maybeElement`
   * is math value.
   *
   * @param maybeElement - The value to convert
   */
  isElement(maybeElement: unknown): maybeElement is TElement;

  /**
   * The {@link Algebra#mul} method performs the product of the given operands.
   *
   * @param arg1 - The first operand.
   *
   * @param arg2 - The second operand.
   */
  mul(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#neg} method performs the negation of the given operand.
   *
   * @param arg - The first operand.
   */
  neg(arg: TElement): TElement;

  /**
   * The {@link Algebra#pow} method performs the exponentiation of the given
   * operands.
   *
   * @param arg1 - The first operand.
   *
   * @param arg2 - The second operand.
   */
  pow(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#sub} method performs the subtraction of the given
   * operands.
   *
   * @param arg1 - The first operand.
   *
   * @param arg2 - The second operand.
   */
  sub(arg1: TElement, arg2: TElement): TElement;
}
