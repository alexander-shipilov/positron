/**
 * The {@link Nullish} type constructs a new type by adding `null` to the
 * passed `TType`. This type is opposite to the {@link NonNullish} type.
 *
 * @example
 * ```ts
 *  type NullishNumber = Nullish<number>
 *  // number | null
 * ```
 *
 * @param TType - The type to make nullish.
 *
 * @public
 */
export type Nullish<TType> = null | TType;
