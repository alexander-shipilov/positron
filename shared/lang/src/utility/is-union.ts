import type { IsAnyLike } from "../any/is-any-like";

import type { ExtractOne } from "./extract-one";

/**
 * The {@link IsUnion} type constructs a boolean literal which equals to the
 * `true` if the passed `TType` is a union.
 *
 * @example
 * ```
 *  type T1 = IsUnion<string | number>;
 *  // true
 *  type T2 = IsUnion<string>;
 *  // false
 * ```
 *
 * @typeParam TType - Type to check.
 *
 * @public
 */
export type IsUnion<TType> =
  IsAnyLike<TType> extends true
    ? false
    : [TType] extends [ExtractOne<TType>]
      ? false
      : true;
