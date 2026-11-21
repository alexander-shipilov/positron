import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

/**
 * The {@link isSymbol} type-guard function determines whether the type of the
 * passed value `maybeSymbol` extends the `symbol` type.
 *
 * @remarks
 *   If the return value is `true`, then `maybeSymbol` is not strictly of type
 *   `symbol`, but is `symbol & typeof maybeSymbol`.
 *
 * @example
 * ```ts
 * import { isSymbol } from "@positron/lang";
 *
 * declare function expect<V>(v: V): void;
 *
 * declare const foo: unique symbol;
 * declare const stringOrFoo: string | typeof foo;
 *
 * if (isSymbol(stringOrFoo)) {
 *   expect<symbol>(stringOrFoo);
 *   expect<typeof foo>(stringOrFoo);
 *   // OK
 *
 *   // @ts-expect-error Argument of type 'typeof foo' is not assignable
 *   expect<typeof Symbol.iterator>(stringOrFoo);
 * }
 * ```
 *
 * @param maybeSymbol - The value to be tested for being a `symbol`.
 *
 * @returns The boolean value `true` if the type of the given `maybeSymbol`
 *   extends the `symbol` type. Otherwise, `false`.
 *
 * @public
 */
export function isSymbol(maybeSymbol: unknown): maybeSymbol is symbol {
  return typeOf(maybeSymbol) === Type.Symbol;
}
