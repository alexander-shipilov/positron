import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isString} type-guard function that determines whether the type of
 * the passed value `maybeString` extends the `string` type.
 *
 * @example
 * ```ts
 *  declare function expect<V>(v: V): void;
 *
 *  declare const fooOrNumber: "foo" | number;
 *
 *  if (isString(fooOrNumber)) {
 *    expect<string>(fooOrNumber);
 *    expect<"foo">(fooOrNumber);
 *    // OK
 *
 *    expect<"bar">(fooOrNumber);
 *    // TS2345: Argument of type "foo" is not assignable to parameter of
 *    // type "bar"
 *  }
 * ```
 *
 * @param maybeString - The value to be tested for being a `string`.
 *
 * @returns The boolean value `true` if the type of the given `maybeString`
 *   extends the `string` type. Otherwise, `false`.
 *
 * @public
 */
export function isString(maybeString: unknown): maybeString is string {
  return typeOf(maybeString) === Type.String;
}
