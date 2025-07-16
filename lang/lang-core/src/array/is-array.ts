/**
 * The {@link isArray} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeArray} extends
 * the `readonly unknown[]` type.
 *
 * This means that if the return value is `true`, then {@link maybeArray} is
 * not strictly of type `readonly unknown[]`, but is
 * `readonly unknown[] & typeof maybeArray`.
 *
 * @example The following example demonstrates this.
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
 *    // type 'number[]'. Type 'string' is not assignable to type 'number'
 *  }
 * ```
 *
 * @param maybeArray - The value to be checked.
 *
 * @public
 */
export function isArray(maybeArray: unknown): maybeArray is readonly unknown[] {
  return Array.isArray(maybeArray);
}
