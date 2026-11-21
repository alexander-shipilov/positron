/**
 * The {@link isUndefined} type-guard function determines whether the passed
 * `maybeUndefined` is strictly the `undefined` literal.
 *
 * @example
 * ```ts
 * import { isUndefined } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const t: string | undefined;
 *
 * if (isUndefined(t)) {
 *   expect<undefined>(t);
 *   expect<string | undefined>(t);
 *   // OK
 *
 *   // @ts-expect-error Argument of type 'undefined' is not assignable
 *   expect<string>(t);
 * }
 * ```
 *
 * @param maybeUndefined - The value to be tested for being an `undefined`
 *   literal.
 *
 * @returns The boolean value `true` if the given `maybeUndefined` is an
 *   `undefined` literal. Otherwise, `false`.
 *
 * @public
 */
export function isUndefined(
  maybeUndefined: unknown,
): maybeUndefined is undefined {
  return maybeUndefined === undefined;
}
