/**
 * The {@link isUndefined} undefined determines whether the passed
 * {@link maybeUndefined} is an `undefined` literal.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const t: string | undefined;
 *
 *  if (isUndefined(t)) {
 *    expect<undefined>(t);
 *    expect<string | undefined>(t);
 *    // OK
 *
 *    expect<string>(t);
 *    // TS2345: Argument of type 'undefined' is not assignable to parameter of
 *    // type 'string'
 *  }
 * ```
 *
 * @param maybeUndefined - The value to be tested for being an `undefined`
 *   literal.
 *
 * @returns The boolean value `true` if the given {@link maybeUndefined} is an
 *   `undefined` literal. Otherwise, `false`.
 *
 * @public
 */
export function isUndefined(
  maybeUndefined: unknown,
): maybeUndefined is undefined {
  return maybeUndefined === undefined;
}
