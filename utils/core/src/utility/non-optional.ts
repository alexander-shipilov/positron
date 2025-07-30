/**
 * The {@link NonOptional} type excludes `undefined` from the passed type `TType`.
 * This type is opposite to {@link Optional}.
 *
 * @example
 * ```ts
 *  type Foo =  number | string | undefined
 *
 *  type NonOptionalFoo = NonOptional<Foo>
 *  // number | string
 * ```
 *
 * @param TType - The type to exclude `undefined` from.
 *
 * @public
 */
export type NonOptional<TType> = Exclude<TType, undefined>;
