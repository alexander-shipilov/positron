import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link IsNumberLiteral} type constructs a boolean literal which
 * equals to the `true` if the passed `TType` is a literal number.
 *
 * @example
 * ```
 *  type T1 = IsNumberLiteral<1>;
 *  // true
 *  type T2 = IsNumberLiteral<1.1>;
 *  // true
 *  type T3 = IsNumberLiteral<number>;
 *  // false
 * ```
 *
 * @public
 */
export type IsNumberLiteral<TValue extends number> =
  IsAnyLike<TValue> extends true
    ? false
    : `${number}` extends `${TValue}`
      ? false
      : true;
