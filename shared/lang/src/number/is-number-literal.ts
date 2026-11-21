import type { IsAnyLike } from "../any/is-any-like";

/**
 * The {@link IsNumberLiteral} type constructs a boolean literal which equals
 * `true` if the passed `TValue` is a literal number.
 *
 * @example
 * ```ts
 * import type { IsNumberLiteral } from "@positron/lang";
 *
 * type T1 = IsNumberLiteral<1>;
 * // true
 *
 * type T2 = IsNumberLiteral<1.1>;
 * // true
 *
 * type T3 = IsNumberLiteral<number>;
 * // false
 * ```
 *
 * @typeParam TValue - The number type to check.
 *
 * @public
 */
export type IsNumberLiteral<TValue extends number> =
  IsAnyLike<TValue> extends true
    ? false
    : `${number}` extends `${TValue}`
      ? false
      : true;
