import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isBigint} type-guard function determines whether the type of the
 * passed value `maybeBigint` extends the `bigint` type.
 *
 * @example
 * ```ts
 * import { isBigint } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const stringOr1n: string | 1n;
 *
 * if (isBigint(stringOr1n)) {
 *   expect<bigint>(stringOr1n);
 *   expect<1n>(stringOr1n);
 *   // OK
 *
 *   // @ts-expect-error Argument of type '1n' is not assignable
 *   expect<2n>(stringOr1n);
 * }
 * ```
 *
 * @param maybeBigint - The value to be tested for being a `bigint`.
 *
 * @returns The boolean value `true` if the type of the given `maybeBigint`
 *   extends the `bigint` type. Otherwise, `false`.
 *
 * @public
 */
export function isBigint(maybeBigint: unknown): maybeBigint is bigint {
  return typeOf(maybeBigint) === Type.Bigint;
}
