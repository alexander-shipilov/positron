/**
 * The {@link isArray} type-guard function determines whether the passed
 * `maybeArray` is an array.
 *
 * @example
 * ```ts
 * import { isArray } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const stringOrArray: string | string[];
 *
 * if (isArray(stringOrArray)) {
 *   expect<string[]>(stringOrArray);
 *   // OK
 *
 *   // @ts-expect-error Argument of type 'string[]' is not assignable
 *   expect<number[]>(stringOrArray);
 * }
 * ```
 *
 * @param maybeArray - The value to be checked.
 *
 * @returns The boolean value `true` if `maybeArray` is an array; otherwise,
 *   `false`.
 *
 * @public
 */
export function isArray(maybeArray: unknown): maybeArray is unknown[] {
  return Array.isArray(maybeArray);
}
