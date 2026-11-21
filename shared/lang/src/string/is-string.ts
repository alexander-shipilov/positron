import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isString} type-guard function determines whether the type of the
 * passed value `maybeString` extends the `string` type.
 *
 * @example
 * ```ts
 * import { isString } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const fooOrNumber: number | "foo";
 *
 * if (isString(fooOrNumber)) {
 *   expect<string>(fooOrNumber);
 *   expect<"foo">(fooOrNumber);
 *   // OK
 *
 *   // @ts-expect-error Argument of type 'foo' is not assignable
 *   expect<"bar">(fooOrNumber);
 * }
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
