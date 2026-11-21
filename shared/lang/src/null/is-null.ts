/**
 * The {@link isNull} type-guard function determines whether the passed
 * `maybeNull` is strictly the `null` literal.
 *
 * @example
 * ```ts
 * import { isNull } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const stringOrNull: string | null;
 *
 * if (isNull(stringOrNull)) {
 *   expect<null>(stringOrNull);
 *   expect<string | null>(stringOrNull);
 *   // OK
 *
 *   // @ts-expect-error Argument of type 'null' is not assignable
 *   expect<string>(stringOrNull);
 * }
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
