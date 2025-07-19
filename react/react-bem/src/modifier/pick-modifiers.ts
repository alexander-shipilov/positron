import type { PropertyNameOf } from "@positron/core";

import type { ModifierDescriptorOf } from "./modifier-descriptor-of";
import type { ModifierOwner } from "./modifier-owner";

/**
 * The {@link PickModifiers} type return an object containing modifier
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect modifier descriptors' data from.
 *
 * @public
 */
export type PickModifiers<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends ModifierOwner
    ? Key
    : never]: ModifierDescriptorOf<TProps[Key]>;
};
