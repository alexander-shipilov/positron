/**
 * The {@link Nullish} type adds `null` to the passed `TType`
 *
 * @example
 * ```ts
 *  type NullishNumber = Nullish<number>
 *  // number | null
 * ```
 *
 * @param TType - The type to add `null` to
 *
 * @public
 */
export type Nullish<TType> = null | TType;
