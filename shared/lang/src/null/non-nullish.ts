/**
 * The {@link NonNullish} type constructs a new type by extracting `null` from
 * the passed type `TType`. This type is opposite to {@link Nullish}.
 *
 * @example
 * ```ts
 *  type Foo = Nullish<number | string>
 *  // number | string | null
 *
 *  type NonNullishFoo = NonNullish<null | number | string>
 *  // number | string
 * ```
 *
 * @typeParam TType - The type to exclude `null` from.
 *
 * @public
 */
export type NonNullish<TType> = Exclude<TType, null>;
