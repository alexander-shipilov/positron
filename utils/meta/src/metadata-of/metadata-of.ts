import type { PropertyOwner } from "@positron/core";

import type { Metatype } from "../@internal";

/**
 * The {@link MetadataOf} returns metadata assigned to the given `TType`.
 *
 * @example
 * ```ts
 *  declare const Format: unique symbol;
 *  type Format = typeof Format;
 *
 *  type T = Metatype<string, Format, "DD-MM-YYYY">
 *  type TFormat = MetadataOf<T, Format>;
 *  // type TFormat = "DD-MM-YYYY"
 * ```
 *
 * @typeParam TType - The type to get metadata from.
 * @typeParam TTag - Optional metadata tag to filter the result.
 *
 * @public
 */
export type MetadataOf<TType, TTag extends symbol = symbol> =
  TType extends Metatype<unknown, infer Data>
    ? Data extends PropertyOwner<TTag, infer Value>
      ? Value
      : never
    : never;
