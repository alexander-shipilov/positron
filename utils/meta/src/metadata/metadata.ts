import type { TypedObject } from "@positron/core";

/**
 * The {@link Metadata} type represents a metadata object.
 *
 * @typeParam TTag - Metadata tag
 * @typeParam TValue - Metadata value
 *
 * @public
 */
export type Metadata<
  TTag extends symbol = symbol,
  TValue = unknown,
> = TypedObject<TValue, TTag>;
