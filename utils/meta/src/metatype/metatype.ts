import type { Metatype as Metatype_ } from "../@internal";
import type { Metadata } from "../metadata";

/**
 * The {@link Metatype} type creates a new meta=-type.
 *
 * In general, meta refers to metadata about data types, describing their
 * characteristics and structure. It's used to define the nature of types.
 *
 * @example
 * ```ts
 *  declare const AccountTag: unique symbol;
 *  type AccountTag = typeof AccountTag;
 *
 *  type AccountNumber = Metatype<number, AccountTag>
 * ```
 *
 * @typeParam TTarget - The type to assign metadata to.
 * @typeParam TTag - The metadata tag
 * @typeParam TValue - The metadata value
 *
 * @public
 */
export type Metatype<
  TTarget,
  TTag extends symbol = symbol,
  TValue = unknown,
> = symbol extends TTag
  ? Metatype_<TTarget, Metadata>
  : TTarget extends Metatype_<infer Target, infer Data>
    ? Metatype_<Target, Data & Metadata<TTag, TValue>>
    : Metatype_<TTarget, Metadata<TTag, TValue>>;
