import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link IsUniqueSymbol} type constructs a boolean literal which equals
 * `true` if the passed `TValue` is a `unique symbol`.
 *
 * @example
 * ```ts
 * import type { IsUniqueSymbol } from "@positron/lang";
 *
 * declare const unique: unique symbol;
 *
 * type T1 = IsUniqueSymbol<typeof unique>;
 * // true
 *
 * type T2 = IsUniqueSymbol<symbol>;
 * // false
 * ```
 *
 * @typeParam TValue - The symbol type to check.
 *
 * @public
 */
export type IsUniqueSymbol<TValue extends symbol> =
  IsAnyLike<TValue> extends true ? false : symbol extends TValue ? false : true;
