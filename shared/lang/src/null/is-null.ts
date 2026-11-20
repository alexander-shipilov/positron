/**
 * The {@link isNull} type-guard function determines whether the passed
 * `maybeNull` is strictly the `null` literal.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOrNull: null | string;
 *
 *  if (isNull(stringOrNull)) {
 *    expect<null>(stringOrNull);
 *    expect<null | string>(stringOrNull);
 *    // OK
 *
 *    expect<string>(stringOrNull);
 *    // TS2345: Argument of type 'null' is not assignable to parameter of
 *    // type 'string'
 *  }
 * ```
 *
 * @param maybeNull - The value to be tested for being a `null` literal.
 *
 * @returns The boolean value `true` if the given `maybeNull` is `null`.
 *   Otherwise, `false`.
 *
 * @public
 */
export function isNull(maybeNull: unknown): maybeNull is null {
  return maybeNull === null;
}
