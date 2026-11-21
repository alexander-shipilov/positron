import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link IsBigintLiteral} type constructs a boolean literal which equals
 * `true` if the passed `TValue` is a literal bigint.
 *
 * @example
 * ```ts
 * import type { IsBigintLiteral } from "@positron/lang";
 *
 * type T1 = IsBigintLiteral<0n>;
 * // true
 *
 * type T2 = IsBigintLiteral<1n>;
 * // true
 *
 * type T3 = IsBigintLiteral<bigint>;
 * // false
 * ```
 *
 * @typeParam TValue - The bigint type to check.
 *
 * @public
 */
export type IsBigintLiteral<TValue extends bigint> =
  IsAnyLike<TValue> extends true
    ? false
    : `${bigint}` extends `${TValue}`
      ? false
      : true;
