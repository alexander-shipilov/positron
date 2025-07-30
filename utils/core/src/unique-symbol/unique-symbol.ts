import type { UniqueSymbol as _UniqueSymbol } from "./unique-symbol-";

/**
 * The `UniqueSymbol<TSymbol?, TName?>` represents a named unique symbol.
 * This type adds a name for `unique symbol` for the passed `TSymbol` for
 * debugging purposes.
 *
 * `TSymbol` should be a `unique symbol`. Since it is not possible to declare a
 * `unique symbol` at the typing level, then to create a new `unique symbol`,
 * use the `declare` keyword as described below:
 *
 * ```ts
 *  declare const MySymbol: unique symbol;
 *  type MyUniqueSymbol = UniqueSymbol<typeof MyTypeSymbol>;
 * ```
 *
 * A `UniqueSymbol` extends the symbol with which it was created, but not vice
 * versa:
 *
 * ```ts
 *  type T1 = typeof MyUniqueSymbol extends MySymbol ? true : false;
 *  // type T1 = true
 *
 *  type T2 = MySymbol extends typeof MyUniqueSymbol ? true : false;
 *  // type T2 = false
 * ```
 *
 * The `TName` parameter is for debugging purposes (to make TypeScript messages
 * more meaningful) and has no effect. Two unique symbols created with the same
 * symbol but with different names are equivalent to each other.
 *
 * *Unknown symbol*
 * If you omit the `TSymbol` parameter (which is equivalent to
 * `UniqueSymbol<symbol>`), the result is an `unknown` symbol.
 * An `unknown` symbol only serves to determine whether a value is a
 * `unique symbol`. Any `known` `unique symbol` is an `unknown`, but not vice
 * versa.
 * ```ts
 *  type T3 = MyUniqueSymbol extends UniqueSymbol ? true : false;
 *  // type T3 = true
 *
 *  type T4 = UniqueSymbol extends MyUniqueSymbol ? true : false;
 *  // type T4 = false
 * ```
 *
 * @typeParam TSymbol - The symbol. Should be `unique symbol`
 * @typeParam TName - Optional symbol name, e.g. "identifier" or "token"
 *
 * @public
 */
export type UniqueSymbol<
  TSymbol extends symbol = symbol,
  TName extends string = string,
> =
  TSymbol extends _UniqueSymbol<infer Type>
    ? _UniqueSymbol<Type, TName>
    : _UniqueSymbol<TSymbol, TName>;
