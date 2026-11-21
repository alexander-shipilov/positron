import type { Optional } from "./optional";

/**
 * The {@link PartialOptional} type constructs a new `Partial` type from the
 * passed `TType` and makes all its property values {@link Optional}.
 *
 * @example
 * ```ts
 *  import type { PartialOptional } from "@positron/lang";
 *
 *  type Foo = { bar: number, foo: string };
 *
 *  type PartialFoo = Partial<Foo>;
 *  // { bar?: number, foo?: string }
 *
 *  type PartialOptionalFoo = PartialOptional<Foo>;
 *  // { bar?: number | undefined, foo?: string | undefined }
 * ```
 *
 * @typeParam TType - The type all properties of which should be made optional.
 *
 * @public
 */
export type PartialOptional<TType> = Partial<{
  [Key in keyof TType]: Optional<TType[Key]>;
}>;
