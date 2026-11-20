import type { Callable } from "../utility/callable";
import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isFunction} type-guard function that determines whether the type
 * of the passed value `maybeFunction` extends the `Function` type.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOrToString: ((value: number) => string) | string;
 *
 *  if (isFunction(stringOrToString)) {
 *    expect<(value: number) => string>(stringOrToString);
 *    // OK
 *
 *    expect<() => string>(stringOrToString);
 *    // TS2345: Argument of type '(value: number) => string' is not assignable
 *    // to parameter of type '() => string'
 *    // Target signature provides too few arguments.
 *    // Expected '1' or more, but got '0'
 *  }
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
