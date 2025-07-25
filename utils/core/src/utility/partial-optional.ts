import type { Optional } from "./optional";

/**
 * The {@link PartialOptional} type constructs a `Partial` type from the passed
 * `TType` and makes all property values {@link Optional | optional}
 *
 * @example
 * ```ts
 *  type Foo = { foo: string, bar: number }
 *
 *  type PartialOptionalFoo = PartialOptional<Foo>
 *  // { foo?: string | undefined, bar?: number | undefined }
 *
 *  type PartialFoo = Partial<Foo>
 *  // { foo?: string, bar?: number }
 * ```
 *
 * @public
 */
export type PartialOptional<TType> = Partial<{
  [TKey in keyof TType]: Optional<TType[TKey]>;
}>;
