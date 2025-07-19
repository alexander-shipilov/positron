import { isBigintType } from "../bigint-type";
import { typeOf } from "../type-of";

/**
 * The {@link isBigint} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeBigint} extends
 * the `bigint` type.
 *
 * This means that if the return value is `true`, then {@link maybeBigint} is
 * not strictly of type `bigint`, but is `bigint & typeof maybeBigint`.
 *
 * @example The following example demonstrates this.
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOr1n: string | 1n;
 *
 *  if (isBigint(stringOr1n)) {
 *    expect<bigint>(stringOr1n);
 *    expect<1n>(stringOr1n);
 *    // OK
 *
 *    expect<2n>(stringOr1n);
 *    // TS2345: Argument of type 1n is not assignable to parameter of type 2n
 *  }
 * ```
 *
 * @param maybeBigint - The value to be tested for being a `bigint`.
 *
 * @returns The boolean value `true` if the type of the given
 * {@link maybeBigint} extends the `bigint` type. Otherwise, `false`.
 *
 * @public
 */
export function isBigint(maybeBigint: unknown): maybeBigint is bigint {
  return isBigintType(typeOf(maybeBigint));
}
