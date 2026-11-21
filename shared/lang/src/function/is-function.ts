import type { Callable } from "../utility/callable";
import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isFunction} type-guard function determines whether the type of
 * the passed value `maybeFunction` extends the `Function` type.
 *
 * @example
 * ```ts
 * import { isFunction } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const stringOrToString: string | ((value: number) => string);
 *
 * if (isFunction(stringOrToString)) {
 *   expect<(value: number) => string>(stringOrToString);
 *   // OK
 *
 *   // @ts-expect-error Target signature provides too few arguments
 *   expect<() => string>(stringOrToString);
 * }
 * ```
 *
 * @param maybeFunction - The value to be tested for being a function.
 *
 * @returns The boolean value `true` if the type of the given `maybeFunction`
 *   extends the `Function` type. Otherwise, `false`.
 *
 * @public
 */
export function isFunction(maybeFunction: unknown): maybeFunction is Callable {
  return typeOf(maybeFunction) === Type.Function;
}
