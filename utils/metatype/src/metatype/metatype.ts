import type { Metadata } from "../metadata/metadata";

import type { MetatypeInternal } from "./metatype-internal";

/**
 * The {@link Metatype} type creates a new meta=-type.
 *
 * In general, metatype refers to metadata about data types, describing their
 * characteristics and structure. It's used to define the nature of data.
 *
 * @example
 * ```ts
 *  type
 * ```
 *
 *
 * @public
 */
export type Metatype<
  TTarget,
  TTag extends PropertyKey = PropertyKey,
  TValue = unknown,
> = MetatypeInternal<TTarget, Metadata<TTag, TValue>>;
