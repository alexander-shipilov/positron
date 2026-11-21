import type * as Intrinsic from "@positron/lang-nominal";

/**
 * The {@link Nominal} type returns a nominal type that is a more specific
 * version of the passed type `TType`.
 *
 * @remarks
 *   A type system is nominal (or name-based) if compatibility and equivalence
 *   of data types is determined by explicit declarations and / or the name of
 *   the types.
 *
 *   Nominal systems are used to determine whether types are equivalent, as
 *   well as whether a type is a subtype of another.
 *
 * @example
 * ```ts
 * import type { Nominal } from "@positron/lang";
 * import { assert } from "@positron/lang";
 *
 * type Integer = Nominal<number, "Integer">;
 *
 * function integer(value: number): Integer {
 *   return assert(value, isInteger);
 * }
 *
 * function isInteger(maybeInteger: unknown): maybeInteger is Integer {
 *   return Number.isSafeInteger(maybeInteger);
 * }
 *
 * const int1: Integer = integer(2);
 * // Ok
 *
 * // @ts-expect-error Type number is not assignable to Nominal
 * const int2: Integer = 1;
 * ```
 *
 * @example
 * ```ts
 * import type { Nominal } from "@positron/lang";
 *
 * // Nominal `string` type that contains additional metadata
 * type Json<T> = Nominal<Nominal<string, "JSON">, T>;
 *
 * // Accepts result of `stringify()` calling only
 * function parse<T>(v: Json<T>): T {
 *   return JSON.parse(v) as T;
 * }
 *
 * // Accepts any type
 * function stringify<T>(v: T): Json<T> {
 *   return JSON.stringify(v) as Json<T>;
 * }
 *
 * const json = stringify({ id: 1, name: "foo" } as const);
 *
 * console.log(json.length);
 * // OK, since `json` is a string...
 *
 * const user = parse(json);
 *
 * console.log(user.id.toFixed(), user.name.charAt(0));
 * // OK, since the type of `user` is `{ id: 1, name: "foo" }`
 * ```
 *
 * @typeParam TType - The type to create a nominal type from.
 *
 * @typeParam TMeta - The nominal metadata.
 *
 * @public
 */
export type Nominal<TType = unknown, TMeta = unknown> =
  TType extends Intrinsic.Nominal<
    infer Type,
    infer Meta extends readonly unknown[]
  >
    ? Intrinsic.Nominal<Type, [...Meta, TMeta]>
    : Intrinsic.Nominal<TType, [TMeta]>;
