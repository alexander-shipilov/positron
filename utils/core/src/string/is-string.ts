import { isStringType } from "../string-type";
import { typeOf } from "../type-of";

/**
 * The {@link isString} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeString} extends
 * the `string` type.
 *
 * This means that if the return value is `true`, then {@link maybeString} is
 * not strictly of type `string`, but is `string & typeof maybeString`.
 *
 * @example The following example demonstrates this.
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const numberOrFoo: number | "foo";
 *
 *  if (isString(numberOrFoo)) {
 *    expect<string>(numberOrFoo);
 *    expect<"foo">(numberOrFoo);
 *    // OK
 *
 *    expect<"bar">(numberOrFoo);
 *    // TS2345: Argument of type "foo" is not assignable to parameter of
 *    // type "bar"
 *  }
 * ```
 *
 * @param maybeString - The value to be tested for being a `string`.
 *
 * @returns The boolean value `true` if the type of the given
 * {@link maybeString} extends the `string` type. Otherwise, `false`.
 *
 * @public
 */
export function isString(maybeString: unknown): maybeString is string {
  return isStringType(typeOf(maybeString));
}
