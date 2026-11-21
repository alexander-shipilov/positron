import type { NonOptional } from "./non-optional";

/**
 * The {@link RequiredNonOptional} type constructs a new `Required` type from
 * the passed `TType` and makes all its property values {@link NonOptional}.
 *
 * @example
 * ```ts
 *  import type { RequiredNonOptional } from "@positron/lang";
 *
 *  type Foo = { bar?: number; foo: string | undefined };
 *
 *  type RequiredFoo = Required<Foo>;
 *  // { bar: number, foo: string | undefined }
 *
 *  type RequiredNonOptionalFoo = RequiredNonOptional<Foo>;
 *  // { bar: number, foo: string }
 * ```
 *
 * @typeParam TType - The type all properties of which should be made required
 *   and non-optional.
 *
 * @public
 */
export type RequiredNonOptional<TType> = Required<{
  [Key in keyof TType]: NonOptional<TType[Key]>;
}>;
