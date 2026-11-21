/**
 * The {@link isBoolean} type-guard function determines whether the type of
 * the passed value `maybeBoolean` extends the `boolean` type.
 *
 * @example
 * ```ts
 * import { isBoolean } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const stringOrTrue: string | true;
 *
 * if (isBoolean(stringOrTrue)) {
 *   expect<boolean>(stringOrTrue);
 *   expect<true>(stringOrTrue);
 *   // OK
 *
 *   // @ts-expect-error Argument of type 'true' is not assignable
 *   expect<false>(stringOrTrue);
 * }
 * ```
 *
 * @param maybeBoolean - The value to be tested for being a `boolean`.
 *
 * @returns The boolean value `true` if the type of the given `maybeBoolean`
 *   extends the `boolean` type. Otherwise, `false`.
 *
 * @public
 */
export function isBoolean(maybeBoolean: unknown): maybeBoolean is boolean {
  return maybeBoolean === true || maybeBoolean === false;
}
