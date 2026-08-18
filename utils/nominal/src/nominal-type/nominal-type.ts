import type { NominalType_ } from "./nominal-type-";

/**
 * The {@link NominalType_} type describes a symbol is used by the {@link
 * Nominal} to describe nominal types.
 *
 * Each `NominalType` must be a unique symbol. This will eliminate possible
 * intersections in metadata in different subsystems using the `nominal`
 * package.
 *
 * Since it is not possible to declare a unique symbol at the typing level,
 * then to create a new nominal type, use the `declare` keyword as described
 * below:
 *
 * @example
 * ```ts
 *  declare const MyTypeSymbol: unique symbol;
 *
 *  type MyType = NominalType<typeof MyTypeSymbol>;
 * ```
 *
 * Each nominal type is the symbol with which it was created, but not vice
 * versa. The following code demonstrates this:
 *
 * @example
 * ```ts
 *  type T1 = typeof MyTypeSymbol extends MyType ? true : false;
 *  // type T1 = true
 *
 *  type T2 = MyType extends typeof MyTypeSymbol ? true : false;
 *  // type T2 = false
 * ```
 *
 * *Unknown nominal type*
 * If you omit the `TSymbol` parameter (which is equivalent to passing `symbol`
 * as `TSymbol`: `NominalType<symbol>`), the result is an unknown nominal type.
 * An unknown nominal type only serves to determine whether a value is a
 * nominal type. Any known nominal type is an unknown nominal type, but not
 * vice versa. The following code demonstrates this:
 *
 * @example
 * ```ts
 *  type T3 = MyType extends NominalType ? true : false;
 *  // type T3 = true
 *
 *  type T4 = NominalType extends MyType ? true : false;
 *  // type T4 = false
 * ```
 *
 * @typeParam TSymbol - The unique symbol.
 * @typeParam TName - Optional type name, e.g. "identifier" or "token". The
 *   `TName` parameter is for debugging purposes only (to make TypeScript
 *   messages more meaningful) and has no effect. Two nominal types created
 *   with the same symbol but with different names are equivalent to each
 *   other.
 *
 * @public
 */
export type NominalType<
  TSymbol extends symbol = symbol,
  TName extends string = string,
> =
  TSymbol extends NominalType_<infer Type>
    ? NominalType_<Type, TName>
    : NominalType_<TSymbol, TName>;
