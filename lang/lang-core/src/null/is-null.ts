/**
 * The {@link isNull} function is a type-guard function that determines whether
 * the passed {@link maybeNull} is strictly the `null` literal.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const t: string | null;
 *
 *  if (isNull(t)) {
 *    expect<null>(t);
 *    expect<string | null>(t);
 *    // OK
 *
 *    expect<string>(t);
 *    // TS2345: Argument of type 'null' is not assignable to parameter of
 *    // type 'string'
 *  }
 * ```
 *
 * @param maybeNull - The value to be tested for being a `null` literal.
 *
 * @returns The boolean value `true` if the given {@link maybeNull} is the
 *   `null` literal. Otherwise, `false`.
 *
 * @public
 */
export function isNull(maybeNull: unknown): maybeNull is null {
  return maybeNull === null;
}
