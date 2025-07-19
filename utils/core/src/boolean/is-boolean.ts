import { isBooleanType } from "../boolean-type";
import { typeOf } from "../type-of";

/**
 * The {@link isBoolean} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeBoolean} extends
 * the `boolean` type.
 *
 * This means that if the return value is `true`, then {@link maybeBoolean} is
 * not strictly of type `boolean`, but is `boolean & typeof maybeBoolean`.
 *
 * @example The following example demonstrates this.
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOrTrue: string | true;
 *
 *  if (isBoolean(stringOrTrue)) {
 *    expect<boolean>(stringOrTrue);
 *    expect<true>(stringOrTrue);
 *    // OK
 *
 *    expect<false>(stringOrTrue);
 *    // TS2345: Argument of type true is not assignable to parameter
 *    // of type false
 *  }
 * ```
 *
 * @param maybeBoolean - The value to be tested for being a `boolean`.
 *
 * @returns The boolean value `true` if the type of the given
 * {@link maybeBoolean} extends the `boolean` type. Otherwise, `false`.
 *
 * @public
 */
export function isBoolean(maybeBoolean: unknown): maybeBoolean is boolean {
  return isBooleanType(typeOf(maybeBoolean));
}
