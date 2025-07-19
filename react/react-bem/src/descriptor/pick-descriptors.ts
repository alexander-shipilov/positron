import type { PropertyNameOf } from "@positron/core";

import type { DescriptorClass } from "./descriptor-class";
import type { DescriptorOf } from "./descriptor-of";

/**
 * The {@link PickDescriptors} type return an object containing descriptors
 * for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type PickDescriptors<TProps> = {
  [Key in PropertyNameOf<TProps> as TProps[Key] extends DescriptorClass
    ? Key
    : never]: DescriptorOf<TProps[Key]>;
};
