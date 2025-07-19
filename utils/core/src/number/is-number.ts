import { isNumberType } from "../number-type";
import { typeOf } from "../type-of";

/**
 * The {@link isNumber} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeNumber} extends
 * the `number` type.
 *
 * This means that if the return value is `true`, then {@link maybeNumber} is
 * not strictly of type `number`, but is `number & typeof maybeNumber`.
 *
 * @example The following example demonstrates this.
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOr1: string | 1;
 *
 *  if (isNumber(stringOr1)) {
 *    expect<number>(stringOr1);
 *    expect<1>(stringOr1);
 *    // OK
 *
 *    expect<2>(stringOr1);
 *    // TS2345: Argument of type '1' is not assignable to parameter of type '2'
 *  }
 * ```
 *
 * @param maybeNumber - The value to be tested for being a `number`.
 *
 * @returns The boolean value `true` if the type of the given
 * {@link maybeNumber} extends the `number` type. Otherwise, `false`.
 *
 * @public
 */
export function isNumber(maybeNumber: unknown): maybeNumber is number {
  return isNumberType(typeOf(maybeNumber));
}
