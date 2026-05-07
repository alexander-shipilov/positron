import type { NumberLike } from "@positron/core";

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
   * The {@link Algebra#add} method of the {@link Algebra} object
   * performs the addition of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  add(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#div} method of the {@link Algebra} object
   * performs the division of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  div(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#element} method of the {@link Algebra}
   * converts the passed number-like `value` to the element.
   *
   * @param value - The value to convert
   */
  element(value: NumberLike): TElement;

  /**
   * @param element1 -
   * @param element2 -
   */
  equals(element1: TElement, element2: TElement): boolean;

  /**
   * The {@link Algebra#inv} method of the {@link Algebra} object
   * performs the inversion of the given operand.
   *
   * @param arg - The first operand
   */
  inv(arg: TElement): TElement;

  /**
   * The {@link Algebra#isElement} method of the {@link Algebra}
   * checks if the passed `maybeElement` is math value.
   *
   * @param maybeElement - The value to convert
   */
  isElement(maybeElement: unknown): maybeElement is TElement;

  /**
   * The {@link Algebra#mul} method of the {@link Algebra} object
   * performs the product of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  mul(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#neg} method of the {@link Algebra} object
   * performs the negation of the given operand.
   *
   * @param arg - The first operand
   */
  neg(arg: TElement): TElement;

  /**
   * The {@link Algebra#pow} method of the {@link Algebra} object
   * performs the exponentiation of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  pow(arg1: TElement, arg2: TElement): TElement;

  /**
   * The {@link Algebra#sub} method of the {@link Algebra} object
   * performs the subtraction of the given operands.
   *
   * @param arg1 - The first operand
   * @param arg2 - The second operand
   */
  sub(arg1: TElement, arg2: TElement): TElement;
}
