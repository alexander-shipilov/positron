import type { NominalType as _NominalType } from "./nominal-type-";

/**
 * The `NominalType<TSymbol?, TName?>` type describes a key for storing
 * nominal types. Nominal types are only available at the typing level
 * and are not available at runtime.
 *
 * Each `NominalType` must be a unique symbol. This will eliminate possible
 * intersections in metadata in different subsystems using the `nominal`
 * package.
 *
 * Since it is not possible to declare a unique symbol at the typing level,
 * then to create a new nominal type, use the `declare` keyword as
 * described below:
 *
 * ```ts
 *  declare const MyTypeSymbol: unique symbol;
 *  type MyType = NominalType<typeof MyTypeSymbol>;
 * ```
 *
 * A nominal type is the symbol with which it was created, but not vice versa:
 *
 * ```ts
 *  type T1 = typeof MyTypeSymbol extends MyType ? true : false;
 *  // type T1 = true
 *
 *  type T2 = MyType extends typeof MyTypeSymbol ? true : false;
 *  // type T2 = false
 * ```
 *
 * The `TName` parameter is for debugging purposes (to make TypeScript messages
 * more meaningful) and has no effect. Two nominal types created with the same
 * symbol but with different names are equivalent to each other.
 *
 * *Unknown symbol*
 * If you omit the `TSymbol` parameter (which is equivalent to
 * `NominalType<symbol>`), the result is an `unknown` nominal type.
 * An `unknown` nominal type only serves to determine whether a value is a
 * nominal type. Any `known` nominal type is an `unknown`, but not vice versa.
 * ```ts
 *  type T3 = MyType extends NominalType ? true : false;
 *  // type T3 = true
 *
 *  type T4 = NominalType extends MyType ? true : false;
 *  // type T4 = false
 * ```
 *
 * @typeParam TSymbol - The symbol to init tag. Should be `unique symbol`
 * @typeParam TName - Optional type name, e.g. "identifier" or "token"
 *
 * @public
 */
export type NominalType<
  TSymbol extends symbol = symbol,
  TName extends string = string,
> =
  TSymbol extends _NominalType<infer Type>
    ? _NominalType<Type, TName>
    : _NominalType<TSymbol, TName>;
