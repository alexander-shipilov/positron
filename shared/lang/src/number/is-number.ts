import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isNumber} type-guard function that determines whether the type of
 * the passed value `maybeNumber` extends the `number` type.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOr1: 1 | string;
 *
 *  if (isNumber(stringOr1)) {
 *    expect<number>(stringOr1);
 *    expect<1>(stringOr1);
 *    // OK
 *
 *    expect<2>(stringOr1);
 *    // TS2345: Argument of type 1 is not assignable to parameter of type 2
 *  }
 * ```
 *
 * @param maybeNumber - The value to be tested for being a `number`.
 *
 * @returns The boolean value `true` if the type of the given
 *   `maybeNumber` extends the `number` type. Otherwise, `false`.
 *
 * @public
 */
export function isNumber(maybeNumber: unknown): maybeNumber is number {
  return typeOf(maybeNumber) === Type.Number;
}
