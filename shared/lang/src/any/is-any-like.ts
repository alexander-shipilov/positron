import type { IsNever } from "../never/is-never";

import type { IsAny } from "./is-any";

/**
 * The {@link IsAnyLike} type constructs a boolean literal which equals to
 * the `true` if the passed `TType` is strictly `any` or `never` types
 * and `false` otherwise.
 *
 * @remarks
 *   Since "any-like" types can be passed as arguments to any generic type,
 *   this can lead to a breakdown in logic. In such cases, an additional check
 *   is typically required. The {@link IsAnyLike} type addresses this issue.
 *
 * @example
 * ```ts
 *  type T1 = IsAnyLike<any>;
 *  // `true`
 *  type T2 = IsAnyLike<never>;
 *  // `true`
 *
 *  type T3 = IsAnyLike<unknown>;
 *  // `false`
 * ```
 *
 * @typeParam TType - The type to check.
 *
 * @public
 */
export type IsAnyLike<TType> =
  IsAny<TType> extends true ? true : IsNever<TType> extends true ? true : false;
