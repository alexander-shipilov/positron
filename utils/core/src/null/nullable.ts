import type { NullLike } from "./null-like";

/**
 * The {@link Nullable} type constructs a type from the passed `TType` by
 * adding the {@link NullLike} type. This type is opposite to the
 * TypeScript utility type `NonNullable`.
 *
 * @example
 * ```ts
 *  type Foo = number | string
 *
 *  type NullableFoo = Nullable<Foo>
 *  // number | string | null | undefined
 * ```
 *
 * @typeParam TType - The type to add `null` and `undefined` types.
 *
 * @public
 */
export type Nullable<TType> = NullLike | TType;
