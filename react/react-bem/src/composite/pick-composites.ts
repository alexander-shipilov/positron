import type { PropertyNameOf } from "@positron/core";

import type { CompositeDescriptorOf } from "./composite-descriptor-of";
import type { CompositeOwner } from "./composite-owner";

/**
 * The {@link PickComposites} type return an object containing composite
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect composite descriptors' data from.
 *
 * @public
 */
export type PickComposites<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends CompositeOwner
    ? Key
    : never]: CompositeDescriptorOf<TProps[Key]>;
};
