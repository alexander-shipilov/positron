import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link IsUniqueSymbol} type constructs a boolean literal which equals to
 * the `true` if the passed `TType` is a `unique symbol`.
 *
 * @example
 * ```
 *  declare const unique: unique symbol;
 *
 *  type T1 = IsUniqueSymbol<typeof unique>;
 *  // true
 *  type T2 = IsUniqueSymbol<symbol>;
 *  // false
 * ```
 *
 * @typeParam TType - Type to check.
 *
 * @public
 */
export type IsUniqueSymbol<TValue extends symbol> =
  IsAnyLike<TValue> extends true ? false : symbol extends TValue ? false : true;
