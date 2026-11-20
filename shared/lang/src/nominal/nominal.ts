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
 *   Nominal systems are used to determine whether types are equivalent,
 *   as well as whether a type is a subtype of another.
 *
 * @example
 * ```ts
 *  /* eslint-disable jsdoc/require-jsdoc *\/
 *
 *  type Integer = Nominal<number, "Integer">;
 *
 *  function integer(value: number): Integer {
 *    return assert(value, isInteger);
 *  }
 *
 *  function isInteger(maybeInteger: unknown): maybeInteger is Integer {
 *    return Number.isSafeInteger(maybeInteger);
 *  }
 *
 *  const int1: Integer = integer(2);
 *  // Ok
 *
 *  const int2: Integer = 1;
 *  // TS2322: Type number is not assignable to type
 *  // Nominal<number, ["Integer"]>
 * ```
 *
 * @example
 * ```ts
 *  /* eslint-disable jsdoc/require-jsdoc *\/
 *
 *  // Nominal `string` type that contains additional metadata
 *  type JSON<T> = Nominal<Nominal<string, "JSON">, T>;
 *
 *  // Accepts result of `stringify()` calling only
 *  function parse<T>(v: JSON<T>): T {
 *    return JSON.parse(v) as T;
 *  }
 *
 *  // Accepts any type
 *  function stringify<T>(v: T): JSON<T> {
 *    return JSON.stringify(v) as JSON<T>;
 *  }
 *
 *  const json = stringify({ id: 1, name: "foo" } as const);
 *
 *  console.log(json.length);
 *  // OK, since `json` is a string...
 *
 *  const user = parse(json);
 *
 *  console.log(user.id.toFixed(), user.name.charAt(0));
 *  // OK, since the type of `user` is `{ id: 1, name: "foo" }`
 * ```
 *
 * @param TType - The type to make nominal type from.
 *
 * @param TMeta - The nominal metadata.
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
