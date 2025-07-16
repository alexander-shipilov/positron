/**
 * Type {@link NonNullish} excludes `null` from the passed type `TType`.
 * This type is opposite to {@link Nullish}.
 *
 * @example
 * ```ts
 *  type Foo = Nullish<number | string>
 *  // number | string | null
 *
 *  type NonNullishFoo = NonNull<Foo>
 *  // number | string
 * ```
 *
 * @paramType TType - The type from which the `null` type should be excluded.
 *
 * @public
 */
export type NonNullish<TType> = Exclude<TType, null>;
