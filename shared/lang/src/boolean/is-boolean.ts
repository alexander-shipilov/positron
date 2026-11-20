/**
 * The {@link isBoolean} type-guard function that determines whether the type
 * of the passed value `maybeBoolean` extends the `boolean` type.
 *
 * @example
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
 * @returns The boolean value `true` if the type of the given `maybeBoolean`
 *   extends the `boolean` type. Otherwise, `false`.
 *
 * @public
 */
export function isBoolean(maybeBoolean: unknown): maybeBoolean is boolean {
  return maybeBoolean === true || maybeBoolean === false;
}
