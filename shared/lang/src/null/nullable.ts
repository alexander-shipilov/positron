import type { NullLike } from "./null-like";

/**
 * The {@link Nullable} type constructs a new type by adding {@link NullLike}
 * to the passed `TType`. This type is opposite to the TypeScript `NonNullable`
 * utility type.
 *
 * @example
 * ```ts
 * import type { Nullable } from "@positron/lang";
 *
 * type Foo = number | string;
 *
 * type NullableFoo = Nullable<Foo>;
 * // number | string | null | undefined
 * ```
 *
 * @typeParam TType - The type to add `null` and `undefined` types to.
 *
 * @public
 */
export type Nullable<TType> = NullLike | TType;
