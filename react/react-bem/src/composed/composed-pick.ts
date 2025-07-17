import type { PropertyNameOf } from "@positron/core";

import type { ComposedDataOf } from "./composed-data-of";
import type { ComposedDescriptor } from "./composed-descriptor";

/**
 * The {@link ComposedPick} type return an object containing composed
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type ComposedPick<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends ComposedDescriptor
    ? Key
    : never]: ComposedDataOf<TProps[Key]>;
};
