/**
 * The {@link isArray} type-guard function that determines whether the passed
 * `maybeArray` is an array.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOrArray: string | string[];
 *
 *  if (isArray(stringOrArray)) {
 *    expect<string[]>(stringOrArray);
 *    // OK
 *
 *    expect<number[]>(stringOrArray);
 *    // TS2345: Argument of type 'string[]' is not assignable to parameter of
 *    // type 'number[]'. Type 'string' is not assignable to type 'number'.
 *  }
 * ```
 *
 * @param maybeArray - The value to be checked.
 *
 * @public
 */
export function isArray(maybeArray: unknown): maybeArray is unknown[] {
  return Array.isArray(maybeArray);
}
