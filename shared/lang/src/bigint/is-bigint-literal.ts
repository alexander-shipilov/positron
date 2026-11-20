import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link IsBigintLiteral} type constructs a boolean literal which equals
 * to the `true` if the passed `TType` is a literal bigint.
 *
 * @example
 * ```
 *  type T1 = IsBigintLiteral<0n>;
 *  // true
 *  type T2 = IsBigintLiteral<1n>;
 *  // true
 *  type T3 = IsBigintLiteral<bigint>;
 *  // false
 * ```
 *
 * @public
 */
export type IsBigintLiteral<TValue extends bigint> =
  IsAnyLike<TValue> extends true
    ? false
    : `${bigint}` extends `${TValue}`
      ? false
      : true;
