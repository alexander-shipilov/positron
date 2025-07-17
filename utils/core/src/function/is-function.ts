import { isFunctionType } from "@positron/core-types";

import { typeOf } from "../type-of";

import type { UnknownFunction } from "./unknown-function";

/**
 * The {@link isFunction} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeFunction} extends
 * the `Function` type.
 *
 * This means that if the return value is `true`, then {@link maybeFunction} is
 * not strictly of type `Function`, but is `Function & typeof maybeFunction`.
 *
 * The following example demonstrates this.
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const stringOrToString: string | ((value: number) => string);
 *
 *  if (isFunction(stringOrToString)) {
 *    expect<UnknownFunction>(stringOrToString);
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
 * @returns The boolean value `true` if the type of the given
 * {@link maybeFunction} extends the `Function` type. Otherwise, `false`.
 *
 * @public
 */
export function isFunction(
  maybeFunction: unknown,
): maybeFunction is UnknownFunction {
  return isFunctionType(typeOf(maybeFunction));
}
