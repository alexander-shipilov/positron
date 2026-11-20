/**
 * The {@link IsAny} type constructs a boolean literal which equals to
 * the `true` if the passed `TType` is strictly `any` type and `false`
 * otherwise.
 *
 * @example
 * ```ts
 *  type T1 = IsAny<any>;
 *  // `true`
 *
 *  type T2 = IsAny<never>;
 *  // `false`
 *  type T3 = IsAny<unknown>;
 *  // `false`
 * ```
 *
 * @typeParam TType - The type to check.
 *
 * @public
 */
export type IsAny<TType> = true extends false & TType ? true : false;
