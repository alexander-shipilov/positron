import type { PropertyNameOf } from "@positron/core";

import type { ElementDescriptorOf } from "./element-descriptor-of";
import type { ElementOwner } from "./element-owner";

/**
 * The {@link PickElements} type return an object containing element
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect element descriptors' data from.
 *
 * @public
 */
export type PickElements<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends ElementOwner
    ? Key
    : never]: ElementDescriptorOf<TProps[Key]>;
};
